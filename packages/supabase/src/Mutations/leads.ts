import type { LeadInput } from "@icar-gezina/contracts/lead";
import { requireAdminUser } from "../auth";
import {
  createSupabasePublicClient,
  createSupabaseServerClient,
} from "../server";

export type LeadInsertPayload = {
  type: string;
  name: string;
  email: string;
  phone: string;
  message?: string | null;
  carId?: string | null;
  preferredDate?: string | null;
  status?: string;
};

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

export async function createLead(data: LeadInsertPayload) {
  await requireAdminUser();
  const supabase = await createSupabaseServerClient();
  const { data: lead, error } = await supabase
    .from("leads")
    .insert({
      type: data.type,
      name: data.name,
      email: data.email,
      phone: data.phone,
      message: data.message ?? null,
      car_id: data.carId ?? null,
      preferred_date: data.preferredDate ?? null,
      status: data.status ?? "New",
    })
    .select("id")
    .single();

  if (error) {
    throw new Error(`Unable to create lead: ${error.message}`);
  }

  return lead;
}

export async function updateLead(id: string, data: LeadInsertPayload) {
  await requireAdminUser();
  const supabase = await createSupabaseServerClient();
  const { error } = await supabase
    .from("leads")
    .update({
      type: data.type,
      name: data.name,
      email: data.email,
      phone: data.phone,
      message: data.message ?? null,
      car_id: data.carId ?? null,
      preferred_date: data.preferredDate ?? null,
      status: data.status ?? "New",
    })
    .eq("id", id);

  if (error) {
    throw new Error(`Unable to update lead: ${error.message}`);
  }

  return { id };
}

export async function deleteLead(id: string) {
  await requireAdminUser();
  const supabase = await createSupabaseServerClient();
  const { error } = await supabase.from("leads").delete().eq("id", id);

  if (error) {
    throw new Error(`Unable to delete lead: ${error.message}`);
  }

  return { id };
}
