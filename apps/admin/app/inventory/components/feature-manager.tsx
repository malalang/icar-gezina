'use client'

import { Plus, X } from 'lucide-react'
import { useState } from 'react'

type FeatureManagerProps = { value: string[]; onChange: (value: string[]) => void }

export function FeatureManager({ value, onChange }: FeatureManagerProps) {
  const [draft, setDraft] = useState('')
  function add() { const feature = draft.trim(); if (!feature || value.includes(feature)) return; onChange([...value, feature]); setDraft('') }
  return <div>
    <div className="flex flex-col gap-3 sm:flex-row"><input className="h-12 min-w-0 flex-1 border border-[#e6e6e6] bg-white px-4 text-sm font-light outline-none placeholder:text-[#9a9a9a] focus:border-[#262626]" value={draft} onChange={e => setDraft(e.target.value)} onKeyDown={e => { if (e.key === 'Enter') { e.preventDefault(); add() } }} placeholder="e.g. Panoramic glass roof" aria-label="Vehicle feature" /><button type="button" className="inline-flex h-12 shrink-0 items-center justify-center gap-2 bg-[#1c69d4] px-5 text-xs font-bold tracking-[0.5px] text-white hover:bg-[#0653b6]" onClick={add}><Plus size={15} /> Add feature</button></div>
    <div className="mt-5 grid gap-0 border-y border-[#e6e6e6] sm:grid-cols-2">{value.length === 0 ? <p className="px-1 py-5 text-sm font-light text-[#6b6b6b]">No features added yet.</p> : value.map((feature, index) => <div className="flex min-w-0 items-center justify-between gap-4 border-b border-[#e6e6e6] px-1 py-4 last:border-b-0 sm:nth-[odd]:border-r sm:nth-[odd]:pr-5 sm:nth-[even]:pl-5" key={`${feature}-${index}`}><span className="flex min-w-0 items-start gap-3 text-sm font-light leading-6"><span className="mt-2 h-1.5 w-1.5 shrink-0 bg-[#1c69d4]" />{feature}</span><button type="button" className="shrink-0 text-[#6b6b6b] hover:text-[#dc2626]" aria-label={`Remove ${feature}`} onClick={() => onChange(value.filter((_, itemIndex) => itemIndex !== index))}><X size={14} /></button></div>)}</div>
    <input type="hidden" name="features" value={value.join('\n')} readOnly />
  </div>
}