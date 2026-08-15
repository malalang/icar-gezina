import { createClient } from '@/utils/supabase/server'

export interface Lead {
  id: string
  name: string
  email: string
  phone: string
  type: string
  message: string
  preferred_date?: string
  status: string
  created_at: string
  car?: { make: string; model: string }
}

export async function getCars() {
  const supabase = await createClient()
  const { data, error } = await supabase
    .from('cars')
    .select('*, parts:car_parts(*), reviews:car_reviews(*)')
    .order('created_at', { ascending: false })

  if (error) throw error
  return (data ?? []).map((car: any) => ({
    ...car,
    fuelType: car.fuel_type,
    bodyType: car.body_type,
    imageUrl: car.image_url,
    galleryUrls: car.gallery_urls ?? [],
  }))
}

export async function getCarById(id: string) {
  const supabase = await createClient()
  const { data, error } = await supabase
    .from('cars')
    .select('*, parts:car_parts(*), reviews:car_reviews(*)')
    .eq('id', id)
    .single()

  if (error) throw error
  return data
}

export async function getLeads(): Promise<Lead[]> {
  const supabase = await createClient()
  const { data, error } = await supabase
    .from('leads')
    .select('*, car:car_id(make, model)')
    .order('created_at', { ascending: false })

  if (error) throw error
  return (data ?? []) as Lead[]
}

export async function getTestimonials() {
  const supabase = await createClient()
  const { data, error } = await supabase
    .from('testimonials')
    .select('*')
    .order('created_at', { ascending: false })

  if (error) throw error
  return data ?? []
}
