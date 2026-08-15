#!/usr/bin/env node

const SUPABASE_URL = (process.env.SUPABASE_URL || 'https://srlnoxhqudgvskntekze.supabase.co').replace(/\/$/, '')
const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY
const DRY_RUN = process.env.DRY_RUN === 'true'
const DELAY_MS = Number(process.env.DELAY_MS || 350)

if (!SUPABASE_SERVICE_ROLE_KEY) {
  console.error('Missing SUPABASE_SERVICE_ROLE_KEY')
  process.exit(1)
}

const headers = {
  apikey: SUPABASE_SERVICE_ROLE_KEY,
  Authorization: `Bearer ${SUPABASE_SERVICE_ROLE_KEY}`,
  'Content-Type': 'application/json',
}

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

async function supabaseFetch(path, options = {}) {
  const response = await fetch(`${SUPABASE_URL}${path}`, {
    ...options,
    headers: { ...headers, ...(options.headers || {}) },
  })

  if (!response.ok) {
    const body = await response.text()
    throw new Error(`Supabase ${response.status}: ${body.slice(0, 500)}`)
  }

  return response
}

async function getVehicles() {
  const params = new URLSearchParams({
    select: 'id,make,model,year,image_url,gallery_urls',
    image_url: 'like.*image.thum.io*',
    order: 'created_at.asc',
    limit: '1000',
  })

  const response = await supabaseFetch(`/rest/v1/cars?${params}`)
  return response.json()
}

async function updateVehicle(vehicle, imageUrl, galleryUrls) {
  if (DRY_RUN) return

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

async function main() {
  const vehicles = await getVehicles()
  console.log(`Found ${vehicles.length} vehicles still using thum.io placeholders.`)

  let updated = 0
  let skipped = 0
  let failed = 0

  for (let index = 0; index < vehicles.length; index += 1) {
    const vehicle = vehicles[index]
    const label = `${vehicle.make} ${vehicle.model} (${vehicle.year})`
    const sourceUrl = sourceUrlFromPlaceholder(vehicle.image_url || '')

    process.stdout.write(`[${index + 1}/${vehicles.length}] ${label} ... `)

    if (!sourceUrl) {
      skipped += 1
      console.log('SKIP: unable to derive source URL')
      continue
    }

    try {
      const html = await fetchVehiclePage(sourceUrl)
      const { imageUrl, galleryUrls, discovered } = extractGallery(html)

      if (!imageUrl) {
        failed += 1
        console.log(`FAIL: no _I1.jpg found (discovered ${discovered} site images)`)
        continue
      }

      await updateVehicle(vehicle, imageUrl, galleryUrls)
      updated += 1
      console.log(`OK: I1 + ${galleryUrls.length} gallery images`)
    } catch (error) {
      failed += 1
      console.log(`FAIL: ${error instanceof Error ? error.message : String(error)}`)
    }

    if (index < vehicles.length - 1) await sleep(DELAY_MS)
  }

  console.log('')
  console.log(`Updated: ${updated}`)
  console.log(`Skipped: ${skipped}`)
  console.log(`Failed: ${failed}`)
  console.log(`Dry run: ${DRY_RUN}`)

  if (failed > 0) process.exitCode = 2
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})
