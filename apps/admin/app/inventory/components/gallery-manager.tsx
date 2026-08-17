'use client'

import { ArrowDown, ArrowUp, Check, GripVertical, Image as ImageIcon, ImagePlus, Link2, Plus, Star, Trash2, X } from 'lucide-react'
import { useMemo, useState } from 'react'

type GalleryManagerProps = { value: string[]; onChange: (value: string[]) => void }
function isValidUrl(url: string) { return /^https?:\/\/[^\s]+$/i.test(url.trim()) }

const MEDIA_GUIDE = [
  { label: 'Exterior', hint: 'Front, rear & side angles' },
  { label: 'Interior', hint: 'Seats, cabin & dashboard' },
  { label: 'Details', hint: 'Wheels, trim & equipment' },
]

export function GalleryManager({ value, onChange }: GalleryManagerProps) {
  const [draft, setDraft] = useState('')
  const [error, setError] = useState('')
  const [failedImages, setFailedImages] = useState<string[]>([])
  const [preview, setPreview] = useState<string | null>(null)

  const failedCount = failedImages.filter(url => value.includes(url)).length
  const healthyCount = value.length - failedCount
  const galleryStatus = useMemo(() => {
    if (!value.length) return 'No photography'
    if (failedCount) return `${healthyCount} ready · ${failedCount} unavailable`
    return 'All photos ready'
  }, [value.length, healthyCount, failedCount])

  function add() {
    const urls = draft.split(/\s*\n\s*/).map(url => url.trim()).filter(Boolean)
    if (!urls.length) return
    if (value.length >= 20) { setError('This vehicle already has the maximum of 20 photos.'); return }
    const invalid = urls.find(url => !isValidUrl(url))
    if (invalid) { setError('Use valid http:// or https:// image URLs.'); return }
    const unique = urls.filter(url => !value.includes(url)).slice(0, 20 - value.length)
    if (!unique.length) { setError('Those photos are already in the gallery.'); return }
    onChange([...value, ...unique])
    setDraft('')
    setError('')
  }

  function move(index: number, direction: -1 | 1) {
    const target = index + direction
    if (target < 0 || target >= value.length) return
    const next = [...value]
    ;[next[index], next[target]] = [next[target], next[index]]
    onChange(next)
  }

  function makeLead(index: number) {
    if (index === 0) return
    const next = [...value]
    const [lead] = next.splice(index, 1)
    next.unshift(lead)
    onChange(next)
  }

  function remove(index: number) {
    const url = value[index]
    onChange(value.filter((_, i) => i !== index))
    setFailedImages(current => current.filter(item => item !== url))
    if (preview === url) setPreview(null)
  }

  return (
    <div className="space-y-5">
      <div className="overflow-hidden border border-[#dfe3e7] bg-white">
        <div className="bg-[#18212b] px-5 py-5 text-white sm:px-6">
          <div className="flex flex-wrap items-start justify-between gap-5">
            <div className="flex min-w-0 items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center bg-[#e65b1f]">
                <ImagePlus size={20} />
              </div>
              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-2">
                  <h4 className="text-base font-extrabold tracking-tight">Vehicle media</h4>
                  <span className="border border-white/15 px-2 py-1 text-[9px] font-bold uppercase tracking-[0.16em] text-white/60">{value.length}/20 photos</span>
                </div>
                <p className="mt-1 max-w-2xl text-xs leading-5 text-white/55">Build the visual story customers will see. Keep the strongest exterior image first, then guide the customer through the vehicle.</p>
              </div>
            </div>
            <div className="min-w-[150px] border border-white/10 bg-white/[0.04] px-4 py-3">
              <div className="text-xs font-bold text-white">{galleryStatus}</div>
              <div className="mt-1 text-[9px] uppercase tracking-[0.16em] text-white/40">Media health</div>
            </div>
          </div>

          <div className="mt-5 grid gap-2 border-t border-white/10 pt-4 sm:grid-cols-3">
            {MEDIA_GUIDE.map(item => (
              <div key={item.label} className="flex items-center gap-3 border border-white/8 bg-white/[0.03] px-3 py-2.5">
                <span className="h-1.5 w-1.5 shrink-0 bg-[#e65b1f]" />
                <div><div className="text-[10px] font-bold uppercase tracking-[0.12em] text-white/80">{item.label}</div><div className="mt-0.5 text-[10px] text-white/40">{item.hint}</div></div>
              </div>
            ))}
          </div>
        </div>

        <div className="border-t border-[#dfe3e7] bg-[#f7f8f9] p-4 sm:p-5">
          <div className="flex flex-col gap-3 sm:flex-row">
            <div className="relative min-w-0 flex-1">
              <Link2 className="pointer-events-none absolute left-3.5 top-3.5 h-4 w-4 text-[#8a929d]" />
              <textarea id="gallery-image-url" value={draft} onChange={e => setDraft(e.target.value)} onKeyDown={e => { if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) { e.preventDefault(); add() } }} placeholder="Paste one photo URL, or multiple URLs on separate lines…" aria-label="Vehicle image URLs" rows={2} className="w-full resize-none border border-[#dfe3e7] bg-white py-3 pl-10 pr-4 text-sm text-[#20262d] outline-none placeholder:text-[#9ca3ad] focus:border-[#e65b1f] focus:ring-2 focus:ring-[#e65b1f]/10" />
            </div>
            <button type="button" onClick={add} disabled={value.length >= 20} className="inline-flex h-[70px] shrink-0 items-center justify-center gap-2 bg-[#e65b1f] px-6 text-xs font-extrabold uppercase tracking-[0.08em] text-white transition hover:bg-[#c94c17] disabled:cursor-not-allowed disabled:opacity-40 sm:h-auto"><Plus size={15}/> Add photo{draft.includes('\n') ? 's' : ''}</button>
          </div>
          {error && <div className="mt-2 flex items-center gap-2 text-xs font-semibold text-[#9f2f2f]"><X size={13}/>{error}</div>}
          <p className="mt-2 text-[10px] text-[#8a929d]">Tip: paste multiple URLs line-by-line, then press <kbd className="border border-[#dfe3e7] bg-white px-1.5 py-0.5 font-mono">Ctrl/⌘ + Enter</kbd>.</p>
        </div>
      </div>

      {value.length === 0 ? (
        <div className="border border-dashed border-[#cfd4da] bg-[#fafafa] px-6 py-16 text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center bg-white text-[#9ca3ad] shadow-sm"><ImageIcon size={25}/></div>
          <h4 className="mt-5 text-sm font-extrabold text-[#303841]">No vehicle photography yet</h4>
          <p className="mx-auto mt-1 max-w-md text-xs leading-5 text-[#7b858f]">Add exterior, interior and detail photography. The first image automatically becomes the lead photo.</p>
        </div>
      ) : (
        <>
          <div className="flex flex-wrap items-end justify-between gap-3 border-b border-[#dfe3e7] pb-4">
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <h4 className="text-sm font-extrabold text-[#20262d]">Gallery sequence</h4>
                <span className="bg-[#18212b] px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.14em] text-white">{value.length} photos</span>
              </div>
              <p className="mt-1 text-[11px] text-[#7b858f]">Photo 01 is the customer-facing cover. Use the controls to change the order.</p>
            </div>
            <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.1em] text-[#8a929d]"><GripVertical size={13}/> Ordered gallery</div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {value.map((url, index) => {
              const failed = failedImages.includes(url)
              return (
                <article key={`${url}-${index}`} className={`overflow-hidden border bg-white transition ${index === 0 ? 'border-[#e65b1f] ring-1 ring-[#e65b1f]/15' : 'border-[#dfe3e7]'}`}>
                  <button type="button" onClick={() => !failed && setPreview(url)} className="group relative block aspect-[4/3] w-full overflow-hidden bg-[#eef0f2] text-left" aria-label={`Preview vehicle photo ${index + 1}`}>
                    {!failed ? <img src={url} alt={`Vehicle photo ${index + 1}`} loading="lazy" className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.02]" onError={() => setFailedImages(c => c.includes(url) ? c : [...c, url])} /> : <div className="flex h-full flex-col items-center justify-center gap-2 text-[#9ca3ad]"><ImageIcon size={24}/><span className="text-[11px] font-semibold">Photo unavailable</span><span className="text-[10px] text-[#9f2f2f]">Replace or remove</span></div>}
                    <div className="absolute inset-x-0 top-0 flex items-center justify-between p-3"><span className="bg-[#18212b]/90 px-2.5 py-1.5 text-[10px] font-bold text-white">{String(index + 1).padStart(2, '0')}</span>{index === 0 ? <span className="inline-flex items-center gap-1 bg-[#e65b1f] px-2.5 py-1.5 text-[9px] font-extrabold uppercase tracking-[0.08em] text-white"><Star size={11} className="fill-current"/> Lead</span> : <span className={`px-2 py-1 text-[9px] font-extrabold uppercase tracking-[0.08em] ${failed ? 'bg-red-50 text-[#9f2f2f]' : 'bg-white/90 text-[#52606d]'}`}>{failed ? 'Broken' : 'Ready'}</span>}</div>
                  </button>
                  <div className="p-4">
                    <div className="flex items-start justify-between gap-2">
                      <div className="min-w-0"><p className="text-xs font-bold text-[#303841]">{index === 0 ? 'Primary vehicle photo' : `Gallery photo ${index + 1}`}</p><p title={url} className="mt-1 truncate font-mono text-[9px] text-[#9aa2ab]">{url}</p></div>
                      <GripVertical size={14} className="shrink-0 text-[#c4cad0]"/>
                    </div>
                    <div className="mt-3 grid grid-cols-4 gap-1.5">
                      <button type="button" disabled={index === 0} onClick={() => move(index, -1)} className="flex h-8 items-center justify-center border border-[#dfe3e7] text-[#5f6974] hover:bg-[#f7f8f9] disabled:cursor-not-allowed disabled:opacity-30" aria-label="Move photo up"><ArrowUp size={13}/></button>
                      <button type="button" disabled={index === value.length - 1} onClick={() => move(index, 1)} className="flex h-8 items-center justify-center border border-[#dfe3e7] text-[#5f6974] hover:bg-[#f7f8f9] disabled:cursor-not-allowed disabled:opacity-30" aria-label="Move photo down"><ArrowDown size={13}/></button>
                      <button type="button" disabled={index === 0} onClick={() => makeLead(index)} className="flex h-8 items-center justify-center border border-[#dfe3e7] text-[#e65b1f] hover:bg-[#fff6f1] disabled:cursor-not-allowed disabled:opacity-30" aria-label="Make lead photo"><Star size={13}/></button>
                      <button type="button" onClick={() => remove(index)} className="flex h-8 items-center justify-center border border-[#efd4d4] text-[#9f2f2f] hover:bg-[#fff4f4]" aria-label={`Remove photo ${index + 1}`}><Trash2 size={13}/></button>
                    </div>
                  </div>
                </article>
              )
            })}
          </div>

          <div className="border border-[#dfe3e7] bg-[#f7f8f9] px-4 py-3 text-[11px] leading-5 text-[#68727d]"><span className="font-extrabold text-[#303841]">Recommended order:</span> strongest exterior → front/rear angles → interior → dashboard → wheels → detail shots. Broken photos are flagged automatically before saving.</div>
        </>
      )}

      {preview && <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#111827]/90 p-4" role="dialog" aria-modal="true" aria-label="Vehicle image preview" onClick={() => setPreview(null)}><button type="button" onClick={() => setPreview(null)} className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center bg-white text-[#18212b]" aria-label="Close preview"><X size={20}/></button><img src={preview} alt="Vehicle gallery preview" className="max-h-[90vh] max-w-[94vw] object-contain shadow-2xl" onClick={e => e.stopPropagation()} /></div>}
      <input type="hidden" name="galleryUrls" value={value.join('\n')} readOnly />
    </div>
  )
}
