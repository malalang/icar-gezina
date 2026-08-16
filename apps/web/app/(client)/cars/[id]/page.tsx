import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Gauge,
  Fuel,
  ShieldCheck,
  Star,
  Tag,
  Settings2,
  CarFront,
  Info,
  CircleCheck,
} from 'lucide-react';
import { getCarById } from '@/lib/api';
import { CarLeadForms } from '@/components/CarLeadForms';

function titleCase(value: string) {
  return value
    .trim()
    .replace(/\s+/g, ' ')
    .replace(/\b\w/g, (letter) => letter.toUpperCase());
}

export default async function CarDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const car = await getCarById(id);

  if (!car) notFound();

  const vehicleName = `${car.year} ${car.make} ${car.model}`;

  const specifications = [
    ['Make', car.make],
    ['Model', car.model],
    ['Year', String(car.year)],
    ['Mileage', `${car.mileage.toLocaleString()} Km`],
    ['Fuel type', car.fuelType],
    ['Transmission', car.transmission],
    ['Body type', car.bodyType],
    ['Colour', car.color],
  ];

  const overviewFacts = [
    { label: 'Year', value: String(car.year) },
    { label: 'Mileage', value: `${car.mileage.toLocaleString()} Km` },
    { label: 'Fuel', value: car.fuelType },
    { label: 'Transmission', value: car.transmission },
    { label: 'Body type', value: car.bodyType },
    { label: 'Colour', value: car.color },
  ];

  const features = Array.from(
    new Set((car.features ?? []).map((feature) => feature?.trim()).filter(Boolean)),
  );

  const healthChecks = (car.parts ?? []).filter(
    (part) => part?.name?.trim() && part?.condition?.trim(),
  );

  const conditionClass = (condition: string) => {
    switch (condition.toLowerCase()) {
      case 'excellent':
        return 'border-emerald-400/20 bg-emerald-400/10 text-emerald-300';
      case 'good':
        return 'border-sky-400/20 bg-sky-400/10 text-sky-300';
      case 'fair':
        return 'border-amber-400/20 bg-amber-400/10 text-amber-300';
      default:
        return 'border-orange-400/20 bg-orange-400/10 text-orange-300';
    }
  };

  return (
    <main className="min-h-screen bg-[#2b2b2b] pb-20 text-white">
      <section className="relative isolate min-h-[345px] overflow-hidden bg-[#202020] pt-[86px] sm:min-h-[380px]">
        <Image src={car.imageUrl} alt={vehicleName} fill priority unoptimized referrerPolicy="no-referrer" className="object-cover object-center" />
        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/40 to-black/45" />
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/45 to-transparent" />
        <div className="relative mx-auto flex min-h-[259px] max-w-7xl items-end px-4 pb-10 sm:px-6 lg:px-8 lg:pb-12">
          <div className="grid w-full items-end gap-8 lg:grid-cols-[1fr_auto_auto] lg:gap-12">
            <div className="min-w-0">
              <Link href="/cars" className="mb-5 inline-flex items-center gap-1.5 text-xs font-medium text-white/65 transition hover:text-white"><ArrowLeft className="h-3.5 w-3.5" /> Showroom</Link>
              <h1 className="max-w-3xl text-3xl font-bold leading-tight tracking-[-0.025em] text-white sm:text-4xl lg:text-[42px]">{vehicleName}</h1>
            </div>
            <div className="lg:pb-1"><p className="text-[10px] font-medium text-white/75">Price</p><p className="mt-1 text-2xl font-bold tracking-tight text-white sm:text-3xl">R {car.price.toLocaleString()}</p></div>
            <Link href="#contact" className="inline-flex h-12 items-center justify-center rounded-xl bg-[#12a8b8] px-5 text-sm font-medium text-white shadow-lg shadow-black/20 transition hover:bg-[#0f98a7] hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-[#12a8b8] focus:ring-offset-2 focus:ring-offset-black/20 lg:mb-0.5">Enquire About This Vehicle</Link>
          </div>
        </div>
      </section>

      <nav aria-label="Vehicle sections" className="border-b border-[#12a8b8]/70 bg-[#737477]">
        <div className="mx-auto flex max-w-7xl items-center justify-center gap-0 px-4 sm:px-6 lg:px-8">
          <a href="#vehicle" className="relative flex min-w-[150px] justify-center px-6 py-5 text-sm font-medium text-white after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 after:bg-[#E8751A]">Vehicle</a>
          <a href="#finance" className="flex min-w-[150px] justify-center px-6 py-5 text-sm font-medium text-white/85 transition hover:text-white">Vehicle Finance</a>
        </div>
      </nav>

      <div id="vehicle" className="mx-auto max-w-7xl px-4 pt-8 sm:px-6 lg:px-8 lg:pt-10">
        <section className="mb-7 flex flex-wrap items-center gap-x-10 gap-y-4 text-sm font-bold text-white">
          <div className="flex items-center gap-3"><Gauge className="h-6 w-6 text-[#F28A2E]" /><span>{car.mileage.toLocaleString()} Km</span></div>
          <div className="flex items-center gap-3"><Settings2 className="h-6 w-6 text-[#F28A2E]" /><span>{car.transmission}</span></div>
          <div className="flex items-center gap-3"><Fuel className="h-6 w-6 text-[#F28A2E]" /><span>{car.fuelType}</span></div>
          <div className="flex items-center gap-3"><Tag className="h-6 w-6 text-[#F28A2E]" /><span>{car.color}</span></div>
        </section>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,1.65fr)_minmax(340px,0.8fr)]">
          <div className="space-y-6">
            <section className="overflow-hidden rounded-xl bg-[#242424] shadow-sm">
              <div className="relative aspect-[16/9] min-h-[300px] overflow-hidden bg-[#202020] sm:min-h-[430px]">
                <Image src={car.imageUrl} alt={vehicleName} fill className="object-cover" referrerPolicy="no-referrer" priority unoptimized />
                <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-full bg-black/55 px-3 py-2 text-[10px] font-semibold text-white backdrop-blur-sm"><CarFront className="h-3.5 w-3.5 text-[#F28A2E]" /> Vehicle gallery</div>
              </div>
              {car.galleryUrls.length > 0 && <div className="grid grid-cols-4 gap-2 p-2 sm:grid-cols-5 lg:grid-cols-6">{car.galleryUrls.map((url, idx) => <div key={idx} className="group relative aspect-[4/3] overflow-hidden rounded-lg bg-[#333]"><Image src={url} alt={`${vehicleName} view ${idx + 1}`} fill className="object-cover transition duration-500 group-hover:scale-105" referrerPolicy="no-referrer" unoptimized /></div>)}</div>}
            </section>

            <section className="rounded-xl border border-white/10 bg-[#333333] p-6 shadow-sm sm:p-7">
              <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#F28A2E]">About this vehicle</p>
                  <h2 className="mt-2 text-2xl font-bold tracking-tight text-white">Vehicle overview</h2>
                </div>
                <div className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-[10px] font-semibold text-white/60">
                  <Info className="h-3.5 w-3.5 text-[#F28A2E]" /> Supplied vehicle information
                </div>
              </div>

              <p className="mt-5 text-[15px] leading-7 text-white/70">
                {car.description?.trim() || `${vehicleName} is currently listed in the ICar Gezina showroom. The information below reflects the vehicle fields recorded in our inventory.`}
              </p>

              <div className="mt-7 grid grid-cols-2 gap-2 sm:grid-cols-3">
                {overviewFacts.map((fact) => (
                  <div key={fact.label} className="rounded-xl border border-white/10 bg-white/[0.035] px-4 py-3">
                    <p className="text-[9px] font-bold uppercase tracking-[0.14em] text-white/35">{fact.label}</p>
                    <p className="mt-1.5 text-sm font-semibold text-white">{titleCase(fact.value)}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="rounded-xl border border-white/10 bg-[#333333] p-6 shadow-sm sm:p-7">
              <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#F28A2E]">Features & equipment</p>
                  <h2 className="mt-2 text-2xl font-bold tracking-tight">What this vehicle includes</h2>
                </div>
                <span className="text-xs font-medium text-white/40">{features.length} recorded {features.length === 1 ? 'feature' : 'features'}</span>
              </div>

              {features.length > 0 ? (
                <div className="mt-6 grid gap-2 sm:grid-cols-2">
                  {features.map((feature) => (
                    <div key={feature} className="flex min-h-12 items-center gap-3 rounded-xl border border-white/10 bg-white/[0.035] px-4 py-3 transition hover:border-[#F28A2E]/30 hover:bg-white/[0.055]">
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#F28A2E]/10"><CheckCircle2 className="h-4 w-4 text-[#F28A2E]" /></span>
                      <span className="text-sm font-medium text-white/75">{feature}</span>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="mt-6 rounded-xl border border-dashed border-white/10 bg-white/[0.025] p-6">
                  <div className="flex items-start gap-3"><Info className="mt-0.5 h-5 w-5 shrink-0 text-white/35" /><div><p className="text-sm font-semibold text-white/65">Equipment details not recorded</p><p className="mt-1 text-sm leading-6 text-white/40">No additional features have been supplied for this vehicle in the current inventory record.</p></div></div>
                </div>
              )}
            </section>

            <section className="rounded-xl border border-white/10 bg-[#242424] p-6 text-white shadow-sm sm:p-7">
              <div className="flex flex-col gap-4 border-b border-white/10 pb-5 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#F28A2E]">Vehicle confidence</p>
                  <h2 className="mt-2 text-2xl font-bold">Vehicle health check</h2>
                  <p className="mt-2 max-w-2xl text-sm leading-6 text-white/45">Only condition information explicitly recorded against this vehicle is shown here.</p>
                </div>
                {healthChecks.length > 0 && <div className="inline-flex w-fit items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-2 text-[9px] font-bold uppercase tracking-[0.14em] text-emerald-300"><ShieldCheck className="h-4 w-4" /> Recorded condition</div>}
              </div>

              {healthChecks.length > 0 ? (
                <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {healthChecks.map((part, idx) => (
                    <article key={`${part.name}-${idx}`} className="rounded-xl border border-white/10 bg-white/[0.035] p-4">
                      <div className="flex items-start justify-between gap-3">
                        <div className="min-w-0"><p className="text-[9px] font-bold uppercase tracking-[0.14em] text-white/35">Component</p><h3 className="mt-1 text-sm font-bold text-white">{part.name}</h3></div>
                        <span className={`shrink-0 rounded-full border px-2.5 py-1 text-[9px] font-bold uppercase tracking-wide ${conditionClass(part.condition)}`}>{part.condition}</span>
                      </div>
                      {part.description?.trim() && <p className="mt-3 text-xs leading-5 text-white/50">{part.description}</p>}
                    </article>
                  ))}
                </div>
              ) : (
                <div className="mt-6 rounded-xl border border-dashed border-white/10 bg-white/[0.025] p-6 sm:p-7">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/5"><ShieldCheck className="h-5 w-5 text-white/35" /></div>
                    <div>
                      <p className="text-sm font-semibold text-white/65">No health-check results recorded</p>
                      <p className="mt-1.5 text-sm leading-6 text-white/40">A vehicle health assessment has not been recorded for this vehicle in Supabase yet. We will not infer, estimate, or invent inspection results.</p>
                    </div>
                  </div>
                </div>
              )}

              {healthChecks.length > 0 && <div className="mt-5 flex items-start gap-2.5 rounded-xl border border-white/10 bg-white/[0.025] p-4 text-xs leading-5 text-white/40"><CircleCheck className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" /><span>These condition entries are displayed from the vehicle's recorded health-check data and should be treated as the dealership's supplied vehicle information.</span></div>}
            </section>

            <section className="rounded-xl border border-white/10 bg-[#333333] p-6 shadow-sm sm:p-7">
              <div className="flex items-end justify-between gap-4"><div><p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#F28A2E]">Customer experience</p><h2 className="mt-2 text-2xl font-bold tracking-tight">Reviews</h2></div>{car.reviews.length > 0 && <span className="inline-flex items-center gap-1 text-sm font-bold"><Star className="h-4 w-4 fill-current text-[#F28A2E]" /> {car.reviews[0].rating}/5</span>}</div>
              {car.reviews.length === 0 ? <div className="mt-6 rounded-xl bg-white/5 p-6 text-center"><p className="text-sm text-white/45">No reviews for this specific vehicle yet.</p></div> : <div className="mt-6 grid gap-4 md:grid-cols-2">{car.reviews.map((review) => <article key={review.id} className="rounded-xl border border-white/10 bg-white/5 p-5"><div className="flex gap-1 text-[#F28A2E]">{[...Array(5)].map((_, i) => <Star key={i} className={`h-3.5 w-3.5 ${i < review.rating ? 'fill-current' : 'text-white/15'}`} />)}</div><p className="mt-3 text-sm leading-6 text-white/60">“{review.comment}”</p><div className="mt-4 flex items-center justify-between border-t border-white/10 pt-3 text-[10px] font-bold uppercase tracking-wider"><span>{review.author}</span><span className="text-white/30">{new Date(review.date).toLocaleDateString()}</span></div></article>)}</div>}
            </section>
          </div>

          <aside id="finance" className="lg:sticky lg:top-28 lg:self-start">
            <div id="contact" className="overflow-hidden rounded-xl border border-black/5 bg-white text-[#292929] shadow-xl">
              <div className="border-b border-black/5 bg-white p-6 sm:p-7"><p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#E8751A]">Interested in this vehicle?</p><h2 className="mt-2 text-2xl font-bold">Contact Us</h2><p className="mt-2 text-sm leading-6 text-black/45">Talk to our team about this vehicle, arrange a viewing or request finance options.</p></div>
              <div className="p-5 sm:p-6"><div className="mb-5 rounded-xl bg-[#eeeeee] p-4"><p className="text-[9px] font-bold uppercase tracking-[0.16em] text-black/35">Vehicle</p><p className="mt-1 font-bold">{vehicleName}</p><p className="mt-1 text-xl font-black">R {car.price.toLocaleString()}</p></div><CarLeadForms carId={car.id} /></div>
              <div className="flex items-center gap-3 border-t border-black/5 px-6 py-4 text-xs text-black/45"><ShieldCheck className="h-5 w-5 shrink-0 text-[#E8751A]" /><span>Buy with confidence from ICar Gezina.</span></div>
            </div>
            <Link href="/cars" className="mt-4 flex items-center justify-between rounded-xl border border-white/10 bg-[#333333] px-5 py-4 text-xs font-bold uppercase tracking-wider text-white shadow-sm transition hover:border-[#E8751A]/50 hover:text-[#F28A2E]"><span className="inline-flex items-center gap-2"><ArrowLeft className="h-4 w-4" /> Browse more vehicles</span><ArrowRight className="h-4 w-4" /></Link>
          </aside>
        </div>
      </div>
    </main>
  );
}
