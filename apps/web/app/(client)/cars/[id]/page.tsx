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
    <main className="min-h-screen bg-[#2b2b2b] pb-20 text-white">
      {/* Vehicle hero — follows the ICar Gezina product-page presentation */}
      <section className="relative isolate min-h-[345px] overflow-hidden bg-[#202020] pt-[86px] sm:min-h-[380px]">
        <Image
          src={car.imageUrl}
          alt={`${car.make} ${car.model}`}
          fill
          priority
          unoptimized
          referrerPolicy="no-referrer"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/40 to-black/45" />
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/45 to-transparent" />

        <div className="relative mx-auto flex min-h-[259px] max-w-7xl items-end px-4 pb-10 sm:px-6 lg:px-8 lg:pb-12">
          <div className="grid w-full items-end gap-8 lg:grid-cols-[1fr_auto_auto] lg:gap-12">
            <div className="min-w-0">
              <Link href="/cars" className="mb-5 inline-flex items-center gap-1.5 text-xs font-medium text-white/65 transition hover:text-white">
                <ArrowLeft className="h-3.5 w-3.5" /> Showroom
              </Link>
              <h1 className="max-w-3xl text-3xl font-bold leading-tight tracking-[-0.025em] text-white sm:text-4xl lg:text-[42px]">
                {car.year} {car.make} {car.model}
              </h1>
            </div>

            <div className="lg:pb-1">
              <p className="text-[10px] font-medium text-white/75">Price</p>
              <p className="mt-1 text-2xl font-bold tracking-tight text-white sm:text-3xl">R {car.price.toLocaleString()}</p>
            </div>

            <Link
              href="/cars"
              className="inline-flex h-12 items-center justify-center rounded-xl bg-[#12a8b8] px-5 text-sm font-medium text-white shadow-lg shadow-black/20 transition hover:bg-[#0f98a7] hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-[#12a8b8] focus:ring-offset-2 focus:ring-offset-black/20 lg:mb-0.5"
            >
              Explore Our Showroom
            </Link>
          </div>
        </div>
      </section>

      {/* Product tabs */}
      <nav aria-label="Vehicle sections" className="border-b border-[#12a8b8]/70 bg-[#737477]">
        <div className="mx-auto flex max-w-7xl items-center justify-center gap-0 px-4 sm:px-6 lg:px-8">
          <a href="#vehicle" className="relative flex min-w-[150px] justify-center px-6 py-5 text-sm font-medium text-white after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 after:bg-[#E8751A]">Vehicle</a>
          <a href="#finance" className="flex min-w-[150px] justify-center px-6 py-5 text-sm font-medium text-white/85 transition hover:text-white">Vehicle Finance</a>
        </div>
      </nav>

      <div id="vehicle" className="mx-auto max-w-7xl px-4 pt-8 sm:px-6 lg:px-8 lg:pt-10">
        {/* Key vehicle facts */}
        <section className="mb-7 flex flex-wrap items-center gap-x-10 gap-y-4 text-sm font-bold text-white">
          <div className="flex items-center gap-3">
            <Gauge className="h-6 w-6 text-[#F28A2E]" />
            <span>{car.mileage.toLocaleString()} Km</span>
          </div>
          <div className="flex items-center gap-3">
            <Settings2 className="h-6 w-6 text-[#F28A2E]" />
            <span>{car.transmission}</span>
          </div>
          <div className="flex items-center gap-3">
            <Fuel className="h-6 w-6 text-[#F28A2E]" />
            <span>{car.fuelType}</span>
          </div>
          <div className="flex items-center gap-3">
            <Tag className="h-6 w-6 text-[#F28A2E]" />
            <span>{car.color}</span>
          </div>
        </section>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,1.65fr)_minmax(340px,0.8fr)]">
          <div className="space-y-6">
            {/* Gallery */}
            <section className="overflow-hidden rounded-xl bg-[#242424] shadow-sm">
              <div className="relative aspect-[16/9] min-h-[300px] overflow-hidden bg-[#202020] sm:min-h-[430px]">
                <Image
                  src={car.imageUrl}
                  alt={`${car.make} ${car.model}`}
                  fill
                  className="object-cover"
                  referrerPolicy="no-referrer"
                  priority
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-full bg-black/55 px-3 py-2 text-[10px] font-semibold text-white backdrop-blur-sm">
                  <CarFront className="h-3.5 w-3.5 text-[#F28A2E]" /> Vehicle gallery
                </div>
              </div>

              {car.galleryUrls.length > 0 && (
                <div className="grid grid-cols-4 gap-2 p-2 sm:grid-cols-5 lg:grid-cols-6">
                  {car.galleryUrls.map((url, idx) => (
                    <div key={idx} className="group relative aspect-[4/3] overflow-hidden rounded-lg bg-[#333]">
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

            {/* Description */}
            <section className="rounded-xl border border-white/10 bg-[#333333] p-6 shadow-sm sm:p-7">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#F28A2E]">About this vehicle</p>
              <h2 className="mt-2 text-2xl font-bold tracking-tight text-white">Vehicle overview</h2>
              <p className="mt-4 text-sm leading-7 text-white/65">{car.description}</p>
            </section>

            {/* Features */}
            <section className="rounded-xl border border-white/10 bg-[#333333] p-6 shadow-sm sm:p-7">
              <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-end">
                <div><p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#F28A2E]">Specifications</p><h2 className="mt-2 text-2xl font-bold tracking-tight">Features & equipment</h2></div>
                <span className="text-xs text-white/40">{car.features.length} listed features</span>
              </div>
              <div className="mt-6 grid gap-x-8 gap-y-3 sm:grid-cols-2">
                {car.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 border-b border-white/10 pb-3 text-sm text-white/70">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#F28A2E]" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Inspection */}
            <section className="rounded-xl border border-white/10 bg-[#242424] p-6 text-white shadow-sm sm:p-7">
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
            <section className="rounded-xl border border-white/10 bg-[#333333] p-6 shadow-sm sm:p-7">
              <div className="flex items-end justify-between gap-4">
                <div><p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#F28A2E]">Customer experience</p><h2 className="mt-2 text-2xl font-bold tracking-tight">Reviews</h2></div>
                {car.reviews.length > 0 && <span className="inline-flex items-center gap-1 text-sm font-bold"><Star className="h-4 w-4 fill-current text-[#F28A2E]" /> {car.reviews[0].rating}/5</span>}
              </div>
              {car.reviews.length === 0 ? (
                <div className="mt-6 rounded-xl bg-white/5 p-6 text-center"><p className="text-sm text-white/45">No reviews for this specific vehicle yet.</p></div>
              ) : (
                <div className="mt-6 grid gap-4 md:grid-cols-2">
                  {car.reviews.map((review) => (
                    <article key={review.id} className="rounded-xl border border-white/10 bg-white/5 p-5">
                      <div className="flex gap-1 text-[#F28A2E]">{[...Array(5)].map((_, i) => <Star key={i} className={`h-3.5 w-3.5 ${i < review.rating ? 'fill-current' : 'text-white/15'}`} />)}</div>
                      <p className="mt-3 text-sm leading-6 text-white/60">“{review.comment}”</p>
                      <div className="mt-4 flex items-center justify-between border-t border-white/10 pt-3 text-[10px] font-bold uppercase tracking-wider"><span>{review.author}</span><span className="text-white/30">{new Date(review.date).toLocaleDateString()}</span></div>
                    </article>
                  ))}
                </div>
              )}
            </section>
          </div>

          {/* Enquiry sidebar */}
          <aside id="finance" className="lg:sticky lg:top-28 lg:self-start">
            <div className="overflow-hidden rounded-xl border border-black/5 bg-white text-[#292929] shadow-xl">
              <div className="border-b border-black/5 bg-white p-6 sm:p-7">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#E8751A]">Interested in this vehicle?</p>
                <h2 className="mt-2 text-2xl font-bold">Contact Us</h2>
                <p className="mt-2 text-sm leading-6 text-black/45">Talk to our team about this vehicle, arrange a viewing or request finance options.</p>
              </div>
              <div className="p-5 sm:p-6">
                <div className="mb-5 rounded-xl bg-[#eeeeee] p-4">
                  <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-black/35">Vehicle</p>
                  <p className="mt-1 font-bold">{car.year} {car.make} {car.model}</p>
                  <p className="mt-1 text-xl font-black">R {car.price.toLocaleString()}</p>
                </div>
                <CarLeadForms carId={car.id} />
              </div>
              <div className="flex items-center gap-3 border-t border-black/5 px-6 py-4 text-xs text-black/45">
                <ShieldCheck className="h-5 w-5 shrink-0 text-[#E8751A]" />
                <span>Buy with confidence from ICar Gezina.</span>
              </div>
            </div>

            <Link href="/cars" className="mt-4 flex items-center justify-between rounded-xl border border-white/10 bg-[#333333] px-5 py-4 text-xs font-bold uppercase tracking-wider text-white shadow-sm transition hover:border-[#E8751A]/50 hover:text-[#F28A2E]">
              <span className="inline-flex items-center gap-2"><ArrowLeft className="h-4 w-4" /> Browse more vehicles</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </aside>
        </div>
      </div>
    </main>
  );
}
