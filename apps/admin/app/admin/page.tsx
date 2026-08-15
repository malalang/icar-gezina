import { redirect } from 'next/navigation'
import { requireAdmin } from '@icar-gezina/supabase/server'

export default async function AdminHomePage() {
  const { user, profile } = await requireAdmin()
  if (!user) redirect('/admin/login')
  if (!profile) redirect('/admin/unauthorized')
  redirect('/dashboard')
}
