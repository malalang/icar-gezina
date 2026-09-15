import { z } from "zod";

export const testimonialSchema = z.object({
  id: z.string().optional(),
  author: z.string(),
  role: z.string(),
  content: z.string(),
  avatar: z.string(),
  createdAt: z.string().optional(),
});

export type Testimonial = z.infer<typeof testimonialSchema>;
