'use client'

import { Image as ImageIcon, Plus, X } from 'lucide-react'
import { useState } from 'react'

type GalleryManagerProps = {
  value: string[]
  onChange: (value: string[]) => void
}

export function GalleryManager({ value, onChange }: GalleryManagerProps) {
  const [draft, setDraft] = useState('')
  const [error, setError] = useState('')

  function add() {
    const url = draft.trim()
    if (!url) return
    if (!/^https?:\/\//i.test(url)) {
      setError('Use a full http:// or https:// image URL.')
      return
    }
    if (value.includes(url)) {
      setError('That image is already in the gallery.')
      return
    }
    onChange([...value, url])
    setDraft('')
    setError('')
  }

  function move(index: number, direction: -1 | 1) {
    const target = index + direction
    if (target < 0 || target >= value.length) return
    const next = [...value]
    const [item] = next.splice(index, 1)
    next.splice(target, 0, item)
    onChange(next)
  }

  return (
    <div className="gallery-manager-component">
      <div className="gallery-add-row">
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
          placeholder="https://example.com/vehicle-front.jpg"
          aria-label="Gallery image URL"
        />
        <button type="button" className="button" onClick={add}>
          <Plus size={15} /> Add image
        </button>
      </div>
      {error && <p className="gallery-validation" role="alert">{error}</p>}

      {value.length === 0 ? (
        <div className="gallery-empty">
          <ImageIcon size={24} />
          <strong>No gallery images</strong>
          <span>Add the vehicle photography URLs above.</span>
        </div>
      ) : (
        <div className="gallery-manager">
          {value.map((url, index) => (
            <div className="gallery-row" key={`${url}-${index}`}>
              <div className="gallery-thumb">
                <img src={url} alt={`Vehicle gallery ${index + 1}`} loading="lazy" />
                <span>{index + 1}</span>
              </div>
              <div className="gallery-url">
                <span className="gallery-index">{index === 0 ? 'LEAD IMAGE' : `IMAGE ${String(index + 1).padStart(2, '0')}`}</span>
                <code title={url}>{url}</code>
              </div>
              <div className="gallery-actions">
                <button type="button" aria-label={`Move image ${index + 1} up`} disabled={index === 0} onClick={() => move(index, -1)}>↑</button>
                <button type="button" aria-label={`Move image ${index + 1} down`} disabled={index === value.length - 1} onClick={() => move(index, 1)}>↓</button>
                <button type="button" aria-label={`Remove image ${index + 1}`} onClick={() => onChange(value.filter((_, itemIndex) => itemIndex !== index))}><X size={15} /></button>
              </div>
            </div>
          ))}
        </div>
      )}
      <input type="hidden" name="galleryUrls" value={value.join('\n')} readOnly />
    </div>
  )
}
