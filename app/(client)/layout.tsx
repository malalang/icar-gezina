import Link from 'next/link';
import { WhatsAppButton } from '@/components/WhatsAppButton';

export default function ClientLayout({children}: {children: React.ReactNode}) {
  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-4 md:px-8 shrink-0 z-50 sticky top-0">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center text-white font-bold">I</div>
              <span className="text-xl font-bold tracking-tight text-slate-800 uppercase">Icar<span className="text-blue-600">gezina</span></span>
            </Link>
          </div>
          <nav className="hidden md:flex gap-8 text-sm font-medium text-slate-600">
            <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
            <Link href="/cars" className="hover:text-blue-600 transition-colors">Inventory</Link>
            <Link href="/testimonials" className="hover:text-blue-600 transition-colors">Testimonials</Link>
            <Link href="/faq" className="hover:text-blue-600 transition-colors">FAQ</Link>
            <Link href="/contact" className="hover:text-blue-600 transition-colors">Contact Us</Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/cars" className="px-5 py-2 bg-slate-900 text-white rounded-md text-sm font-semibold hover:bg-slate-800 transition">
              Browse Cars
            </Link>
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