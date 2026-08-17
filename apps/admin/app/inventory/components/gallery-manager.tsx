'use client'

import { ArrowDown, ArrowUp, GripVertical, Image as ImageIcon, ImagePlus, Link2, Plus, Star, Trash2, X } from 'lucide-react'
import { useMemo, useState } from 'react'

type GalleryManagerProps = { value: string[]; onChange: (value: string[]) => void }

function isValidUrl(url: string) { return /^https?:\/\/[^\s]+$/i.test(url.trim()) }

const MEDIA_GUIDE = [
  { label: '01', title: 'Lead', hint: 'Best exterior angle' },
  { label: '02', title: 'Walkaround', hint: 'Front, rear & sides' },
  { label: '03', title: 'Cabin', hint: 'Interior & dashboard' },
  { label: '04', title: 'Details', hint: 'Wheels, trim & extras' },
]

export function GalleryManager({ value, onChange }: GalleryManagerProps) {
  const [draft, setDraft] = useState('')
  const [error, setError] = useState('')
  const [failedImages, setFailedImages] = useState<string[]>([])
  const [preview, setPreview] = useState<string | null>(null)

  const failedCount = failedImages.filter(url => value.includes(url)).length
  const healthyCount = value.length - failedCount
  const galleryStatus = useMemo(() => {
    if (!value.length) return { label: 'Needs photography', tone: 'warning' }
    if (failedCount) return { label: `${healthyCount} ready · ${failedCount} broken`, tone: 'danger' }
    if (value.length === 1) return { label: 'Lead photo only', tone: 'caution' }
    return { label: 'Gallery ready', tone: 'success' }
  }, [value.length, healthyCount, failedCount])

  function add() {
    const urls = draft.split(/\r?\n/).map(url => url.trim()).filter(Boolean)
    if (!urls.length) return
    if (value.length >= 20) return setError('This vehicle already has the maximum of 20 photos.')
    const invalid = urls.find(url => !isValidUrl(url))
    if (invalid) return setError('Use valid http:// or https:// image URLs.')
    const unique = urls.filter(url => !value.includes(url)).slice(0, 20 - value.length)
    if (!unique.length) return setError('Those photos are already in the gallery.')
    onChange([...value, ...unique]); setDraft(''); setError('')
  }

  function move(index: number, direction: -1 | 1) {
    const target = index + direction
    if (target < 0 || target >= value.length) return
    const next = [...value]; [next[index], next[target]] = [next[target], next[index]]; onChange(next)
  }

  function makeLead(index: number) {
    if (index === 0) return
    const next = [...value]; const [lead] = next.splice(index, 1); next.unshift(lead); onChange(next)
  }

  function remove(index: number) {
    const url = value[index]
    onChange(value.filter((_, i) => i !== index))
    setFailedImages(current => current.filter(item => item !== url))
    if (preview === url) setPreview(null)
  }

  return (
    <div className="vehicle-media">
      <section className="vehicle-media-head">
        <div className="vehicle-media-head-main">
          <div className="vehicle-media-icon"><ImagePlus size={18} /></div>
          <div><div className="vehicle-media-title-row"><h4>Vehicle media</h4><span className="vehicle-media-count">{value.length}/20 photos</span></div><p>Build the photography set customers will see. Lead with the strongest exterior image.</p></div>
        </div>
        <div className={`vehicle-media-status ${galleryStatus.tone}`}><span className="vehicle-media-status-dot" /><div><strong>{galleryStatus.label}</strong><small>Media status</small></div></div>
      </section>

      <div className="vehicle-media-guide">{MEDIA_GUIDE.map(item => <div className="vehicle-media-guide-item" key={item.label}><span>{item.label}</span><div><strong>{item.title}</strong><small>{item.hint}</small></div></div>)}</div>

      <section className="vehicle-media-add">
        <div className="vehicle-media-section-title"><div><strong>Add photography</strong><small>Paste one URL or multiple URLs, one per line.</small></div><span>Max 20</span></div>
        <div className="vehicle-media-add-row"><div className="vehicle-media-url-wrap"><Link2 size={15} /><textarea value={draft} onChange={e => setDraft(e.target.value)} onKeyDown={e => { if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) { e.preventDefault(); add() } }} placeholder="https://…/vehicle-front.jpg\nhttps://…/vehicle-interior.jpg" rows={3} aria-label="Vehicle image URLs" /></div><button type="button" onClick={add} disabled={value.length >= 20} className="vehicle-media-add-button"><Plus size={15} /> Add photos</button></div>
        {error && <div className="vehicle-media-error"><X size={13} />{error}</div>}
        <div className="vehicle-media-add-foot"><span>Duplicates are ignored automatically.</span><span><kbd>Ctrl/⌘ + Enter</kbd> to add quickly.</span></div>
      </section>

      {!value.length ? <div className="vehicle-media-empty"><div className="vehicle-media-empty-icon"><ImageIcon size={23} /></div><strong>Start the vehicle gallery</strong><p>Add the strongest exterior photo first. The first image becomes the vehicle cover.</p></div> : <section className="vehicle-media-gallery">
        <header className="vehicle-media-gallery-head"><div><div className="vehicle-media-section-title-inline"><strong>Gallery sequence</strong><span>{value.length} photos</span></div><small>Photo 01 is the customer-facing cover image.</small></div><div className="vehicle-media-order"><GripVertical size={13} /> Ordered gallery</div></header>
        <div className="vehicle-media-grid">{value.map((url, index) => { const failed = failedImages.includes(url); return <article className={`vehicle-media-card ${index === 0 ? 'is-lead' : ''}`} key={`${url}-${index}`}>
          <button type="button" className="vehicle-media-photo" onClick={() => !failed && setPreview(url)} aria-label={`Preview vehicle photo ${index + 1}`}>
            {!failed ? <img src={url} alt={`Vehicle photo ${index + 1}`} loading="lazy" onError={() => setFailedImages(current => current.includes(url) ? current : [...current, url])} /> : <div className="vehicle-media-broken"><ImageIcon size={22} /><strong>Photo unavailable</strong><small>Replace or remove</small></div>}
            <span className="vehicle-media-number">{String(index + 1).padStart(2, '0')}</span>{index === 0 ? <span className="vehicle-media-lead"><Star size={10} className="fill-current" /> Lead photo</span> : <span className={`vehicle-media-ready ${failed ? 'is-broken' : ''}`}>{failed ? 'Broken' : 'Ready'}</span>}
          </button>
          <div className="vehicle-media-card-body"><div className="vehicle-media-card-meta"><div><strong>{index === 0 ? 'Primary vehicle photo' : `Gallery photo ${index + 1}`}</strong><span title={url}>{url}</span></div><GripVertical size={14} /></div>
            <div className="vehicle-media-actions"><div className="vehicle-media-actions-left"><button type="button" disabled={index === 0} onClick={() => move(index, -1)} aria-label="Move photo up"><ArrowUp size={13} /></button><button type="button" disabled={index === value.length - 1} onClick={() => move(index, 1)} aria-label="Move photo down"><ArrowDown size={13} /></button><button type="button" disabled={index === 0} onClick={() => makeLead(index)} aria-label="Make lead photo"><Star size={13} /></button></div><button type="button" className="vehicle-media-remove" onClick={() => remove(index)}><Trash2 size={13} /> Remove</button></div>
          </div>
        </article> })}</div>
        <div className="vehicle-media-tip"><strong>Recommended order:</strong> strongest exterior → front/rear → interior → dashboard → wheels → detail shots.</div>
      </section>}

      {preview && <div className="vehicle-media-preview" role="dialog" aria-modal="true" aria-label="Vehicle image preview" onClick={() => setPreview(null)}><button type="button" onClick={() => setPreview(null)} aria-label="Close preview"><X size={20} /></button><img src={preview} alt="Vehicle gallery preview" onClick={e => e.stopPropagation()} /></div>}
      <input type="hidden" name="galleryUrls" value={value.join('\n')} readOnly />

      <style jsx>{`
        .vehicle-media{margin-top:4px;background:#fff;border:1px solid #dfe3e7;border-radius:9px;overflow:hidden;color:#111827}
        .vehicle-media-head{display:flex;justify-content:space-between;align-items:flex-start;gap:20px;padding:22px;border-bottom:1px solid #edf0f2;background:#18212b;color:#fff}
        .vehicle-media-head-main{display:flex;gap:14px;min-width:0}.vehicle-media-icon{width:42px;height:42px;display:grid;place-items:center;flex:0 0 42px;background:#e65b1f}.vehicle-media-title-row{display:flex;align-items:center;flex-wrap:wrap;gap:8px}.vehicle-media-title-row h4{margin:0;font-size:16px;font-weight:800}.vehicle-media-count{border:1px solid rgba(255,255,255,.16);padding:5px 8px;color:#adb7c2;font-size:9px;font-weight:800;letter-spacing:.12em;text-transform:uppercase}.vehicle-media-head p{margin:6px 0 0;max-width:660px;color:#9eabb8;font-size:10px;line-height:1.6}
        .vehicle-media-status{min-width:180px;display:flex;align-items:center;gap:10px;padding:11px 13px;border:1px solid rgba(255,255,255,.1);background:#202b37}.vehicle-media-status-dot{width:8px;height:8px;border-radius:50%;background:currentColor}.vehicle-media-status strong{display:block;font-size:10px;font-weight:800}.vehicle-media-status small{display:block;margin-top:3px;color:#71808e;font-size:8px;font-weight:800;letter-spacing:.12em;text-transform:uppercase}.vehicle-media-status.success{color:#79b48d}.vehicle-media-status.caution{color:#e2b75f}.vehicle-media-status.warning,.vehicle-media-status.danger{color:#df7777}
        .vehicle-media-guide{display:grid;grid-template-columns:repeat(4,1fr);gap:1px;background:#33404d;border-bottom:1px solid #dfe3e7}.vehicle-media-guide-item{display:flex;align-items:center;gap:10px;padding:12px;background:#202b37}.vehicle-media-guide-item>span{width:26px;height:26px;display:grid;place-items:center;background:#2b3947;color:#b8c2cc;font-size:8px;font-weight:800}.vehicle-media-guide-item strong{display:block;color:#edf1f4;font-size:9px;text-transform:uppercase;letter-spacing:.1em}.vehicle-media-guide-item small{display:block;margin-top:3px;color:#81909e;font-size:8px}
        .vehicle-media-add{padding:17px 22px;background:#f7f8f9;border-bottom:1px solid #dfe3e7}.vehicle-media-section-title{display:flex;align-items:center;justify-content:space-between;gap:12px;margin-bottom:10px}.vehicle-media-section-title strong,.vehicle-media-section-title-inline strong{display:block;color:#303841;font-size:10px;font-weight:800;letter-spacing:.1em;text-transform:uppercase}.vehicle-media-section-title small{display:block;margin-top:4px;color:#8a929d;font-size:9px}.vehicle-media-section-title>span{color:#9aa2ab;font-size:9px;font-weight:800;text-transform:uppercase;letter-spacing:.1em}.vehicle-media-add-row{display:grid;grid-template-columns:minmax(0,1fr) 145px;gap:9px}.vehicle-media-url-wrap{position:relative}.vehicle-media-url-wrap svg{position:absolute;left:12px;top:12px;color:#8a929d;pointer-events:none}.vehicle-media-url-wrap textarea{width:100%;min-height:76px;resize:vertical;border:1px solid #dfe3e7;background:#fff;padding:12px 12px 12px 35px;outline:0;color:#20262d;font-size:11px;line-height:1.5}.vehicle-media-url-wrap textarea:focus{border-color:#aeb5bf;box-shadow:0 0 0 3px rgba(17,24,39,.05)}.vehicle-media-add-button{display:flex;align-items:center;justify-content:center;gap:7px;border:0;background:#e65b1f;color:#fff;font-size:10px;font-weight:800;text-transform:uppercase;letter-spacing:.08em;cursor:pointer}.vehicle-media-add-button:hover{background:#c94c17}.vehicle-media-add-button:disabled{opacity:.45;cursor:not-allowed}.vehicle-media-error{display:flex;align-items:center;gap:6px;margin-top:9px;color:#9f2f2f;font-size:9px;font-weight:800}.vehicle-media-add-foot{display:flex;justify-content:space-between;gap:10px;margin-top:9px;color:#9aa2ab;font-size:8px}.vehicle-media-add-foot kbd{border:1px solid #dfe3e7;background:#fff;padding:2px 5px;font-family:monospace}
        .vehicle-media-empty{padding:48px 22px;text-align:center;background:#fafbfc;border:1px dashed #cfd5db}.vehicle-media-empty-icon{width:52px;height:52px;margin:0 auto 13px;display:grid;place-items:center;background:#fff;border:1px solid #e1e5e8;color:#9aa2ab}.vehicle-media-empty strong{display:block;color:#303841;font-size:11px;font-weight:800}.vehicle-media-empty p{max-width:420px;margin:5px auto 0;color:#7b858f;font-size:9px;line-height:1.6}
        .vehicle-media-gallery{border:1px solid #dfe3e7;background:#fff}.vehicle-media-gallery-head{display:flex;align-items:center;justify-content:space-between;gap:15px;padding:17px 22px;border-bottom:1px solid #edf0f2}.vehicle-media-section-title-inline{display:flex;align-items:center;gap:8px}.vehicle-media-section-title-inline span{background:#18212b;color:#fff;padding:4px 7px;font-size:8px;font-weight:800;text-transform:uppercase;letter-spacing:.1em}.vehicle-media-gallery-head small{display:block;margin-top:4px;color:#8a929d;font-size:9px}.vehicle-media-order{display:flex;align-items:center;gap:5px;color:#8a929d;font-size:8px;font-weight:800;letter-spacing:.1em;text-transform:uppercase}.vehicle-media-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:1px;background:#dfe3e7}.vehicle-media-card{background:#fff;min-width:0}.vehicle-media-card.is-lead{box-shadow:inset 0 3px #e65b1f}.vehicle-media-photo{position:relative;display:block;width:100%;aspect-ratio:4/3;border:0;padding:0;background:#edf0f2;overflow:hidden;cursor:pointer;text-align:left}.vehicle-media-photo img{width:100%;height:100%;display:block;object-fit:cover;transition:transform .3s ease}.vehicle-media-photo:hover img{transform:scale(1.025)}.vehicle-media-number{position:absolute;left:10px;top:10px;padding:5px 7px;background:rgba(24,33,43,.92);color:#fff;font-size:9px;font-weight:800}.vehicle-media-lead{position:absolute;right:10px;top:10px;display:flex;align-items:center;gap:4px;padding:5px 7px;background:#e65b1f;color:#fff;font-size:8px;font-weight:800;text-transform:uppercase;letter-spacing:.06em}.vehicle-media-ready{position:absolute;right:10px;top:10px;padding:5px 7px;background:rgba(255,255,255,.92);color:#52606d;font-size:8px;font-weight:800;text-transform:uppercase}.vehicle-media-ready.is-broken{background:#fff0f0;color:#9f2f2f}.vehicle-media-broken{height:100%;display:grid;place-items:center;align-content:center;gap:5px;color:#9aa2ab}.vehicle-media-broken strong{font-size:9px}.vehicle-media-broken small{font-size:8px;color:#9f2f2f}.vehicle-media-card-body{padding:13px}.vehicle-media-card-meta{display:flex;justify-content:space-between;gap:8px}.vehicle-media-card-meta>div{min-width:0}.vehicle-media-card-meta strong{display:block;color:#303841;font-size:9px;font-weight:800}.vehicle-media-card-meta span{display:block;overflow:hidden;margin-top:4px;color:#9aa2ab;font:8px/1.4 ui-monospace,SFMono-Regular,Menlo,monospace;text-overflow:ellipsis;white-space:nowrap}.vehicle-media-card-meta>svg{color:#c4cad0;flex:0 0 auto}.vehicle-media-actions{display:flex;align-items:center;justify-content:space-between;gap:8px;margin-top:11px;padding-top:11px;border-top:1px solid #edf0f2}.vehicle-media-actions-left{display:flex;gap:5px}.vehicle-media-actions button{width:30px;height:30px;display:grid;place-items:center;border:1px solid #dfe3e7;background:#fff;color:#5f6974;cursor:pointer}.vehicle-media-actions button:hover{border-color:#aeb5bf;background:#f7f8f9}.vehicle-media-actions button:disabled{opacity:.3;cursor:not-allowed}.vehicle-media-actions .vehicle-media-remove{width:auto;display:flex;align-items:center;gap:5px;padding:0 9px;color:#9f2f2f;border-color:#efd4d4;font-size:8px;font-weight:800;text-transform:uppercase;letter-spacing:.06em}.vehicle-media-actions .vehicle-media-remove:hover{background:#fff4f4;border-color:#e5bcbc}.vehicle-media-tip{margin:14px;padding:11px 13px;border:1px solid #dfe3e7;background:#f7f8f9;color:#68727d;font-size:9px;line-height:1.5}.vehicle-media-tip strong{color:#303841}
        .vehicle-media-preview{position:fixed;inset:0;z-index:1000;display:grid;place-items:center;padding:28px;background:rgba(17,24,39,.92)}.vehicle-media-preview img{max-width:94vw;max-height:88vh;object-fit:contain;box-shadow:0 20px 60px rgba(0,0,0,.4)}.vehicle-media-preview>button{position:absolute;right:20px;top:20px;width:40px;height:40px;display:grid;place-items:center;border:0;background:#fff;color:#18212b;cursor:pointer}
        @media(max-width:900px){.vehicle-media-head{flex-direction:column}.vehicle-media-status{width:100%}.vehicle-media-grid{grid-template-columns:repeat(2,1fr)}.vehicle-media-guide{grid-template-columns:repeat(2,1fr)}}
        @media(max-width:600px){.vehicle-media-head{padding:18px}.vehicle-media-guide{grid-template-columns:1fr}.vehicle-media-add{padding:15px}.vehicle-media-add-row{grid-template-columns:1fr}.vehicle-media-add-button{min-height:44px}.vehicle-media-add-foot{flex-direction:column}.vehicle-media-gallery-head{align-items:flex-start;flex-direction:column;padding:15px}.vehicle-media-grid{grid-template-columns:1fr}.vehicle-media-card-body{padding:12px}}
      `}</style>
    </div>
  )
}
