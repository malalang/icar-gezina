import Image from 'next/image';
import Link from 'next/link';
import { Search, ChevronRight, ArrowRight, Play, CarFront, BadgeCheck, Banknote, Headphones } from 'lucide-react';
import { getCars, getTestimonials } from '@/lib/api';

const PRIMARY_GRAY = '#282828';
const TEAL = '#16A6B8';
const ORANGE = '#E8751A';

export default async function Home() {
  const cars = await getCars();
  const globalTestimonials = await getTestimonials();
  const newArrivals = cars.slice(0, 6);
  const categories = [
    { name: 'SUVs', copy: 'A perfect blend of comfort, space, and presence for every lifestyle.', type: 'SUV', image: cars.find(c => c.bodyType === 'SUV')?.imageUrl },
    { name: 'Coupes', copy: 'Sleek, stylish, and built for speed with dynamic performance.', type: 'Coupe', image: cars.find(c => c.bodyType === 'Coupe')?.imageUrl },
    { name: 'Bakkies', copy: 'Rugged durability and powerful capability, ready for work or weekend.', type: 'Bakkie', image: cars.find(c => c.bodyType === 'Bakkie')?.imageUrl },
    { name: 'Hatchbacks', copy: 'Convenient, efficient and fun to drive for everyday life.', type: 'Hatchback', image: cars.find(c => c.bodyType === 'Hatchback')?.imageUrl },
  ];
const filters: Array<[string, string[]]> = [
  ['Make', ['All Makes', 'Toyota', 'BMW', 'Volkswagen']],
  ['Model', ['All Models', 'Golf', 'Polo', 'Ranger']],
  ['Vehicle Type', ['All Types', 'SUV', 'Sedan', 'Bakkie', 'Hatchback']],
  ['Year', ['All Years', '2026', '2025', '2024']],
  ['Colour', ['All Colours', 'Black', 'White', 'Silver']],
  ['Max Price', [
    'Under R200 000',
    'R200 000 – R400 000',
    'R400 000 – R600 000',
    'R600 000 – R800 000',
    'R800 000+',
  ]],
];
  return (
    <div className="min-h-screen bg-[#282828] text-white">
      {/* Hero */}
      <section className="relative w-full overflow-hidden bg-black">
        <div className="relative min-h-[570px] sm:min-h-[600px] lg:min-h-[620px] flex items-center">
          <Image src="https://icargezina.co.za/wp-content/uploads/2025/05/1003_14989_I1.jpg" alt="ICar Gezina vehicles" fill priority referrerPolicy="no-referrer" className="object-cover object-center" />
          <div className="absolute inset-0 bg-black/45" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/65" />
          <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 pb-24 sm:pb-28">
            <div className="max-w-5xl mx-auto text-center">
              <h1 className="mx-auto max-w-4xl text-[1.95rem] sm:text-[2.35rem] lg:text-[2.85rem] font-extrabold tracking-tight leading-[1.05]">Find the car of your dreams at<span className="block">ICar Gezina</span></h1>
              <p className="mx-auto mt-3 max-w-4xl text-[12px] sm:text-[13px] lg:text-[15px] leading-[1.45] text-white/90">At ICar Gezina, we make car buying simple, affordable, and enjoyable. Explore our wide range of quality vehicles and take advantage of our easy, on-site finance options. With friendly service, expert advice, and a streamlined process, getting behind the wheel has never been easier.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Search */}
      <div className="relative z-50 -mt-8 sm:-mt-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto rounded-xl bg-[#282828] p-2.5 sm:p-3 shadow-2xl border border-white/30">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1fr_1fr_1fr_1fr_1fr_auto] gap-2 sm:gap-3">
            {[
              ['All Makes', ['Volkswagen','BMW','Mercedes-Benz','Audi','Toyota','Ford','Isuzu','Nissan']],
              ['All Models', ['Golf','Polo','Ranger','Hilux','X3','Q3']],
              ['All Years', ['2026','2025','2024','2023','2022','2021','2020']],
              ['All Colours', ['Black','White','Silver','Grey','Blue','Red']],
              ['Max Price', ['Under R200 000','R200 000 – R400 000','R400 000 – R600 000','R600 000 – R800 000','R800 000+']],
            ].map(([label, options]) => (
              <select key={label} aria-label={label} className="h-11 w-full rounded-none border-0 border-b-2 border-[#E8751A] bg-transparent px-3 text-[13px] text-white/90 outline-none focus:border-[#F28A2E] focus:ring-0 [&>option]:bg-[#282828] [&>option]:text-white">
                <option value="">{label}</option>
                {(options as string[]).map(option => <option key={option}>{option}</option>)}
              </select>
            ))}
            {filters.map(([label, options]) => (
  <select key={label} aria-label={label}>
    <option value="">{label}</option>
    {options.map((option) => (
      <option key={option} value={option}>
        {option}
      </option>
    ))}
  </select>
))}
            <Link href="/cars" className="h-11 min-w-[108px] rounded-md bg-[#16A6B8] px-5 flex items-center justify-center gap-2 text-[13px] font-medium transition hover:bg-[#1192A2]"><Search className="h-4 w-4" />Search</Link>
          </div>
        </div>
      </div>

      {/* New Arrivals — mirrors the live homepage section */}
      <section className="bg-[#282828] py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between gap-6 mb-8 sm:mb-10">
            <div><p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#E8751A] mb-2">Latest stock</p><h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">New Arrivals</h2></div>
            <Link href="/cars" className="hidden sm:flex items-center gap-1 text-sm font-semibold text-white hover:text-[#16A6B8] transition">View All <ChevronRight className="w-4 h-4" /></Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
            {newArrivals.map(car => (
              <Link href={`/cars/${car.id}`} key={car.id} className="group overflow-hidden bg-[#303030] border border-white/10 hover:border-white/25 transition rounded-sm">
                <div className="relative aspect-[4/3] overflow-hidden bg-black"><Image src={car.imageUrl} alt={`${car.make} ${car.model}`} fill unoptimized referrerPolicy="no-referrer" className="object-cover group-hover:scale-105 transition-transform duration-500" /><div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/80 to-transparent" /><span className="absolute left-4 bottom-4 text-xs font-bold uppercase tracking-wider text-white">{car.year}</span></div>
                <div className="p-5"><div className="text-sm font-medium text-white/60">{car.mileage.toLocaleString()} Km</div><h3 className="mt-1 min-h-12 text-lg font-semibold uppercase leading-tight">{car.make} {car.model}</h3><div className="mt-4 text-2xl font-bold text-[#16A6B8]">R {car.price.toLocaleString()}</div></div>
              </Link>
            ))}
          </div>
          <div className="mt-8 flex justify-center sm:hidden"><Link href="/cars" className="inline-flex items-center gap-2 text-sm font-semibold">View All Vehicles <ArrowRight className="w-4 h-4" /></Link></div>
        </div>
      </section>

      {/* Showroom / finance split */}
      <section className="bg-[#303030] py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-6">
          <div className="relative min-h-[360px] overflow-hidden rounded-sm group"><Image src={newArrivals[0]?.imageUrl || 'https://picsum.photos/seed/showroom/1200/800'} alt="ICar Gezina showroom" fill unoptimized className="object-cover group-hover:scale-105 transition-transform duration-700" /><div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/10" /><div className="absolute left-7 right-7 bottom-7"><p className="text-xs uppercase tracking-[0.25em] text-[#E8751A] font-bold">WELCOME TO ICAR GEZINA</p><h2 className="mt-2 text-3xl sm:text-4xl font-bold">Explore Our Showroom</h2><p className="mt-3 max-w-xl text-sm text-white/75">Discover a wide selection of quality vehicles to suit every lifestyle, with fast and easy finance options available on-site.</p><Link href="/cars" className="mt-6 inline-flex items-center gap-2 rounded-sm bg-[#16A6B8] px-5 py-3 text-sm font-semibold hover:bg-[#1192A2] transition">View our Showroom <ArrowRight className="w-4 h-4" /></Link></div></div>
          <div className="relative min-h-[360px] overflow-hidden rounded-sm bg-[#242424] border border-white/10 p-8 sm:p-10 flex flex-col justify-end"><div className="mb-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#16A6B8]/15 text-[#16A6B8]"><Banknote className="h-7 w-7" /></div><p className="text-xs uppercase tracking-[0.25em] text-[#E8751A] font-bold">Easy on-site finance</p><h2 className="mt-2 text-3xl sm:text-4xl font-bold">Get Finance</h2><p className="mt-3 max-w-xl text-sm text-white/70">Our streamlined finance application process makes it simple to get behind the wheel of your next car.</p><Link href="/finance" className="mt-6 inline-flex w-fit items-center gap-2 rounded-sm border border-white/30 px-5 py-3 text-sm font-semibold hover:bg-white/10 transition">Apply For Finance <ArrowRight className="w-4 h-4" /></Link></div>
        </div>
      </section>

      {/* Vehicle lifestyle categories */}
      <section className="bg-[#282828] py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-10"><p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#E8751A]">Find your style</p><h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-bold">Find the Perfect Ride for Your Lifestyle</h2><p className="mt-4 text-sm sm:text-base text-white/65">From rugged bakkies and spacious SUVs to sporty coupes and compact hatchbacks, discover a vehicle built around the way you live.</p></div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {categories.map(category => (
              <Link href={`/cars?bodyType=${encodeURIComponent(category.type)}`} key={category.name} className="group relative min-h-[390px] overflow-hidden rounded-sm bg-[#303030]">
                {category.image && <Image src={category.image} alt={category.name} fill unoptimized referrerPolicy="no-referrer" className="object-cover group-hover:scale-105 transition-transform duration-700" />}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                <div className="absolute left-5 right-5 bottom-5"><h3 className="text-2xl font-bold">{category.name}</h3><p className="mt-2 text-sm text-white/70 line-clamp-3">{category.copy}</p><span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[#16A6B8]">Discover More <ChevronRight className="h-4 w-4" /></span></div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Explore vehicles */}
      <section className="bg-[#303030] py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"><p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#E8751A]">Browse by make</p><h2 className="mt-2 text-3xl sm:text-4xl font-bold">Explore Our Vehicles</h2><p className="mt-3 text-sm text-white/65">Filter by your favourite make and find your next vehicle.</p><div className="mt-8 flex flex-wrap justify-center gap-3">{Array.from(new Set(cars.map(car => car.make))).slice(0, 10).map(make => <Link key={make} href={`/cars?make=${encodeURIComponent(make)}`} className="rounded-full border border-white/15 bg-[#282828] px-5 py-2.5 text-sm text-white/80 hover:border-[#16A6B8] hover:text-[#16A6B8] transition">{make}</Link>)}</div></div>
      </section>

      {/* Testimonials */}
      <section className="bg-[#282828] py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div className="max-w-2xl mb-10"><p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#E8751A]">Happy customers</p><h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-bold">What our Customers are saying</h2><p className="mt-4 text-sm text-white/65">Don't just take our word for it—hear real stories from customers who found their perfect vehicle at ICar Gezina.</p></div><div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">{globalTestimonials.slice(0, 6).map(testimonial => <article key={testimonial.id} className="bg-[#303030] border border-white/10 p-6 rounded-sm"><div className="text-[#E8751A] tracking-widest">★★★★★</div><p className="mt-4 text-sm leading-7 text-white/75">&quot;{testimonial.content}&quot;</p><div className="mt-6 pt-5 border-t border-white/10"><div className="font-semibold">{testimonial.author}</div><div className="text-xs text-white/45 mt-1">{testimonial.role}</div></div></article>)}</div></div>
      </section>

      {/* Video / simple enjoyable */}
      <section className="bg-[#303030] py-16 sm:py-20"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-[1.15fr_.85fr] gap-8 items-center"><div className="relative min-h-[330px] overflow-hidden bg-black rounded-sm"><Image src={newArrivals[1]?.imageUrl || newArrivals[0]?.imageUrl || 'https://picsum.photos/seed/icar/1200/800'} alt="ICar Gezina vehicle" fill unoptimized className="object-cover" /><div className="absolute inset-0 bg-black/35" /><div className="absolute inset-0 flex items-center justify-center"><div className="h-16 w-16 rounded-full bg-[#16A6B8] flex items-center justify-center shadow-xl"><Play className="h-7 w-7 fill-white" /></div></div></div><div><p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#E8751A]">Our experience</p><h2 className="mt-2 text-3xl sm:text-4xl font-bold">Simple, Affordable, Enjoyable</h2><p className="mt-4 text-sm leading-7 text-white/65">Watch how we make car buying easier, more affordable, and surprisingly enjoyable. From vehicle tips to customer stories, discover why ICar Gezina is the smart choice for your journey.</p><Link href="/articles" className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[#16A6B8]">View Articles <ArrowRight className="h-4 w-4" /></Link></div></div></section>

      {/* Support CTA */}
      <section className="bg-[#282828] py-16 sm:py-20"><div className="max-w-5xl mx-auto px-4 text-center"><div className="mx-auto h-14 w-14 rounded-full bg-[#16A6B8]/15 text-[#16A6B8] flex items-center justify-center"><Headphones className="h-7 w-7" /></div><p className="mt-5 text-xs font-semibold uppercase tracking-[0.25em] text-[#E8751A]">ICar Gezina support</p><h2 className="mt-2 text-3xl sm:text-4xl font-bold">After Sales Customer Care</h2><p className="mt-4 max-w-2xl mx-auto text-sm leading-7 text-white/65">We value your support and feedback. Our team is committed to providing excellent ongoing service and total customer satisfaction.</p><div className="mt-7 flex flex-col sm:flex-row justify-center gap-3"><Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-[#16A6B8] px-6 py-3 text-sm font-semibold rounded-sm hover:bg-[#1192A2] transition">Contact Us <ArrowRight className="w-4 h-4" /></Link><Link href="/cars" className="inline-flex items-center justify-center gap-2 border border-white/25 px-6 py-3 text-sm font-semibold rounded-sm hover:bg-white/10 transition">Browse Cars</Link></div></div></section>
    </div>
  );
}
