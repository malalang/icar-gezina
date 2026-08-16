import { redirect } from 'next/navigation'
import { requireAdmin } from '@icar-gezina/supabase/server'

export default async function SettingsPage() {
  const { user, profile } = await requireAdmin()
  if (!user) redirect('/admin/login')
  if (!profile) redirect('/admin/unauthorized')
  return <>
    <div className="page-header"><div><h1>Settings</h1><p>Administrator and application configuration.</p></div></div>
    <div className="dashboard-grid">
      <section className="panel"><div className="panel-header"><div><h2>Administrator</h2><p>Authenticated Supabase profile.</p></div></div><div className="panel-body"><div className="detail-fields"><div><span>Username</span><strong>{profile.username}</strong></div><div><span>Admin access</span><strong>Enabled</strong></div><div><span>User ID</span><strong style={{overflowWrap:'anywhere'}}>{user.id}</strong></div></div></div></section>
      <section className="panel"><div className="panel-header"><div><h2>Data source</h2><p>Connected dealership database.</p></div></div><div className="panel-body"><p><strong>Supabase PHB</strong></p><p>Vehicles, leads, reviews, testimonials, inspections and articles are managed through the protected admin workspace.</p></div></section>
    </div>
  </>
}
