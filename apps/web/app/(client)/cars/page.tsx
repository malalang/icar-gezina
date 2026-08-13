'use client';

import { useMemo, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronDown, Search, SlidersHorizontal, X } from 'lucide-react';
import { mockCars } from '@/lib/mock-data';

export default function CarsInventory() {
  const [makeFilter, setMakeFilter] = useState('');
  const [modelFilter, setModelFilter] = useState('');
  const [yearFilter, setYearFilter] = useState('');
  const [bodyFilter, setBodyFilter] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [filtersOpen, setFiltersOpen] = useState(false);

  const uniqueMakes = Array.from(new Set(mockCars.map((car) => car.make))).sort();
  const uniqueYears = Array.from(new Set(mockCars.map((car) => car.year))).sort((a, b) => b - a);
  const uniqueBodies = Array.from(new Set(mockCars.map((car) => car.bodyType))).sort();

  const filteredCars = useMemo(() => {
    return mockCars.filter((car) => {
      if (makeFilter && car.make !== makeFilter) return false;
      if (modelFilter && !`${car.make} ${car.model}`.toLowerCase().includes(modelFilter.toLowerCase())) return false;
      if (yearFilter && car.year.toString() !== yearFilter) return false;
      if (bodyFilter && car.bodyType !== bodyFilter) return false;
      if (maxPrice && car.price > Number(maxPrice)) return false;
      return true;
    });
  }, [makeFilter, modelFilter, yearFilter, bodyFilter, maxPrice]);

  const clearFilters = () => {
    setMakeFilter('');
    setModelFilter('');
    setYearFilter('');
    setBodyFilter('');
    setMaxPrice('');
  };

  const hasFilters = Boolean(makeFilter || modelFilter || yearFilter || bodyFilter || maxPrice);

  return (
    <div className="min-h-screen bg-[#171717] pb-20 text-white">
      {/* Showroom hero */}
      <section
        className="relative min-h-[490px] overflow-hidden bg-[#111]"
        style={{
          backgroundImage: "url('https://img.autotrader.co.za/45276051/Fit1280x960')",
          backgroundPosition: 'center 58%',
          backgroundSize: 'cover',
        }}
      >
        <div className="absolute inset-0 bg-black/65" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/45 to-[#171717]" />

        <div className="relative mx-auto flex min-h-[490px] max-w-7xl items-end px-4 pb-16 pt-32 sm:px-6 lg:px-8 lg:pb-20">
          <div className="max-w-2xl">
            <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.25em] text-[#E8751A]">ICar Gezina Showroom</p>
            <h1 className="text-5xl font-bold tracking-[-0.045em] text-white sm:text-6xl lg:text-[58px] lg:leading-[1.02]">
              Find the right car
            </h1>
            <p className="mt-5 max-w-xl text-sm leading-7 text-white/75 sm:text-base">
              Whether you&apos;re after efficiency, space, or performance, we&apos;ll help you match with the perfect vehicle. Browse our wide selection and use smart filters to find the car that fits your needs — quickly and easily.
            </p>
          </div>
        </div>
      </section>

      {/* Search panel */}
      <section className="relative z-20 -mt-1 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-2xl border border-white/10 bg-[#1f1f1f] p-5 shadow-2xl shadow-black/30 sm:p-6 lg:p-7">
          <div className="mb-5 flex items-center justify-between">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#E8751A]">Vehicle search</p>
              <h2 className="mt-1 text-lg font-semibold text-white">Search our inventory</h2>
            </div>
            <button type="button" onClick={() => setFiltersOpen((open) => !open)} className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold text-white transition hover:bg-white/10 lg:hidden">
              <SlidersHorizontal className="h-4 w-4" /> Filters
            </button>
          </div>

          <div className={`${filtersOpen ? 'grid' : 'hidden'} grid-cols-1 gap-3 md:grid-cols-2 lg:grid lg:grid-cols-5`}>
            <label className="relative block">
              <span className="sr-only">Make</span>
              <select value={makeFilter} onChange={(e) => setMakeFilter(e.target.value)} className="h-12 w-full appearance-none rounded-lg border border-black/10 bg-white px-4 pr-10 text-sm font-medium text-[#333] outline-none transition focus:border-[#E8751A] focus:ring-2 focus:ring-[#E8751A]/20">
                <option value="">Make</option>
                {uniqueMakes.map((make) => <option key={make} value={make}>{make}</option>)}
              </select>
              <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-black/45" />
            </label>

            <label className="relative block">
              <span className="sr-only">Model</span>
              <input value={modelFilter} onChange={(e) => setModelFilter(e.target.value)} placeholder="Model" className="h-12 w-full rounded-lg border border-black/10 bg-white px-4 text-sm font-medium text-[#333] outline-none placeholder:text-black/40 transition focus:border-[#E8751A] focus:ring-2 focus:ring-[#E8751A]/20" />
            </label>

            <label className="relative block">
              <span className="sr-only">Year</span>
              <select value={yearFilter} onChange={(e) => setYearFilter(e.target.value)} className="h-12 w-full appearance-none rounded-lg border border-black/10 bg-white px-4 pr-10 text-sm font-medium text-[#333] outline-none transition focus:border-[#E8751A] focus:ring-2 focus:ring-[#E8751A]/20">
                <option value="">Year</option>
                {uniqueYears.map((year) => <option key={year} value={year}>{year}</option>)}
              </select>
              <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-black/45" />
            </label>

            <label className="relative block">
              <span className="sr-only">Body type</span>
              <select value={bodyFilter} onChange={(e) => setBodyFilter(e.target.value)} className="h-12 w-full appearance-none rounded-lg border border-black/10 bg-white px-4 pr-10 text-sm font-medium text-[#333] outline-none transition focus:border-[#E8751A] focus:ring-2 focus:ring-[#E8751A]/20">
                <option value="">Body Type</option>
                {uniqueBodies.map((body) => <option key={body} value={body}>{body}</option>)}
              </select>
              <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-black/45" />
            </label>

            <label className="relative block">
              <span className="sr-only">Maximum price</span>
              <select value={maxPrice} onChange={(e) => setMaxPrice(e.target.value)} className="h-12 w-full appearance-none rounded-lg border border-black/10 bg-white px-4 pr-10 text-sm font-medium text-[#333] outline-none transition focus:border-[#E8751A] focus:ring-2 focus:ring-[#E8751A]/20">
                <option value="">Max Price</option>
                <option value="250000">R 250,000</option>
                <option value="500000">R 500,000</option>
                <option value="750000">R 750,000</option>
                <option value="1000000">R 1,000,000</option>
              </select>
              <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-black/45" />
            </label>
          </div>

          <div className="mt-3 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-2 text-xs text-white/45">
              <Search className="h-4 w-4" />
              <span>{filteredCars.length} vehicles matching your search</span>
            </div>
            {hasFilters && (
              <button type="button" onClick={clearFilters} className="inline-flex items-center gap-1.5 self-start text-xs font-semibold text-[#F28A2E] transition hover:text-white sm:self-auto">
                <X className="h-3.5 w-3.5" /> Clear filters
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Inventory */}
      <section className="mx-auto max-w-7xl px-4 pt-12 sm:px-6 lg:px-8 lg:pt-14">
        <div className="mb-7 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#E8751A]">Our vehicles</p>
            <h2 className="mt-1 text-2xl font-bold tracking-tight text-white sm:text-3xl">Explore our showroom</h2>
          </div>
          <p className="text-sm text-white/45">Showing <span className="font-bold text-white/75">{filteredCars.length}</span> vehicles</p>
        </div>

        {filteredCars.length === 0 ? (
          <div className="rounded-2xl border border-white/10 bg-[#1f1f1f] px-6 py-20 text-center shadow-sm">
            <SlidersHorizontal className="mx-auto h-10 w-10 text-white/20" />
            <h3 className="mt-5 text-xl font-bold text-white">No vehicles found</h3>
            <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-white/45">Try changing your search filters and we&apos;ll help you find a vehicle that matches your needs.</p>
            <button type="button" onClick={clearFilters} className="mt-6 rounded-full bg-[#E8751A] px-6 py-3 text-xs font-bold uppercase tracking-wider text-white transition hover:bg-[#F28A2E]">Reset Search</button>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {filteredCars.map((car) => (
              <Link href={`/cars/${car.id}`} key={car.id} className="group overflow-hidden rounded-2xl border border-white/10 bg-[#222] shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div className="relative aspect-[16/10] overflow-hidden bg-[#2a2a2a]">
                  <Image src={car.imageUrl} alt={`${car.make} ${car.model}`} fill className="object-cover transition duration-700 group-hover:scale-105" referrerPolicy="no-referrer" unoptimized />
                  <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/70 to-transparent" />
                  <span className="absolute left-4 top-4 rounded-full bg-[#E8751A] px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.12em] text-white">Featured</span>
                  <span className="absolute bottom-4 right-4 text-xs font-semibold text-white/90">{car.year}</span>
                </div>

                <div className="p-5">
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#E8751A]">{car.make}</p>
                  <h3 className="mt-1 min-h-[48px] text-lg font-bold leading-6 text-white transition group-hover:text-[#F28A2E]">{car.model}</h3>
                  <p className="mt-3 text-2xl font-extrabold tracking-tight text-white">R {car.price.toLocaleString()}</p>

                  <div className="mt-5 grid grid-cols-3 border-t border-white/10 pt-4">
                    <div>
                      <p className="text-[9px] font-bold uppercase tracking-wider text-white/35">Mileage</p>
                      <p className="mt-1 text-xs font-semibold text-white/65">{car.mileage.toLocaleString()} km</p>
                    </div>
                    <div className="border-x border-white/10 px-3">
                      <p className="text-[9px] font-bold uppercase tracking-wider text-white/35">Fuel</p>
                      <p className="mt-1 truncate text-xs font-semibold text-white/65">{car.fuelType}</p>
                    </div>
                    <div className="pl-3">
                      <p className="text-[9px] font-bold uppercase tracking-wider text-white/35">Body</p>
                      <p className="mt-1 truncate text-xs font-semibold text-white/65">{car.bodyType}</p>
                    </div>
                  </div>

                  <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-4 text-xs font-bold uppercase tracking-wider text-white">
                    <span>View vehicle</span>
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white transition group-hover:bg-[#E8751A]">→</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
