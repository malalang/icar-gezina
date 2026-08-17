import Link from 'next/link'
import { notFound, redirect } from 'next/navigation'
import { ArrowLeft, CalendarDays, CarFront, CheckCircle2, ChevronRight, CircleGauge, ExternalLink, Fuel, Gauge, Pencil, Settings2, Tag, Trash2 } from 'lucide-react'
import { requireAdmin } from '@icar-gezina/supabase/server'
import { getCarById } from '../../../lib/api'
import { deleteVehicle } from '../actions'

function money(input: unknown) {
  const n = Number(input ?? 0)
  return Number.isFinite(n) ? `R ${n.toLocaleString('en-ZA')}` : '—'
}

function display(input: unknown, fallback = 'Not specified') {
  if (input === null || input === undefined || String(input).trim() === '') return fallback
  return String(input)
}

const specItems = [
  ['year', CalendarDays, 'Year'],
  ['mileage', Gauge, 'Mileage'],
  ['fuel_type', Fuel, 'Fuel'],
  ['transmission', CircleGauge, 'Transmission'],
  ['body_type', Tag, 'Body type'],
  ['color', CarFront, 'Colour'],
] as const

export default async function VehicleDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { user, profile } = await requireAdmin()
  if (!user) redirect('/admin/login')
  if (!profile) redirect('/admin/unauthorized')

  const { id } = await params
  let car: any
  try { car = await getCarById(id) } catch { notFound() }
  if (!car) notFound()

  const gallery = Array.from(new Set([car.image_url, ...(Array.isArray(car.gallery_urls) ? car.gallery_urls : [])].filter(Boolean))) as string[]
  const features = Array.isArray(car.features) ? car.features.filter(Boolean) : []
  const title = `${display(car.make, '')} ${display(car.model, '')}`.trim() || 'Vehicle'
  const mileage = Number(car.mileage || 0).toLocaleString('en-ZA')

  return (
    <main className="min-h-screen bg-white text-[#262626]">
      <div className="border-b border-[#e6e6e6] bg-white">
        <div className="mx-auto flex min-h-16 max-w-[1440px] items-center justify-between gap-6 px-5 py-3 sm:px-8 lg:px-12">
          <div className="flex min-w-0 items-center gap-3 text-sm">
            <Link href="/inventory" className="inline-flex items-center gap-2 font-medium text-[#6b6b6b] transition hover:text-[#262626]"><ArrowLeft size={15} /> Inventory</Link>
            <ChevronRight size={14} className="text-[#9a9a9a]" />
            <span className="truncate font-medium text-[#262626]">{title}</span>
          </div>
          <div className="flex shrink-0 items-center gap-2">
            <span className="hidden items-center gap-2 text-xs font-medium text-[#3c3c3c] sm:inline-flex"><span className="h-2 w-2 rounded-full bg-[#22c55e]" /> Active</span>
            <Link href={`/cars/${id}`} target="_blank" className="hidden h-10 items-center gap-2 border border-[#cccccc] bg-white px-4 text-xs font-bold tracking-[0.5px] text-[#262626] transition hover:bg-[#f7f7f7] sm:inline-flex"><ExternalLink size={14} /> View showroom</Link>
            <Link href={`/inventory/${id}/edit`} className="inline-flex h-10 items-center gap-2 bg-[#1c69d4] px-5 text-xs font-bold tracking-[0.5px] text-white transition hover:bg-[#0653b6]"><Pencil size={14} /> Edit vehicle</Link>
            <form action={deleteVehicle}><input type="hidden" name="id" value={id} /><button className="hidden h-10 items-center gap-2 border border-[#cccccc] bg-white px-4 text-xs font-bold tracking-[0.5px] text-[#dc2626] transition hover:bg-[#f7f7f7] md:inline-flex" type="submit"><Trash2 size={14} /> Delete</button></form>
          </div>
        </div>
      </div>

      <section className="bg-[#1a2129] text-white">
        <div className="mx-auto grid min-h-[460px] max-w-[1440px] lg:grid-cols-[1.35fr_0.65fr]">
          <div className="relative min-h-[330px] overflow-hidden bg-[#262e38] lg:min-h-[520px]">
            {car.image_url ? <img src={car.image_url} alt={title} className="h-full w-full object-cover" /> : <div className="flex h-full min-h-[330px] items-center justify-center text-[#bbbbbb]"><div className="flex flex-col items-center gap-3"><CarFront size={42} /><span className="text-sm">No primary image</span></div></div>}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#1a2129]/25" />
            <span className="absolute bottom-5 left-5 bg-[#1a2129]/85 px-3 py-2 text-[11px] font-bold uppercase tracking-[1.5px] text-white">Primary image</span>
          </div>
          <div className="flex flex-col justify-between p-8 sm:p-10 lg:p-12">
            <div>
              <p className="mb-4 text-[13px] font-bold uppercase tracking-[1.5px] text-[#bbbbbb]">Showroom listing</p>
              <h1 className="text-4xl font-bold leading-[1.08] sm:text-5xl">{title}</h1>
              <p className="mt-5 max-w-xl text-base font-light leading-[1.55] text-[#bbbbbb]">{display(car.description, 'No description has been added for this vehicle yet.')}</p>
            </div>
            <div className="mt-10 border-t border-white/15 pt-6"><span className="text-xs font-medium text-[#bbbbbb]">Asking price</span><strong className="mt-1 block text-3xl font-bold sm:text-4xl">{money(car.price)}</strong></div>
          </div>
        </div>
      </section>

      <section className="border-b border-[#e6e6e6] bg-white">
        <div className="mx-auto max-w-[1440px] px-5 py-8 sm:px-8 lg:px-12">
          <div className="mb-6 flex items-end justify-between gap-6"><div><p className="text-[13px] font-bold uppercase tracking-[1.5px] text-[#6b6b6b]">Vehicle profile</p><h2 className="mt-2 text-2xl font-bold sm:text-[32px]">Key specifications</h2></div><span className="hidden text-xs text-[#9a9a9a] sm:block">Vehicle ID · {id}</span></div>
          <div className="grid grid-cols-2 border-l border-t border-[#e6e6e6] sm:grid-cols-3 lg:grid-cols-6">
            {specItems.map(([key, Icon, label]) => {
              const value = key === 'mileage' ? `${mileage} km` : display(car[key])
              return <div key={key} className="min-h-32 border-b border-r border-[#e6e6e6] p-5 sm:p-6"><Icon size={18} className="mb-7 text-[#1c69d4]" /><span className="block text-[11px] font-bold uppercase tracking-[1.5px] text-[#6b6b6b]">{label}</span><strong className="mt-2 block text-xl font-bold leading-tight text-[#262626]">{value}</strong></div>
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-5 py-12 sm:px-8 sm:py-16 lg:px-12 lg:py-20">
        <div className="mb-7 flex items-end justify-between gap-6"><div><p className="text-[13px] font-bold uppercase tracking-[1.5px] text-[#6b6b6b]">Vehicle media</p><h2 className="mt-2 text-3xl font-bold sm:text-4xl">Gallery</h2><p className="mt-2 text-sm font-light leading-6 text-[#6b6b6b]">{gallery.length} image{gallery.length === 1 ? '' : 's'} attached to this vehicle.</p></div><Link href={`/inventory/${id}/edit`} className="hidden h-12 items-center gap-2 border border-[#cccccc] px-5 text-xs font-bold uppercase tracking-[1.5px] text-[#262626] transition hover:bg-[#f7f7f7] sm:inline-flex">Manage gallery <ChevronRight size={15} /></Link></div>
        {gallery.length ? <div className="grid grid-cols-2 gap-2 md:grid-cols-4 md:gap-3">{gallery.map((url, index) => <a href={url} target="_blank" rel="noreferrer" key={`${url}-${index}`} className={`${index === 0 ? 'col-span-2 row-span-2' : ''} group relative aspect-[4/3] overflow-hidden bg-[#fafafa]`}><img src={url} alt={`${title} gallery image ${index + 1}`} loading={index > 1 ? 'lazy' : 'eager'} className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.02]" />{index === 0 && <span className="absolute bottom-4 left-4 bg-white px-3 py-2 text-[11px] font-bold uppercase tracking-[1.5px] text-[#262626]">Lead image</span>}</a>)}</div> : <div className="border border-[#e6e6e6] bg-[#fafafa] p-10 text-center text-sm font-light text-[#6b6b6b]">No gallery images have been added. Use Edit vehicle to add image URLs.</div>}
        <Link href={`/inventory/${id}/edit`} className="mt-4 inline-flex h-11 items-center gap-2 border border-[#cccccc] px-4 text-xs font-bold uppercase tracking-[1.2px] sm:hidden">Manage gallery <ChevronRight size={14} /></Link>
      </section>

      <section className="border-y border-[#e6e6e6] bg-[#f7f7f7]">
        <div className="mx-auto grid max-w-[1440px] md:grid-cols-2">
          <div className="border-b border-[#e6e6e6] p-7 sm:p-10 md:border-b-0 md:border-r lg:p-12"><p className="text-[13px] font-bold uppercase tracking-[1.5px] text-[#6b6b6b]">Customer-facing content</p><h2 className="mt-2 text-3xl font-bold">Description</h2><p className="mt-2 text-sm font-light text-[#6b6b6b]">Sales copy displayed on the showroom.</p><p className="mt-8 max-w-2xl text-base font-light leading-[1.7] text-[#3c3c3c]">{display(car.description, 'No description has been added.')}</p></div>
          <div className="p-7 sm:p-10 lg:p-12"><p className="text-[13px] font-bold uppercase tracking-[1.5px] text-[#6b6b6b]">Equipment</p><h2 className="mt-2 text-3xl font-bold">Features & extras</h2><p className="mt-2 text-sm font-light text-[#6b6b6b]">{features.length} feature{features.length === 1 ? '' : 's'} listed.</p>{features.length ? <ul className="mt-8 grid gap-0 sm:grid-cols-2">{features.map((feature: string) => <li key={feature} className="flex items-start gap-3 border-t border-[#e6e6e6] py-4 text-sm font-light leading-6 text-[#3c3c3c]"><CheckCircle2 size={16} className="mt-1 shrink-0 text-[#1c69d4]" />{feature}</li>)}</ul> : <p className="mt-8 border-t border-[#e6e6e6] pt-5 text-sm font-light text-[#6b6b6b]">No features have been added.</p>}</div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-[1440px] grid-cols-1 divide-y border-x border-[#e6e6e6] sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          <div className="p-5 sm:p-6"><span className="block text-[11px] font-bold uppercase tracking-[1.5px] text-[#6b6b6b]">Vehicle ID</span><strong className="mt-2 block break-all text-sm font-bold">{id}</strong></div>
          <div className="p-5 sm:p-6"><span className="block text-[11px] font-bold uppercase tracking-[1.5px] text-[#6b6b6b]">Created</span><strong className="mt-2 block text-sm font-bold">{car.created_at ? new Date(car.created_at).toLocaleString('en-ZA') : '—'}</strong></div>
          <div className="p-5 sm:p-6"><span className="block text-[11px] font-bold uppercase tracking-[1.5px] text-[#6b6b6b]">Last updated</span><strong className="mt-2 block text-sm font-bold">{car.updated_at ? new Date(car.updated_at).toLocaleString('en-ZA') : '—'}</strong></div>
        </div>
      </section>
    </main>
  )
}