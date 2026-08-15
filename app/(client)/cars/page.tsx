import { getCars } from '@/lib/api';
import CarsInventoryClient from './inventory-client';

export default async function CarsInventoryPage() {
  const cars = await getCars();
  return <CarsInventoryClient cars={cars} />;
}
