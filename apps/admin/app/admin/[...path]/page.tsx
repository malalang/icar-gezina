import { redirect } from 'next/navigation'

const redirects: Record<string,string> = {
  dashboard:'/dashboard',
  inventory:'/inventory',
  leads:'/leads',
  reviews:'/reviews',
  testimonials:'/testimonials',
  'car-parts':'/car-parts',
  articles:'/articles',
  settings:'/settings',
}

export default async function LegacyAdminRoute({ params }: { params: Promise<{ path:string[] }> }) {
  const { path } = await params
  const key = path.join('/')
  if (redirects[key]) redirect(redirects[key])
  redirect('/dashboard')
}
