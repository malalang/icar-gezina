import Link from 'next/link'
import { notFound, redirect } from 'next/navigation'
import { ArrowLeft, CalendarDays, CarFront, CheckCircle2, ChevronRight, CircleGauge, ExternalLink, Fuel, Gauge, Pencil, Tag, Trash2 } from 'lucide-react'
import { requireAdmin } from '@icar-gezina/supabase/server'
import { getCarById } from '../../../lib/api'
import { deleteVehicle } from '../actions'

function money(input: unknown) {
  const n = Number(input ?? 0)
  return Number.isFinite(n) ? `R ${n.toLocaleString('en-ZA')}` : '—'
}

function display(input: unknown, fallback = 'Not specified') {
  if (input === null || input === undefined || String(input).trim() === '') return fallback
  return String(input)
}

const specItems = [
  ['year', CalendarDays, 'Year'],
  ['mileage', Gauge, 'Mileage'],
  ['fuel_type', Fuel, 'Fuel'],
  ['transmission', CircleGauge, 'Transmission'],
  ['body_type', Tag, 'Body type'],
  ['color', CarFront, 'Colour'],
] as const

export default async function VehicleDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { user, profile } = await requireAdmin()
  if (!user) redirect('/admin/login')
  if (!profile) redirect('/admin/unauthorized')

  const { id } = await params
  let car: any
  try { car = await getCarById(id) } catch { notFound() }
  if (!car) notFound()

  const gallery = Array.from(new Set([car.image_url, ...(Array.isArray(car.gallery_urls) ? car.gallery_urls : [])].filter(Boolean))) as string[]
  const features = Array.isArray(car.features) ? car.features.filter(Boolean) : []
  const title = `${display(car.make, '')} ${display(car.model, '')}`.trim() || 'Vehicle'
  const mileage = Number(car.mileage || 0).toLocaleString('en-ZA')

  return <>
    <div className="page-header">
      <div>
        <Link href="/inventory" className="back-link"><ArrowLeft size={14} /> Back to inventory</Link>
        <h1>{title}</h1>
        <p>Review the dealership listing, vehicle specifications, media and customer-facing content.</p>
      </div>
      <div style={{display:'flex',gap:8,flexWrap:'wrap'}}>
        <Link href={`/cars/${id}`} target="_blank" className="button secondary"><ExternalLink size={15}/> View showroom</Link>
        <Link href={`/inventory/${id}/edit`} className="button"><Pencil size={15}/> Edit vehicle</Link>
        <form action={deleteVehicle}><input type="hidden" name="id" value={id}/><button className="button danger" type="submit"><Trash2 size={15}/> Delete</button></form>
      </div>
    </div>

    <section className="panel" style={{overflow:'hidden',marginBottom:18}}>
      <div style={{display:'grid',gridTemplateColumns:'minmax(0,1.35fr) minmax(280px,.65fr)'}}>
        <div style={{minHeight:340,background:'#eef0f3',overflow:'hidden'}}>
          {car.image_url ? <img src={car.image_url} alt={title} style={{width:'100%',height:'100%',minHeight:340,objectFit:'cover',display:'block'}}/> : <div className="empty-state" style={{height:'100%',minHeight:340,display:'grid',placeItems:'center'}}><div><CarFront size={38}/><div style={{marginTop:8}}>No primary image</div></div></div>}
        </div>
        <div style={{padding:28,background:'#111827',color:'#fff',display:'flex',flexDirection:'column',justifyContent:'space-between'}}>
          <div><span className="eyebrow" style={{color:'#9ca3af'}}>Active vehicle</span><h2 style={{fontSize:26,margin:'8px 0 0',letterSpacing:'-.03em'}}>{title}</h2><p style={{margin:'10px 0 0',fontSize:12,lineHeight:1.7,color:'#aeb7c4'}}>{display(car.description,'No description has been added yet.')}</p></div>
          <div style={{borderTop:'1px solid #2c3747',paddingTop:18,marginTop:24}}><span style={{display:'block',fontSize:10,color:'#9ca3af',textTransform:'uppercase',letterSpacing:'.1em'}}>Asking price</span><strong style={{display:'block',marginTop:5,fontSize:30}}>{money(car.price)}</strong></div>
        </div>
      </div>
    </section>

    <div className="stats" style={{marginBottom:18}}>
      {specItems.slice(0,4).map(([key, Icon, label]) => <div className="stat-card" key={key}><Icon size={18} style={{color:'#c7a45a'}}/><div className="stat-label" style={{marginTop:12}}>{label}</div><div className="stat-value" style={{fontSize:20}}>{key === 'mileage' ? `${mileage} km` : display(car[key])}</div></div>)}
    </div>

    <div className="detail-grid">
      <section className="panel">
        <div className="panel-header"><div><span className="eyebrow">Vehicle profile</span><h2 style={{marginTop:4}}>Specifications</h2></div><span style={{fontSize:10,color:'#9ca3af'}}>ID {id}</span></div>
        <div className="detail-fields">
          {specItems.map(([key, Icon, label]) => <div key={key}><span><Icon size={12} style={{display:'inline',marginRight:5}}/> {label}</span><strong>{key === 'mileage' ? `${mileage} km` : display(car[key])}</strong></div>)}
        </div>
      </section>
      <section className="panel">
        <div className="panel-header"><div><span className="eyebrow">Customer-facing content</span><h2 style={{marginTop:4}}>Description</h2></div></div>
        <div className="panel-body"><p style={{margin:0,fontSize:13,lineHeight:1.8,color:'#4b5563',whiteSpace:'pre-wrap'}}>{display(car.description,'No description has been added.')}</p></div>
      </section>
    </div>

    <section className="panel" style={{marginTop:18}}>
      <div className="panel-header"><div><span className="eyebrow">Vehicle media</span><h2 style={{marginTop:4}}>Gallery</h2></div><Link href={`/inventory/${id}/edit`} className="button secondary" style={{padding:'8px 11px'}}>Manage media <ChevronRight size={14}/></Link></div>
      {gallery.length ? <div style={{display:'grid',gridTemplateColumns:'repeat(4,minmax(0,1fr))',gap:10,padding:20}}>{gallery.map((url,index) => <a href={url} target="_blank" rel="noreferrer" key={`${url}-${index}`} style={{position:'relative',display:'block',aspectRatio:index===0?'4/3':'4/3',overflow:'hidden',background:'#eef0f3',gridColumn:index===0?'span 2':'span 1',gridRow:index===0?'span 2':'span 1'}}><img src={url} alt={`${title} gallery image ${index+1}`} loading={index>1?'lazy':'eager'} style={{width:'100%',height:'100%',objectFit:'cover',display:'block'}}/>{index===0 && <span style={{position:'absolute',left:10,bottom:10,padding:'5px 8px',background:'#111827',color:'#fff',fontSize:9,fontWeight:800,textTransform:'uppercase',letterSpacing:'.08em'}}>Cover</span>}</a>)}</div> : <div className="empty-state">No gallery images have been added. Use Edit vehicle to add photography.</div>}
    </section>

    <div className="detail-grid" style={{marginTop:18}}>
      <section className="panel"><div className="panel-header"><div><span className="eyebrow">Equipment</span><h2 style={{marginTop:4}}>Features & extras</h2></div><span className="status">{features.length} {features.length === 1 ? 'feature' : 'features'}</span></div>{features.length ? <ul className="feature-list">{features.map((feature:string) => <li key={feature}><CheckCircle2 size={13} style={{display:'inline',marginRight:5,color:'#c7a45a'}}/>{feature}</li>)}</ul> : <div className="empty-state">No features have been added.</div>}</section>
      <section className="panel"><div className="panel-header"><div><span className="eyebrow">Record</span><h2 style={{marginTop:4}}>Inventory metadata</h2></div></div><div className="detail-fields"><div><span>Vehicle ID</span><strong style={{wordBreak:'break-all'}}>{id}</strong></div><div><span>Created</span><strong>{car.created_at ? new Date(car.created_at).toLocaleString('en-ZA') : '—'}</strong></div><div><span>Last updated</span><strong>{car.updated_at ? new Date(car.updated_at).toLocaleString('en-ZA') : '—'}</strong></div></div></section>
    </div>
  </>
}