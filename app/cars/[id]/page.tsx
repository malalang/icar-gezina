import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, Info, CheckCircle2, ShieldCheck, Star } from 'lucide-react';
import { mockCars } from '@/lib/mock-data';

// Using server component because we can static-generate or fetch per request easily.
export default async function CarDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const car = mockCars.find(c => c.id === id);

  if (!car) {
    notFound();
  }

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      {/* Top Banner / Breadcrumb */}
      <div className="bg-white border-b border-slate-200 pt-6 pb-6 shadow-sm sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <Link href="/cars" className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-800 mb-2 transition">
              <ChevronLeft className="w-4 h-4 mr-1" /> Back to Inventory
            </Link>
            <h1 className="text-3xl font-bold italic text-slate-900 leading-tight">
              {car.year} {car.make} {car.model}
            </h1>
          </div>
          <div className="text-left md:text-right">
            <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Asking Price</div>
            <div className="text-3xl font-black text-slate-900">R {car.price.toLocaleString()}</div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 pt-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Main Content (Images, Descriptions, Parts) */}
          <div className="col-span-1 lg:col-span-2 space-y-6">
            
            {/* Gallery */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-slate-200 p-2">
               <div className="relative h-[400px] w-full rounded-lg overflow-hidden bg-slate-200">
                  <Image 
                    src={car.imageUrl}
                    alt={`${car.make} ${car.model}`}
                    fill
                    className="object-cover"
                    referrerPolicy="no-referrer"
                    priority
                  />
               </div>
               <div className="flex gap-2 mt-2 overflow-x-auto pb-2">
                 {car.galleryUrls.map((url, idx) => (
                    <div key={idx} className="relative h-24 w-32 flex-shrink-0 rounded-md overflow-hidden cursor-pointer opacity-80 hover:opacity-100 transition border border-slate-200">
                       <Image 
                         src={url}
                         alt={`${car.make} - View ${idx + 1}`}
                         fill
                         className="object-cover"
                         referrerPolicy="no-referrer"
                       />
                    </div>
                 ))}
               </div>
            </div>

            {/* Description */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Detailed Description</h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                {car.description}
              </p>
            </div>

            {/* Features */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Features & Specifications</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                 {car.features.map((feature, idx) => (
                   <div key={idx} className="flex items-start text-sm text-slate-700">
                     <CheckCircle2 className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                     <span>{feature}</span>
                   </div>
                 ))}
              </div>
            </div>

            {/* Parts Condition View (Requested Feature) */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
              <div className="flex items-center justify-between mb-4 border-b border-slate-100 pb-3">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest">Vehicle Health Check</h4>
                <div className="text-[10px] font-bold text-slate-500">116-POINT INSPECTION</div>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {car.parts.map((part, idx) => (
                  <div key={idx} className="flex flex-col p-3 bg-slate-50 rounded border border-slate-100">
                    <span className={`text-xs font-black mb-1 ${
                      part.condition === 'Excellent' ? 'text-green-600' : 
                      part.condition === 'Good' ? 'text-blue-600' : 'text-yellow-600'
                    }`}>
                      {part.condition}
                    </span>
                    <span className="text-[9px] uppercase font-bold text-slate-500 mb-1">{part.name}</span>
                    <span className="text-xs italic text-slate-600 leading-tight">{part.description}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Customer Reviews Section */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Customer Reviews</h4>
              
              {car.reviews.length === 0 ? (
                <p className="text-slate-500 italic text-sm">No reviews for this specific vehicle yet. Be the first to review after purchase!</p>
              ) : (
                <div className="space-y-4">
                  {car.reviews.map(review => (
                    <div key={review.id} className="bg-slate-900 text-white rounded-xl p-5 border border-slate-800 shadow-sm">
                      <div className="flex gap-1 mb-2 text-yellow-400">
                         {[...Array(5)].map((_, i) => (
                           <span key={i} className={i < review.rating ? '' : 'text-slate-700'}>★</span>
                         ))}
                      </div>
                      <p className="text-xs italic text-slate-300 mb-3">&quot;{review.comment}&quot;</p>
                      <div className="flex justify-between items-center mt-2 border-t border-slate-800 pt-2">
                        <div className="text-[10px] font-bold text-white uppercase">— {review.author}</div>
                        <div className="text-[10px] text-slate-500">{new Date(review.date).toLocaleDateString()}</div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

          </div>
          
          {/* Sidebar (Quick Details & CTA) */}
          <div className="col-span-1">
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 sticky top-48">
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Quick Details</h4>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="border-r border-slate-100">
                  <span className="text-[10px] font-bold text-slate-400 uppercase block">Make</span>
                  <span className="text-sm font-bold text-slate-700 italic">{car.make}</span>
                </div>
                <div>
                  <span className="text-[10px] font-bold text-slate-400 uppercase block">Model</span>
                  <span className="text-sm font-bold text-slate-700 italic">{car.model}</span>
                </div>
                <div className="border-r border-slate-100 pt-4 border-t border-slate-100">
                  <span className="text-[10px] font-bold text-slate-400 uppercase block">Year</span>
                  <span className="text-sm font-bold text-slate-700 italic">{car.year}</span>
                </div>
                <div className="pt-4 border-t border-slate-100">
                  <span className="text-[10px] font-bold text-slate-400 uppercase block">Mileage</span>
                  <span className="text-sm font-bold text-slate-700 italic">{car.mileage.toLocaleString()} KM</span>
                </div>
                <div className="border-r border-slate-100 pt-4 border-t border-slate-100">
                  <span className="text-[10px] font-bold text-slate-400 uppercase block">Transmission</span>
                  <span className="text-sm font-bold text-slate-700 italic">{car.transmission}</span>
                </div>
                <div className="pt-4 border-t border-slate-100">
                  <span className="text-[10px] font-bold text-slate-400 uppercase block">Fuel Type</span>
                  <span className="text-sm font-bold text-slate-700 italic">{car.fuelType}</span>
                </div>
                <div className="border-r border-slate-100 pt-4 border-t border-slate-100">
                  <span className="text-[10px] font-bold text-slate-400 uppercase block">Body Type</span>
                  <span className="text-sm font-bold text-slate-700 italic">{car.bodyType}</span>
                </div>
                <div className="pt-4 border-t border-slate-100">
                  <span className="text-[10px] font-bold text-slate-400 uppercase block">Color</span>
                  <span className="text-sm font-bold text-slate-700 italic">{car.color}</span>
                </div>
              </div>
              
              <div className="space-y-3">
                <button className="w-full bg-blue-600 text-white font-bold rounded-lg py-3 text-sm shadow-lg shadow-blue-200">
                  Enquire Now
                </button>
                <button className="w-full bg-slate-100 text-slate-900 font-bold rounded-lg py-3 text-sm transition hover:bg-slate-200">
                  Book a Test Drive
                </button>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-center text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                <ShieldCheck className="w-4 h-4 mr-1 text-blue-600" />
                Auto Market Certified
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
