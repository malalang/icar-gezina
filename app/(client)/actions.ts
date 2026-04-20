'use server';

import { createClient } from '@/utils/supabase/server';

export async function submitLead(formData: FormData) {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  if (!supabaseUrl || supabaseUrl === 'YOUR_SUPABASE_URL' || supabaseUrl === '""') {
    // If running with mock data, just fake standard success.
    await new Promise(r => setTimeout(r, 800));
    return { success: true };
  }

  const supabase = await createClient();
  const type = formData.get('type') as string;
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const phone = formData.get('phone') as string;
  const message = formData.get('message') as string;
  const carId = formData.get('carId') as string | null;
  const preferredDate = formData.get('preferredDate') as string | null;

  const { error } = await supabase.from('leads').insert({
    type,
    name,
    email,
    phone,
    message,
    car_id: carId || null,
    preferred_date: preferredDate || null,
  });

  if (error) {
    console.error('Failed to submit lead:', error);
    return { success: false, error: error.message };
  }

  return { success: true };
}
