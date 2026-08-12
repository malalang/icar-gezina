import Image from 'next/image';
import Link from 'next/link';
import { WhatsAppButton } from '@/components/WhatsAppButton';

const navigation = [
  { href: '/', label: 'Home' },
  { href: '/cars', label: 'Showroom' },
  { href: '/finance', label: 'Finance' },
  { href: '/articles', label: 'Articles' },
  { href: '/contact', label: 'Contact Us' },
];

function TikTokIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-current">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.16V2h-3.74v13.58a2.89 2.89 0 1 1-2-2.75V9.06a6.63 6.63 0 1 0 5.74 6.52V8.26a8.52 8.52 0 0 0 4.99 1.61V6.15c-.42 0-.83-.04-1.22-.12Z" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 fill-current">
      <path d="M6.62 10.79a15.46 15.46 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24c1.12.37 2.33.56 3.57.56a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.94 21 3 13.06 3 3a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.19 2.45.56 3.57a1 1 0 0 1-.25 1.02l-2.19 2.2Z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 fill-none stroke-current" strokeWidth="1.8">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 6.75A2.25 2.25 0 0 1 5.25 4.5h13.5A2.25 2.25 0 0 1 21 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 17.25V6.75Z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="m3.75 6 7.03 5.27a2 2 0 0 0 2.44 0L20.25 6" />
    </svg>
  );
}

function MapPinIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 fill-none stroke-current" strokeWidth="1.8">
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 5.25-7.5 10.5-7.5 10.5S4.5 15.75 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
      <circle cx="12" cy="10.5" r="2.25" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-none stroke-current" strokeWidth="1.8">
      <rect x="3.5" y="3.5" width="17" height="17" rx="4" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.6" cy="6.7" r="0.8" className="fill-current stroke-none" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-current">
      <path d="M13.5 21v-8h2.7l.4-3h-3.1V8.08c0-.87.24-1.46 1.5-1.46h1.7V3.94c-.3-.04-1.33-.14-2.54-.14-2.51 0-4.23 1.53-4.23 4.35V10H7v3h2.93v8h3.57Z" />
    </svg>
  );
}

