import { getSupabase } from './supabase';
import { Car, Testimonial } from './mock-data';

function mapCar(car: any): Car {
  return {
    ...car,
    fuelType: car.fuel_type,
    bodyType: car.body_type,
    imageUrl: car.image_url,
    galleryUrls: car.gallery_urls ?? [],
    parts: car.parts ?? [],
    reviews: car.reviews ?? [],
  } as Car;
}

export async function getCars(): Promise<Car[]> {
  const supabase = getSupabase();
  if (!supabase) throw new Error('Supabase is not configured.');
  const { data, error } = await supabase.from('cars').select('*, parts:car_parts(*), reviews:car_reviews(*)').order('created_at', { ascending: false });
  if (error) throw new Error(`Unable to load vehicles: ${error.message}`);
  return (data ?? []).map(mapCar);
}

export async function getFeaturedCars(): Promise<Car[]> {
  return (await getCars()).slice(0, 3);
}

export async function getCarById(id: string): Promise<Car | undefined> {
  const supabase = getSupabase();
  if (!supabase) throw new Error('Supabase is not configured.');
  const { data, error } = await supabase.from('cars').select('*, parts:car_parts(*), reviews:car_reviews(*)').eq('id', id).maybeSingle();
  if (error) throw new Error(`Unable to load vehicle: ${error.message}`);
  return data ? mapCar(data) : undefined;
}

export interface Lead { id:string; name:string; email:string; phone:string; type:string; message:string; preferred_date?:string; status:string; created_at:string; car?:{make:string;model:string}; }

export async function getLeads(): Promise<Lead[]> {
  const supabase = getSupabase();
  if (!supabase) return [];
  const { data, error } = await supabase.from('leads').select('*, car:car_id(make, model)').order('created_at', { ascending: false });
  if (error) throw new Error(`Unable to load leads: ${error.message}`);
  return data ?? [];
}

export async function getTestimonials(): Promise<Testimonial[]> {
  const supabase = getSupabase();
  if (!supabase) throw new Error('Supabase is not configured.');
  const { data, error } = await supabase.from('testimonials').select('*').order('created_at', { ascending: false });
  if (error) throw new Error(`Unable to load testimonials: ${error.message}`);
  return (data ?? []) as Testimonial[];
}
