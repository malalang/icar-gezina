import Link from 'next/link'
import { ArrowUpRight, CarFront, Inbox, Plus, TrendingUp, Users } from 'lucide-react'

const activities = [
  { title: 'Vehicle enquiry received', subtitle: 'BMW X3 xDrive20d M Sport', time: '12 min ago', icon: Inbox },
  { title: 'Inventory updated', subtitle: 'Mercedes-Benz C200 AMG Line', time: '42 min ago', icon: CarFront },
  { title: 'New customer lead', subtitle: 'Finance application · Pretoria', time: '1 hr ago', icon: Users },
]

export default function DashboardPage() {
  return (
    <>
      <div className="page-header">
        <div>
          <h1>Dashboard</h1>
          <p>Keep track of your showroom, customer enquiries and dealership activity.</p>
        </div>
        <Link href="/inventory/new" className="button"><Plus size={16} /> Add vehicle</Link>
      </div>

      <section className="stats" aria-label="Dealership overview">
        <article className="stat-card"><div className="stat-label">Active vehicles</div><div className="stat-value">—</div><div className="stat-meta"><strong>Live inventory</strong> · connected to Supabase</div></article>
        <article className="stat-card"><div className="stat-label">New leads</div><div className="stat-value">—</div><div className="stat-meta">Awaiting database connection</div></article>
        <article className="stat-card"><div className="stat-label">Vehicles sold</div><div className="stat-value">—</div><div className="stat-meta">Reporting will use dealership data</div></article>
        <article className="stat-card"><div className="stat-label">Conversion rate</div><div className="stat-value">—</div><div className="stat-meta"><TrendingUp size={12} style={{ verticalAlign: 'middle', marginRight: 4 }} />Analytics ready</div></article>
      </section>

      <div className="dashboard-grid">
        <section className="panel">
          <div className="panel-header"><h2>Recent activity</h2><Link href="/leads">View all <ArrowUpRight size={12} style={{ verticalAlign: 'middle' }} /></Link></div>
          <div className="panel-body">
            {activities.map(({ title, subtitle, time, icon: Icon }) => (
              <div className="activity-row" key={title}>
                <div className="activity-icon"><Icon size={17} /></div>
                <div><div className="activity-title">{title}</div><div className="activity-subtitle">{subtitle}</div></div>
                <div className="activity-time">{time}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="panel">
          <div className="panel-header"><h2>Quick actions</h2></div>
          <div className="panel-body quick-actions">
            <Link href="/inventory/new" className="quick-action"><CarFront size={18} /><div><strong>Add vehicle</strong><span>Create a new showroom listing</span></div></Link>
            <Link href="/leads" className="quick-action"><Inbox size={18} /><div><strong>Review leads</strong><span>Follow up customer enquiries</span></div></Link>
            <Link href="/articles" className="quick-action"><TrendingUp size={18} /><div><strong>Manage content</strong><span>Keep the dealership site current</span></div></Link>
          </div>
        </section>
      </div>
    </>
  )
}
