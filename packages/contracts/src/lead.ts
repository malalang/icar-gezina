import { z } from "zod";

export const leadTypeSchema = z.enum([
  "Enquiry",
  "Test Drive",
  "Contact Us",
  "Finance Application",
]);

export const leadInputSchema = z.object({
  type: leadTypeSchema,
  name: z.string().min(2, "Please enter your name."),
  email: z.email("Please enter a valid email address."),
  phone: z.string().min(7, "Please enter a valid phone number."),
  message: z.string().optional(),
  carId: z.string().optional(),
  preferredDate: z.string().optional(),
});

export const leadSchema = leadInputSchema.extend({
  id: z.string(),
  status: z.string(),
  createdAt: z.string(),
});

export type LeadInput = z.infer<typeof leadInputSchema>;
export type LeadType = z.infer<typeof leadSchema>;
