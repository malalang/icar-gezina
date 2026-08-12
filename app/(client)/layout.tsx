import Link from 'next/link';
import { WhatsAppButton } from '@/components/WhatsAppButton';

const navigation = [
  { href: '/', label: 'Home' },
  { href: '/cars', label: 'Showroom' },
  { href: '/finance', label: 'Finance' },
  { href: '/articles', label: 'Articles' },
  { href: '/contact', label: 'Contact Us' },
];

export default function ClientLayout({children}: {children: React.ReactNode}) {
  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      <header className="sticky top-0 z-50 w-full bg-white border-b border-slate-200 shadow-[0_2px_12px_rgba(15,23,42,0.06)]">
        <div className="max-w-7xl mx-auto h-[78px] px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-8">
          {/* ICar Gezina brand */}
          <Link href="/" aria-label="ICar Gezina home" className="group shrink-0 flex items-center">
            <span className="text-[27px] sm:text-[30px] font-black tracking-[-0.055em] leading-none text-slate-950">
              ICar<span className="text-blue-600"> Gezina</span>
            </span>
          </Link>

          {/* Desktop navigation - mirrors the live ICar Gezina structure */}
          <nav aria-label="Main navigation" className="hidden lg:flex items-center gap-8 xl:gap-10 h-full">
            {navigation.map(({href, label}) => (
              <Link
                key={href}
                href={href}
                className="relative h-full flex items-center text-[13px] font-semibold tracking-[0.01em] text-slate-700 transition-colors hover:text-blue-600 after:absolute after:left-0 after:right-0 after:bottom-0 after:h-[2px] after:scale-x-0 after:bg-blue-600 after:transition-transform after:origin-center hover:after:scale-x-100"
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* Primary CTA */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <Link
              href="/cars"
              className="inline-flex items-center justify-center rounded-md bg-blue-600 px-5 py-2.5 text-xs font-bold uppercase tracking-[0.08em] text-white shadow-sm transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Browse Cars
            </Link>
          </div>

          {/* Mobile navigation without requiring client-side state */}
          <details className="lg:hidden relative">
            <summary className="list-none cursor-pointer rounded-md border border-slate-200 px-3 py-2 text-sm font-semibold text-slate-700 hover:border-blue-300 hover:text-blue-600 [&::-webkit-details-marker]:hidden">
              Menu
            </summary>
            <div className="absolute right-0 top-12 w-64 rounded-xl border border-slate-200 bg-white p-2 shadow-xl">
              <nav aria-label="Mobile navigation" className="flex flex-col">
                {navigation.map(({href, label}) => (
                  <Link
                    key={href}
                    href={href}
                    className="rounded-lg px-4 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50 hover:text-blue-600"
                  >
                    {label}
                  </Link>
                ))}
                <Link
                  href="/cars"
                  className="mt-2 rounded-lg bg-blue-600 px-4 py-3 text-center text-xs font-bold uppercase tracking-[0.08em] text-white hover:bg-blue-700"
                >
                  Browse Cars
                </Link>
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
