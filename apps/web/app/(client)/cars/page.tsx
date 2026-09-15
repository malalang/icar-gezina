import { getCachedCars } from "@/app/_lib/cached-public-data";
import CarsInventoryClient from "./inventory-client";

export const revalidate = 60;

export default async function CarsInventoryPage() {
  const cars = await getCachedCars();
  return <CarsInventoryClient cars={cars} />;
}
