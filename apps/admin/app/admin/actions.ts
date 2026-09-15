"use server";
import { createSupabaseServerClient } from "@icar-gezina/supabase/server";
import { redirect } from "next/navigation";
export async function login(formData: FormData) {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const supabase = await createSupabaseServerClient();
  const { error } = await supabase.auth.signInWithPassword({ email, password });
  if (error) return redirect("/admin/login?error=Could not authenticate user");
  return redirect("/admin");
}
export async function logout() {
  const supabase = await createSupabaseServerClient();
  await supabase.auth.signOut();
  return redirect("/admin/login");
}
