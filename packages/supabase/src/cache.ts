import type { RevalidationRequest } from "@icar-gezina/contracts/revalidation";

export const CACHE_TAGS = {
  cars: "cars",
  car: (id: string) => `car:${id}`,
  testimonials: "testimonials",
  articles: "articles",
} as const;

export const CACHE_PATHS = {
  home: "/",
  cars: "/cars",
  carDetail: (id: string) => `/cars/${id}`,
  testimonials: "/testimonials",
} as const;

export interface MutationResult<T> {
  data: T;
  revalidate: RevalidationRequest;
}

export function mutationResult<T>(
  data: T,
  revalidate: RevalidationRequest,
): MutationResult<T> {
  return { data, revalidate };
}
