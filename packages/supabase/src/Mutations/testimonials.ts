import type { TestimonialType } from "@icar-gezina/contracts/testimonial";
import { requireAdminUser } from "../auth";
import { createSupabaseServerClient } from "../server";

export type TestimonialInsertPayload = Omit<
  TestimonialType,
  "id" | "createdAt"
>;

export async function createTestimonial(data: TestimonialInsertPayload) {
  await requireAdminUser();
  const supabase = await createSupabaseServerClient();
  const { data: testimonial, error } = await supabase
    .from("testimonials")
    .insert({
      author: data.author,
      role: data.role,
      content: data.content,
      avatar: data.avatar,
    })
    .select("id")
    .single();

  if (error) {
    throw new Error(`Unable to create testimonial: ${error.message}`);
  }

  return testimonial;
}

export async function updateTestimonial(
  id: string,
  data: TestimonialInsertPayload,
) {
  await requireAdminUser();
  const supabase = await createSupabaseServerClient();
  const { error } = await supabase
    .from("testimonials")
    .update({
      author: data.author,
      role: data.role,
      content: data.content,
      avatar: data.avatar,
    })
    .eq("id", id);

  if (error) {
    throw new Error(`Unable to update testimonial: ${error.message}`);
  }

  return { id };
}

export async function deleteTestimonial(id: string) {
  await requireAdminUser();
  const supabase = await createSupabaseServerClient();
  const { error } = await supabase.from("testimonials").delete().eq("id", id);

  if (error) {
    throw new Error(`Unable to delete testimonial: ${error.message}`);
  }

  return { id };
}
