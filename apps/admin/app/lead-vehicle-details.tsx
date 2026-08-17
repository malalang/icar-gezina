'use client'

import Link from 'next/link'
import { CarFront, ExternalLink, Gauge, Fuel, Palette, Settings2 } from 'lucide-react'

type LeadVehicle = {
  id: string
  make?: string | null
  model?: string | null
  year?: number | null
  price?: number | null
  mileage?: number | null
  fuel_type?: string | null
  transmission?: string | null
  body_type?: string | null
  color?: string | null
  image_url?: string | null
}

function money(value: unknown) {
  const amount = Number(value)
  return Number.isFinite(amount) && amount > 0 ? `R ${amount.toLocaleString('en-ZA')}` : '—'
}

function number(value: unknown) {
  const amount = Number(value)
  return Number.isFinite(amount) && amount > 0 ? `${amount.toLocaleString('en-ZA')} km` : '—'
}

export function LeadVehicleDetails({ vehicle }: { vehicle?: LeadVehicle | null }) {
  if (!vehicle) {
    return (
      <section className="lead-vehicle-card lead-vehicle-empty">
        <div className="lead-vehicle-empty-icon"><CarFront size={20} /></div>
        <div>
          <span className="lead-vehicle-kicker">Vehicle details</span>
          <h3>No vehicle linked</h3>
          <p>This lead is not currently associated with a vehicle in the inventory.</p>
        </div>
      </section>
    )
  }

  const title = `${vehicle.year ?? ''} ${vehicle.make ?? ''} ${vehicle.model ?? ''}`.replace(/\s+/g, ' ').trim()

  const specs = [
    [Gauge, 'Mileage', number(vehicle.mileage)],
    [Settings2, 'Transmission', vehicle.transmission || '—'],
    [Fuel, 'Fuel', vehicle.fuel_type || '—'],
    [CarFront, 'Body type', vehicle.body_type || '—'],
    [Palette, 'Colour', vehicle.color || '—'],
  ] as const

  return (
    <section className="lead-vehicle-card">
      <div className="lead-vehicle-top">
        <div className="lead-vehicle-photo">
          {vehicle.image_url ? <img src={vehicle.image_url} alt="" /> : <CarFront size={28} />}
        </div>
        <div className="lead-vehicle-main">
          <span className="lead-vehicle-kicker">Vehicle details</span>
          <h3>{title || 'Vehicle'}</h3>
          <div className="lead-vehicle-price">{money(vehicle.price)}</div>
        </div>
        <Link href={`/inventory/${vehicle.id}`} className="lead-vehicle-open">Open vehicle <ExternalLink size={13} /></Link>
      </div>
      <div className="lead-vehicle-specs">
        {specs.map(([Icon, label, value]) => (
          <div className="lead-vehicle-spec" key={label}>
            <Icon size={14} />
            <div><span>{label}</span><strong>{value}</strong></div>
          </div>
        ))}
      </div>
    </section>
  )
}

export function LeadVehicleDetailsStyles() {
  return <style jsx global>{`
    .lead-vehicle-card{margin:18px 0;background:#fff;border:1px solid #e5e7eb;border-radius:9px;overflow:hidden}
    .lead-vehicle-top{display:flex;align-items:center;gap:16px;padding:18px 20px;background:#18212b;color:#fff}
    .lead-vehicle-photo{width:88px;height:64px;flex:0 0 88px;background:#26313d;display:grid;place-items:center;color:#7f8a97;overflow:hidden}
    .lead-vehicle-photo img{width:100%;height:100%;object-fit:cover;display:block}
    .lead-vehicle-main{min-width:0;flex:1}
    .lead-vehicle-kicker{display:block;color:#aeb7c4;font-size:9px;font-weight:800;text-transform:uppercase;letter-spacing:.16em}
    .lead-vehicle-main h3{margin:4px 0 0;font-size:17px;line-height:1.2;font-weight:800;letter-spacing:-.02em}
    .lead-vehicle-price{margin-top:5px;color:#e65b1f;font-size:13px;font-weight:800}
    .lead-vehicle-open{display:inline-flex;align-items:center;gap:6px;flex:0 0 auto;border:1px solid #3c4855;padding:9px 12px;color:#fff;font-size:10px;font-weight:800;text-transform:uppercase;letter-spacing:.08em}
    .lead-vehicle-open:hover{border-color:#e65b1f;color:#f3c1a8}
    .lead-vehicle-specs{display:grid;grid-template-columns:repeat(5,minmax(0,1fr));border-top:1px solid #e5e7eb}
    .lead-vehicle-spec{display:flex;align-items:center;gap:9px;padding:13px 15px;border-right:1px solid #eef0f2}
    .lead-vehicle-spec:last-child{border-right:0}.lead-vehicle-spec>svg{color:#e65b1f;flex:0 0 auto}
    .lead-vehicle-spec span{display:block;color:#8a929d;font-size:8px;font-weight:800;text-transform:uppercase;letter-spacing:.1em}
    .lead-vehicle-spec strong{display:block;margin-top:3px;color:#303841;font-size:10px;font-weight:800}
    .lead-vehicle-empty{display:flex;align-items:center;gap:14px;padding:18px 20px}.lead-vehicle-empty-icon{width:42px;height:42px;display:grid;place-items:center;background:#f5f6f8;color:#9aa2ab;flex:0 0 42px}.lead-vehicle-empty h3{margin:4px 0 0;font-size:14px}.lead-vehicle-empty p{margin:4px 0 0;color:#7b8490;font-size:10px}
    @media(max-width:900px){.lead-vehicle-specs{grid-template-columns:repeat(2,minmax(0,1fr))}.lead-vehicle-spec:nth-child(2n){border-right:0}.lead-vehicle-open{display:none}}
    @media(max-width:640px){.lead-vehicle-top{align-items:flex-start}.lead-vehicle-photo{width:72px;height:54px;flex-basis:72px}.lead-vehicle-main h3{font-size:14px}.lead-vehicle-specs{grid-template-columns:1fr}.lead-vehicle-spec{border-right:0;border-bottom:1px solid #eef0f2}.lead-vehicle-spec:last-child{border-bottom:0}}
  `}</style>
}
