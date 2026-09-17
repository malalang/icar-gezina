import type { LeadType } from "@icar-gezina/contracts/lead";
import { createSupabaseServerClient } from "../server";
import type { Database } from "../supabaseType";

type LeadRow = Database["public"]["Tables"]["leads"]["Row"];

function normalizeLead(row: LeadRow): LeadType {
  return {
    id: row.id,
    type: row.type as LeadType["type"],
    name: row.name,
    email: row.email,
    phone: row.phone,
    message: row.message ?? undefined,
    carId: row.car_id ?? undefined,
    preferredDate: row.preferred_date ?? undefined,
    status: row.status,
    createdAt: row.created_at,
  };
}

export async function getLeads(): Promise<LeadType[]> {
  const supabase = await createSupabaseServerClient();
  const { data, error } = await supabase
    .from("leads")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    throw new Error(`Unable to load leads: ${error.message}`);
  }

  return (data ?? []).map(normalizeLead);
}
