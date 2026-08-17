import Link from 'next/link'
import { notFound, redirect } from 'next/navigation'
import { requireAdmin } from '@icar-gezina/supabase/server'
import { getResource } from '../../../resource-config'
import { updateRecord } from '../../../crud-actions'
import { ResourceForm } from '../../../resource-form'
import { LeadVehicleDetails, LeadVehicleDetailsStyles } from '../../../lead-vehicle-details'

const tableFor = (resource:string) => ({leads:'leads',reviews:'car_reviews',testimonials:'testimonials','car-parts':'car_parts',articles:'articles'} as Record<string,string>)[resource]

export default async function EditResourcePage({ params }: { params: Promise<{ resource:string; id:string }> }) {
  const { user, profile, supabase } = await requireAdmin()
  if (!user) redirect('/admin/login')
  if (!profile) redirect('/admin/unauthorized')
  const { resource, id } = await params
  const config = getResource(resource)
  const table = tableFor(resource)
  if (!config || !table) notFound()
  const [{ data: record, error }, { data: cars }] = await Promise.all([
    supabase.from(table).select('*').eq('id', id).maybeSingle(),
    supabase.from('cars').select('id,make,model,year,price,mileage,fuel_type,transmission,body_type,color,image_url').order('make').order('model')
  ])
  if (error || !record) notFound()
  const vehicle = resource === 'leads' ? (cars ?? []).find(car => car.id === record.car_id) : null

  return <>
    {resource === 'leads' && <LeadVehicleDetailsStyles />}
    <div className="page-header"><div><Link href={`/${resource}/${id}`} className="topbar-link">← Back to record</Link><h1>Edit {config.label.slice(0,-1)}</h1><p>Changes are saved directly to Supabase PHB.</p></div></div>
    {resource === 'leads' && <LeadVehicleDetails vehicle={vehicle} />}
    <section className="panel"><ResourceForm resource={resource as any} action={updateRecord} record={record} cars={cars ?? []}/></section>
  </>
}
