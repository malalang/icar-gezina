'use server';

import { createClient } from '@/utils/supabase/server';
import { revalidatePath } from 'next/cache';

export async function updateLeadStatus(formData: FormData) {
  const id = formData.get('id') as string;
  const status = formData.get('status') as string;
  const supabase = await createClient();
  
  const { error } = await supabase.from('leads').update({ status }).eq('id', id);
  if (error) console.error('Error updating lead:', error);
  revalidatePath('/admin/leads');
}

export async function deleteLead(formData: FormData) {
  const id = formData.get('id') as string;
  const supabase = await createClient();
  
  const { error } = await supabase.from('leads').delete().eq('id', id);
  if (error) console.error('Error deleting lead:', error);
  revalidatePath('/admin/leads');
}
