import { requireAdmin } from "@icar-gezina/supabase/server";
import { redirect } from "next/navigation";

export default async function AdminHomePage() {
  const { user, profile } = await requireAdmin();
  if (!user) redirect("/admin/login");
  if (!profile) redirect("/admin/unauthorized");
  redirect("/dashboard");
}
