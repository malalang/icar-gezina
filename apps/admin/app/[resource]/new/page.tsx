import Link from 'next/link'
import { notFound, redirect } from 'next/navigation'
import { requireAdmin } from '@icar-gezina/supabase/server'
import { getResource } from '../../resource-config'
import { createRecord } from '../../crud-actions'
import { ResourceForm } from '../../resource-form'

const valid = new Set(['leads','reviews','testimonials','car-parts','articles'])

export default async function NewResourcePage({ params }: { params: Promise<{ resource:string }> }) {
  const { user, profile, supabase } = await requireAdmin()
  if (!user) redirect('/admin/login')
  if (!profile) redirect('/admin/unauthorized')
  const { resource } = await params
  const config = getResource(resource)
  if (!config || !valid.has(resource)) notFound()
  const { data: cars } = await supabase.from('cars').select('id,make,model,year').order('make').order('model')
  return <>
    <div className="page-header"><div><Link href={`/${resource}`} className="topbar-link">← Back</Link><h1>New {config.label.slice(0,-1)}</h1><p>Create a new record in Supabase PHB.</p></div></div>
    <section className="panel"><ResourceForm resource={resource as any} action={createRecord} cars={cars ?? []}/></section>
  </>
}
