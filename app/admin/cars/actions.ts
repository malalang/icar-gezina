'use server';

'use server';

import { createClient } from '@/utils/supabase/server';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export async function deleteCar(formData: FormData) {
  const id = formData.get('id') as string;
  const supabase = await createClient();
  
  const { error } = await supabase.from('cars').delete().eq('id', id);
  
  if (error) {
    console.error('Failed to delete car:', error);
    throw new Error('Failed to delete car');
  }

  revalidatePath('/admin/cars');
  revalidatePath('/cars');
}

export async function createCar(formData: FormData) {
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
  // Features and gallery normally complex, setting static defaults for quick prototyping
  const features = ['Air Conditioning', 'Power Steering', 'Bluetooth'];
  const gallery_urls = [image_url];

  const { data, error } = await supabase.from('cars').insert({
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
    description,
    features,
    gallery_urls
  }).select().single();

  if (error) {
    console.error('Failed to create car:', error);
    throw new Error('Failed to create car');
  }

  revalidatePath('/admin/cars');
  revalidatePath('/cars');
  redirect('/admin/cars');
}
