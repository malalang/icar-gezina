import { timingSafeEqual } from 'node:crypto'
import { NextResponse } from 'next/server'
import { syncICarGalleries } from '@/lib/server/icar-gallery-sync.mjs'

export const runtime = 'nodejs'
export const maxDuration = 300

function isAuthorized(request: Request) {
  const configuredSecret = process.env.ICAR_GALLERY_SYNC_SECRET
  if (!configuredSecret) return false

  const suppliedSecret = request.headers.get('x-icar-gallery-sync-secret')
  if (!suppliedSecret) return false

  const expected = Buffer.from(configuredSecret)
  const supplied = Buffer.from(suppliedSecret)
  if (expected.length !== supplied.length) return false

  return timingSafeEqual(expected, supplied)
}

export async function POST(request: Request) {
  if (!isAuthorized(request)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const body = await request.json().catch(() => ({}))
    const dryRun = body?.dryRun === true
    const delayMs = Number.isFinite(Number(body?.delayMs))
      ? Math.max(0, Number(body.delayMs))
      : 350

    const result = await syncICarGalleries({
      dryRun,
      delayMs,
    })

    return NextResponse.json({
      ok: result.failed === 0,
      message: dryRun
        ? 'iCar gallery sync dry run completed.'
        : 'iCar gallery sync completed.',
      ...result,
    }, { status: result.failed === 0 ? 200 : 207 })
  } catch (error) {
    return NextResponse.json({
      ok: false,
      error: error instanceof Error ? error.message : String(error),
    }, { status: 500 })
  }
}

export async function GET() {
  return NextResponse.json({
    error: 'Method Not Allowed',
    message: 'Use POST with x-icar-gallery-sync-secret.',
  }, { status: 405 })
}
