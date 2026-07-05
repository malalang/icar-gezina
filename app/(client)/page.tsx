import Image from 'next/image';
import Link from 'next/link';
import { Search, ShieldCheck, Wrench, ThumbsUp, Star, ChevronRight } from 'lucide-react';
import { getFeaturedCars, getTestimonials } from '@/lib/api';

export default async function Home() {
  const featuredCars = await getFeaturedCars();
  const globalTestimonials = await getTestimonials();

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[600px] flex items-center justify-center overflow-hidden bg-slate-200">
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
        <Image 
          src="https://icargezina.co.za/wp-content/uploads/2025/05/1003_14989_I1.jpg" 
          alt="Premium luxury car" 
          fill 
          className="object-cover"
          referrerPolicy="no-referrer"
          priority
        />
        <div className="relative z-20 w-full max-w-7xl mx-auto px-4 flex flex-col items-center text-center">
          <h1 className="text-5xl md:text-7xl font-bold italic text-white mb-6">
            Find Your <span className="text-blue-500">Perfect</span> Drive
          </h1>
          <p className="text-xl text-slate-200 mb-10 max-w-2xl font-light">
            South Africa&apos;s trusted marketplace for certified, high-quality used vehicles. Every car undergoes a strict 116-point quality check.
          </p>
          
          {/* Quick Search Box */}
          <div className="bg-white p-5 rounded-xl w-full max-w-4xl shadow-sm border border-slate-200 flex flex-col md:flex-row gap-4">
            <div className="flex-1 text-left">
              <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Make</label>
              <select className="w-full h-10 bg-slate-50 border border-slate-200 rounded px-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 text-slate-900">
                <option value="">Any Make</option>
                <option value="Volkswagen">Volkswagen</option>
                <option value="Ford">Ford</option>
                <option value="Toyota">Toyota</option>
                <option value="Audi">Audi</option>
                <option value="BMW">BMW</option>
              </select>
            </div>
            <div className="flex-1 text-left">
              <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Max Price</label>
              <select className="w-full h-10 bg-slate-50 border border-slate-200 rounded px-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 text-slate-900">
                <option value="">Any Price</option>
                <option value="200000">R 200,000</option>
                <option value="400000">R 400,000</option>
                <option value="600000">R 600,000</option>
                <option value="800000">R 800,000+</option>
              </select>
            </div>
            <div className="flex-1 flex items-end">
              <Link href="/cars" className="w-full h-10 bg-blue-600 text-white rounded-lg flex items-center justify-center font-bold text-sm hover:bg-blue-700 transition shadow-lg shadow-blue-200">
                <Search className="w-4 h-4 mr-2" />
                Search Inventory
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Factors */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex flex-col items-center text-center p-6 bg-slate-50 rounded-xl border border-slate-200">
            <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded flex items-center justify-center mb-4">
              <ShieldCheck className="w-8 h-8" />
            </div>
            <h3 className="font-bold text-xl mb-2 text-slate-800 uppercase tracking-tight">Certified Quality</h3>
            <p className="text-slate-600 text-sm">Every vehicle undergoes a rigorous 116-point inspection before hitting our floor.</p>
          </div>
          <div className="flex flex-col items-center text-center p-6 bg-slate-50 rounded-xl border border-slate-200">
            <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded flex items-center justify-center mb-4">
              <Wrench className="w-8 h-8" />
            </div>
            <h3 className="font-bold text-xl mb-2 text-slate-800 uppercase tracking-tight">Transparent Parts View</h3>
            <p className="text-slate-600 text-sm">See the exact condition of engine, brakes, and tires online before you visit us.</p>
          </div>
          <div className="flex flex-col items-center text-center p-6 bg-slate-50 rounded-xl border border-slate-200">
            <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded flex items-center justify-center mb-4">
              <ThumbsUp className="w-8 h-8" />
            </div>
             <h3 className="font-bold text-xl mb-2 text-slate-800 uppercase tracking-tight">Hassle-Free Finance</h3>
            <p className="text-slate-600 text-sm">We work with all major banks to ensure you get the best possible rate.</p>
          </div>
        </div>
      </section>

      {/* Featured Vehicles */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-end mb-10">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold italic text-slate-900 mb-2">Featured Vehicles</h2>
              <p className="text-slate-600">Handpicked selections from our premium inventory.</p>
            </div>
            <Link href="/cars" className="hidden border-b-2 border-blue-600 text-blue-600 font-medium md:flex items-center hover:text-blue-800 transition">
              View All <ChevronRight className="w-4 h-4 ml-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredCars.map(car => (
              <Link href={`/cars/${car.id}`} key={car.id} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow group border border-slate-200 flex flex-col">
                <div className="relative h-56 w-full overflow-hidden bg-slate-200">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10 pointer-events-none"></div>
                  <Image src={car.imageUrl} alt={`${car.make} ${car.model}`} fill className="object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" unoptimized />
                  <div className="absolute bottom-4 left-4 z-20 flex flex-col text-white">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="px-2 py-0.5 bg-blue-600 text-[10px] font-bold rounded uppercase">Featured</span>
                      <span className="text-sm font-medium opacity-90">{car.year}</span>
                    </div>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="text-sm font-semibold text-blue-600 mb-1 uppercase tracking-wider">{car.make}</div>
                  <h3 className="font-bold text-2xl italic text-slate-900 mb-2">{car.model}</h3>
                  <div className="text-2xl font-black text-slate-900 mb-4">R {car.price.toLocaleString()}</div>
                  
                  <div className="mt-auto grid grid-cols-2 gap-4 border-t border-slate-100 pt-4">
                    <div className="border-r border-slate-100">
                       <span className="text-[10px] font-bold text-slate-400 uppercase block">Mileage</span>
                       <span className="text-sm font-bold text-slate-700 italic">{car.mileage.toLocaleString()} KM</span>
                    </div>
                    <div>
                       <span className="text-[10px] font-bold text-slate-400 uppercase block">Transmission</span>
                       <span className="text-sm font-bold text-slate-700 italic">{car.transmission}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          
          <div className="mt-8 flex justify-center md:hidden">
            <Link href="/cars" className="bg-blue-600 px-6 py-3 rounded-lg text-white font-bold text-sm">
              View All Inventory
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold italic text-slate-900 mb-4">What Our Clients Say</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">Hundreds of happy customers have found their perfect vehicle with us. Read their stories.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {globalTestimonials.map(testimonial => (
              <div key={testimonial.id} className="bg-slate-900 text-white rounded-xl p-6 border border-slate-800 shadow-sm flex flex-col relative">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Customer Testimonial</h4>
                <div className="flex gap-1 mb-3 text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
                <p className="text-sm italic text-slate-300 mb-6 flex-1 leading-relaxed">
                  &quot;{testimonial.content}&quot;
                </p>
                <div className="flex items-center gap-4 mt-auto">
                  <div className="relative w-10 h-10 rounded overflow-hidden bg-slate-800">
                    <Image 
                      src={testimonial.avatar} 
                      alt={testimonial.author} 
                      fill
                      className="object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div>
                    <div className="mt-2 text-[11px] font-bold text-white uppercase">— {testimonial.author}</div>
                    <div className="text-[10px] text-slate-500 uppercase tracking-widest">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
