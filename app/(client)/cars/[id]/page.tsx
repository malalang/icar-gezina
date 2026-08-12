import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, CheckCircle2, ChevronRight, Gauge, Fuel, ShieldCheck, Star, Tag, Settings2, CarFront } from 'lucide-react';
import { getCarById } from '@/lib/api';
import { CarLeadForms } from '@/components/CarLeadForms';

export default async function CarDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const car = await getCarById(id);

  if (!car) notFound();

  return (
    <main className="min-h-screen bg-[#f4f4f2] pb-20 text-[#292929]">
      {/* Breadcrumb / page trail */}
      <div className="border-b border-black/5 bg-white pt-[86px]">
        <div className="mx-auto flex max-w-7xl items-center gap-2 px-4 py-4 text-xs sm:px-6 lg:px-8">
          <Link href="/cars" className="inline-flex items-center gap-1.5 font-semibold text-black/45 transition hover:text-[#E8751A]">
            <ArrowLeft className="h-3.5 w-3.5" /> Showroom
          </Link>
          <ChevronRight className="h-3.5 w-3.5 text-black/20" />
          <span className="truncate text-black/60">{car.year} {car.make} {car.model}</span>
        </div>
      </div>

      {/* Vehicle heading */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-7 sm:px-6 lg:px-8 lg:py-9">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-full bg-[#E8751A] px-3 py-1 text-[9px] font-bold uppercase tracking-[0.16em] text-white">Available</span>
                <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-black/35">ICar Gezina Showroom</span>
              </div>
              <h1 className="mt-3 max-w-4xl text-3xl font-bold tracking-[-0.035em] text-[#242424] sm:text-4xl lg:text-5xl">
                {car.year} {car.make} {car.model}
              </h1>
              <p className="mt-2 text-sm text-black/45">Quality pre-owned vehicle • Ready for its next owner</p>
            </div>
            <div className="lg:text-right">
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-black/35">Asking price</p>
              <p className="mt-1 text-3xl font-black tracking-tight text-[#242424] sm:text-4xl">R {car.price.toLocaleString()}</p>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 pt-6 sm:px-6 lg:px-8 lg:pt-8">
        <div className="grid grid-cols-1 gap-7 lg:grid-cols-[minmax(0,1.65fr)_minmax(340px,0.8fr)]">
          {/* Main vehicle content */}
          <div className="space-y-6">
            {/* Gallery */}
            <section className="overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm">
              <div className="relative aspect-[16/9] min-h-[300px] overflow-hidden bg-[#222] sm:min-h-[430px]">
                <Image
                  src={car.imageUrl}
                  alt={`${car.make} ${car.model}`}
                  fill
                  className="object-cover"
                  referrerPolicy="no-referrer"
                  priority
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/5" />
                <div className="absolute bottom-5 left-5 flex items-center gap-2 rounded-full bg-black/55 px-3 py-2 text-[10px] font-semibold text-white backdrop-blur-sm">
                  <CarFront className="h-3.5 w-3.5 text-[#F28A2E]" /> Vehicle gallery
                </div>
              </div>

              {car.galleryUrls.length > 0 && (
                <div className="grid grid-cols-4 gap-2 p-2 sm:grid-cols-5 lg:grid-cols-6">
                  {car.galleryUrls.map((url, idx) => (
                    <div key={idx} className="group relative aspect-[4/3] overflow-hidden rounded-lg bg-[#e8e8e6]">
                      <Image
                        src={url}
                        alt={`${car.make} ${car.model} view ${idx + 1}`}
                        fill
                        className="object-cover transition duration-500 group-hover:scale-105"
                        referrerPolicy="no-referrer"
                        unoptimized
                      />
                    </div>
                  ))}
                </div>
              )}
            </section>

            {/* Key specification strip */}
            <section className="grid grid-cols-2 overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm sm:grid-cols-4">
              <div className="flex items-center gap-3 border-b border-black/5 p-4 sm:border-b-0 sm:border-r">
                <Gauge className="h-5 w-5 text-[#E8751A]" />
                <div><p className="text-[9px] font-bold uppercase tracking-wider text-black/35">Mileage</p><p className="mt-1 text-sm font-bold">{car.mileage.toLocaleString()} km</p></div>
              </div>
              <div className="flex items-center gap-3 border-b border-black/5 p-4 sm:border-b-0 sm:border-r">
                <Settings2 className="h-5 w-5 text-[#E8751A]" />
                <div><p className="text-[9px] font-bold uppercase tracking-wider text-black/35">Transmission</p><p className="mt-1 text-sm font-bold">{car.transmission}</p></div>
              </div>
              <div className="flex items-center gap-3 border-r border-black/5 p-4">
                <Fuel className="h-5 w-5 text-[#E8751A]" />
                <div><p className="text-[9px] font-bold uppercase tracking-wider text-black/35">Fuel</p><p className="mt-1 text-sm font-bold">{car.fuelType}</p></div>
              </div>
              <div className="flex items-center gap-3 p-4">
                <Tag className="h-5 w-5 text-[#E8751A]" />
                <div><p className="text-[9px] font-bold uppercase tracking-wider text-black/35">Body</p><p className="mt-1 text-sm font-bold">{car.bodyType}</p></div>
              </div>
            </section>

            {/* Description */}
            <section className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm sm:p-7">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#E8751A]">About this vehicle</p>
              <h2 className="mt-2 text-2xl font-bold tracking-tight text-[#292929]">Vehicle overview</h2>
              <p className="mt-4 text-sm leading-7 text-black/55">{car.description}</p>
            </section>

            {/* Features */}
            <section className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm sm:p-7">
              <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-end">
                <div><p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#E8751A]">Specifications</p><h2 className="mt-2 text-2xl font-bold tracking-tight">Features & equipment</h2></div>
                <span className="text-xs text-black/35">{car.features.length} listed features</span>
              </div>
              <div className="mt-6 grid gap-x-8 gap-y-3 sm:grid-cols-2">
                {car.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 border-b border-black/5 pb-3 text-sm text-black/65">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#E8751A]" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Inspection */}
            <section className="rounded-2xl border border-black/5 bg-[#292929] p-6 text-white shadow-sm sm:p-7">
              <div className="flex flex-col gap-4 border-b border-white/10 pb-5 sm:flex-row sm:items-center sm:justify-between">
                <div><p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#F28A2E]">Vehicle confidence</p><h2 className="mt-2 text-2xl font-bold">Vehicle health check</h2></div>
                <div className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-[9px] font-bold uppercase tracking-[0.14em] text-white/60"><ShieldCheck className="h-4 w-4 text-[#F28A2E]" /> 116-point inspection</div>
              </div>
              <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {car.parts.map((part, idx) => (
                  <div key={idx} className="rounded-xl border border-white/10 bg-white/[0.04] p-4">
                    <div className="flex items-center justify-between gap-3">
                      <span className="text-[9px] font-bold uppercase tracking-[0.14em] text-white/40">{part.name}</span>
                      <span className={`text-[10px] font-bold ${part.condition === 'Excellent' ? 'text-emerald-400' : part.condition === 'Good' ? 'text-sky-400' : 'text-amber-400'}`}>{part.condition}</span>
                    </div>
                    <p className="mt-2 text-xs leading-5 text-white/55">{part.description}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Reviews */}
            <section className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm sm:p-7">
              <div className="flex items-end justify-between gap-4">
                <div><p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#E8751A]">Customer experience</p><h2 className="mt-2 text-2xl font-bold tracking-tight">Reviews</h2></div>
                {car.reviews.length > 0 && <span className="inline-flex items-center gap-1 text-sm font-bold"><Star className="h-4 w-4 fill-current text-[#E8751A]" /> {car.reviews[0].rating}/5</span>}
              </div>
              {car.reviews.length === 0 ? (
                <div className="mt-6 rounded-xl bg-[#f5f5f3] p-6 text-center"><p className="text-sm text-black/45">No reviews for this specific vehicle yet.</p></div>
              ) : (
                <div className="mt-6 grid gap-4 md:grid-cols-2">
                  {car.reviews.map((review) => (
                    <article key={review.id} className="rounded-xl border border-black/5 bg-[#f7f7f5] p-5">
                      <div className="flex gap-1 text-[#E8751A]">{[...Array(5)].map((_, i) => <Star key={i} className={`h-3.5 w-3.5 ${i < review.rating ? 'fill-current' : 'text-black/15'}`} />)}</div>
                      <p className="mt-3 text-sm leading-6 text-black/60">“{review.comment}”</p>
                      <div className="mt-4 flex items-center justify-between border-t border-black/5 pt-3 text-[10px] font-bold uppercase tracking-wider"><span>{review.author}</span><span className="text-black/30">{new Date(review.date).toLocaleDateString()}</span></div>
                    </article>
                  ))}
                </div>
              )}
            </section>
          </div>

          {/* Enquiry sidebar */}
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <div className="overflow-hidden rounded-2xl border border-black/5 bg-[#292929] text-white shadow-xl">
              <div className="border-b border-white/10 p-6 sm:p-7">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#F28A2E]">Interested in this vehicle?</p>
                <h2 className="mt-2 text-2xl font-bold">Make an enquiry</h2>
                <p className="mt-2 text-sm leading-6 text-white/45">Talk to our team about this vehicle, arrange a viewing or request finance options.</p>
              </div>

              <div className="bg-white p-5 text-[#292929] sm:p-6">
                <div className="mb-5 rounded-xl bg-[#f5f5f3] p-4">
                  <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-black/35">Vehicle</p>
                  <p className="mt-1 font-bold">{car.year} {car.make} {car.model}</p>
                  <p className="mt-1 text-xl font-black">R {car.price.toLocaleString()}</p>
                </div>
                <CarLeadForms carId={car.id} />
              </div>

              <div className="flex items-center gap-3 border-t border-white/10 px-6 py-4 text-xs text-white/50">
                <ShieldCheck className="h-5 w-5 shrink-0 text-[#F28A2E]" />
                <span>Buy with confidence from ICar Gezina.</span>
              </div>
            </div>

            <Link href="/cars" className="mt-4 flex items-center justify-between rounded-xl border border-black/10 bg-white px-5 py-4 text-xs font-bold uppercase tracking-wider text-[#292929] shadow-sm transition hover:border-[#E8751A]/40 hover:text-[#E8751A]">
              <span className="inline-flex items-center gap-2"><ArrowLeft className="h-4 w-4" /> Browse more vehicles</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </aside>
        </div>
      </div>
    </main>
  );
}
