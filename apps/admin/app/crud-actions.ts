"use server";

import type { ActionResult } from "@icar-gezina/contracts/actionResult";
import { CACHE_PATHS, CACHE_TAGS } from "@icar-gezina/supabase/cache";
import {
  createArticle,
  deleteArticle,
  updateArticle,
} from "@icar-gezina/supabase/Mutations/articles";
import {
  createCarPart,
  deleteCarPart,
  updateCarPart,
} from "@icar-gezina/supabase/Mutations/carParts";
import {
  createLead,
  deleteLead,
  updateLead,
} from "@icar-gezina/supabase/Mutations/leads";
import {
  createCarReview,
  deleteCarReview,
  updateCarReview,
} from "@icar-gezina/supabase/Mutations/reviews";
import {
  createTestimonial,
  deleteTestimonial,
  updateTestimonial,
} from "@icar-gezina/supabase/Mutations/testimonials";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { triggerRevalidation } from "../lib/revalidation";

const adminResources = new Set([
  "leads",
  "reviews",
  "testimonials",
  "car-parts",
  "articles",
]);

const text = (fd: FormData, name: string) => String(fd.get(name) ?? "").trim();
const nullable = (fd: FormData, name: string) => text(fd, name) || null;
const bool = (fd: FormData, name: string) =>
  fd.get(name) === "on" || fd.get(name) === "true";
const int = (fd: FormData, name: string) => {
  const value = Number(fd.get(name));
  return Number.isFinite(value) ? value : 0;
};

function assertResource(resource: string) {
  if (!adminResources.has(resource)) throw new Error("Unsupported resource");
}

function leadPayload(fd: FormData) {
  return {
    type: text(fd, "type"),
    name: text(fd, "name"),
    email: text(fd, "email"),
    phone: text(fd, "phone"),
    message: nullable(fd, "message"),
    carId: nullable(fd, "car_id"),
    preferredDate: nullable(fd, "preferred_date"),
    status: text(fd, "status") || "New",
  };
}

function reviewPayload(fd: FormData) {
  return {
    carId: text(fd, "car_id"),
    author: text(fd, "author"),
    rating: Math.max(1, Math.min(5, int(fd, "rating"))),
    comment: text(fd, "comment"),
    date: text(fd, "date"),
  };
}

function testimonialPayload(fd: FormData) {
  return {
    author: text(fd, "author"),
    role: text(fd, "role"),
    content: text(fd, "content"),
    avatar: text(fd, "avatar"),
  };
}

function carPartPayload(fd: FormData) {
  return {
    carId: text(fd, "car_id"),
    name: text(fd, "name"),
    condition: text(fd, "condition"),
    description: text(fd, "description"),
  };
}

function articlePayload(fd: FormData) {
  return {
    title: text(fd, "title"),
    slug: text(fd, "slug")
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, ""),
    excerpt: nullable(fd, "excerpt"),
    content: text(fd, "content"),
    category: nullable(fd, "category"),
    coverImageUrl: nullable(fd, "cover_image_url"),
    published: bool(fd, "published"),
    publishedAt: nullable(fd, "published_at"),
  };
}

function publicRevalidation(
  resource: string,
  fd: FormData,
  carId?: string,
): { tag: string; path?: string } | undefined {
  if (resource === "testimonials") return { tag: CACHE_TAGS.testimonials };
  if (resource === "articles") return { tag: CACHE_TAGS.articles };
  if (resource === "reviews" || resource === "car-parts") {
    const resolvedCarId = text(fd, "car_id") || carId;
    if (resolvedCarId)
      return {
        tag: CACHE_TAGS.car(resolvedCarId),
        path: CACHE_PATHS.carDetail(resolvedCarId),
      };
    return { tag: CACHE_TAGS.cars };
  }
  return undefined;
}

export async function createRecord(formData: FormData): Promise<ActionResult> {
  const resource = text(formData, "resource");
  assertResource(resource);

  let createdId = "";
  try {
    if (resource === "leads") {
      const lead = await createLead(leadPayload(formData));
      createdId = lead.id;
    } else if (resource === "reviews") {
      const review = await createCarReview(reviewPayload(formData));
      createdId = review.id;
    } else if (resource === "testimonials") {
      const testimonial = await createTestimonial(testimonialPayload(formData));
      createdId = testimonial.id;
    } else if (resource === "car-parts") {
      const part = await createCarPart(carPartPayload(formData));
      createdId = part.id;
    } else {
      const article = await createArticle(articlePayload(formData));
      createdId = article.id;
    }
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    return { ok: false, error: message };
  }

  revalidatePath(`/${resource}`);
  revalidatePath(`/${resource}/${createdId}`);
  const revalidate = publicRevalidation(resource, formData, createdId);
  if (revalidate) await triggerRevalidation(revalidate);
  redirect(`/${resource}/${createdId}`);
}

export async function updateRecord(formData: FormData): Promise<ActionResult> {
  const resource = text(formData, "resource");
  const id = text(formData, "id");
  assertResource(resource);

  try {
    if (resource === "leads") {
      await updateLead(id, leadPayload(formData));
    } else if (resource === "reviews") {
      await updateCarReview(id, reviewPayload(formData));
    } else if (resource === "testimonials") {
      await updateTestimonial(id, testimonialPayload(formData));
    } else if (resource === "car-parts") {
      await updateCarPart(id, carPartPayload(formData));
    } else {
      await updateArticle(id, articlePayload(formData));
    }
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    return { ok: false, error: message };
  }

  revalidatePath(`/${resource}`);
  revalidatePath(`/${resource}/${id}`);
  const revalidate = publicRevalidation(resource, formData, id);
  if (revalidate) await triggerRevalidation(revalidate);
  redirect(`/${resource}/${id}`);
}

export async function deleteRecord(formData: FormData): Promise<ActionResult> {
  const resource = text(formData, "resource");
  const id = text(formData, "id");
  assertResource(resource);

  let carId: string | undefined;
  try {
    if (resource === "leads") {
      await deleteLead(id);
    } else if (resource === "reviews") {
      const deleted = await deleteCarReview(id);
      carId = deleted.carId;
    } else if (resource === "testimonials") {
      await deleteTestimonial(id);
    } else if (resource === "car-parts") {
      const deleted = await deleteCarPart(id);
      carId = deleted.carId;
    } else {
      await deleteArticle(id);
    }
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    return { ok: false, error: message };
  }

  revalidatePath(`/${resource}`);
  const revalidate = publicRevalidation(resource, formData, carId);
  if (revalidate) await triggerRevalidation(revalidate);
  redirect(`/${resource}`);
}
