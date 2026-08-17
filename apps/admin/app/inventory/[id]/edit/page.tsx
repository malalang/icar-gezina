import { notFound, redirect } from 'next/navigation'
import Link from 'next/link'
import { CalendarDays, ExternalLink, Fuel, Gauge, Tag } from 'lucide-react'
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
    <main className="min-h-screen bg-white text-[#262626]">
      <div className="border-b border-[#e6e6e6] bg-white">
        <div className="mx-auto flex min-h-16 max-w-[1440px] items-center justify-between gap-5 px-5 py-3 sm:px-8 lg:px-12">
          <div className="min-w-0 text-sm"><div className="flex items-center gap-2 text-[#6b6b6b]"><Link href="/inventory" className="hover:text-[#262626]">Inventory</Link><span>/</span><span className="truncate">{title}</span><span>/</span><strong className="text-[#262626]">Edit</strong></div></div>
          <Link href={`/cars/${id}`} target="_blank" className="inline-flex h-10 shrink-0 items-center gap-2 border border-[#cccccc] bg-white px-4 text-xs font-bold tracking-[0.5px] transition hover:bg-[#f7f7f7]"><ExternalLink size={14} /> <span className="hidden sm:inline">View public listing</span><span className="sm:hidden">View</span></Link>
        </div>
      </div>

      <section className="border-b border-[#e6e6e6] bg-[#1a2129] text-white">
        <div className="mx-auto max-w-[1440px] px-5 py-10 sm:px-8 sm:py-12 lg:px-12">
          <p className="text-[13px] font-bold uppercase tracking-[1.5px] text-[#bbbbbb]">Inventory / Vehicle editor</p>
          <h1 className="mt-3 text-4xl font-bold leading-[1.08] sm:text-5xl">Edit {title}</h1>
          <p className="mt-4 max-w-2xl text-base font-light leading-[1.55] text-[#bbbbbb]">Maintain the customer-facing listing, photography and vehicle specification from one precise workspace.</p>
          <div className="mt-8 grid grid-cols-2 border-l border-t border-white/15 sm:grid-cols-4">
            <Summary label="Year" value={car.year || '—'} icon={<CalendarDays size={16} />} />
            <Summary label="Mileage" value={`${Number(car.mileage || 0).toLocaleString('en-ZA')} km`} icon={<Gauge size={16} />} />
            <Summary label="Fuel" value={car.fuel_type || '—'} icon={<Fuel size={16} />} />
            <Summary label="Price" value={`R ${Number(car.price || 0).toLocaleString('en-ZA')}`} icon={<Tag size={16} />} />
          </div>
        </div>
      </section>

      <VehicleForm values={{ id: car.id, make: car.make ?? '', model: car.model ?? '', year: Number(car.year || new Date().getFullYear()), price: Number(car.price || 0), mileage: Number(car.mileage || 0), fuelType: car.fuel_type ?? '', transmission: car.transmission ?? '', bodyType: car.body_type ?? '', color: car.color ?? '', imageUrl: car.image_url ?? '', galleryUrls, description: car.description ?? '', features }} action={updateVehicle} submitLabel="Save changes" />
    </main>
  )
}

function Summary({ label, value, icon }: { label: string; value: string | number; icon: React.ReactNode }) {
  return <div className="border-b border-r border-white/15 p-4 sm:p-5"><div className="flex items-center gap-2 text-[#bbbbbb]">{icon}<span className="text-[11px] font-bold uppercase tracking-[1.5px]">{label}</span></div><strong className="mt-3 block text-base font-bold text-white sm:text-lg">{value}</strong></div>
}