import Link from 'next/link'
import { CarFront, Plus, Search } from 'lucide-react'
import { redirect } from 'next/navigation'
import { requireAdmin } from '@icar-gezina/supabase/server'
import { DeleteVehicleButton } from './delete-button'

export default async function InventoryPage({ searchParams }: { searchParams: Promise<{ q?: string }> }) {
  const { supabase, user, profile } = await requireAdmin()
  if (!user) redirect('/admin/login')
  if (!profile) redirect('/admin/unauthorized')

  const rawQuery = (await searchParams).q?.trim() ?? ''
  const q = rawQuery.replace(/[^a-zA-Z0-9\s-]/g, ' ').trim()
  let query = supabase.from('cars').select('id,make,model,year,price,mileage,fuel_type,transmission,body_type,image_url,created_at').order('created_at', { ascending: false })
  if (q) query = query.or(`make.ilike.%${q}%,model.ilike.%${q}%,body_type.ilike.%${q}%`)
  const { data: vehicles, error } = await query

  return <>
    <div className="page-header"><div><h1>Vehicles</h1><p>Manage the vehicles displayed across the ICar Gezina showroom.</p></div><Link href="/inventory/new" className="button"><Plus size={16}/> Add vehicle</Link></div>
    <form className="inventory-toolbar" method="get"><div style={{position:'relative',flex:1}}><Search size={15} style={{position:'absolute',left:12,top:12,color:'#9ca3af'}}/><input className="search" name="q" defaultValue={rawQuery} style={{paddingLeft:36}} placeholder="Search make, model, body type..." aria-label="Search vehicles"/></div><button className="button secondary" type="submit">Search</button>{rawQuery && <Link href="/inventory" className="button secondary">Clear</Link>}</form>
    <div className="table-wrap"><table><thead><tr><th>Vehicle</th><th>Year</th><th>Price</th><th>Mileage</th><th>Actions</th></tr></thead><tbody>
      {error && <tr><td colSpan={5}>Unable to load vehicles: {error.message}</td></tr>}
      {(vehicles ?? []).map(vehicle=><tr key={vehicle.id}><td><div className="vehicle-cell"><div className="vehicle-thumb">{vehicle.image_url?<img src={vehicle.image_url} alt="" style={{width:'100%',height:'100%',objectFit:'cover'}}/>:<CarFront size={20}/>}</div><div><div className="vehicle-name">{vehicle.make} {vehicle.model}</div><div className="vehicle-meta">{vehicle.body_type} · {vehicle.fuel_type} · {vehicle.transmission}</div></div></div></td><td>{vehicle.year}</td><td>R {vehicle.price.toLocaleString('en-ZA')}</td><td>{vehicle.mileage.toLocaleString('en-ZA')} km</td><td><div style={{display:'flex',gap:8}}><Link href={`/inventory/${vehicle.id}/edit`} className="button secondary" style={{padding:'8px 10px'}}>Edit</Link><DeleteVehicleButton id={vehicle.id} name={`${vehicle.make} ${vehicle.model}`}/></div></td></tr>)}
      {!error && !vehicles?.length && <tr><td colSpan={5}><div style={{padding:'28px 0',textAlign:'center'}}><strong>No vehicles found.</strong><p>{q ? 'Try another search.' : 'Add your first vehicle to start building inventory.'}</p>{!q && <Link href="/inventory/new" className="button"><Plus size={16}/> Add vehicle</Link>}</div></td></tr>}
    </tbody></table></div>
  </>
}
