'use client'

import { GripVertical, Image as ImageIcon, Link2, Plus, Star, Trash2, ArrowUp, ArrowDown } from 'lucide-react'
import { useState } from 'react'

type GalleryManagerProps = { value: string[]; onChange: (value: string[]) => void }

function isValidUrl(url: string) {
  return /^https?:\/\/[^\s]+$/i.test(url.trim())
}

export function GalleryManager({ value, onChange }: GalleryManagerProps) {
  const [draft, setDraft] = useState('')
  const [error, setError] = useState('')
  const [failedImages, setFailedImages] = useState<string[]>([])

  function add() {
    const url = draft.trim()
    if (!url) return
    if (!isValidUrl(url)) {
      setError('Enter a valid image URL beginning with http:// or https://.')
      return
    }
    if (value.includes(url)) {
      setError('This image is already in the gallery.')
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

  function remove(index: number) {
    const url = value[index]
    onChange(value.filter((_, itemIndex) => itemIndex !== index))
    setFailedImages(current => current.filter(item => item !== url))
  }

  return <div className="space-y-5">
    <div className="grid gap-4 rounded-lg border border-[#e5e7eb] bg-[#f8fafc] p-4 sm:grid-cols-[1fr_auto] sm:items-end">
      <div>
        <div className="mb-2 flex items-center gap-2">
          <Link2 size={15} className="text-[#6b7280]" />
          <label htmlFor="gallery-image-url" className="text-xs font-bold text-[#374151]">Add image URL</label>
        </div>
        <input id="gallery-image-url" value={draft} onChange={e => setDraft(e.target.value)} onKeyDown={e => { if (e.key === 'Enter') { e.preventDefault(); add() } }} placeholder="https://example.com/vehicle-front.jpg" className="h-11 w-full rounded-md border border-[#d1d5db] bg-white px-3.5 text-sm text-[#1f2937] outline-none transition placeholder:text-[#9ca3af] focus:border-[#374151] focus:ring-2 focus:ring-[#111827]/5" />
        {error && <p className="mt-2 text-xs font-medium text-[#b42318]" role="alert">{error}</p>}
      </div>
      <button type="button" onClick={add} className="inline-flex h-11 items-center justify-center gap-2 rounded-md bg-[#262626] px-5 text-xs font-bold text-white transition hover:bg-[#111111]"><Plus size={15} /> Add photo</button>
    </div>

    <div className="flex flex-wrap items-end justify-between gap-3 border-b border-[#e5e7eb] pb-3">
      <div>
        <h4 className="text-sm font-bold text-[#1f2937]">Gallery</h4>
        <p className="mt-1 text-xs text-[#6b7280]">Drag-style ordering with the arrows. The first photo is automatically the lead image.</p>
      </div>
      <div className="flex items-center gap-2 text-[11px] font-semibold text-[#6b7280]">
        <span className="rounded-full bg-[#f1f5f9] px-2.5 py-1">{value.length} {value.length === 1 ? 'photo' : 'photos'}</span>
      </div>
    </div>

    {value.length === 0 ? <div className="rounded-lg border border-dashed border-[#cfd4da] bg-white px-6 py-14 text-center">
      <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-[#f3f4f6] text-[#9ca3af]"><ImageIcon size={22} /></div>
      <h4 className="mt-4 text-sm font-bold text-[#374151]">No vehicle photos yet</h4>
      <p className="mx-auto mt-1 max-w-md text-xs leading-5 text-[#6b7280]">Add the exterior, interior and detail photography that customers should see on the vehicle listing.</p>
    </div> : <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
      {value.map((url, index) => {
        const failed = failedImages.includes(url)
        return <article key={`${url}-${index}`} className="group overflow-hidden rounded-lg border border-[#e5e7eb] bg-white transition hover:border-[#c9ced4]">
          <div className="relative aspect-[4/3] overflow-hidden bg-[#eef0f2]">
            {!failed ? <img src={url} alt={`Vehicle photo ${index + 1}`} loading="lazy" className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.025]" onError={() => setFailedImages(current => current.includes(url) ? current : [...current, url])} /> : <div className="flex h-full flex-col items-center justify-center gap-2 text-[#9ca3af]"><ImageIcon size={24} /><span className="text-[11px]">Image unavailable</span></div>}
            <div className="absolute inset-x-0 top-0 flex items-start justify-between p-3">
              <span className="flex h-7 min-w-7 items-center justify-center rounded-md bg-[#111827]/90 px-2 text-[10px] font-bold text-white">{String(index + 1).padStart(2, '0')}</span>
              {index === 0 && <span className="inline-flex items-center gap-1.5 rounded-md bg-white px-2.5 py-1.5 text-[10px] font-bold uppercase tracking-[.7px] text-[#262626] shadow-sm"><Star size={11} className="fill-current" /> Lead</span>}
            </div>
            <div className="absolute inset-x-0 bottom-0 flex justify-between bg-gradient-to-t from-black/60 to-transparent p-3 pt-8 opacity-0 transition group-hover:opacity-100 focus-within:opacity-100">
              <div className="flex gap-1.5">
                <button type="button" disabled={index === 0} onClick={() => move(index, -1)} aria-label={`Move photo ${index + 1} up`} className="flex h-8 w-8 items-center justify-center rounded-md bg-white/95 text-[#374151] disabled:opacity-40"><ArrowUp size={14} /></button>
                <button type="button" disabled={index === value.length - 1} onClick={() => move(index, 1)} aria-label={`Move photo ${index + 1} down`} className="flex h-8 w-8 items-center justify-center rounded-md bg-white/95 text-[#374151] disabled:opacity-40"><ArrowDown size={14} /></button>
              </div>
              <button type="button" onClick={() => remove(index)} aria-label={`Remove photo ${index + 1}`} className="flex h-8 w-8 items-center justify-center rounded-md bg-white/95 text-[#b42318]"><Trash2 size={14} /></button>
            </div>
          </div>
          <div className="p-3.5">
            <div className="flex items-center justify-between gap-2">
              <span className="text-xs font-bold text-[#374151]">{index === 0 ? 'Primary vehicle photo' : `Gallery photo ${index + 1}`}</span>
              <GripVertical size={14} className="text-[#c4c9cf]" />
            </div>
            <p title={url} className="mt-1.5 truncate font-mono text-[10px] text-[#9ca3af]">{url}</p>
          </div>
        </article>
      })}
    </div>}

    {value.length > 0 && <div className="flex items-center gap-2 pt-1 text-[11px] text-[#9ca3af]"><GripVertical size={13} /><span>Use the arrows to change the order. Photo 01 is automatically used as the lead image.</span></div>}
    <input type="hidden" name="galleryUrls" value={value.join('\n')} readOnly />
  </div>
}
