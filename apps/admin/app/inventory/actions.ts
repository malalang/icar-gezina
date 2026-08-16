'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { requireAdmin } from '@icar-gezina/supabase/server'

const text = (formData: FormData, name: string) => String(formData.get(name) ?? '').trim()
const number = (formData: FormData, name: string) => {
  const value = Number(formData.get(name) ?? 0)
  return Number.isFinite(value) ? value : 0
}
const array = (formData: FormData, name: string) => text(formData, name).split('\n').map(v => v.trim()).filter(Boolean)

async function adminClient() {
  const ctx = await requireAdmin()
  if (!ctx.user || !ctx.profile) throw new Error('Unauthorized')
  return ctx.supabase
}

function validateVehicle(formData: FormData) {
  const make = text(formData, 'make')
  const model = text(formData, 'model')
  const year = number(formData, 'year')
  const price = number(formData, 'price')
  const mileage = number(formData, 'mileage')

  if (!make || !model) throw new Error('Make and model are required.')
  if (year < 1900 || year > new Date().getFullYear() + 1) throw new Error('Please enter a valid vehicle year.')
  if (price < 0) throw new Error('Price cannot be negative.')
  if (mileage < 0) throw new Error('Mileage cannot be negative.')
}

export async function createVehicle(formData: FormData) {
  const supabase = await adminClient()
  validateVehicle(formData)

  const { data, error } = await supabase.from('cars').insert({
    make: text(formData, 'make'),
    model: text(formData, 'model'),
    year: number(formData, 'year'),
    price: number(formData, 'price'),
    mileage: number(formData, 'mileage'),
    fuel_type: text(formData, 'fuelType'),
    transmission: text(formData, 'transmission'),
    body_type: text(formData, 'bodyType'),
    color: text(formData, 'color'),
    image_url: text(formData, 'imageUrl'),
    gallery_urls: array(formData, 'galleryUrls'),
    description: text(formData, 'description'),
    features: array(formData, 'features'),
  }).select('id').single()

  if (error) throw new Error(error.message)

  revalidatePath('/inventory')
  revalidatePath(`/inventory/${data.id}`)
  revalidatePath(`/inventory/${data.id}/edit`)
  redirect(`/inventory/${data.id}/edit`)
}

export async function updateVehicle(formData: FormData) {
  const supabase = await adminClient()
  validateVehicle(formData)

  const id = text(formData, 'id')
  if (!id) throw new Error('Vehicle ID is missing. Please reopen the edit page and try again.')

  const { data, error } = await supabase.from('cars').update({
    make: text(formData, 'make'),
    model: text(formData, 'model'),
    year: number(formData, 'year'),
    price: number(formData, 'price'),
    mileage: number(formData, 'mileage'),
    fuel_type: text(formData, 'fuelType'),
    transmission: text(formData, 'transmission'),
    body_type: text(formData, 'bodyType'),
    color: text(formData, 'color'),
    image_url: text(formData, 'imageUrl'),
    gallery_urls: array(formData, 'galleryUrls'),
    description: text(formData, 'description'),
    features: array(formData, 'features'),
  }).eq('id', id).select('id').maybeSingle()

  if (error) throw new Error(error.message)
  if (!data) throw new Error('Vehicle was not found or could not be updated.')

  revalidatePath('/inventory')
  revalidatePath(`/inventory/${id}`)
  revalidatePath(`/inventory/${id}/edit`)
  revalidatePath('/', 'layout')
  redirect(`/inventory/${id}`)
}

export async function deleteVehicle(formData: FormData) {
  const supabase = await adminClient()
  const id = text(formData, 'id')
  if (!id) throw new Error('Vehicle ID is missing.')

  const { error } = await supabase.from('cars').delete().eq('id', id)
  if (error) throw new Error(error.message)

  revalidatePath('/inventory')
  revalidatePath(`/inventory/${id}`)
  redirect('/inventory')
}
