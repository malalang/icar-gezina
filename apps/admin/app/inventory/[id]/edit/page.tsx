import { notFound, redirect } from 'next/navigation'
import Link from 'next/link'
import { CalendarDays, ExternalLink, Gauge, Fuel, Tag } from 'lucide-react'
import { requireAdmin } from '@icar-gezina/supabase/server'
import { updateVehicle } from '../../actions'
import { VehicleForm } from '../../vehicle-form'

export default async function EditVehiclePage({ params }: { params: Promise<{ id: string }> }) {
  const { supabase, user, profile } = await requireAdmin()
  if (!user) redirect('/login')
  if (!profile) redirect('/unauthorized')

  const { id } = await params
  const { data: car, error } = await supabase.from('cars').select('*').eq('id', id).maybeSingle()
  if (error || !car) notFound()

  const galleryUrls = Array.isArray(car.gallery_urls) ? car.gallery_urls.filter(Boolean) : []
  const features = Array.isArray(car.features) ? car.features.filter(Boolean) : []
  const title = `${car.make ?? ''} ${car.model ?? ''}`.trim() || 'Vehicle'

  return (
    <div className="inventory-edit-page">
      <div className="edit-page-context edit-page-context-compact">
        <div>
          <div className="edit-breadcrumb"><Link href="/inventory">Inventory</Link><span>/</span><span>{title}</span><span>/</span><strong>Edit</strong></div>
        </div>
        <Link href={`/cars/${id}`} target="_blank" className="button secondary"><ExternalLink size={15} /> View public listing</Link>
      </div>

      <div className="vehicle-summary">
        <span><CalendarDays size={14} /> {car.year || 'Year not set'}</span>
        <span><Gauge size={14} /> {Number(car.mileage || 0).toLocaleString('en-ZA')} km</span>
        <span><Fuel size={14} /> {car.fuel_type || 'Fuel not set'}</span>
        <span><Tag size={14} /> R {Number(car.price || 0).toLocaleString('en-ZA')}</span>
      </div>

      <VehicleForm values={{
        id: car.id,
        make: car.make ?? '',
        model: car.model ?? '',
        year: Number(car.year || new Date().getFullYear()),
        price: Number(car.price || 0),
        mileage: Number(car.mileage || 0),
        fuelType: car.fuel_type ?? '',
        transmission: car.transmission ?? '',
        bodyType: car.body_type ?? '',
        color: car.color ?? '',
        imageUrl: car.image_url ?? '',
        galleryUrls,
        description: car.description ?? '',
        features,
      }} action={updateVehicle} submitLabel="Save changes" />
    </div>
  )
}
