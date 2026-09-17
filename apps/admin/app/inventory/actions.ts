"use server";

import type { ActionResult } from "@icar-gezina/contracts/actionResult";
import { CACHE_PATHS, CACHE_TAGS } from "@icar-gezina/supabase/cache";
import {
  createCar,
  deleteCar,
  updateCar,
} from "@icar-gezina/supabase/Mutations/cars";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { triggerRevalidation } from "../../lib/revalidation";

const text = (formData: FormData, name: string) =>
  String(formData.get(name) ?? "").trim();
const number = (formData: FormData, name: string) => {
  const value = Number(formData.get(name) ?? 0);
  return Number.isFinite(value) ? value : 0;
};
const array = (formData: FormData, name: string) =>
  text(formData, name)
    .split("\n")
    .map((v) => v.trim())
    .filter(Boolean);

function validateVehicle(formData: FormData): string | null {
  const make = text(formData, "make");
  const model = text(formData, "model");
  const year = number(formData, "year");
  const price = number(formData, "price");
  const mileage = number(formData, "mileage");

  if (!make || !model) return "Make and model are required.";
  if (year < 1900 || year > new Date().getFullYear() + 1)
    return "Please enter a valid vehicle year.";
  if (price < 0) return "Price cannot be negative.";
  if (mileage < 0) return "Mileage cannot be negative.";
  return null;
}

function vehiclePayload(formData: FormData) {
  return {
    make: text(formData, "make"),
    model: text(formData, "model"),
    year: number(formData, "year"),
    price: number(formData, "price"),
    mileage: number(formData, "mileage"),
    fuelType: text(formData, "fuelType"),
    transmission: text(formData, "transmission"),
    bodyType: text(formData, "bodyType"),
    color: text(formData, "color"),
    imageUrl: text(formData, "imageUrl"),
    galleryUrls: array(formData, "galleryUrls"),
    description: text(formData, "description"),
    features: array(formData, "features"),
  };
}

export async function createVehicle(formData: FormData): Promise<ActionResult> {
  const validationError = validateVehicle(formData);
  if (validationError) return { ok: false, error: validationError };

  let vehicle: { id: string };
  try {
    const created = await createCar(vehiclePayload(formData));
    vehicle = created as { id: string };
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    return { ok: false, error: message };
  }

  revalidatePath("/inventory");
  revalidatePath(`/inventory/${vehicle.id}`);
  revalidatePath(`/inventory/${vehicle.id}/edit`);
  await triggerRevalidation({
    tags: [CACHE_TAGS.cars],
    paths: [CACHE_PATHS.home, CACHE_PATHS.cars],
  });
  redirect(`/inventory/${vehicle.id}/edit`);
}

export async function updateVehicle(formData: FormData): Promise<ActionResult> {
  const validationError = validateVehicle(formData);
  if (validationError) return { ok: false, error: validationError };

  const id = text(formData, "id");
  if (!id)
    return {
      ok: false,
      error:
        "Vehicle ID is missing. Please reopen the edit page and try again.",
    };

  try {
    const updated = await updateCar(id, vehiclePayload(formData));
    if (!updated)
      return {
        ok: false,
        error: "Vehicle was not found or could not be updated.",
      };
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    return { ok: false, error: message };
  }

  revalidatePath("/inventory");
  revalidatePath(`/inventory/${id}`);
  revalidatePath(`/inventory/${id}/edit`);
  revalidatePath("/", "layout");
  await triggerRevalidation({
    tags: [CACHE_TAGS.cars, CACHE_TAGS.car(id)],
    paths: [CACHE_PATHS.home, CACHE_PATHS.cars, CACHE_PATHS.carDetail(id)],
  });
  redirect(`/inventory/${id}`);
}

export async function deleteVehicle(formData: FormData): Promise<ActionResult> {
  const id = text(formData, "id");
  if (!id) return { ok: false, error: "Vehicle ID is missing." };

  try {
    await deleteCar(id);
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    return { ok: false, error: message };
  }

  revalidatePath("/inventory");
  revalidatePath(`/inventory/${id}`);
  await triggerRevalidation({
    tags: [CACHE_TAGS.cars, CACHE_TAGS.car(id)],
    paths: [CACHE_PATHS.home, CACHE_PATHS.cars, CACHE_PATHS.carDetail(id)],
  });
  redirect("/inventory");
}
