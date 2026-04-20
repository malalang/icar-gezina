import { createClient } from '@/utils/supabase/server';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export async function updateCar(id: string, formData: FormData) {
  'use server';
  const supabase = await createClient();

  const make = formData.get('make') as string;
  const model = formData.get('model') as string;
  const year = parseInt(formData.get('year') as string);
  const price = parseInt(formData.get('price') as string);
  const mileage = parseInt(formData.get('mileage') as string);
  const fuel_type = formData.get('fuelType') as string;
  const transmission = formData.get('transmission') as string;
  const body_type = formData.get('bodyType') as string;
  const color = formData.get('color') as string;
  const image_url = formData.get('imageUrl') as string;
  const description = formData.get('description') as string;

  const { error } = await supabase.from('cars').update({
    make,
    model,
    year,
    price,
    mileage,
    fuel_type,
    transmission,
    body_type,
    color,
    image_url,
    description
  }).eq('id', id);

  if (error) {
    console.error('Failed to update car:', error);
    throw new Error('Failed to update car');
  }

  revalidatePath('/admin/cars');
  revalidatePath(`/cars/${id}`);
  revalidatePath('/cars');
  redirect('/admin/cars');
}
