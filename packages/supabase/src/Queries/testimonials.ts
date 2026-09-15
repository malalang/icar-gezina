import type { Testimonial } from "@icar-gezina/contracts/testimonial";
import { createSupabasePublicClient } from "../server";
import type { Database } from "../supabaseType";

type TestimonialRow = Database["public"]["Tables"]["testimonials"]["Row"];

function normalizeTestimonial(row: TestimonialRow): Testimonial {
  return {
    id: row.id,
    author: row.author,
    role: row.role,
    content: row.content,
    avatar: row.avatar,
    createdAt: row.created_at,
  };
}

export async function getTestimonials(): Promise<Testimonial[]> {
  const supabase = createSupabasePublicClient();
  const { data, error } = await supabase
    .from("testimonials")
    .select("id, author, role, content, avatar, created_at")
    .order("created_at", { ascending: false });

  if (error) {
    throw new Error(`Unable to load testimonials: ${error.message}`);
  }

  return (data ?? []).map(normalizeTestimonial);
}
