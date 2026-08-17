'use client'

import { ArrowDown, ArrowUp, Check, GripVertical, Image as ImageIcon, ImagePlus, Link2, Plus, Star, Trash2, X } from 'lucide-react'
import { useMemo, useState } from 'react'

type GalleryManagerProps = { value: string[]; onChange: (value: string[]) => void }
function isValidUrl(url: string) { return /^https?:\/\/[^\s]+$/i.test(url.trim()) }

export function GalleryManager({ value, onChange }: GalleryManagerProps) {
  const [draft, setDraft] = useState('')
  const [error, setError] = useState('')
  const [failedImages, setFailedImages] = useState<string[]>([])
  const [preview, setPreview] = useState<string | null>(null)
  const failedCount = failedImages.filter(url => value.includes(url)).length
  const healthyCount = value.length - failedCount

  function add() {
    const urls = draft.split(/\s*\n\s*/).map(url => url.trim()).filter(Boolean)
    if (!urls.length) return
    const invalid = urls.find(url => !isValidUrl(url))
    if (invalid) { setError('One or more URLs are invalid. Use http:// or https:// image URLs.'); return }
    const unique = urls.filter(url => !value.includes(url))
    if (!unique.length) { setError('Those images are already in the gallery.'); return }
    onChange([...value, ...unique].slice(0, 20)); setDraft(''); setError('')
  }
  function move(index: number, direction: -1 | 1) { const target = index + direction; if (target < 0 || target >= value.length) return; const next = [...value]; [next[index], next[target]] = [next[target], next[index]]; onChange(next) }
  function makeLead(index: number) { if (index === 0) return; const next = [...value]; const [lead] = next.splice(index, 1); next.unshift(lead); onChange(next) }
  function remove(index: number) { const url = value[index]; onChange(value.filter((_, i) => i !== index)); setFailedImages(current => current.filter(item => item !== url)); if (preview === url) setPreview(null) }

  const galleryStatus = useMemo(() => value.length === 0 ? 'Needs photography' : failedCount ? `${healthyCount} working · ${failedCount} unavailable` : 'All images ready', [value.length, healthyCount, failedCount])

  return (
    <div className="space-y-5">
      <div className="overflow-hidden rounded-2xl border border-[#e5e7eb] bg-white shadow-[0_8px_30px_rgba(0,0,0,.04)]">
        <div className="bg-[#282828] p-5 text-white sm:p-6">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div className="flex items-start gap-4"><div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#E8751A] text-white"><ImagePlus size={19}/></div><div><div className="flex items-center gap-2 text-sm font-bold">Vehicle media <span className="rounded-full bg-white/10 px-2 py-0.5 text-[9px] uppercase tracking-wider text-white/60">{value.length}/20</span></div><p className="mt-1 max-w-xl text-xs leading-5 text-white/60">Create a strong visual story. Photo 01 is the showroom cover; arrange the rest in the order customers should browse them.</p></div></div>
            <div className="rounded-xl border border-white/10 bg-white/10 px-4 py-2 text-right"><div className="text-sm font-bold">{galleryStatus}</div><div className="text-[10px] uppercase tracking-[.14em] text-white/45">gallery health</div></div>
          </div>
          <div className="mt-5 flex flex-col gap-3 sm:flex-row"><div className="relative min-w-0 flex-1"><Link2 className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-white/35"/><textarea id="gallery-image-url" value={draft} onChange={e => setDraft(e.target.value)} onKeyDown={e => { if(e.key==='Enter' && (e.ctrlKey || e.metaKey)){e.preventDefault();add()} }} placeholder="Paste one image URL, or multiple URLs on separate lines…" aria-label="Vehicle image URLs" rows={2} className="w-full resize-none rounded-xl border border-white/10 bg-white/10 py-3 pl-10 pr-4 text-sm text-white outline-none placeholder:text-white/35 focus:border-[#E8751A]" /></div><button type="button" onClick={add} disabled={value.length >= 20} className="inline-flex h-11 shrink-0 items-center justify-center gap-2 self-end rounded-xl bg-[#E8751A] px-5 text-xs font-bold text-white transition hover:bg-[#d9670e] disabled:cursor-not-allowed disabled:opacity-40"><Plus size={15}/> Add photo{draft.includes('\n') ? 's' : ''}</button></div>
          {error && <div className="mt-2 flex items-center gap-2 text-xs font-medium text-[#ffb7a3]"><X size={13}/>{error}</div>}
        </div>
      </div>

      {value.length === 0 ? <div className="rounded-2xl border border-dashed border-[#cfd4da] bg-[#fafafa] px-6 py-16 text-center"><div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-[#9ca3af] shadow-sm"><ImageIcon size={26}/></div><h4 className="mt-5 text-sm font-bold text-[#374151]">Start the vehicle story</h4><p className="mx-auto mt-1 max-w-md text-xs leading-5 text-[#6b7280]">Add exterior, interior, wheel, dashboard and detail photography. Put the strongest front three-quarter shot first.</p></div> : <>
        <div className="flex flex-wrap items-center justify-between gap-3"><div><div className="flex items-center gap-2"><h4 className="text-sm font-bold text-[#1f2937]">Gallery sequence</h4><span className="rounded-full bg-[#eef8f9] px-2.5 py-1 text-[10px] font-bold text-[#128b7a]">{value.length} photos</span></div><p className="mt-1 text-[11px] text-[#6b7280]">Use the controls to promote the best image and set the browsing order.</p></div><div className="flex items-center gap-2 text-[10px] text-[#9ca3af]"><GripVertical size={13}/> Lead photo = first image</div></div>
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">{value.map((url,index)=>{const failed=failedImages.includes(url); return <article key={`${url}-${index}`} className={`group overflow-hidden rounded-2xl border bg-white shadow-[0_2px_8px_rgba(0,0,0,.03)] transition hover:-translate-y-0.5 hover:shadow-[0_10px_28px_rgba(0,0,0,.08)] ${index===0?'border-[#16A6B8] ring-2 ring-[#16A6B8]/10':'border-[#e5e7eb]'}`}>
          <button type="button" onClick={() => !failed && setPreview(url)} className="relative block aspect-[4/3] w-full overflow-hidden bg-[#eef0f2] text-left" aria-label={`Preview vehicle photo ${index+1}`}>
            {!failed ? <img src={url} alt={`Vehicle photo ${index+1}`} loading="lazy" className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]" onError={() => setFailedImages(c=>c.includes(url)?c:[...c,url])}/> : <div className="flex h-full flex-col items-center justify-center gap-2 text-[#9ca3af]"><ImageIcon size={24}/><span className="text-[11px]">Image unavailable</span><span className="text-[10px] text-red-500">Remove or replace</span></div>}
            <div className="absolute inset-x-0 top-0 flex items-center justify-between p-3"><span className="rounded-lg bg-black/75 px-2.5 py-1.5 text-[10px] font-bold text-white">{String(index+1).padStart(2,'0')}</span>{index===0 ? <span className="inline-flex items-center gap-1 rounded-lg bg-[#16A6B8] px-2.5 py-1.5 text-[10px] font-bold text-white"><Star size={11} className="fill-current"/> Lead photo</span> : <span className="rounded-lg bg-black/55 px-2 py-1 text-[9px] font-bold text-white/80">{failed ? 'BROKEN' : 'READY'}</span>}</div>
          </button>
          <div className="p-3.5"><div className="mb-3 flex items-start justify-between gap-2"><div className="min-w-0"><p className="text-xs font-bold text-[#374151]">{index===0?'Primary vehicle photo':`Gallery photo ${index+1}`}</p><p title={url} className="mt-1 truncate font-mono text-[9px] text-[#9ca3af]">{url}</p></div><GripVertical size={14} className="shrink-0 text-[#c4c9cf]"/></div><div className="grid grid-cols-4 gap-1.5"><button type="button" disabled={index===0} onClick={()=>move(index,-1)} className="flex h-8 items-center justify-center rounded-lg border border-[#e5e7eb] text-[#555] disabled:cursor-not-allowed disabled:opacity-30" aria-label="Move image up"><ArrowUp size={13}/></button><button type="button" disabled={index===value.length-1} onClick={()=>move(index,1)} className="flex h-8 items-center justify-center rounded-lg border border-[#e5e7eb] text-[#555] disabled:cursor-not-allowed disabled:opacity-30" aria-label="Move image down"><ArrowDown size={13}/></button><button type="button" disabled={index===0} onClick={()=>makeLead(index)} className="flex h-8 items-center justify-center rounded-lg border border-[#e5e7eb] text-[#16A6B8] disabled:cursor-not-allowed disabled:opacity-30" aria-label="Make lead photo"><Star size={13}/></button><button type="button" onClick={()=>remove(index)} className="flex h-8 items-center justify-center rounded-lg border border-[#f1d8d8] text-red-500 hover:bg-red-50" aria-label={`Remove photo ${index+1}`}><Trash2 size={13}/></button></div></div>
        </article>})}</div>
        <div className="rounded-xl border border-[#e8e8e8] bg-[#fafafa] px-4 py-3 text-[11px] text-[#777]"><span className="font-bold text-[#444]">Tip:</span> Put the exterior hero first, then front/rear angles, interior, dashboard, wheels and detail shots. Broken images are flagged automatically before you save.</div>
      </>}

      {preview && <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4" role="dialog" aria-modal="true" aria-label="Vehicle image preview" onClick={() => setPreview(null)}><button type="button" onClick={() => setPreview(null)} className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20" aria-label="Close preview"><X size={20}/></button><img src={preview} alt="Vehicle gallery preview" className="max-h-[90vh] max-w-[94vw] rounded-xl object-contain shadow-2xl" onClick={e=>e.stopPropagation()}/></div>}
      <input type="hidden" name="galleryUrls" value={value.join('\n')} readOnly />
    </div>
  )
}
