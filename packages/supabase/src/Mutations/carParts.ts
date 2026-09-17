import type { CarPartType } from "@icar-gezina/contracts/car";
import { requireAdminUser } from "../auth";
import { createSupabaseServerClient } from "../server";

export type CarPartInsertPayload = Omit<CarPartType, "id"> & {
  carId: string;
};

export async function createCarPart(data: CarPartInsertPayload) {
  await requireAdminUser();
  const supabase = await createSupabaseServerClient();
  const { data: part, error } = await supabase
    .from("car_parts")
    .insert({
      car_id: data.carId,
      name: data.name,
      condition: data.condition,
      description: data.description,
    })
    .select("id")
    .single();

  if (error) {
    throw new Error(`Unable to create car part: ${error.message}`);
  }

  return part;
}

export async function updateCarPart(id: string, data: CarPartInsertPayload) {
  await requireAdminUser();
  const supabase = await createSupabaseServerClient();
  const { error } = await supabase
    .from("car_parts")
    .update({
      car_id: data.carId,
      name: data.name,
      condition: data.condition,
      description: data.description,
    })
    .eq("id", id);

  if (error) {
    throw new Error(`Unable to update car part: ${error.message}`);
  }

  return { id };
}

export async function deleteCarPart(id: string) {
  await requireAdminUser();
  const supabase = await createSupabaseServerClient();
  const { data } = await supabase
    .from("car_parts")
    .select("car_id")
    .eq("id", id)
    .maybeSingle();
  const { error } = await supabase.from("car_parts").delete().eq("id", id);

  if (error) {
    throw new Error(`Unable to delete car part: ${error.message}`);
  }

  return { id, carId: data?.car_id ?? undefined };
}
