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

export default function ClientLayout({children}: {children: React.ReactNode}) {
  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      <header className="absolute inset-x-0 top-0 z-50 w-full border-b border-white/20 bg-black/10 text-white backdrop-blur-md supports-[backdrop-filter]:bg-black/5">
        <div className="max-w-7xl mx-auto min-h-[86px] px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-5">
          <Link href="/" aria-label="ICar Gezina home" className="group shrink-0 flex items-center">
            <Image
              src="/iCAR-LOGO.png"
              alt="ICar Gezina"
              width={220}
              height={60}
              priority
              className="h-auto w-[160px] sm:w-[190px] object-contain drop-shadow-[0_2px_8px_rgba(0,0,0,0.35)]"
            />
          </Link>

          <nav aria-label="Main navigation" className="hidden lg:flex items-center gap-7 xl:gap-9 h-full">
            {navigation.map(({href, label}) => (
              <Link
                key={href}
                href={href}
                className="relative h-[86px] flex items-center text-[13px] font-semibold tracking-wide text-white/90 transition-colors hover:text-white after:absolute after:left-0 after:right-0 after:bottom-0 after:h-[2px] after:scale-x-0 after:bg-white after:transition-transform after:origin-center hover:after:scale-x-100"
              >
                {label}
              </Link>
            ))}
          </nav>

          <div className="hidden sm:flex items-center gap-2.5 shrink-0">
            <a
              href="tel:0123295560"
              aria-label="Call ICar Gezina"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur-sm transition hover:bg-white/20 hover:border-white/50"
            >
              <PhoneIcon />
            </a>
            <a
              href="https://www.tiktok.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="ICar Gezina on TikTok"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur-sm transition hover:bg-white/20 hover:border-white/50 hover:scale-105"
            >
              <TikTokIcon />
            </a>
            <Link
              href="/cars"
              className="ml-1 inline-flex items-center justify-center rounded-full bg-white px-5 py-2.5 text-xs font-bold uppercase tracking-[0.08em] text-slate-900 shadow-lg transition hover:bg-slate-100 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent"
            >
              Browse Cars
            </Link>
          </div>

          <details className="lg:hidden relative">
            <summary className="list-none cursor-pointer rounded-full border border-white/30 bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/20 [&::-webkit-details-marker]:hidden">
              Menu
            </summary>
            <div className="absolute right-0 top-12 w-72 rounded-2xl border border-white/20 bg-slate-950/95 p-2 shadow-2xl backdrop-blur-xl">
              <nav aria-label="Mobile navigation" className="flex flex-col">
                {navigation.map(({href, label}) => (
                  <Link
                    key={href}
                    href={href}
                    className="rounded-xl px-4 py-3 text-sm font-semibold text-white/90 transition hover:bg-white/10 hover:text-white"
                  >
                    {label}
                  </Link>
                ))}
                <div className="mt-2 flex gap-2 border-t border-white/10 pt-2">
                  <a
                    href="https://www.tiktok.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="TikTok"
                    className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-white hover:bg-white/20"
                  >
                    <TikTokIcon />
                  </a>
                  <Link
                    href="/cars"
                    className="flex flex-1 items-center justify-center rounded-xl bg-white px-4 py-3 text-xs font-bold uppercase tracking-[0.08em] text-slate-900 transition hover:bg-slate-100"
                  >
                    Browse Cars
                  </Link>
                </div>
              </nav>
            </div>
          </details>
        </div>
      </header>

      <main className="flex-1 flex flex-col">
        {children}
      </main>

      <footer className="bg-slate-900 text-slate-400 py-12 shrink-0">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="text-xl font-bold tracking-tight text-white uppercase mb-4">Icar<span className="text-blue-500">gezina</span></div>
            <p className="text-sm">Premium used vehicles with detailed specifications. Start your journey here.</p>
          </div>
          <div>
            <h4 className="text-white font-medium mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/cars" className="hover:text-white transition">All Cars</Link></li>
              <li><Link href="/testimonials" className="hover:text-white transition">Reviews</Link></li>
              <li><Link href="/admin" className="hover:text-amber-400 text-slate-500 transition">Admin Portal</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-medium mb-4">Support</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/contact" className="hover:text-white transition">Contact Us</Link></li>
              <li><Link href="/faq" className="hover:text-white transition">FAQ</Link></li>
              <li><Link href="#" className="hover:text-white transition">Terms of Service</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-medium mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>079 803 1852</li>
              <li>sales@icargezina.co.za</li>
              <li>123 Dealer Drive, Auto City</li>
            </ul>
          </div>
        </div>
      </footer>
      <WhatsAppButton />
    </div>
  );
}
