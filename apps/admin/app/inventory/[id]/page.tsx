import Link from 'next/link'
import { notFound, redirect } from 'next/navigation'
import { ArrowLeft, CalendarDays, CarFront, CheckCircle2, ChevronRight, CircleGauge, Fuel, Gauge, Pencil, Settings2, Tag, Trash2 } from 'lucide-react'
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

  return <div className="vehicle-detail-page">
    <div className="page-header">
      <div>
        <Link href="/inventory" className="back-link"><ArrowLeft size={15} /> Back to inventory</Link>
        <div className="eyebrow">Inventory / Vehicle</div>
        <h1>{title}</h1>
        <p>{display(car.year)} · {Number(car.mileage || 0).toLocaleString('en-ZA')} km · {money(car.price)}</p>
      </div>
      <div className="detail-actions">
        <Link href={`/inventory/${id}/edit`} className="button"><Pencil size={16} /> Edit vehicle</Link>
        <form action={deleteVehicle}><input type="hidden" name="id" value={id} /><button className="button danger" type="submit"><Trash2 size={16} /> Delete</button></form>
      </div>
    </div>

    <div className="vehicle-hero-grid">
      <section className="panel vehicle-hero-card">
        <div className="vehicle-hero-image">{car.image_url ? <img src={car.image_url} alt={title} /> : <div className="empty-state"><CarFront size={34} /><span>No primary image</span></div>}</div>
        <div className="vehicle-hero-copy"><div><span className="eyebrow">Showroom listing</span><h2>{title}</h2><p>{display(car.description, 'No description has been added for this vehicle yet.')}</p></div><strong className="vehicle-price">{money(car.price)}</strong></div>
      </section>
      <section className="panel spec-panel">
        <div className="panel-header"><div><h2>Key specifications</h2><p>Live data from Supabase.</p></div><Settings2 size={19} /></div>
        <div className="spec-grid">
          <div><CalendarDays size={17} /><span>Year</span><strong>{display(car.year)}</strong></div>
          <div><Gauge size={17} /><span>Mileage</span><strong>{Number(car.mileage || 0).toLocaleString('en-ZA')} km</strong></div>
          <div><Fuel size={17} /><span>Fuel</span><strong>{display(car.fuel_type)}</strong></div>
          <div><CircleGauge size={17} /><span>Transmission</span><strong>{display(car.transmission)}</strong></div>
          <div><Tag size={17} /><span>Body type</span><strong>{display(car.body_type)}</strong></div>
          <div><CarFront size={17} /><span>Colour</span><strong>{display(car.color)}</strong></div>
        </div>
      </section>
    </div>

    <section className="panel" style={{ marginTop: 20 }}>
      <div className="panel-header"><div><h2>Gallery</h2><p>{gallery.length} image{gallery.length === 1 ? '' : 's'} attached to this vehicle.</p></div><Link href={`/inventory/${id}/edit`} className="button secondary">Manage gallery <ChevronRight size={15} /></Link></div>
      {gallery.length ? <div className="vehicle-gallery">{gallery.map((url, index) => <a href={url} target="_blank" rel="noreferrer" key={`${url}-${index}`} className={index === 0 ? 'gallery-item gallery-featured' : 'gallery-item'}><img src={url} alt={`${title} gallery image ${index + 1}`} loading={index > 1 ? 'lazy' : 'eager'} />{index === 0 && <span className="gallery-badge">Primary</span>}</a>)}</div> : <div className="empty-state">No gallery images have been added. Use Edit vehicle to add image URLs.</div>}
    </section>

    <div className="detail-grid" style={{ marginTop: 20 }}>
      <section className="panel"><div className="panel-header"><div><h2>Description</h2><p>Customer-facing vehicle copy.</p></div></div><p className="description-copy">{display(car.description, 'No description has been added.')}</p></section>
      <section className="panel"><div className="panel-header"><div><h2>Features</h2><p>{features.length} feature{features.length === 1 ? '' : 's'} listed.</p></div></div>{features.length ? <ul className="feature-list">{features.map((feature: string) => <li key={feature}><CheckCircle2 size={16} />{feature}</li>)}</ul> : <p>No features have been added.</p>}</section>
    </div>

    <section className="panel vehicle-meta-panel">
      <div><span>Vehicle ID</span><strong>{id}</strong></div>
      <div><span>Created</span><strong>{car.created_at ? new Date(car.created_at).toLocaleString('en-ZA') : '—'}</strong></div>
      <div><span>Last updated</span><strong>{car.updated_at ? new Date(car.updated_at).toLocaleString('en-ZA') : '—'}</strong></div>
    </section>
  </div>
}
