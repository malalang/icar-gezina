'use client'

import { Check, Plus, Search, X } from 'lucide-react'
import { useMemo, useState } from 'react'

type FeatureManagerProps = { value: string[]; onChange: (value: string[]) => void }

type Group = { label: string; items: string[] }

const GROUPS: Group[] = [
  { label: 'Comfort', items: ['Air conditioning', 'Climate control', 'Leather interior', 'Electric windows', 'Keyless entry', 'Heated seats', 'Electric seats', 'Central locking'] },
  { label: 'Technology', items: ['Bluetooth', 'Apple CarPlay', 'Android Auto', 'Navigation system', 'USB connectivity', 'Wireless charging', 'Digital instrument cluster', 'Premium sound system'] },
  { label: 'Safety', items: ['Parking sensors', 'Reverse camera', 'Blind spot monitoring', 'Lane departure warning', 'Adaptive cruise control', 'ABS', 'Traction control', 'Tyre pressure monitoring'] },
  { label: 'Exterior', items: ['Alloy wheels', 'LED headlights', 'Panoramic glass roof', 'Roof rails', 'Tow bar', 'Daytime running lights', 'Sunroof', 'Fog lights'] },
]

export function FeatureManager({ value, onChange }: FeatureManagerProps) {
  const [activeGroup, setActiveGroup] = useState('Comfort')
  const [query, setQuery] = useState('')
  const [custom, setCustom] = useState('')

  const selected = useMemo(() => new Set(value), [value])
  const active = GROUPS.find(group => group.label === activeGroup) ?? GROUPS[0]
  const searchable = GROUPS.flatMap(group => group.items)
  const source = query.trim() ? searchable : active.items
  const items = useMemo(() => {
    const term = query.trim().toLowerCase()
    return term ? source.filter(item => item.toLowerCase().includes(term)) : source
  }, [query, source])

  function toggle(item: string) {
    onChange(selected.has(item) ? value.filter(feature => feature !== item) : [...value, item])
  }

  function addCustom() {
    const item = custom.trim()
    if (!item || selected.has(item)) return
    onChange([...value, item])
    setCustom('')
  }

  function selectVisible() {
    const additions = items.filter(item => !selected.has(item))
    if (additions.length) onChange([...value, ...additions])
  }

  return (
    <div className="feature-editor">
      <div className="feature-editor-head">
        <div>
          <span className="eyebrow">Vehicle equipment</span>
          <h3>Features &amp; extras</h3>
          <p>Select the equipment that is genuinely present on this vehicle. These items are published to the customer-facing listing.</p>
        </div>
        <div className="feature-count"><strong>{value.length}</strong><span>selected</span></div>
      </div>

      <div className="feature-editor-toolbar">
        <div className="feature-search">
          <Search size={14} />
          <input value={query} onChange={event => setQuery(event.target.value)} placeholder="Search equipment…" aria-label="Search equipment" />
        </div>
        <button type="button" className="feature-select-all" onClick={selectVisible}>
          <Check size={13} /> Select visible
        </button>
      </div>

      <div className="feature-tabs" role="tablist" aria-label="Equipment categories">
        {GROUPS.map(group => {
          const count = group.items.filter(item => selected.has(item)).length
          const activeTab = !query && group.label === activeGroup
          return (
            <button key={group.label} type="button" role="tab" aria-selected={activeTab} className={activeTab ? 'feature-tab active' : 'feature-tab'} onClick={() => { setActiveGroup(group.label); setQuery('') }}>
              <span>{group.label}</span>
              {count > 0 && <b>{count}</b>}
            </button>
          )
        })}
      </div>

      <div className="feature-canvas">
        <div className="feature-canvas-head">
          <div>
            <span className="feature-label">{query ? 'Search results' : activeGroup}</span>
            <span className="feature-meta">{items.length} available · {items.filter(item => selected.has(item)).length} selected</span>
          </div>
          {query && <button type="button" onClick={() => setQuery('')} className="feature-clear-search">Clear search</button>}
        </div>

        <div className="feature-grid">
          {items.map(item => {
            const isSelected = selected.has(item)
            return (
              <button key={item} type="button" onClick={() => toggle(item)} className={isSelected ? 'feature-option selected' : 'feature-option'}>
                <span className="feature-option-copy">
                  <strong>{item}</strong>
                  <small>{query ? 'Equipment' : activeGroup}</small>
                </span>
                <span className="feature-check">{isSelected && <Check size={13} />}</span>
              </button>
            )
          })}
        </div>

        {!items.length && (
          <div className="feature-empty">
            <p>No matching equipment.</p>
            <span>Add it as a custom extra below.</span>
          </div>
        )}
      </div>

      <div className="feature-selected-panel">
        <div className="feature-selected-head">
          <div>
            <span className="feature-label">Selected equipment</span>
            <span className="feature-meta">Review before saving this vehicle</span>
          </div>
          {value.length > 0 && <button type="button" onClick={() => onChange([])} className="feature-remove-all">Remove all</button>}
        </div>

        {value.length ? (
          <div className="feature-chips">
            {value.map(item => (
              <button key={item} type="button" className="feature-chip" onClick={() => toggle(item)} title={`Remove ${item}`}>
                <Check size={11} /> <span>{item}</span> <X size={11} />
              </button>
            ))}
          </div>
        ) : (
          <div className="feature-selected-empty">No equipment selected yet.</div>
        )}
      </div>

      <div className="feature-custom">
        <div>
          <span className="feature-label">Custom extra</span>
          <span className="feature-meta">Use this for an item not covered by the categories above.</span>
        </div>
        <div className="feature-custom-row">
          <input value={custom} onChange={event => setCustom(event.target.value)} onKeyDown={event => { if (event.key === 'Enter') { event.preventDefault(); addCustom() } }} placeholder="e.g. Harman Kardon sound system" aria-label="Custom vehicle extra" />
          <button type="button" onClick={addCustom}><Plus size={13} /> Add</button>
        </div>
      </div>

      <input type="hidden" name="features" value={value.join('\n')} readOnly />

      <style jsx>{`
        .feature-editor{background:#fff;border:1px solid #dfe3e7;border-radius:9px;overflow:hidden;color:#111827}
        .feature-editor-head{display:flex;align-items:flex-start;justify-content:space-between;gap:20px;padding:22px 22px 20px;border-bottom:1px solid #edf0f2}
        .feature-editor-head h3{margin:5px 0 0;font-size:16px;font-weight:800;letter-spacing:-.01em}
        .feature-editor-head p{margin:6px 0 0;max-width:650px;color:#68727d;font-size:10px;line-height:1.6}
        .feature-count{min-width:68px;border-left:1px solid #e5e7eb;padding-left:18px;text-align:right}
        .feature-count strong{display:block;font-size:25px;line-height:1;font-weight:800;letter-spacing:-.04em}
        .feature-count span{display:block;margin-top:5px;color:#8a929d;font-size:9px;font-weight:800;letter-spacing:.12em;text-transform:uppercase}
        .feature-editor-toolbar{display:flex;gap:9px;align-items:center;padding:14px 22px;background:#fafbfc;border-bottom:1px solid #edf0f2}
        .feature-search{display:flex;align-items:center;gap:8px;flex:1;border:1px solid #dfe3e7;background:#fff;padding:0 12px;height:38px;color:#8a929d}
        .feature-search input{width:100%;border:0;outline:0;background:transparent;font-size:11px;color:#111827}
        .feature-search input::placeholder{color:#9aa2ab}
        .feature-select-all{display:inline-flex;align-items:center;gap:6px;height:38px;padding:0 12px;border:1px solid #dfe3e7;background:#fff;color:#4b5563;font-size:10px;font-weight:800;cursor:pointer}
        .feature-select-all:hover{border-color:#e65b1f;color:#c94c17}
        .feature-tabs{display:flex;gap:0;overflow-x:auto;padding:0 22px;background:#fff;border-bottom:1px solid #edf0f2}
        .feature-tab{display:inline-flex;align-items:center;gap:7px;padding:14px 14px;border:0;border-bottom:2px solid transparent;background:transparent;color:#7a838d;font-size:10px;font-weight:800;cursor:pointer;white-space:nowrap}
        .feature-tab:first-child{padding-left:2px}
        .feature-tab:hover{color:#111827}
        .feature-tab.active{border-bottom-color:#e65b1f;color:#20262d}
        .feature-tab b{min-width:17px;height:17px;padding:0 4px;display:inline-grid;place-items:center;background:#e65b1f;color:#fff;font-size:8px}
        .feature-canvas{background:#f7f8f9;padding:16px 22px 20px}
        .feature-canvas-head{display:flex;align-items:flex-end;justify-content:space-between;gap:12px;margin-bottom:10px}
        .feature-label{display:block;color:#4b5563;font-size:9px;font-weight:800;letter-spacing:.14em;text-transform:uppercase}
        .feature-meta{display:block;margin-top:3px;color:#9aa2ab;font-size:9px}
        .feature-clear-search{border:0;background:transparent;color:#9f2f2f;font-size:9px;font-weight:800;cursor:pointer}
        .feature-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:1px;background:#dfe3e7;border:1px solid #dfe3e7}
        .feature-option{min-height:58px;display:flex;align-items:center;justify-content:space-between;gap:12px;border:0;background:#fff;padding:11px 13px;text-align:left;cursor:pointer;transition:.12s ease;box-shadow:inset 2px 0 transparent}
        .feature-option:hover{background:#fbfbfc}
        .feature-option.selected{box-shadow:inset 2px 0 #e65b1f;background:#fffdfb}
        .feature-option-copy{min-width:0}
        .feature-option-copy strong{display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:#374151;font-size:10px;font-weight:800}
        .feature-option-copy small{display:block;margin-top:4px;color:#9aa2ab;font-size:8px;text-transform:uppercase;letter-spacing:.08em}
        .feature-check{width:19px;height:19px;flex:0 0 19px;display:grid;place-items:center;border:1px solid #cfd5db;background:#fff;color:#fff}
        .feature-option.selected .feature-check{border-color:#e65b1f;background:#e65b1f}
        .feature-empty{padding:34px;text-align:center;border:1px solid #dfe3e7;background:#fff}
        .feature-empty p{margin:0;color:#4b5563;font-size:11px;font-weight:800}.feature-empty span{display:block;margin-top:4px;color:#9aa2ab;font-size:9px}
        .feature-selected-panel{padding:17px 22px;background:#18212b;color:#fff}
        .feature-selected-head{display:flex;align-items:flex-start;justify-content:space-between;gap:14px}
        .feature-selected-panel .feature-label{color:#aeb7c4}.feature-selected-panel .feature-meta{color:#7f8a97}
        .feature-remove-all{border:0;background:transparent;color:#e7b7a1;font-size:9px;font-weight:800;cursor:pointer}
        .feature-chips{display:flex;flex-wrap:wrap;gap:6px;margin-top:11px;max-height:96px;overflow:auto}
        .feature-chip{display:inline-flex;align-items:center;gap:5px;max-width:100%;border:1px solid #3c4855;background:#26313d;color:#e8edf2;padding:6px 8px;font-size:9px;font-weight:700;cursor:pointer}
        .feature-chip span{max-width:240px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.feature-chip:hover{border-color:#e65b1f}
        .feature-selected-empty{margin-top:10px;padding:12px;border:1px dashed #3f4c59;color:#7f8a97;font-size:9px}
        .feature-custom{display:grid;grid-template-columns:minmax(0,1fr) minmax(300px,.95fr);gap:20px;align-items:center;padding:18px 22px;background:#fff}
        .feature-custom-row{display:flex;gap:8px}.feature-custom-row input{flex:1;min-width:0;height:38px;border:1px solid #dfe3e7;padding:0 11px;outline:0;font-size:10px}.feature-custom-row input:focus{border-color:#aeb5bf;box-shadow:0 0 0 3px rgba(17,24,39,.05)}
        .feature-custom-row button{height:38px;display:inline-flex;align-items:center;gap:6px;border:0;background:#111827;color:#fff;padding:0 12px;font-size:10px;font-weight:800;cursor:pointer}.feature-custom-row button:hover{background:#e65b1f}
        @media(max-width:640px){.feature-editor-head{padding:18px;}.feature-editor-toolbar{padding:12px 18px;}.feature-tabs{padding:0 18px}.feature-canvas{padding:14px 18px 18px}.feature-grid{grid-template-columns:1fr}.feature-custom{grid-template-columns:1fr;padding:16px 18px}.feature-count{display:none}.feature-select-all{display:none}}
      `}</style>
    </div>
  )
}
