'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  BarChart3,
  CarFront,
  FileText,
  Inbox,
  LayoutDashboard,
  MessageSquareQuote,
  Settings,
  ShieldCheck,
  Users,
  Wrench,
} from 'lucide-react'
import type { ReactNode } from 'react'

const navigation = [
  { href: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { href: '/inventory', label: 'Vehicles', icon: CarFront },
  { href: '/leads', label: 'Leads', icon: Inbox },
  { href: '/reviews', label: 'Reviews', icon: MessageSquareQuote },
  { href: '/testimonials', label: 'Testimonials', icon: Users },
  { href: '/car-parts', label: 'Car Parts', icon: Wrench },
  { href: '/articles', label: 'Articles', icon: FileText },
]

export function AdminShell({ children }: { children: ReactNode }) {
  const pathname = usePathname()

  return (
    <div className="admin-app">
      <aside className="sidebar">
        <div className="brand">
          <div className="brand-mark">iC</div>
          <div>
            <strong>ICar Gezina</strong>
            <span>Administration</span>
          </div>
        </div>

        <div className="sidebar-section-label">Operations</div>
        <nav className="nav-list" aria-label="Admin navigation">
          {navigation.map(({ href, label, icon: Icon }) => {
            const active = pathname === href || pathname.startsWith(`${href}/`)
            return (
              <Link key={href} href={href} className={`nav-item ${active ? 'active' : ''}`}>
                <Icon size={18} strokeWidth={1.9} />
                <span>{label}</span>
              </Link>
            )
          })}
        </nav>

        <div className="sidebar-spacer" />
        <div className="sidebar-section-label">System</div>
        <Link href="/settings" className={`nav-item ${pathname.startsWith('/settings') ? 'active' : ''}`}>
          <Settings size={18} strokeWidth={1.9} />
          <span>Settings</span>
        </Link>
        <div className="admin-badge">
          <ShieldCheck size={18} />
          <div>
            <strong>Admin access</strong>
            <span>Protected workspace</span>
          </div>
        </div>
      </aside>

      <div className="admin-main">
        <header className="topbar">
          <div>
            <span className="eyebrow">ICar Gezina</span>
            <span className="topbar-title">Dealership workspace</span>
          </div>
          <div className="topbar-actions">
            <Link href="/inventory" className="topbar-link">View showroom</Link>
            <div className="avatar">A</div>
          </div>
        </header>
        <main className="content">{children}</main>
      </div>
    </div>
  )
}
