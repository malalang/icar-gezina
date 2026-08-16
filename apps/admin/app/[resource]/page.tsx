import Link from 'next/link'
import { notFound, redirect } from 'next/navigation'
import { Plus } from 'lucide-react'
import { requireAdmin } from '@icar-gezina/supabase/server'
import { getResource } from '../resource-config'
import { deleteRecord } from '../crud-actions'

const tableFor = (resource:string) => ({leads:'leads',reviews:'car_reviews',testimonials:'testimonials','car-parts':'car_parts',articles:'articles'} as Record<string,string>)[resource]

export default async function ResourceListPage({ params }: { params: Promise<{ resource:string }> }) {
  const { user, profile, supabase } = await requireAdmin()
  if (!user) redirect('/admin/login')
  if (!profile) redirect('/admin/unauthorized')
  const { resource } = await params
  const config = getResource(resource)
  const table = tableFor(resource)
  if (!config || !table) notFound()
  const { data, error } = await supabase.from(table).select('*').order('created_at', { ascending:false })

  return <>
    <div className="page-header"><div><h1>{config.label}</h1><p>{config.description}</p></div><Link href={`/${resource}/new`} className="button"><Plus size={16}/> Add {resource === 'articles' ? 'article' : resource === 'leads' ? 'lead' : resource === 'reviews' ? 'review' : resource === 'testimonials' ? 'testimonial' : 'part'}</Link></div>
    {error && <section className="panel"><strong>Unable to load records.</strong><p>{error.message}</p></section>}
    <div className="table-wrap"><table><thead><tr>{config.columns.map(c=><th key={c}>{c.replaceAll('_',' ')}</th>)}<th>Actions</th></tr></thead><tbody>
      {(data ?? []).map((row:any)=><tr key={row.id}>{config.columns.map(c=><td key={c}>{c === 'created_at' || c === 'published_at' ? (row[c] ? new Date(row[c]).toLocaleString('en-ZA') : '—') : c === 'published' ? (row[c] ? 'Published' : 'Draft') : String(row[c] ?? '—').slice(0,120)}</td>)}<td><div style={{display:'flex',gap:8}}><Link href={`/${resource}/${row.id}`} className="button secondary" style={{padding:'8px 10px'}}>View</Link><Link href={`/${resource}/${row.id}/edit`} className="button secondary" style={{padding:'8px 10px'}}>Edit</Link><form action={deleteRecord}><input type="hidden" name="resource" value={resource}/><input type="hidden" name="id" value={row.id}/><button className="button danger" style={{padding:'8px 10px'}} type="submit">Delete</button></form></div></td></tr>)}
      {!error && !data?.length && <tr><td colSpan={config.columns.length+1}><div className="empty-state">No {config.label.toLowerCase()} found.</div></td></tr>}
    </tbody></table></div>
  </>
}
