'use client'

import { Check, Plus, Search, Sparkles, X, Zap } from 'lucide-react'
import { useMemo, useState } from 'react'

type FeatureManagerProps = { value: string[]; onChange: (value: string[]) => void }

const FEATURE_GROUPS = {
  Comfort: ['Air conditioning', 'Climate control', 'Leather interior', 'Electric windows', 'Keyless entry', 'Heated seats', 'Electric seats'],
  Technology: ['Bluetooth', 'Apple CarPlay', 'Android Auto', 'Navigation system', 'USB connectivity', 'Wireless charging', 'Digital instrument cluster'],
  Safety: ['Parking sensors', 'Reverse camera', 'Blind spot monitoring', 'Lane departure warning', 'Adaptive cruise control', 'ABS', 'Traction control'],
  Exterior: ['Alloy wheels', 'LED headlights', 'Panoramic glass roof', 'Roof rails', 'Tow bar', 'Daytime running lights'],
} as const

const ALL_SUGGESTIONS = Object.values(FEATURE_GROUPS).flat()

export function FeatureManager({ value, onChange }: FeatureManagerProps) {
  const [draft, setDraft] = useState('')
  const [query, setQuery] = useState('')
  const [activeGroup, setActiveGroup] = useState<keyof typeof FEATURE_GROUPS>('Comfort')

  const add = (feature = draft) => {
    const next = feature.trim()
    if (!next || value.includes(next)) return
    onChange([...value, next])
    setDraft('')
  }
  const remove = (feature: string) => onChange(value.filter(item => item !== feature))
  const addAllVisible = () => {
    const source = query.trim() ? filteredSuggestions : FEATURE_GROUPS[activeGroup]
    onChange([...value, ...source.filter(item => !value.includes(item))])
  }

  const filteredSuggestions = useMemo(() => ALL_SUGGESTIONS.filter(item => !value.includes(item) && item.toLowerCase().includes(query.toLowerCase())), [value, query])
  const groupSuggestions = FEATURE_GROUPS[activeGroup].filter(item => !value.includes(item))

  return (
    <div className="space-y-5">
      <div className="overflow-hidden rounded-2xl border border-[#e5e7eb] bg-white shadow-[0_8px_30px_rgba(0,0,0,.04)]">
        <div className="bg-[#282828] p-5 text-white sm:p-6">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 text-sm font-bold"><Sparkles className="h-4 w-4 text-[#E8751A]" /> Features & extras</div>
              <p className="mt-1 max-w-xl text-xs leading-5 text-white/65">Build a precise equipment profile. These items power the customer-facing vehicle specification automatically.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/10 px-4 py-2 text-right"><div className="text-lg font-bold">{value.length}</div><div className="text-[10px] uppercase tracking-[.14em] text-white/55">selected</div></div>
          </div>
          <div className="mt-5 flex flex-col gap-3 sm:flex-row">
            <div className="relative min-w-0 flex-1"><Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-white/35" /><input value={draft} onChange={e => setDraft(e.target.value)} onKeyDown={e => { if (e.key === 'Enter') { e.preventDefault(); add() } }} placeholder="Add a custom feature…" aria-label="Custom vehicle feature" className="h-11 w-full rounded-xl border border-white/10 bg-white/10 pl-10 pr-4 text-sm text-white outline-none placeholder:text-white/35 focus:border-[#E8751A]" /></div>
            <button type="button" onClick={() => add()} className="inline-flex h-11 shrink-0 items-center justify-center gap-2 rounded-xl bg-[#E8751A] px-5 text-xs font-bold text-white transition hover:bg-[#d9670e]"><Plus size={15}/> Add custom</button>
          </div>
        </div>

        <div className="border-b border-[#eee] bg-[#fafafa] px-4 py-3 sm:px-5">
          <div className="flex gap-2 overflow-x-auto pb-0.5">{(Object.keys(FEATURE_GROUPS) as Array<keyof typeof FEATURE_GROUPS>).map(group => <button key={group} type="button" onClick={() => setActiveGroup(group)} className={`whitespace-nowrap rounded-lg px-3 py-2 text-xs font-bold transition ${activeGroup === group ? 'bg-[#282828] text-white' : 'text-[#666] hover:bg-white hover:text-[#222]'}`}>{group}<span className="ml-1.5 opacity-50">{FEATURE_GROUPS[group].filter(item => !value.includes(item)).length}</span></button>)}</div>
        </div>

        <div className="p-4 sm:p-5">
          <div className="mb-3 flex flex-wrap items-center justify-between gap-2"><div><h4 className="text-xs font-bold uppercase tracking-[.16em] text-[#555]">{activeGroup}</h4><p className="mt-1 text-[11px] text-[#999]">Tap an item to add it to this vehicle.</p></div><button type="button" onClick={addAllVisible} className="inline-flex items-center gap-1.5 rounded-lg border border-[#ddd] bg-white px-3 py-2 text-[11px] font-bold text-[#444] hover:border-[#16A6B8] hover:text-[#128b7a]"><Zap size={12}/> Add visible</button></div>
          <div className="flex flex-wrap gap-2">{(query ? filteredSuggestions : groupSuggestions).map(feature => <button key={feature} type="button" onClick={() => add(feature)} className="group rounded-full border border-[#e0e0e0] bg-[#fff] px-3 py-2 text-xs font-medium text-[#555] transition hover:-translate-y-0.5 hover:border-[#16A6B8] hover:bg-[#f1fbfa] hover:text-[#128b7a]"><Plus className="mr-1 inline h-3 w-3 opacity-50 group-hover:opacity-100" />{feature}</button>)}{!(query ? filteredSuggestions : groupSuggestions).length && <p className="rounded-xl bg-[#f8f8f8] px-4 py-3 text-xs text-[#888]">Everything in this group is already selected.</p>}</div>
          <div className="mt-4 relative"><Search className="absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-[#aaa]"/><input value={query} onChange={e => setQuery(e.target.value)} placeholder="Search all equipment…" aria-label="Search equipment" className="h-9 w-full rounded-lg border border-[#e5e5e5] bg-[#fafafa] pl-9 pr-3 text-xs outline-none focus:border-[#16A6B8]"/></div>
        </div>
      </div>

      <div className="rounded-2xl border border-[#dfeee8] bg-[#f8fcfa] p-4 sm:p-5">
        <div className="mb-3 flex items-center justify-between gap-3"><div><h4 className="text-xs font-bold uppercase tracking-[.16em] text-[#3f6658]">Selected equipment</h4><p className="mt-1 text-[11px] text-[#789087]">This is exactly what will be published with the vehicle.</p></div><span className="rounded-full bg-white px-3 py-1.5 text-[10px] font-bold text-[#159b88] shadow-sm">{value.length} items</span></div>
        {value.length ? <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">{value.map(feature => <div key={feature} className="group flex min-h-[48px] items-center justify-between gap-2 rounded-xl border border-[#dfeee8] bg-white px-3 py-2.5"><span className="flex min-w-0 items-center gap-2 text-xs font-semibold text-[#2f423a]"><span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#e9f8f4] text-[#159b88]"><Check className="h-3.5 w-3.5"/></span><span className="truncate">{feature}</span></span><button type="button" onClick={() => remove(feature)} aria-label={`Remove ${feature}`} className="rounded-md p-1.5 text-[#aaa] opacity-60 hover:bg-red-50 hover:text-red-600 group-hover:opacity-100"><X size={14}/></button></div>)}</div> : <div className="rounded-xl border border-dashed border-[#cbded6] bg-white px-5 py-8 text-center"><p className="text-sm font-semibold text-[#52665e]">No equipment selected</p><p className="mt-1 text-xs text-[#899b94]">Choose from the categories above or add a custom item.</p></div>}
      </div>
      <input type="hidden" name="features" value={value.join('\n')} readOnly />
    </div>
  )
}
