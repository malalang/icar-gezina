import Link from 'next/link'
import { notFound, redirect } from 'next/navigation'
import { Pencil, Trash2 } from 'lucide-react'
import { requireAdmin } from '@icar-gezina/supabase/server'
import { getResource } from '../../resource-config'
import { deleteRecord } from '../../crud-actions'

const tableFor = (resource:string) => ({leads:'leads',reviews:'car_reviews',testimonials:'testimonials','car-parts':'car_parts',articles:'articles'} as Record<string,string>)[resource]
const human = (value:string) => value.replaceAll('_',' ').replace(/\b\w/g, c => c.toUpperCase())

export default async function ResourceDetailPage({ params }: { params: Promise<{ resource:string; id:string }> }) {
  const { user, profile, supabase } = await requireAdmin()
  if (!user) redirect('/admin/login')
  if (!profile) redirect('/admin/unauthorized')
  const { resource, id } = await params
  const config = getResource(resource)
  const table = tableFor(resource)
  if (!config || !table) notFound()
  const { data: record } = await supabase.from(table).select('*').eq('id', id).maybeSingle()
  if (!record) notFound()
  return <>
    <div className="page-header"><div><Link href={`/${resource}`} className="topbar-link">← Back to {config.label}</Link><h1>{config.label.slice(0,-1)} details</h1><p>Record ID: {id}</p></div><div style={{display:'flex',gap:8}}><Link href={`/${resource}/${id}/edit`} className="button"><Pencil size={16}/> Edit</Link><form action={deleteRecord}><input type="hidden" name="resource" value={resource}/><input type="hidden" name="id" value={id}/><button className="button danger" type="submit"><Trash2 size={16}/> Delete</button></form></div></div>
    <section className="panel"><div className="detail-fields">{Object.entries(record).map(([key,value])=><div key={key}><span>{human(key)}</span><strong style={{whiteSpace:'pre-wrap',overflowWrap:'anywhere'}}>{key.endsWith('_at') && value ? new Date(String(value)).toLocaleString('en-ZA') : Array.isArray(value) ? value.join(', ') : typeof value === 'boolean' ? (value ? 'Yes' : 'No') : String(value ?? '—')}</strong></div>)}</div></section>
  </>
}
