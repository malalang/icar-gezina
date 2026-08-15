import Link from 'next/link'
import { CarFront, MoreHorizontal, Plus, Search } from 'lucide-react'
import { redirect } from 'next/navigation'
import { requireAdmin } from '@icar-gezina/supabase/server'
import { deleteVehicle } from './actions'

export default async function InventoryPage({ searchParams }: { searchParams: Promise<{ q?: string }> }) {
  const { supabase, user, profile } = await requireAdmin()
  if (!user) redirect('/admin/login')
  if (!profile) redirect('/admin/unauthorized')
  const q = (await searchParams).q?.trim() ?? ''
  let query = supabase.from('cars').select('*').order('created_at', { ascending: false })
  if (q) query = query.or(`make.ilike.%${q}%,model.ilike.%${q}%,body_type.ilike.%${q}%`)
  const { data: vehicles } = await query
  return <>
    <div className="page-header"><div><h1>Vehicles</h1><p>Manage the vehicles displayed across the ICar Gezina showroom.</p></div><Link href="/inventory/new" className="button"><Plus size={16}/> Add vehicle</Link></div>
    <form className="inventory-toolbar"><div style={{position:'relative',flex:1}}><Search size={15} style={{position:'absolute',left:12,top:12,color:'#9ca3af'}}/><input className="search" name="q" defaultValue={q} style={{paddingLeft:36}} placeholder="Search make, model, body type..." aria-label="Search vehicles"/></div><button className="button secondary" type="submit">Search</button></form>
    <div className="table-wrap"><table><thead><tr><th>Vehicle</th><th>Year</th><th>Price</th><th>Mileage</th><th>Status</th><th>Actions</th></tr></thead><tbody>
      {(vehicles ?? []).map(vehicle=><tr key={vehicle.id}><td><div className="vehicle-cell"><div className="vehicle-thumb">{vehicle.image_url?<img src={vehicle.image_url} alt="" style={{width:'100%',height:'100%',objectFit:'cover'}}/>:<CarFront size={20}/>}</div><div><div className="vehicle-name">{vehicle.make} {vehicle.model}</div><div className="vehicle-meta">{vehicle.body_type} · {vehicle.fuel_type} · {vehicle.transmission}</div></div></div></td><td>{vehicle.year}</td><td>R {vehicle.price.toLocaleString('en-ZA')}</td><td>{vehicle.mileage.toLocaleString('en-ZA')} km</td><td><span className="status">Available</span></td><td><div style={{display:'flex',gap:8}}><Link href={`/inventory/${vehicle.id}/edit`} className="button secondary" style={{padding:8}}>Edit</Link><form action={deleteVehicle}><input type="hidden" name="id" value={vehicle.id}/><button className="button secondary" style={{padding:8}} type="submit" aria-label={`Delete ${vehicle.make} ${vehicle.model}`}><MoreHorizontal size={15}/></button></form></div></td></tr>)}
      {!vehicles?.length&&<tr><td colSpan={6}>No vehicles found.</td></tr>}
    </tbody></table></div>
  </>
}
