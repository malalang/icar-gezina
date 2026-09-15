"use server";

import type { ActionResult } from "@icar-gezina/contracts/actionResult";
import { leadInputSchema } from "@icar-gezina/contracts/lead";
import { submitLead as submitLeadMutation } from "@icar-gezina/supabase/Mutations/leads";

export async function submitLead(formData: FormData): Promise<ActionResult> {
  const parsed = leadInputSchema.safeParse({
    type: formData.get("type"),
    name: formData.get("name"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    message: formData.get("message") || undefined,
    carId: formData.get("carId") || undefined,
    preferredDate: formData.get("preferredDate") || undefined,
  });

  if (!parsed.success) {
    const fieldErrors: Record<string, string[]> = {};
    for (const issue of parsed.error.issues) {
      const key = String(issue.path[0] ?? "message");
      fieldErrors[key] = [issue.message];
    }
    return {
      ok: false,
      error: "Please check your details and try again.",
      fieldErrors,
    };
  }

  try {
    await submitLeadMutation(parsed.data);
  } catch (error) {
    console.error("Failed to submit lead:", error);
    return { ok: false, error: "Something went wrong. Please try again." };
  }

  return {
    ok: true,
    message:
      "Thanks! We have received your enquiry and will be in touch shortly.",
  };
}
