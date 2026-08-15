import Link from 'next/link'
import { CarFront, Eye, Plus, TrendingUp } from 'lucide-react'
import { redirect } from 'next/navigation'
import { requireAdmin } from '@icar-gezina/supabase/server'

export default async function DashboardPage() {
  const { supabase, user, profile } = await requireAdmin()
  if (!user) redirect('/admin/login')
  if (!profile) redirect('/admin/unauthorized')
  const { data: cars } = await supabase.from('cars').select('id, make, model, year, price, created_at').order('created_at', { ascending: false })
  const vehicles = cars ?? []
  const inventoryValue = vehicles.reduce((total, car) => total + (car.price ?? 0), 0)
  return <>
    <div className="page-header"><div><h1>Dashboard</h1><p>Current ICar Gezina showroom overview.</p></div><Link href="/inventory/new" className="button"><Plus size={16} /> Add vehicle</Link></div>
    <section className="stats" aria-label="Dealership overview">
      <article className="stat-card"><div className="stat-label">Total vehicles</div><div className="stat-value">{vehicles.length}</div><div className="stat-meta"><CarFront size={12} style={{verticalAlign:'middle',marginRight:4}}/>Live from Supabase PHB</div></article>
      <article className="stat-card"><div className="stat-label">Inventory value</div><div className="stat-value">R {inventoryValue.toLocaleString('en-ZA')}</div><div className="stat-meta"><TrendingUp size={12} style={{verticalAlign:'middle',marginRight:4}}/>Current listed value</div></article>
      <article className="stat-card"><div className="stat-label">Live inventory</div><div className="stat-value">{vehicles.length}</div><div className="stat-meta"><Eye size={12} style={{verticalAlign:'middle',marginRight:4}}/>Public catalogue records</div></article>
      <article className="stat-card"><div className="stat-label">Admin access</div><div className="stat-value">ON</div><div className="stat-meta">Authenticated administrator</div></article>
    </section>
    <section className="panel"><div className="panel-header"><div><h2>Recent vehicles</h2><p>Latest records from the PHB cars table.</p></div><Link href="/inventory">View all</Link></div><div className="table-wrap"><table><thead><tr><th>Vehicle</th><th>Year</th><th>Price</th><th>Added</th></tr></thead><tbody>{vehicles.slice(0,5).map(car=><tr key={car.id}><td><strong>{car.make} {car.model}</strong></td><td>{car.year}</td><td>R {car.price.toLocaleString('en-ZA')}</td><td>{new Date(car.created_at).toLocaleDateString('en-ZA')}</td></tr>)}{!vehicles.length&&<tr><td colSpan={4}>No vehicles found.</td></tr>}</tbody></table></div></section>
  </>
}
