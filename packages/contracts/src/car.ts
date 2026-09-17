import { z } from "zod";

export const carPartSchema = z.object({
  id: z.string().optional(),
  name: z.string(),
  condition: z.string(),
  description: z.string(),
});

export const carReviewSchema = z.object({
  id: z.string().optional(),
  author: z.string(),
  rating: z.number(),
  comment: z.string(),
  date: z.string(),
});

export const carSchema = z.object({
  id: z.string(),
  make: z.string(),
  model: z.string(),
  year: z.number(),
  price: z.number(),
  mileage: z.number(),
  fuelType: z.string(),
  transmission: z.string(),
  bodyType: z.string(),
  color: z.string(),
  imageUrl: z.string(),
  galleryUrls: z.array(z.string()).default([]),
  description: z.string(),
  features: z.array(z.string()).default([]),
  createdAt: z.string().optional(),
  parts: z.array(carPartSchema).default([]),
  reviews: z.array(carReviewSchema).default([]),
});

export type CarType = z.infer<typeof carSchema>;
export type CarPartType = z.infer<typeof carPartSchema>;
export type CarReviewType = z.infer<typeof carReviewSchema>;
