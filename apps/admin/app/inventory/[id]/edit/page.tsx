import { notFound, redirect } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, CalendarDays, Gauge, Fuel, Tag } from 'lucide-react'
import { requireAdmin } from '@icar-gezina/supabase/server'
import { updateVehicle } from '../../actions'
import { VehicleForm } from '../../vehicle-form'

export default async function EditVehiclePage({ params }: { params: Promise<{ id:string }> }) {
  const { supabase, user, profile } = await requireAdmin()
  if (!user) redirect('/admin/login')
  if (!profile) redirect('/admin/unauthorized')
  const { id } = await params
  const { data: car } = await supabase.from('cars').select('*').eq('id', id).maybeSingle()
  if (!car) notFound()
  return <><div className="page-header"><div><Link href="/inventory" className="back-link"><ArrowLeft size={15}/> Back to vehicles</Link><h1>Edit vehicle</h1><p>Manage the complete showroom listing for {car.make} {car.model}.</p></div></div><div className="vehicle-summary"><span><CalendarDays size={14}/>{car.year}</span><span><Gauge size={14}/>{car.mileage.toLocaleString('en-ZA')} km</span><span><Fuel size={14}/>{car.fuel_type || 'Fuel not set'}</span><span><Tag size={14}/>R {car.price.toLocaleString('en-ZA')}</span></div><VehicleForm values={{id:car.id,make:car.make,model:car.model,year:car.year,price:car.price,mileage:car.mileage,fuelType:car.fuel_type,transmission:car.transmission,bodyType:car.body_type,color:car.color,imageUrl:car.image_url,galleryUrls:car.gallery_urls ?? [],description:car.description,features:car.features ?? []}} action={updateVehicle} submitLabel="Save changes"/></>
}
