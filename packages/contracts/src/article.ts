import { z } from "zod";

export const articleSchema = z.object({
  id: z.string().optional(),
  title: z.string(),
  slug: z.string(),
  category: z.string().nullish(),
  excerpt: z.string().nullish(),
  content: z.string(),
  coverImageUrl: z.string().nullish(),
  published: z.boolean().default(false),
  publishedAt: z.string().nullish(),
  createdAt: z.string().optional(),
});

export type ArticleType = z.infer<typeof articleSchema>;
