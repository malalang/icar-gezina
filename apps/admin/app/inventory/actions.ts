'use server'

import { redirect } from 'next/navigation'
import { requireAdmin } from '@icar-gezina/supabase/server'

const text = (formData: FormData, name: string) => String(formData.get(name) ?? '').trim()
const number = (formData: FormData, name: string) => Number(formData.get(name) ?? 0)
const array = (formData: FormData, name: string) => text(formData, name).split('\n').map(v => v.trim()).filter(Boolean)

async function adminClient() {
  const ctx = await requireAdmin()
  if (!ctx.user || !ctx.profile) throw new Error('Unauthorized')
  return ctx.supabase
}

export async function createVehicle(formData: FormData) {
  const supabase = await adminClient()
  const { data, error } = await supabase.from('cars').insert({
    make: text(formData,'make'), model: text(formData,'model'), year: number(formData,'year'), price: number(formData,'price'), mileage: number(formData,'mileage'), fuel_type: text(formData,'fuelType'), transmission: text(formData,'transmission'), body_type: text(formData,'bodyType'), color: text(formData,'color'), image_url: text(formData,'imageUrl'), gallery_urls: array(formData,'galleryUrls'), description: text(formData,'description'), features: array(formData,'features'),
  }).select('id').single()
  if (error) throw new Error(error.message)
  redirect(`/inventory/${data.id}/edit`)
}

export async function updateVehicle(formData: FormData) {
  const supabase = await adminClient()
  const id = text(formData,'id')
  const { error } = await supabase.from('cars').update({
    make: text(formData,'make'), model: text(formData,'model'), year: number(formData,'year'), price: number(formData,'price'), mileage: number(formData,'mileage'), fuel_type: text(formData,'fuelType'), transmission: text(formData,'transmission'), body_type: text(formData,'bodyType'), color: text(formData,'color'), image_url: text(formData,'imageUrl'), gallery_urls: array(formData,'galleryUrls'), description: text(formData,'description'), features: array(formData,'features'),
  }).eq('id', id)
  if (error) throw new Error(error.message)
  redirect('/inventory')
}

export async function deleteVehicle(formData: FormData) {
  const supabase = await adminClient()
  const id = text(formData,'id')
  const { error } = await supabase.from('cars').delete().eq('id', id)
  if (error) throw new Error(error.message)
  redirect('/inventory')
}
