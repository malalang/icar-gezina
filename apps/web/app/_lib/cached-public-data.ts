import { CACHE_TAGS } from "@icar-gezina/supabase/cache";
import { getPublishedArticles } from "@icar-gezina/supabase/Queries/articles";
import { getCarById, getCars } from "@icar-gezina/supabase/Queries/cars";
import { getTestimonials } from "@icar-gezina/supabase/Queries/testimonials";
import { unstable_cache } from "next/cache";

export const getCachedCars = async () =>
  unstable_cache(async () => getCars(), ["cars"], {
    tags: [CACHE_TAGS.cars],
  })();

export const getCachedCarById = async (id: string) =>
  unstable_cache(async () => getCarById(id), [`car-${id}`], {
    tags: [CACHE_TAGS.car(id)],
  })();

export const getCachedTestimonials = async () =>
  unstable_cache(async () => getTestimonials(), ["testimonials"], {
    tags: [CACHE_TAGS.testimonials],
  })();

export const getCachedArticles = async () =>
  unstable_cache(async () => getPublishedArticles(), ["articles"], {
    tags: [CACHE_TAGS.articles],
  })();
