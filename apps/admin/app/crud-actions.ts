'use server'

import { redirect } from 'next/navigation'
import { requireAdmin } from '@icar-gezina/supabase/server'

const tableFor = (resource:string) => ({leads:'leads',reviews:'car_reviews',testimonials:'testimonials','car-parts':'car_parts',articles:'articles'} as Record<string,string>)[resource]
const allowed = new Set(Object.keys({leads:'leads',reviews:'car_reviews',testimonials:'testimonials','car-parts':'car_parts',articles:'articles'}))
const text = (fd: FormData, name: string) => String(fd.get(name) ?? '').trim()
const nullable = (fd: FormData, name: string) => text(fd, name) || null
const bool = (fd: FormData, name: string) => fd.get(name) === 'on' || fd.get(name) === 'true'
const int = (fd: FormData, name: string) => { const value = Number(fd.get(name)); return Number.isFinite(value) ? value : 0 }

async function client(resource: string) {
  if (!allowed.has(resource)) throw new Error('Unsupported resource')
  const ctx = await requireAdmin()
  if (!ctx.user || !ctx.profile) throw new Error('Unauthorized')
  return ctx.supabase
}

function payload(resource: string, fd: FormData): Record<string, unknown> {
  if (resource === 'leads') return { car_id: nullable(fd,'car_id'), type: text(fd,'type'), name: text(fd,'name'), email: text(fd,'email'), phone: text(fd,'phone'), preferred_date: nullable(fd,'preferred_date'), message: nullable(fd,'message'), status: text(fd,'status') || 'New' }
  if (resource === 'reviews') return { car_id: text(fd,'car_id'), author: text(fd,'author'), rating: Math.max(1, Math.min(5, int(fd,'rating'))), comment: text(fd,'comment'), date: text(fd,'date') || null }
  if (resource === 'testimonials') return { author: text(fd,'author'), role: text(fd,'role'), content: text(fd,'content'), avatar: text(fd,'avatar') }
  if (resource === 'car-parts') return { car_id: text(fd,'car_id'), name: text(fd,'name'), condition: text(fd,'condition'), description: text(fd,'description') }
  return { title: text(fd,'title'), slug: text(fd,'slug').toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/(^-|-$)/g,''), excerpt: nullable(fd,'excerpt'), content: text(fd,'content'), category: nullable(fd,'category'), cover_image_url: nullable(fd,'cover_image_url'), published: bool(fd,'published'), published_at: nullable(fd,'published_at') }
}

export async function createRecord(formData: FormData) {
  const resource = text(formData,'resource')
  const supabase = await client(resource)
  const { data, error } = await supabase.from(tableFor(resource)).insert(payload(resource, formData) as any).select('id').single()
  if (error) throw new Error(error.message)
  redirect(`/${resource}/${data.id}`)
}

export async function updateRecord(formData: FormData) {
  const resource = text(formData,'resource')
  const id = text(formData,'id')
  const supabase = await client(resource)
  const { error } = await supabase.from(tableFor(resource)).update(payload(resource, formData) as any).eq('id', id)
  if (error) throw new Error(error.message)
  redirect(`/${resource}/${id}`)
}

export async function deleteRecord(formData: FormData) {
  const resource = text(formData,'resource')
  const id = text(formData,'id')
  const supabase = await client(resource)
  const { error } = await supabase.from(tableFor(resource)).delete().eq('id', id)
  if (error) throw new Error(error.message)
  redirect(`/${resource}`)
}
