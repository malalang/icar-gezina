'use client';

import { useState, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Filter, SlidersHorizontal, ChevronRight, Check } from 'lucide-react';
import { mockCars } from '@/lib/mock-data';

export default function CarsInventory() {
  const [makeFilter, setMakeFilter] = useState<string>('');
  const [modelFilter, setModelFilter] = useState<string>('');
  const [yearFilter, setYearFilter] = useState<string>('');
  const [maxPrice, setMaxPrice] = useState<string>('');

  const filteredCars = useMemo(() => {
    return mockCars.filter(car => {
      if (makeFilter && car.make !== makeFilter) return false;
      if (modelFilter && !car.model.toLowerCase().includes(modelFilter.toLowerCase())) return false;
      if (yearFilter && car.year.toString() !== yearFilter) return false;
      if (maxPrice && car.price > parseInt(maxPrice)) return false;
      return true;
    });
  }, [makeFilter, modelFilter, yearFilter, maxPrice]);

  const uniqueMakes = Array.from(new Set(mockCars.map(c => c.make))).sort();
  const uniqueYears = Array.from(new Set(mockCars.map(c => c.year))).sort((a,b) => b - a);

  return (
    <div className="bg-slate-50 min-h-screen pt-8 pb-20">
      <div className="max-w-7xl mx-auto px-4">
        
        <div className="mb-8">
          <h1 className="text-4xl font-bold italic text-slate-900 mb-2">Our Inventory</h1>
          <p className="text-slate-600">Browse our selection of certified premium vehicles.</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-6">
          
          {/* Filters Sidebar */}
          <div className="w-full lg:w-1/4">
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-5 sticky top-24">
              <div className="flex items-center gap-2 mb-6 border-b border-slate-100 pb-4">
                <SlidersHorizontal className="w-5 h-5 text-blue-600" />
                <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest">Search Filters</h3>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="text-xs font-semibold text-slate-700 block mb-1">Make</label>
                  <select 
                    value={makeFilter}
                    onChange={e => setMakeFilter(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded px-2 py-1.5 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                  >
                    <option value="">All Makes</option>
                    {uniqueMakes.map(make => (
                      <option key={make} value={make}>{make}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-700 block mb-1">Model</label>
                  <input 
                    type="text"
                    value={modelFilter}
                    onChange={e => setModelFilter(e.target.value)}
                    placeholder="Search models..."
                    className="w-full bg-slate-50 border border-slate-200 rounded px-2 py-1.5 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-700 block mb-1">Year</label>
                  <select 
                    value={yearFilter}
                    onChange={e => setYearFilter(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded px-2 py-1.5 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                  >
                    <option value="">Any Year</option>
                    {uniqueYears.map(year => (
                      <option key={year} value={year}>{year}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-700 block mb-1">Max Price</label>
                  <select 
                    value={maxPrice}
                    onChange={e => setMaxPrice(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded px-2 py-1.5 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                  >
                    <option value="">Any Price</option>
                    <option value="250000">Under R 250,000</option>
                    <option value="500000">Under R 500,000</option>
                    <option value="750000">Under R 750,000</option>
                    <option value="1000000">Under R 1,000,000</option>
                  </select>
                </div>
                
                {(makeFilter || modelFilter || yearFilter || maxPrice) && (
                  <button 
                    onClick={() => { setMakeFilter(''); setModelFilter(''); setYearFilter(''); setMaxPrice(''); }}
                    className="w-full text-blue-600 text-sm font-medium hover:text-blue-800 transition"
                  >
                    Clear All Filters
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Listings */}
          <div className="w-full lg:w-3/4">
            <div className="mb-4 flex justify-between items-center text-sm text-slate-600">
              <span>Showing <strong>{filteredCars.length}</strong> vehicles</span>
            </div>

            {filteredCars.length === 0 ? (
              <div className="bg-white rounded-xl border border-slate-200 p-12 text-center flex flex-col items-center shadow-sm">
                <Filter className="w-12 h-12 text-slate-300 mb-4" />
                <h3 className="text-xl font-bold text-slate-900 mb-2">No cars found</h3>
                <p className="text-slate-500 max-w-md">Try adjusting your filters to find what you&apos;re looking for.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredCars.map(car => (
                  <Link href={`/cars/${car.id}`} key={car.id} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow group border border-slate-200 flex flex-col">
                    <div className="relative h-60 w-full overflow-hidden bg-slate-200">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10 pointer-events-none"></div>
                      <Image src={car.imageUrl} alt={`${car.make} ${car.model}`} fill className="object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" unoptimized />
                      <div className="absolute bottom-4 left-4 z-20 flex flex-col text-white">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="px-2 py-0.5 bg-blue-600 text-[10px] font-bold rounded uppercase">Certified</span>
                          <span className="text-sm font-medium opacity-90">{car.year}</span>
                        </div>
                      </div>
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                      <div className="text-sm font-semibold text-blue-600 mb-1 uppercase tracking-wider">{car.make}</div>
                      <h3 className="font-bold text-2xl italic text-slate-900 mb-2">{car.model}</h3>
                      <div className="text-2xl font-black text-slate-900 mb-4">R {car.price.toLocaleString()}</div>
                      
                      <div className="mt-auto grid grid-cols-2 gap-y-3 gap-x-4 border-t border-slate-100 pt-4">
                        <div className="border-r border-slate-100">
                           <span className="text-[10px] font-bold text-slate-400 uppercase block">Mileage</span>
                           <span className="text-sm font-bold text-slate-700 italic">{car.mileage.toLocaleString()} KM</span>
                        </div>
                        <div>
                           <span className="text-[10px] font-bold text-slate-400 uppercase block">Transmission</span>
                           <span className="text-sm font-bold text-slate-700 italic">{car.transmission}</span>
                        </div>
                        <div className="border-r border-slate-100 col-start-1">
                           <span className="text-[10px] font-bold text-slate-400 uppercase block">Fuel Type</span>
                           <span className="text-sm font-bold text-slate-700 italic">{car.fuelType}</span>
                        </div>
                        <div className="col-start-2">
                           <span className="text-[10px] font-bold text-slate-400 uppercase block">Body Type</span>
                           <span className="text-sm font-bold text-slate-700 italic">{car.bodyType}</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}
