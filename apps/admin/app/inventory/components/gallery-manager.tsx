'use client'

import { GripVertical, Image as ImageIcon, Plus, Star, X } from 'lucide-react'
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

  function remove(index: number) {
    const url = value[index]
    onChange(value.filter((_, itemIndex) => itemIndex !== index))
    setFailedImages(current => current.filter(item => item !== url))
  }

  return <div className="space-y-6">
    <div className="rounded-lg border border-[#e6e6e6] bg-[#fafafa] p-4 sm:p-5">
      <div className="mb-4 flex items-start gap-3">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-[#f0f2f4] text-[#59636e]"><ImageIcon size={17} /></div>
        <div className="min-w-0">
          <h3 className="text-sm font-bold text-[#262626]">Add vehicle photography</h3>
          <p className="mt-1 text-xs leading-5 text-[#737373]">Add high-quality image URLs. The first image becomes the lead image shown across the showroom.</p>
        </div>
      </div>
      <div className="flex flex-col gap-3 sm:flex-row">
        <input className="h-11 min-w-0 flex-1 rounded-md border border-[#d9d9d9] bg-white px-3.5 text-sm text-[#262626] outline-none transition placeholder:text-[#a0a0a0] focus:border-[#262626] focus:ring-1 focus:ring-[#262626]" value={draft} onChange={e => setDraft(e.target.value)} onKeyDown={e => { if (e.key === 'Enter') { e.preventDefault(); add() } }} placeholder="https://example.com/vehicle-front.jpg" aria-label="Gallery image URL" />
        <button type="button" className="inline-flex h-11 shrink-0 items-center justify-center gap-2 rounded-md bg-[#262626] px-5 text-xs font-bold uppercase tracking-[1px] text-white transition hover:bg-[#111111]" onClick={add}><Plus size={15} /> Add image</button>
      </div>
      {error && <p className="mt-3 rounded-md border border-[#dc2626]/20 bg-[#fff7f7] px-3.5 py-2.5 text-xs text-[#dc2626]" role="alert">{error}</p>}
    </div>

    <div className="flex items-center justify-between gap-4">
      <div>
        <p className="text-[11px] font-bold uppercase tracking-[1.5px] text-[#6b6b6b]">Gallery</p>
        <p className="mt-1 text-sm text-[#737373]">{value.length === 0 ? 'No images added yet.' : `${value.length} ${value.length === 1 ? 'image' : 'images'} · first image is the lead`}</p>
      </div>
      {value.length > 0 && <span className="rounded-full bg-[#f0f2f4] px-3 py-1 text-[10px] font-bold uppercase tracking-[1px] text-[#59636e]">{value.length} {value.length === 1 ? 'image' : 'images'}</span>}
    </div>

    {value.length === 0 ? <div className="flex min-h-52 flex-col items-center justify-center rounded-lg border border-dashed border-[#d4d4d4] bg-[#fafafa] px-6 text-center"><div className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-[#9a9a9a] shadow-sm"><ImageIcon size={23} /></div><strong className="mt-4 text-sm font-bold text-[#3c3c3c]">No gallery images</strong><span className="mt-1 max-w-sm text-xs leading-5 text-[#737373]">Add the vehicle's front, rear, interior and detail photography above.</span></div> : <div className="space-y-3">{value.map((url, index) => {
      const failed = failedImages.includes(url)
      return <div className="group overflow-hidden rounded-lg border border-[#e6e6e6] bg-white transition hover:border-[#cfcfcf]" key={`${url}-${index}`}>
        <div className="grid sm:grid-cols-[180px_minmax(0,1fr)_auto] sm:items-stretch">
          <div className="relative aspect-[4/3] overflow-hidden bg-[#f2f3f4] sm:aspect-auto sm:min-h-[132px]">
            {!failed ? <img src={url} alt={`Vehicle gallery ${index + 1}`} loading="lazy" className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.02]" onError={() => setFailedImages(current => current.includes(url) ? current : [...current, url])} /> : <div className="flex h-full min-h-[132px] flex-col items-center justify-center gap-2 px-4 text-center text-[#8a8a8a]"><ImageIcon size={22} /><span className="text-[11px]">Image unavailable</span></div>}
            <span className="absolute left-3 top-3 flex h-7 min-w-7 items-center justify-center rounded-md bg-[#262626] px-2 text-[10px] font-bold text-white">{String(index + 1).padStart(2, '0')}</span>
            {index === 0 && <span className="absolute bottom-3 left-3 inline-flex items-center gap-1.5 rounded-md bg-white px-2.5 py-1.5 text-[10px] font-bold uppercase tracking-[.8px] text-[#262626]"><Star size={11} className="fill-current" /> Lead image</span>}
          </div>
          <div className="min-w-0 p-4 sm:p-5">
            <div className="flex items-center gap-2"><span className="text-xs font-bold text-[#262626]">{index === 0 ? 'Primary vehicle image' : `Gallery image ${index + 1}`}</span>{index === 0 && <span className="rounded-full bg-[#f4f4f4] px-2 py-1 text-[9px] font-bold uppercase tracking-[.8px] text-[#737373]">Lead</span>}</div>
            <p title={url} className="mt-2 truncate font-mono text-[11px] text-[#737373]">{url}</p>
            <p className="mt-4 text-xs leading-5 text-[#8a8a8a]">{index === 0 ? 'This image is used as the main vehicle image throughout the showroom.' : 'Use the controls to change its position in the customer-facing gallery.'}</p>
          </div>
          <div className="flex items-center justify-between border-t border-[#eeeeee] bg-[#fafafa] p-3 sm:flex-col sm:justify-center sm:border-l sm:border-t-0">
            <div className="flex items-center gap-2"><button type="button" className="h-9 w-9 rounded-md border border-[#d8d8d8] bg-white text-sm text-[#3c3c3c] transition hover:border-[#262626] disabled:cursor-not-allowed disabled:opacity-30" aria-label={`Move image ${index + 1} up`} disabled={index === 0} onClick={() => move(index, -1)}>↑</button><button type="button" className="h-9 w-9 rounded-md border border-[#d8d8d8] bg-white text-sm text-[#3c3c3c] transition hover:border-[#262626] disabled:cursor-not-allowed disabled:opacity-30" aria-label={`Move image ${index + 1} down`} disabled={index === value.length - 1} onClick={() => move(index, 1)}>↓</button></div>
            <button type="button" className="inline-flex h-9 items-center gap-1.5 rounded-md border border-transparent px-3 text-[10px] font-bold uppercase tracking-[1px] text-[#a33b3b] transition hover:border-[#e8caca] hover:bg-[#fff7f7]" aria-label={`Remove image ${index + 1}`} onClick={() => remove(index)}><X size={14} /> Remove</button>
          </div>
        </div>
      </div>
    })}</div>}

    {value.length > 0 && <div className="flex items-center gap-2 border-t border-[#eeeeee] pt-4 text-[11px] text-[#8a8a8a]"><GripVertical size={14} /><span>Reorder images with the arrows. The first image is automatically treated as the lead image.</span></div>}
    <input type="hidden" name="galleryUrls" value={value.join('\n')} readOnly />
  </div>
}