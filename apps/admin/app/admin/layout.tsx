import Link from 'next/link'
import { logout } from './actions'
import { createClient } from '@/utils/supabase/server'

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const supabase = await createClient()
  const { data } = await supabase.auth.getUser()
  return <div className="min-h-screen bg-slate-100"><aside className="fixed inset-y-0 w-64 bg-slate-900 text-white p-6"><Link href="/admin" className="text-xl font-bold">ICar Admin</Link><nav className="mt-8 space-y-2"><Link className="block" href="/admin">Dashboard</Link><Link className="block" href="/admin/cars">Inventory</Link><Link className="block" href="/admin/leads">Leads</Link></nav>{data.user && <form action={logout} className="mt-8"><button type="submit">Sign out</button></form>}</aside><main className="ml-64 p-8">{children}</main></div>
}
