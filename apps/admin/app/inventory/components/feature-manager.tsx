'use client'

import { Plus, X } from 'lucide-react'
import { useState } from 'react'

type FeatureManagerProps = {
  value: string[]
  onChange: (value: string[]) => void
}

export function FeatureManager({ value, onChange }: FeatureManagerProps) {
  const [draft, setDraft] = useState('')

  function add() {
    const feature = draft.trim()
    if (!feature || value.includes(feature)) return
    onChange([...value, feature])
    setDraft('')
  }

  return (
    <div className="feature-manager">
      <div className="feature-add-row">
        <input
          className="input"
          value={draft}
          onChange={(event) => setDraft(event.target.value)}
          onKeyDown={(event) => {
            if (event.key === 'Enter') {
              event.preventDefault()
              add()
            }
          }}
          placeholder="e.g. Panoramic glass roof"
          aria-label="Vehicle feature"
        />
        <button type="button" className="button" onClick={add}>
          <Plus size={15} /> Add feature
        </button>
      </div>
      <div className="feature-list" aria-live="polite">
        {value.length === 0 ? (
          <p className="feature-empty">No features added yet.</p>
        ) : value.map((feature, index) => (
          <div className="feature-chip" key={`${feature}-${index}`}>
            <span>{feature}</span>
            <button type="button" aria-label={`Remove ${feature}`} onClick={() => onChange(value.filter((_, itemIndex) => itemIndex !== index))}>
              <X size={14} />
            </button>
          </div>
        ))}
      </div>
      <input type="hidden" name="features" value={value.join('\n')} readOnly />
    </div>
  )
}
