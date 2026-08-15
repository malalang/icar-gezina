import { redirect } from 'next/navigation'
import { requireAdmin } from '@icar-gezina/supabase/server'
import { createVehicle } from '../actions'
import { VehicleForm } from '../vehicle-form'

export default async function NewVehiclePage() {
  const { user, profile } = await requireAdmin()
  if (!user) redirect('/admin/login')
  if (!profile) redirect('/admin/unauthorized')
  return <><div className="page-header"><div><h1>Add vehicle</h1><p>Create a vehicle listing in the PHB inventory.</p></div></div><section className="panel"><div className="panel-body"><VehicleForm values={{make:'',model:'',year:new Date().getFullYear(),price:0,mileage:0,fuelType:'',transmission:'',bodyType:'',color:'',imageUrl:'',galleryUrls:[],description:'',features:[]}} action={createVehicle} submitLabel="Create vehicle"/></div></section></>
}
