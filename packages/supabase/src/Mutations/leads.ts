import type { LeadInput } from "@icar-gezina/contracts/lead";
import { createSupabasePublicClient } from "../server";

// Public-facing insert used by the client lead form
// (apps/client/app/(client)/actions.ts). Auth is intentionally omitted
// because this runs as an unauthenticated public submission.
export async function submitLead(input: LeadInput) {
  const supabase = createSupabasePublicClient();
  const { data, error } = await supabase
    .from("leads")
    .insert({
      type: input.type,
      name: input.name,
      email: input.email,
      phone: input.phone,
      message: input.message ?? null,
      car_id: input.carId ?? null,
      preferred_date: input.preferredDate ?? null,
      status: "New",
    })
    .select("id")
    .single();

  if (error) {
    throw new Error(`Unable to submit enquiry: ${error.message}`);
  }

  return data;
}
