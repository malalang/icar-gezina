import { NextResponse } from 'next/server'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

const SYNC_TOKEN = 'FNVwKKs_Pl9abDIw5Zp4yOAqIPgFyOzjIAheCK7g-T4'
const SUPABASE_URL = (process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://srlnoxhqudgvskntekze.supabase.co').replace(/\/$/, '')
const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_SECRET_KEY || process.env.SUPABASE_SERVICE_KEY

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

function decodeHtml(value: string) {
  return value
    .replaceAll('&quot;', '"')
    .replaceAll('&#34;', '"')
    .replaceAll('&#x22;', '"')
    .replaceAll('&#39;', "'")
    .replaceAll('&#x27;', "'")
    .replaceAll('&amp;', '&')
}

function normalizeImageUrl(value: string): string | null {
  try {
    const url = new URL(value)
    url.search = ''
    url.hash = ''
    url.pathname = url.pathname.replace(/-\d{2,5}x\d{2,5}(?=\.jpe?g$)/i, '')
    return url.toString()
  } catch {
    return null
  }
}

function extractGallery(html: string) {
  const decoded = decodeHtml(html)
  const matches = decoded.match(
    /https?:\/\/icargezina\.co\.za\/wp-content\/uploads\/[^"'<>\s]+?\.jpe?g(?:\?[^"'<>\s]*)?/gi,
  ) || []

  const urls: string[] = []
  for (const match of matches) {
    const normalized = normalizeImageUrl(match)
    if (normalized && !urls.includes(normalized)) urls.push(normalized)
  }

  const numbered = urls
    .map((url) => {
      const match = url.match(/_I(10|[1-9])\.jpe?g$/i)
      return match ? { url, index: Number(match[1]) } : null
    })
    .filter((item): item is { url: string; index: number } => Boolean(item))
    .sort((a, b) => a.index - b.index)

  const byIndex = new Map(numbered.map((item) => [item.index, item.url]))
  return {
    imageUrl: byIndex.get(1) || null,
    galleryUrls: numbered.filter((item) => item.index > 1).map((item) => item.url),
    discovered: urls.length,
  }
}

function sourceUrlFromPlaceholder(imageUrl: string) {
  const marker = 'noanimate/'
  const index = imageUrl.indexOf(marker)
  if (index === -1) return null
  const source = imageUrl.slice(index + marker.length)
  return source.startsWith('https://icargezina.co.za/') ? source : null
}

async function supabaseFetch(path: string, init: RequestInit = {}) {
  if (!SUPABASE_SERVICE_ROLE_KEY) throw new Error('No server-side Supabase secret is configured')

  const response = await fetch(`${SUPABASE_URL}${path}`, {
    ...init,
    headers: {
      apikey: SUPABASE_SERVICE_ROLE_KEY,
      Authorization: `Bearer ${SUPABASE_SERVICE_ROLE_KEY}`,
      'Content-Type': 'application/json',
      ...(init.headers || {}),
    },
  })

  if (!response.ok) {
    const body = await response.text()
    throw new Error(`Supabase ${response.status}: ${body.slice(0, 500)}`)
  }

  return response
}

export async function GET(request: Request) {
  const token = new URL(request.url).searchParams.get('token')
  if (token !== SYNC_TOKEN) return new NextResponse('Not found', { status: 404 })

  try {
    if (!SUPABASE_SERVICE_ROLE_KEY) {
      const configuredSupabaseKeys = Object.keys(process.env)
        .filter((key) => key.toUpperCase().includes('SUPABASE'))
        .sort()
      return NextResponse.json({ ok: false, error: 'No server-side Supabase secret is configured', configuredSupabaseKeys }, { status: 500 })
    }

    const params = new URLSearchParams({
      select: 'id,make,model,year,image_url',
      image_url: 'like.*image.thum.io*',
      order: 'created_at.asc',
      limit: '1000',
    })

    const vehicles = await (await supabaseFetch(`/rest/v1/cars?${params}`)).json() as Array<{
      id: string
      make: string
      model: string
      year: number
      image_url: string | null
    }>

    const results: Array<Record<string, unknown>> = []

    for (const vehicle of vehicles) {
      const sourceUrl = sourceUrlFromPlaceholder(vehicle.image_url || '')
      if (!sourceUrl) {
        results.push({ id: vehicle.id, status: 'skipped', reason: 'invalid placeholder URL' })
        continue
      }

      try {
        const controller = new AbortController()
        const timeout = setTimeout(() => controller.abort(), 30_000)
        let html = ''
        try {
          const response = await fetch(sourceUrl, {
            signal: controller.signal,
            headers: {
              'User-Agent': 'ICar-Gezina-Gallery-Sync/1.0 (+https://github.com/malalang/icar-gezina)',
              Accept: 'text/html,application/xhtml+xml',
            },
          })
          if (!response.ok) throw new Error(`iCar Gezina ${response.status}`)
          html = await response.text()
        } finally {
          clearTimeout(timeout)
        }

        const { imageUrl, galleryUrls, discovered } = extractGallery(html)
        if (!imageUrl) {
          results.push({ id: vehicle.id, status: 'failed', reason: 'no _I1.jpg found', discovered })
          continue
        }

        const updateParams = new URLSearchParams({ id: `eq.${vehicle.id}` })
        await supabaseFetch(`/rest/v1/cars?${updateParams}`, {
          method: 'PATCH',
          headers: { Prefer: 'return=minimal' },
          body: JSON.stringify({ image_url: imageUrl, gallery_urls: galleryUrls }),
        })

        results.push({ id: vehicle.id, vehicle: `${vehicle.make} ${vehicle.model}`, status: 'updated', gallery: galleryUrls.length + 1 })
      } catch (error) {
        results.push({ id: vehicle.id, vehicle: `${vehicle.make} ${vehicle.model}`, status: 'failed', reason: error instanceof Error ? error.message : String(error) })
      }

      await sleep(350)
    }

    const updated = results.filter((item) => item.status === 'updated').length
    const failed = results.filter((item) => item.status === 'failed').length
    const skipped = results.filter((item) => item.status === 'skipped').length

    return NextResponse.json({
      ok: failed === 0,
      total: vehicles.length,
      updated,
      failed,
      skipped,
      results,
    })
  } catch (error) {
    return NextResponse.json(
      { ok: false, error: error instanceof Error ? error.message : String(error) },
      { status: 500 },
    )
  }
}
