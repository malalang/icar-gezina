import { notFound, redirect } from 'next/navigation'
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
  return <><div className="page-header"><div><h1>Edit vehicle</h1><p>Update the listing and its showroom media.</p></div></div><section className="panel"><div className="panel-body"><VehicleForm values={{id:car.id,make:car.make,model:car.model,year:car.year,price:car.price,mileage:car.mileage,fuelType:car.fuel_type,transmission:car.transmission,bodyType:car.body_type,color:car.color,imageUrl:car.image_url,galleryUrls:car.gallery_urls ?? [],description:car.description,features:car.features ?? []}} action={updateVehicle} submitLabel="Save changes"/></div></section></>
}
