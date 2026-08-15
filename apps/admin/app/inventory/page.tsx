import Link from 'next/link'
import { CarFront, MoreHorizontal, Plus, Search } from 'lucide-react'

const vehicles = [
  { name: 'BMW X3 xDrive20d M Sport', meta: 'G01 · 2021', price: 'R 649,900', status: 'Available' },
  { name: 'Mercedes-Benz C200 AMG Line', meta: 'W206 · 2022', price: 'R 729,900', status: 'Available' },
  { name: 'Audi Q5 40 TDI S line', meta: 'FY · 2021', price: 'R 689,900', status: 'Available' },
  { name: 'Volkswagen Tiguan 2.0 TDI', meta: '2020', price: 'R 429,900', status: 'Available' },
]

export default function InventoryPage() {
  return (
    <>
      <div className="page-header">
        <div><h1>Vehicles</h1><p>Manage the vehicles displayed across the ICar Gezina showroom.</p></div>
        <Link href="/inventory/new" className="button"><Plus size={16} /> Add vehicle</Link>
      </div>

      <div className="inventory-toolbar">
        <div style={{ position: 'relative', flex: 1 }}>
          <Search size={15} style={{ position: 'absolute', left: 12, top: 12, color: '#9ca3af' }} />
          <input className="search" style={{ paddingLeft: 36 }} placeholder="Search make, model, stock number..." aria-label="Search vehicles" />
        </div>
        <button className="button secondary">All status</button>
        <button className="button secondary">Sort</button>
      </div>

      <div className="table-wrap">
        <table>
          <thead><tr><th>Vehicle</th><th>Price</th><th>Status</th><th>Actions</th></tr></thead>
          <tbody>
            {vehicles.map((vehicle) => (
              <tr key={vehicle.name}>
                <td><div className="vehicle-cell"><div className="vehicle-thumb"><CarFront size={20} /></div><div><div className="vehicle-name">{vehicle.name}</div><div className="vehicle-meta">{vehicle.meta}</div></div></div></td>
                <td>{vehicle.price}</td>
                <td><span className="status">{vehicle.status}</span></td>
                <td><button className="button secondary" style={{ padding: 8 }} aria-label={`Actions for ${vehicle.name}`}><MoreHorizontal size={15} /></button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}
