#!/usr/bin/env node

import { syncICarGalleries } from '../lib/server/icar-gallery-sync.mjs'

const DRY_RUN = process.env.DRY_RUN === 'true'
const DELAY_MS = Number(process.env.DELAY_MS || 350)

async function main() {
  const result = await syncICarGalleries({
    dryRun: DRY_RUN,
    delayMs: DELAY_MS,
    onProgress: ({ index, total, label, status, reason, galleryCount }) => {
      process.stdout.write(`[${index}/${total}] ${label} ... `)
      if (status === 'failed') console.log(`FAIL: ${reason}`)
      else if (status === 'skipped') console.log(`SKIP: ${reason}`)
      else if (status === 'would_update') console.log(`DRY RUN: I1 + ${galleryCount} gallery images`)
      else console.log(`OK: I1 + ${galleryCount} gallery images`)
    },
  })

  console.log('')
  console.log(`Updated: ${result.updated}`)
  console.log(`Skipped: ${result.skipped}`)
  console.log(`Failed: ${result.failed}`)
  console.log(`Dry run: ${result.dryRun}`)

  if (result.failed > 0) process.exitCode = 2
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})
