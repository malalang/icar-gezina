import { z } from "zod";

export const envSchema = z.object({
  NEXT_PUBLIC_SUPABASE_URL: z.string().url(),
  NEXT_PUBLIC_SUPABASE_ANON_KEY: z.string().min(1),
  SUPABASE_SERVICE_ROLE_KEY: z.string().min(1),
  REVALIDATION_SECRET: z.string().min(1),
  NEXT_PUBLIC_CLIENT_URL: z.string().url(),
});

export type Env = z.infer<typeof envSchema>;

export const clientEnvSchema = z.object({
  NEXT_PUBLIC_SUPABASE_URL: z.string().url(),
  NEXT_PUBLIC_SUPABASE_ANON_KEY: z.string().min(1),
  NEXT_PUBLIC_CLIENT_URL: z.string().url(),
});

export const adminEnvSchema = envSchema.extend({
  CLIENT_REVALIDATION_URL: z.string().url().optional(),
  ICARGEZINA_CLIENT_URL: z.string().url().optional(),
});

export type ClientEnv = z.infer<typeof clientEnvSchema>;
export type AdminEnv = z.infer<typeof adminEnvSchema>;
