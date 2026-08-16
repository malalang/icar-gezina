import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import './globals.css'
import './automotive-editor.css'
import { AdminShell } from './admin-shell'

export const metadata: Metadata = {
  title: 'ICar Gezina Admin',
  description: 'ICar Gezina dealership administration workspace',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <AdminShell>{children}</AdminShell>
      </body>
    </html>
  )
}
