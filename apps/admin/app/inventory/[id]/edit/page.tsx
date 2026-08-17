import { notFound, redirect } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, CalendarDays, ExternalLink, Fuel, Gauge, Tag } from 'lucide-react'
import { requireAdmin } from '@icar-gezina/supabase/server'
import { updateVehicle } from '../../actions'
import { VehicleForm } from '../../vehicle-form'

export default async function EditVehiclePage({ params }: { params: Promise<{ id: string }> }) {
  const { supabase, user, profile } = await requireAdmin()
  if (!user) redirect('/admin/login')
  if (!profile) redirect('/admin/unauthorized')

  const { id } = await params
  const { data: car, error } = await supabase.from('cars').select('*').eq('id', id).maybeSingle()
  if (error || !car) notFound()

  const galleryUrls = Array.isArray(car.gallery_urls) ? car.gallery_urls.filter(Boolean) : []
  const features = Array.isArray(car.features) ? car.features.filter(Boolean) : []
  const title = `${car.make ?? ''} ${car.model ?? ''}`.trim() || 'Vehicle'
  const price = Number(car.price || 0).toLocaleString('en-ZA')
  const mileage = Number(car.mileage || 0).toLocaleString('en-ZA')

  return <>
    <div className="page-header">
      <div>
        <Link href={`/inventory/${id}`} className="back-link"><ArrowLeft size={14}/> Back to vehicle</Link>
        <h1>Edit {title}</h1>
        <p>Update the vehicle information, customer-facing content and media used across the showroom.</p>
      </div>
      <Link href={`/cars/${id}`} target="_blank" className="button secondary"><ExternalLink size={15}/> View public listing</Link>
    </div>

    <div className="stats" style={{marginBottom:20}}>
      <Summary label="Year" value={car.year || '—'} icon={<CalendarDays size={17}/>} />
      <Summary label="Mileage" value={`${mileage} km`} icon={<Gauge size={17}/>} />
      <Summary label="Fuel" value={car.fuel_type || '—'} icon={<Fuel size={17}/>} />
      <Summary label="Price" value={`R ${price}`} icon={<Tag size={17}/>} />
    </div>

    <div style={{marginBottom:18,padding:'13px 16px',border:'1px solid #e5e7eb',background:'#fff',display:'flex',alignItems:'center',justifyContent:'space-between',gap:12,flexWrap:'wrap'}}>
      <div style={{display:'flex',alignItems:'center',gap:9}}><span style={{width:8,height:8,borderRadius:'50%',background:'#2f6e43'}}/><span style={{fontSize:11,fontWeight:700,color:'#4b5563'}}>Editing active inventory</span><span style={{fontSize:11,color:'#9ca3af'}}>· {features.length} features · {galleryUrls.length} gallery images</span></div>
      <span style={{fontSize:10,color:'#9ca3af',fontFamily:'monospace'}}>{id}</span>
    </div>

    <VehicleForm values={{ id: car.id, make: car.make ?? '', model: car.model ?? '', year: Number(car.year || new Date().getFullYear()), price: Number(car.price || 0), mileage: Number(car.mileage || 0), fuelType: car.fuel_type ?? '', transmission: car.transmission ?? '', bodyType: car.body_type ?? '', color: car.color ?? '', imageUrl: car.image_url ?? '', galleryUrls, description: car.description ?? '', features }} action={updateVehicle} submitLabel="Save changes" />
  </>
}

function Summary({ label, value, icon }: { label: string; value: string | number; icon: React.ReactNode }) {
  return <div className="stat-card"><div style={{color:'#c7a45a'}}>{icon}</div><div className="stat-label" style={{marginTop:10}}>{label}</div><div className="stat-value" style={{fontSize:20}}>{value}</div></div>
}