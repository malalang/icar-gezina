import { getCars } from '@/lib/api';
import CarsInventoryClient from './inventory-client';

export const revalidate = 60;

export default async function CarsInventoryPage() {
  const cars = await getCars();
  return <CarsInventoryClient cars={cars} />;
}