export default function ClientLayout({children}: {children: React.ReactNode}) {
  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      <header className="absolute inset-x-0 top-0 z-50 w-full border-b border-white/20 bg-black/10 text-white backdrop-blur-md supports-[backdrop-filter]:bg-black/5">
        <div className="max-w-7xl mx-auto min-h-[86px] px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-5">
          <Link href="/" aria-label="ICar Gezina home" className="group shrink-0 flex items-center">
            <Image src="/iCAR-LOGO.png" alt="ICar Gezina" width={220} height={60} priority className="h-auto w-[160px] sm:w-[190px] object-contain drop-shadow-[0_2px_8px_rgba(0,0,0,0.35)]" />
          </Link>

          <nav aria-label="Main navigation" className="hidden lg:flex items-center gap-7 xl:gap-9 h-full">
            {navigation.map(({href, label}) => (
              <Link key={href} href={href} className="relative h-[86px] flex items-center text-[13px] font-semibold tracking-wide text-white/90 transition-colors hover:text-white after:absolute after:left-0 after:right-0 after:bottom-0 after:h-[2px] after:scale-x-0 after:bg-white after:transition-transform after:origin-center hover:after:scale-x-100">
                {label}
              </Link>
            ))}
          </nav>

          <div className="hidden sm:flex items-center gap-2.5 shrink-0">
            <a href="tel:0123295560" aria-label="Call ICar Gezina" className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur-sm transition hover:bg-white/20 hover:border-white/50"><PhoneIcon /></a>
            <a href="https://www.tiktok.com/" target="_blank" rel="noopener noreferrer" aria-label="ICar Gezina on TikTok" className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur-sm transition hover:bg-white/20 hover:border-white/50 hover:scale-105"><TikTokIcon /></a>
            <Link href="/cars" className="ml-1 inline-flex items-center justify-center rounded-full bg-white px-5 py-2.5 text-xs font-bold uppercase tracking-[0.08em] text-slate-900 shadow-lg transition hover:bg-slate-100 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent">Browse Cars</Link>
          </div>

          <details className="lg:hidden relative">
            <summary className="list-none cursor-pointer rounded-full border border-white/30 bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/20 [&::-webkit-details-marker]:hidden">Menu</summary>
            <div className="absolute right-0 top-12 w-72 rounded-2xl border border-white/20 bg-slate-950/95 p-2 shadow-2xl backdrop-blur-xl">
              <nav aria-label="Mobile navigation" className="flex flex-col">
                {navigation.map(({href, label}) => <Link key={href} href={href} className="rounded-xl px-4 py-3 text-sm font-semibold text-white/90 transition hover:bg-white/10 hover:text-white">{label}</Link>)}
                <div className="mt-2 flex gap-2 border-t border-white/10 pt-2">
                  <a href="https://www.tiktok.com/" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-white hover:bg-white/20"><TikTokIcon /></a>
                  <Link href="/cars" className="flex flex-1 items-center justify-center rounded-xl bg-white px-4 py-3 text-xs font-bold uppercase tracking-[0.08em] text-slate-900 transition hover:bg-slate-100">Browse Cars</Link>
                </div>
              </nav>
            </div>
          </details>
        </div>
      </header>

      <main className="flex-1 flex flex-col">{children}</main>

      <footer className="relative overflow-hidden border-t border-white/10 bg-[#282828] text-slate-300 shrink-0">
        <div className="pointer-events-none absolute inset-0 opacity-40 [background:radial-gradient(circle_at_85%_10%,rgba(232,117,26,0.16),transparent_28%),radial-gradient(circle_at_10%_90%,rgba(0,114,188,0.12),transparent_30%)]" />

        <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
          <div className="grid gap-12 lg:grid-cols-[1.45fr_1fr_1fr_1.25fr]">
            <div className="max-w-sm">
              <Link href="/" aria-label="ICar Gezina home" className="inline-flex">
                <Image src="/iCAR-LOGO.png" alt="ICar Gezina" width={220} height={60} className="h-auto w-[175px] object-contain" />
              </Link>
              <div className="mt-5 h-0.5 w-12 bg-[#E8751A]" />
              <p className="mt-5 text-sm leading-7 text-white/60">
                Your trusted destination for quality pre-owned vehicles in Gezina. Find your next car, explore our showroom and let us help you drive away with confidence.
              </p>
              <Link href="/cars" className="mt-7 inline-flex items-center rounded-full bg-[#E8751A] px-6 py-3 text-xs font-bold uppercase tracking-[0.12em] text-white shadow-lg shadow-black/20 transition hover:-translate-y-0.5 hover:bg-[#F28A2E] focus:outline-none focus:ring-2 focus:ring-[#E8751A] focus:ring-offset-2 focus:ring-offset-[#282828]">
                Explore Our Vehicles
              </Link>
            </div>

            <div>
              <h2 className="text-xs font-bold uppercase tracking-[0.18em] text-white">Vehicles</h2>
              <div className="mt-5 space-y-3 text-sm">
                <Link href="/cars" className="block transition hover:text-[#F28A2E]">New Arrivals</Link>
                <Link href="/cars" className="block transition hover:text-[#F28A2E]">Featured Cars</Link>
                <Link href="/cars?type=SUV" className="block transition hover:text-[#F28A2E]">SUVs</Link>
                <Link href="/cars?type=Bakkie" className="block transition hover:text-[#F28A2E]">Bakkies</Link>
                <Link href="/cars?type=Hatchback" className="block transition hover:text-[#F28A2E]">Hatchbacks</Link>
              </div>
            </div>

            <div>
              <h2 className="text-xs font-bold uppercase tracking-[0.18em] text-white">Useful Links</h2>
              <div className="mt-5 space-y-3 text-sm">
                <Link href="/" className="block transition hover:text-[#F28A2E]">Home</Link>
                <Link href="/cars" className="block transition hover:text-[#F28A2E]">Showroom</Link>
                <Link href="/finance" className="block transition hover:text-[#F28A2E]">Finance</Link>
                <Link href="/articles" className="block transition hover:text-[#F28A2E]">Articles</Link>
                <Link href="/testimonials" className="block transition hover:text-[#F28A2E]">Customer Reviews</Link>
                <Link href="/contact" className="block transition hover:text-[#F28A2E]">Contact Us</Link>
              </div>
            </div>

            <div>
              <h2 className="text-xs font-bold uppercase tracking-[0.18em] text-white">Visit ICar Gezina</h2>
              <div className="mt-5 space-y-4 text-sm">
                <a href="tel:0123295560" className="group flex items-start gap-3 transition hover:text-white"><span className="mt-0.5 text-[#E8751A]"><PhoneIcon /></span><span><span className="block text-white/40 text-xs uppercase tracking-wider">Call us</span><span className="mt-1 block">012 329 5560</span></span></a>
                <a href="mailto:sales@icargezina.co.za" className="group flex items-start gap-3 transition hover:text-white"><span className="mt-0.5 text-[#E8751A]"><MailIcon /></span><span><span className="block text-white/40 text-xs uppercase tracking-wider">Email</span><span className="mt-1 block break-all">sales@icargezina.co.za</span></span></a>
                <a href="https://maps.google.com/?q=ICar+Gezina" target="_blank" rel="noopener noreferrer" className="group flex items-start gap-3 transition hover:text-white"><span className="mt-0.5 text-[#E8751A]"><MapPinIcon /></span><span><span className="block text-white/40 text-xs uppercase tracking-wider">Showroom</span><span className="mt-1 block">Gezina, Pretoria</span></span></a>
              </div>

              <div className="mt-7 flex items-center gap-2">
                <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" aria-label="ICar Gezina on Facebook" className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/70 transition hover:border-[#E8751A]/60 hover:bg-[#E8751A] hover:text-white"><FacebookIcon /></a>
                <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="ICar Gezina on Instagram" className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/70 transition hover:border-[#E8751A]/60 hover:bg-[#E8751A] hover:text-white"><InstagramIcon /></a>
                <a href="https://www.tiktok.com/" target="_blank" rel="noopener noreferrer" aria-label="ICar Gezina on TikTok" className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/70 transition hover:border-[#E8751A]/60 hover:bg-[#E8751A] hover:text-white"><TikTokIcon /></a>
              </div>
            </div>
          </div>

          <div className="mt-12 border-t border-white/10 pt-7">
            <div className="flex flex-col gap-4 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
              <p>© {new Date().getFullYear()} ICar Gezina. All rights reserved.</p>
              <div className="flex flex-wrap gap-x-6 gap-y-2">
                <Link href="/privacy" className="transition hover:text-white">Privacy Policy</Link>
                <Link href="/terms" className="transition hover:text-white">Terms & Conditions</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <WhatsAppButton />
    </div>
  );
}