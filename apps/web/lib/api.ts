import { getSupabase } from './supabase';
import { mockCars, globalTestimonials, Car, Testimonial } from './mock-data';

export async function getCars(): Promise<Car[]> {
  const supabase = getSupabase();
  
  if (supabase) {
    try {
      const { data, error } = await supabase
        .from('cars')
        .select(`
          *,
          parts:car_parts(*),
          reviews:car_reviews(*)
        `)
        .order('created_at', { ascending: false });

      if (error) throw error;
      
      if (data && data.length > 0) {
        return data.map((car: any) => ({
          ...car,
          fuelType: car.fuel_type,
          bodyType: car.body_type,
          imageUrl: car.image_url,
          galleryUrls: car.gallery_urls,
        })) as Car[];
      }
    } catch (e: any) {
      console.warn(`Supabase fetch failed (cars): ${e.message || 'Unknown error'}. Falling back to mock data.`);
    }
  }
  
  return mockCars;
}

export async function getFeaturedCars(): Promise<Car[]> {
  const cars = await getCars();
  return cars.slice(0, 3);
}

export async function getCarById(id: string): Promise<Car | undefined> {
  const supabase = getSupabase();

  if (supabase) {
    try {
      const { data, error } = await supabase
        .from('cars')
        .select(`
          *,
          parts:car_parts(*),
          reviews:car_reviews(*)
        `)
        .eq('id', id)
        .single();

      if (error && error.code !== 'PGRST116') throw error;
      if (data) {
        return {
          ...data,
          fuelType: data.fuel_type,
          bodyType: data.body_type,
          imageUrl: data.image_url,
          galleryUrls: data.gallery_urls,
        } as Car;
      }
    } catch (e: any) {
      console.warn(`Supabase fetch failed for car ID ${id}: ${e.message || 'Unknown error'}. Falling back to mock data.`);
    }
  }

  return mockCars.find(c => c.id === id);
}

export interface Lead {
  id: string;
  name: string;
  email: string;
  phone: string;
  type: string;
  message: string;
  preferred_date?: string;
  status: string;
  created_at: string;
  car?: {
    make: string;
    model: string;
  };
}

export async function getLeads(): Promise<Lead[]> {
  const supabase = getSupabase();
  if (supabase) {
    try {
      const { data, error } = await supabase
        .from('leads')
        .select(`
          *,
          car:car_id(make, model)
        `)
        .order('created_at', { ascending: false });

      if (error) throw error;
      if (data) return data;
    } catch (e: any) {
      console.warn(`Supabase fetch failed (leads): ${e.message || 'Unknown error'}. Falling back to empty array.`);
    }
  }
  return [];
}

/**
 * Public testimonials are database content. The homepage must not silently
 * fall back to demo testimonials: Supabase PHB is the source of truth.
 */
export async function getTestimonials(): Promise<Testimonial[]> {
  const supabase = getSupabase();
  if (!supabase) {
    console.warn('Supabase is not configured; returning no testimonials.');
    return [];
  }

  try {
    const { data, error } = await supabase
      .from('testimonials')
      .select('id, author, role, content, avatar, created_at')
      .order('created_at', { ascending: false });

    if (error) throw error;
    return (data ?? []) as Testimonial[];
  } catch (e: any) {
    console.warn(`Supabase fetch failed (testimonials): ${e.message || 'Unknown error'}.`);
    return [];
  }
}
