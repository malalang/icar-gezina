import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
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
    <div className="page-header">
      <div>
        <Link href={`/${resource}/${id}`} className="back-link"><ArrowLeft size={13}/> Back to record</Link>
        <span className="eyebrow" style={{marginTop:12}}>Lead management / Edit</span>
        <h1>Edit Lead</h1>
        <p>Update customer details, lead status and the vehicle attached to this enquiry.</p>
      </div>
    </div>

    {resource === 'leads' ? (
      <div className="lead-edit-shell">
        <section className="panel lead-edit-form-card">
          <div className="lead-edit-heading">
            <div>
              <span className="eyebrow">Customer enquiry</span>
              <h2>Edit lead details</h2>
              <p>Keep the customer information and vehicle relationship accurate for the sales team.</p>
            </div>
            <span className="lead-id-badge">{id.slice(0,8)}</span>
          </div>
          <ResourceForm resource={resource as any} action={updateRecord} record={record} cars={cars ?? []}/>
        </section>

        <aside className="lead-edit-context">
          <LeadVehicleDetails vehicle={vehicle} />
          <section className="panel lead-context-card">
            <span className="eyebrow">Edit guidance</span>
            <h3>Lead workflow</h3>
            <div className="lead-step"><b>01</b><div><strong>Confirm customer</strong><span>Name, email and phone are correct.</span></div></div>
            <div className="lead-step"><b>02</b><div><strong>Confirm vehicle</strong><span>Make sure the enquiry is linked to the right vehicle.</span></div></div>
            <div className="lead-step"><b>03</b><div><strong>Update status</strong><span>Move the lead from New through the sales pipeline.</span></div></div>
            <div className="lead-note">Changes are saved directly to Supabase PHB when you submit the form.</div>
          </section>
        </aside>
      </div>
    ) : (
      <section className="panel"><ResourceForm resource={resource as any} action={updateRecord} record={record} cars={cars ?? []}/></section>
    )}

    <style jsx>{`
      .lead-edit-shell{display:grid;grid-template-columns:minmax(0,1fr) 350px;gap:20px;align-items:start}
      .lead-edit-context{display:grid;gap:20px;position:sticky;top:92px}
      .lead-edit-form-card{padding:0;overflow:hidden}
      .lead-edit-heading{display:flex;align-items:flex-start;justify-content:space-between;gap:18px;padding:22px 24px;border-bottom:1px solid #e5e7eb;background:#fff}
      .lead-edit-heading h2{margin:6px 0 0;font-size:22px;line-height:1.15;letter-spacing:-.03em;color:#111827}
      .lead-edit-heading p{margin:6px 0 0;max-width:640px;color:#6b7280;font-size:11px;line-height:1.6}
      .lead-id-badge{background:#111827;color:#fff;padding:8px 10px;font:700 10px/1 monospace;letter-spacing:.08em}
      .lead-edit-form-card :global(.form-grid){padding:24px}
      .lead-edit-form-card :global(.form-actions){position:sticky;bottom:0;z-index:5;display:flex;justify-content:flex-end;padding:16px 24px;background:rgba(247,248,249,.96);border-top:1px solid #e5e7eb;backdrop-filter:blur(8px);margin:0}
      .lead-edit-form-card :global(.form-actions .button){min-height:44px;padding:0 20px;background:#e65b1f;border-radius:0;text-transform:uppercase;letter-spacing:.08em;font-size:10px}
      .lead-context-card{padding:20px}
      .lead-context-card h3{margin:6px 0 0;font-size:15px;color:#111827}
      .lead-step{display:grid;grid-template-columns:28px 1fr;gap:10px;padding:14px 0;border-bottom:1px solid #edf0f2}
      .lead-step b{width:28px;height:28px;display:grid;place-items:center;background:#18212b;color:#fff;font-size:9px}
      .lead-step strong{display:block;color:#374151;font-size:11px}.lead-step span{display:block;margin-top:4px;color:#8a929d;font-size:9px;line-height:1.5}
      .lead-note{margin-top:14px;padding:11px 12px;background:#fff8e8;border:1px solid #f1dfb1;color:#8b6c26;font-size:9px;line-height:1.6}
      @media(max-width:1000px){.lead-edit-shell{grid-template-columns:1fr}.lead-edit-context{position:static;grid-template-columns:1fr 1fr}}
      @media(max-width:640px){.lead-edit-context{grid-template-columns:1fr}.lead-edit-heading{padding:18px;flex-direction:column}.lead-edit-form-card :global(.form-grid){padding:18px}.lead-edit-form-card :global(.form-actions){padding:12px 18px}.lead-edit-form-card :global(.form-actions .button){width:100%}}
    `}</style>
  </>
}
