const DEFAULT_SUPABASE_URL = 'https://srlnoxhqudgvskntekze.supabase.co'

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

function decodeHtml(value) {
  return value
    .replaceAll('&quot;', '"')
    .replaceAll('&#34;', '"')
    .replaceAll('&#x22;', '"')
    .replaceAll('&#39;', "'")
    .replaceAll('&#x27;', "'")
    .replaceAll('&amp;', '&')
}

function normalizeImageUrl(value) {
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

function extractGallery(html) {
  const decoded = decodeHtml(html)
  const matches = decoded.match(
    /https?:\/\/icargezina\.co\.za\/wp-content\/uploads\/[^"'<>\s]+?\.jpe?g(?:\?[^"'<>\s]*)?/gi,
  ) || []

  const urls = [...new Set(matches.map(normalizeImageUrl).filter(Boolean))]
  const numbered = urls
    .map((url) => {
      const match = url.match(/_I(10|[1-9])\.jpe?g$/i)
      return match ? { url, index: Number(match[1]) } : null
    })
    .filter(Boolean)
    .sort((a, b) => a.index - b.index)

  const byIndex = new Map(numbered.map((item) => [item.index, item.url]))
  const imageUrl = byIndex.get(1) || null
  const galleryUrls = numbered.filter((item) => item.index > 1).map((item) => item.url)

  return { imageUrl, galleryUrls, discovered: urls.length }
}

function sourceUrlFromPlaceholder(imageUrl) {
  const marker = 'noanimate/'
  const index = imageUrl.indexOf(marker)
  if (index === -1) return null
  const source = imageUrl.slice(index + marker.length)
  return source.startsWith('https://icargezina.co.za/') ? source : null
}

function createSupabaseClient() {
  const supabaseUrl = (process.env.SUPABASE_URL || DEFAULT_SUPABASE_URL).replace(/\/$/, '')
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY

  if (!serviceRoleKey) throw new Error('Missing SUPABASE_SERVICE_ROLE_KEY')

  const headers = {
    apikey: serviceRoleKey,
    Authorization: `Bearer ${serviceRoleKey}`,
    'Content-Type': 'application/json',
  }

  return async function supabaseFetch(path, options = {}) {
    const response = await fetch(`${supabaseUrl}${path}`, {
      ...options,
      headers: { ...headers, ...(options.headers || {}) },
    })

    if (!response.ok) {
      const body = await response.text()
      throw new Error(`Supabase ${response.status}: ${body.slice(0, 500)}`)
    }

    return response
  }
}

async function getVehicles(supabaseFetch) {
  const params = new URLSearchParams({
    select: 'id,make,model,year,image_url,gallery_urls',
    image_url: 'like.*image.thum.io*',
    order: 'created_at.asc',
    limit: '1000',
  })

  const response = await supabaseFetch(`/rest/v1/cars?${params}`)
  return response.json()
}

async function updateVehicle(supabaseFetch, vehicle, imageUrl, galleryUrls, dryRun) {
  if (dryRun) return

  const params = new URLSearchParams({ id: `eq.${vehicle.id}` })
  await supabaseFetch(`/rest/v1/cars?${params}`, {
    method: 'PATCH',
    headers: { Prefer: 'return=minimal' },
    body: JSON.stringify({ image_url: imageUrl, gallery_urls: galleryUrls }),
  })
}

async function fetchVehiclePage(sourceUrl) {
  const controller = new AbortController()
  const timeout = setTimeout(() => controller.abort(), 30_000)

  try {
    const response = await fetch(sourceUrl, {
      signal: controller.signal,
      headers: {
        'User-Agent': 'ICar-Gezina-Gallery-Sync/1.0 (+https://github.com/malalang/icar-gezina)',
        Accept: 'text/html,application/xhtml+xml',
      },
    })

    if (!response.ok) throw new Error(`iCar Gezina ${response.status}`)
    return response.text()
  } finally {
    clearTimeout(timeout)
  }
}

export async function syncICarGalleries({ dryRun = false, delayMs = 350, onProgress = () => {} } = {}) {
  const supabaseFetch = createSupabaseClient()
  const vehicles = await getVehicles(supabaseFetch)

  let updated = 0
  let skipped = 0
  let failed = 0
  const failures = []

  for (let index = 0; index < vehicles.length; index += 1) {
    const vehicle = vehicles[index]
    const label = `${vehicle.make} ${vehicle.model} (${vehicle.year})`
    const sourceUrl = sourceUrlFromPlaceholder(vehicle.image_url || '')

    if (!sourceUrl) {
      skipped += 1
      onProgress({ index: index + 1, total: vehicles.length, label, status: 'skipped', reason: 'unable to derive source URL' })
      continue
    }

    try {
      const html = await fetchVehiclePage(sourceUrl)
      const { imageUrl, galleryUrls, discovered } = extractGallery(html)

      if (!imageUrl) {
        failed += 1
        const reason = `no _I1.jpg found (discovered ${discovered} site images)`
        failures.push({ id: vehicle.id, label, reason })
        onProgress({ index: index + 1, total: vehicles.length, label, status: 'failed', reason })
        continue
      }

      await updateVehicle(supabaseFetch, vehicle, imageUrl, galleryUrls, dryRun)
      updated += 1
      onProgress({ index: index + 1, total: vehicles.length, label, status: dryRun ? 'would_update' : 'updated', galleryCount: galleryUrls.length })
    } catch (error) {
      failed += 1
      const reason = error instanceof Error ? error.message : String(error)
      failures.push({ id: vehicle.id, label, reason })
      onProgress({ index: index + 1, total: vehicles.length, label, status: 'failed', reason })
    }

    if (index < vehicles.length - 1) await sleep(delayMs)
  }

  return { total: vehicles.length, updated, skipped, failed, dryRun, failures }
}
