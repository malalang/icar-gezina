import type { CarType } from "@icar-gezina/contracts/car";
import { requireAdminUser } from "../auth";
import { createSupabaseServerClient } from "../server";

export type CarInsertPayload = Omit<
  CarType,
  "id" | "createdAt" | "parts" | "reviews"
>;

export async function createCar(data: CarInsertPayload) {
  await requireAdminUser();
  const supabase = await createSupabaseServerClient();
  const { data: car, error } = await supabase
    .from("cars")
    .insert({
      make: data.make,
      model: data.model,
      year: data.year,
      price: data.price,
      mileage: data.mileage,
      fuel_type: data.fuelType,
      transmission: data.transmission,
      body_type: data.bodyType,
      color: data.color,
      image_url: data.imageUrl,
      gallery_urls: data.galleryUrls,
      description: data.description,
      features: data.features,
    })
    .select("id")
    .single();

  if (error) {
    throw new Error(`Unable to create vehicle: ${error.message}`);
  }

  return car;
}

export async function updateCar(id: string, data: CarInsertPayload) {
  await requireAdminUser();
  const supabase = await createSupabaseServerClient();
  const { data: car, error } = await supabase
    .from("cars")
    .update({
      make: data.make,
      model: data.model,
      year: data.year,
      price: data.price,
      mileage: data.mileage,
      fuel_type: data.fuelType,
      transmission: data.transmission,
      body_type: data.bodyType,
      color: data.color,
      image_url: data.imageUrl,
      gallery_urls: data.galleryUrls,
      description: data.description,
      features: data.features,
    })
    .eq("id", id)
    .select("id")
    .maybeSingle();

  if (error) {
    throw new Error(`Unable to update vehicle: ${error.message}`);
  }

  return car;
}

export async function deleteCar(id: string) {
  await requireAdminUser();
  const supabase = await createSupabaseServerClient();
  const { error } = await supabase.from("cars").delete().eq("id", id);

  if (error) {
    throw new Error(`Unable to delete vehicle: ${error.message}`);
  }

  return { id };
}
