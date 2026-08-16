import Link from 'next/link'
import { notFound, redirect } from 'next/navigation'
import { ArrowLeft, Pencil, Trash2 } from 'lucide-react'
import { requireAdmin } from '@icar-gezina/supabase/server'
import { getCarById } from '../../../lib/api'
import { deleteVehicle } from '../actions'

export default async function VehicleDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { user, profile } = await requireAdmin()
  if (!user) redirect('/admin/login')
  if (!profile) redirect('/admin/unauthorized')

  const { id } = await params
  let car: any
  try { car = await getCarById(id) } catch { notFound() }
  if (!car) notFound()

  return (
    <>
      <div className="page-header">
        <div>
          <Link href="/inventory" className="topbar-link"><ArrowLeft size={15} /> Back to vehicles</Link>
          <h1>{car.make} {car.model}</h1>
          <p>{car.year} · {car.mileage?.toLocaleString('en-ZA')} km · R {car.price?.toLocaleString('en-ZA')}</p>
        </div>
        <div style={{display:'flex',gap:8}}>
          <Link href={`/inventory/${id}/edit`} className="button"><Pencil size={16}/> Edit vehicle</Link>
          <form action={deleteVehicle}>
            <input type="hidden" name="id" value={id}/>
            <button className="button danger" type="submit"><Trash2 size={16}/> Delete</button>
          </form>
        </div>
      </div>

      <div className="detail-grid">
        <section className="panel">
          <div className="panel-header"><div><h2>Vehicle information</h2><p>Live record from Supabase PHB.</p></div></div>
          <div className="detail-fields">
            <div><span>Make</span><strong>{car.make}</strong></div><div><span>Model</span><strong>{car.model}</strong></div>
            <div><span>Year</span><strong>{car.year}</strong></div><div><span>Price</span><strong>R {car.price?.toLocaleString('en-ZA')}</strong></div>
            <div><span>Mileage</span><strong>{car.mileage?.toLocaleString('en-ZA')} km</strong></div><div><span>Fuel</span><strong>{car.fuel_type}</strong></div>
            <div><span>Transmission</span><strong>{car.transmission}</strong></div><div><span>Body type</span><strong>{car.body_type}</strong></div>
            <div><span>Colour</span><strong>{car.color}</strong></div>
          </div>
        </section>
        <section className="panel">
          <div className="panel-header"><div><h2>Primary image</h2><p>Gallery contains {car.gallery_urls?.length ?? 0} additional images.</p></div></div>
          {car.image_url ? <img src={car.image_url} alt={`${car.make} ${car.model}`} style={{width:'100%',aspectRatio:'16/10',objectFit:'cover',borderRadius:16}}/> : <div className="empty-state">No primary image</div>}
        </section>
      </div>

      <section className="panel" style={{marginTop:20}}><div className="panel-header"><div><h2>Description</h2></div></div><p style={{whiteSpace:'pre-wrap'}}>{car.description || 'No description has been added.'}</p></section>
      <section className="panel" style={{marginTop:20}}><div className="panel-header"><div><h2>Features</h2></div></div>{car.features?.length ? <ul className="feature-list">{car.features.map((feature:string)=><li key={feature}>{feature}</li>)}</ul> : <p>No features have been added.</p>}</section>
    </>
  )
}
