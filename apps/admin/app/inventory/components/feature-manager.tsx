'use client'

import { Check, Plus, Sparkles, X } from 'lucide-react'
import { useMemo, useState } from 'react'

type FeatureManagerProps = { value: string[]; onChange: (value: string[]) => void }

const SUGGESTED_FEATURES = [
  'Air conditioning', 'Alloy wheels', 'Bluetooth', 'Central locking', 'Climate control',
  'Cruise control', 'Electric windows', 'Leather interior', 'Parking sensors', 'Reverse camera',
  'Navigation system', 'Panoramic glass roof', 'Keyless entry', 'LED headlights', 'Apple CarPlay',
  'Android Auto', 'Tow bar', 'USB connectivity',
]

export function FeatureManager({ value, onChange }: FeatureManagerProps) {
  const [draft, setDraft] = useState('')
  const suggestions = useMemo(() => SUGGESTED_FEATURES.filter(feature => !value.includes(feature)), [value])
  const add = (feature = draft) => {
    const next = feature.trim()
    if (!next || value.includes(next)) return
    onChange([...value, next])
    setDraft('')
  }
  const remove = (feature: string) => onChange(value.filter(item => item !== feature))

  return (
    <div className="space-y-6">
      <div className="rounded-2xl border border-[#e8e8e8] bg-[#fafafa] p-5 sm:p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-sm font-bold text-[#222]">
              <Sparkles className="h-4 w-4 text-[#16A6B8]" /> Build the vehicle package
            </div>
            <p className="mt-1 text-xs leading-5 text-[#777]">Select common equipment or add something unique to this vehicle.</p>
          </div>
          <span className="rounded-full bg-white px-3 py-1 text-xs font-bold text-[#333] shadow-sm">{value.length} selected</span>
        </div>
        <div className="mt-5 flex flex-col gap-3 sm:flex-row">
          <input className="h-12 min-w-0 flex-1 rounded-xl border border-[#dedede] bg-white px-4 text-sm outline-none transition focus:border-[#16A6B8] focus:ring-2 focus:ring-[#16A6B8]/10" value={draft} onChange={e => setDraft(e.target.value)} onKeyDown={e => { if (e.key === 'Enter') { e.preventDefault(); add() } }} placeholder="Add a custom feature…" aria-label="Vehicle feature" />
          <button type="button" className="inline-flex h-12 shrink-0 items-center justify-center gap-2 rounded-xl bg-[#282828] px-5 text-xs font-bold text-white transition hover:bg-black" onClick={() => add()}><Plus size={15} /> Add feature</button>
        </div>
      </div>

      <div>
        <div className="mb-3 flex items-center justify-between"><h4 className="text-xs font-bold uppercase tracking-[0.16em] text-[#666]">Selected features</h4><span className="text-xs text-[#999]">Click × to remove</span></div>
        {value.length ? <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{value.map(feature => <div key={feature} className="group flex min-h-[58px] items-center justify-between gap-3 rounded-xl border border-[#dfeee8] bg-white px-4 py-3 shadow-[0_1px_2px_rgba(0,0,0,0.04)]"><span className="flex min-w-0 items-center gap-3 text-sm font-medium text-[#2f2f2f]"><span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#e9f8f4] text-[#159b88]"><Check className="h-4 w-4" /></span><span className="truncate">{feature}</span></span><button type="button" className="rounded-lg p-2 text-[#aaa] opacity-60 transition hover:bg-red-50 hover:text-red-600 group-hover:opacity-100" aria-label={`Remove ${feature}`} onClick={() => remove(feature)}><X size={15} /></button></div>)}</div> : <div className="rounded-xl border border-dashed border-[#d8d8d8] bg-white px-5 py-10 text-center"><p className="text-sm font-semibold text-[#555]">No extras selected yet</p><p className="mt-1 text-xs text-[#999]">Start with the suggestions below or add your own.</p></div>}
      </div>

      <div>
        <div className="mb-3 flex items-center justify-between"><h4 className="text-xs font-bold uppercase tracking-[0.16em] text-[#666]">Popular extras</h4><span className="text-xs text-[#999]">One click to add</span></div>
        <div className="flex flex-wrap gap-2">{suggestions.map(feature => <button key={feature} type="button" onClick={() => add(feature)} className="rounded-full border border-[#e0e0e0] bg-white px-3.5 py-2 text-xs font-medium text-[#555] transition hover:border-[#16A6B8] hover:bg-[#f1fbfa] hover:text-[#128b7a]"><Plus className="mr-1.5 inline h-3.5 w-3.5" />{feature}</button>)}</div>
      </div>
      <input type="hidden" name="features" value={value.join('\n')} readOnly />
    </div>
  )
}
