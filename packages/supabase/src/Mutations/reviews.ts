import type { CarReviewType } from "@icar-gezina/contracts/car";
import { requireAdminUser } from "../auth";
import { createSupabaseServerClient } from "../server";

export type CarReviewInsertPayload = Omit<CarReviewType, "id"> & {
  carId: string;
};

export async function createCarReview(data: CarReviewInsertPayload) {
  await requireAdminUser();
  const supabase = await createSupabaseServerClient();
  const { data: review, error } = await supabase
    .from("car_reviews")
    .insert({
      car_id: data.carId,
      author: data.author,
      rating: data.rating,
      comment: data.comment,
      date: data.date,
    })
    .select("id")
    .single();

  if (error) {
    throw new Error(`Unable to create review: ${error.message}`);
  }

  return review;
}

export async function updateCarReview(
  id: string,
  data: CarReviewInsertPayload,
) {
  await requireAdminUser();
  const supabase = await createSupabaseServerClient();
  const { error } = await supabase
    .from("car_reviews")
    .update({
      car_id: data.carId,
      author: data.author,
      rating: data.rating,
      comment: data.comment,
      date: data.date,
    })
    .eq("id", id);

  if (error) {
    throw new Error(`Unable to update review: ${error.message}`);
  }

  return { id };
}

export async function deleteCarReview(id: string) {
  await requireAdminUser();
  const supabase = await createSupabaseServerClient();
  const { data } = await supabase
    .from("car_reviews")
    .select("car_id")
    .eq("id", id)
    .maybeSingle();
  const { error } = await supabase.from("car_reviews").delete().eq("id", id);

  if (error) {
    throw new Error(`Unable to delete review: ${error.message}`);
  }

  return { id, carId: data?.car_id ?? undefined };
}
