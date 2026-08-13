import { getCars } from '@/lib/api';
import Link from 'next/link';
import Image from 'next/image';
import { deleteCar } from './actions';

export default async function AdminCarsPage() {
  const cars = await getCars();

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">Inventory Management</h1>
          <p className="text-slate-500 text-sm">Manage your vehicle listings</p>
        </div>
        <Link href="/admin/cars/new" className="bg-blue-600 text-white px-4 py-2 rounded-lg font-bold text-sm hover:bg-blue-700 transition">
          + Add New Vehicle
        </Link>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        <table className="w-full text-left text-sm whitespace-nowrap">
          <thead className="bg-slate-50 border-b border-slate-200 text-xs uppercase font-bold text-slate-500">
            <tr>
              <th className="px-6 py-4">Vehicle</th>
              <th className="px-6 py-4">Price</th>
              <th className="px-6 py-4">Year</th>
              <th className="px-6 py-4">Mileage</th>
              <th className="px-6 py-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {cars.map((car) => (
              <tr key={car.id} className="hover:bg-slate-50 transition">
                <td className="px-6 py-4 flex items-center gap-4">
                  <div className="relative w-12 h-8 rounded overflow-hidden bg-slate-200">
                    <Image src={car.imageUrl} alt={car.model} fill className="object-cover" referrerPolicy="no-referrer" unoptimized />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">{car.make} {car.model}</div>
                    <div className="text-xs text-slate-500">{car.color} • {car.transmission}</div>
                  </div>
                </td>
                <td className="px-6 py-4 font-bold text-slate-700">R {car.price.toLocaleString()}</td>
                <td className="px-6 py-4 text-slate-600">{car.year}</td>
                <td className="px-6 py-4 text-slate-600">{car.mileage.toLocaleString()} KM</td>
                <td className="px-6 py-4 text-right">
                  <div className="flex items-center justify-end gap-3">
                    <Link href={`/admin/cars/${car.id}/edit`} className="text-blue-600 hover:text-blue-800 text-xs font-bold uppercase">
                      Edit
                    </Link>
                    <form action={deleteCar}>
                      <input type="hidden" name="id" value={car.id} />
                      <button type="submit" className="text-red-500 hover:text-red-700 text-xs font-bold uppercase">
                        Delete
                      </button>
                    </form>
                  </div>
                </td>
              </tr>
            ))}
            {cars.length === 0 && (
              <tr>
                <td colSpan={5} className="px-6 py-8 text-center text-slate-500">
                  No vehicles found. Start by adding one.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
