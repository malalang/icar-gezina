"use client";

import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { submitLead } from "@/app/(client)/actions";

export function FinanceForm() {
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");
    const form = new FormData(e.currentTarget);
    const employment = String(form.get("employment") ?? "");
    const vehicle = String(form.get("vehicle") ?? "");

    const payload = new FormData();
    payload.set("type", "Finance Application");
    payload.set("name", String(form.get("name") ?? ""));
    payload.set("phone", String(form.get("phone") ?? ""));
    payload.set("email", String(form.get("email") ?? ""));
    payload.set(
      "message",
      ["Employment status:", employment, "Vehicle of interest:", vehicle]
        .filter(Boolean)
        .join(" "),
    );

    const result = await submitLead(payload);
    if (result.ok) {
      setStatus("success");
      (e.target as HTMLFormElement).reset();
      setTimeout(() => setStatus("idle"), 6000);
    } else {
      setStatus("error");
      setErrorMessage(result.error);
    }
  };

  if (status === "success") {
    return (
      <div className="rounded-3xl border border-green-400/20 bg-green-50 p-10 text-center">
        <div className="text-3xl font-black text-green-600">
          &#10003; Submissions received!
        </div>
        <p className="mx-auto mt-2 max-w-sm text-green-800">
          Thanks for your finance enquiry. Our finance team will contact you
          about your application and next steps.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl border border-white/10 bg-[#202020] p-6 shadow-2xl sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="text-xs font-semibold text-white/65">
          Full name
          <input
            name="name"
            required
            className="mt-2 h-12 w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 text-sm text-white outline-none transition focus:border-[#0072BC]"
          />
        </label>
        <label className="text-xs font-semibold text-white/65">
          Phone number
          <input
            name="phone"
            required
            type="tel"
            className="mt-2 h-12 w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 text-sm text-white outline-none transition focus:border-[#0072BC]"
          />
        </label>
        <label className="text-xs font-semibold text-white/65">
          Email address
          <input
            name="email"
            required
            type="email"
            className="mt-2 h-12 w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 text-sm text-white outline-none transition focus:border-[#0072BC]"
          />
        </label>
        <label className="text-xs font-semibold text-white/65">
          Employment status
          <select
            name="employment"
            className="mt-2 h-12 w-full rounded-xl border border-white/10 bg-[#202020] px-4 text-sm text-white/70 outline-none transition focus:border-[#0072BC]"
          >
            <option>Employed</option>
            <option>Self-employed</option>
            <option>Other</option>
          </select>
        </label>
        <label className="text-xs font-semibold text-white/65 sm:col-span-2">
          Vehicle of interest
          <input
            name="vehicle"
            placeholder="e.g. BMW X3"
            className="mt-2 h-12 w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 text-sm text-white outline-none transition placeholder:text-white/25 focus:border-[#0072BC]"
          />
        </label>
      </div>
      {status === "error" && (
        <p className="mt-5 rounded-xl border border-red-400/30 bg-red-400/10 p-4 text-sm font-medium text-red-200">
          {errorMessage}
        </p>
      )}
      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#E8751A] px-6 py-4 text-xs font-bold uppercase tracking-[0.14em] transition hover:bg-[#d76712] disabled:cursor-not-allowed disabled:opacity-50"
      >
        {status === "submitting" ? "Submitting..." : "Submit finance enquiry"}{" "}
        <ArrowRight className="h-4 w-4" />
      </button>
      <p className="mt-4 text-center text-[11px] leading-5 text-white/30">
        Submitting this form does not guarantee finance approval. Final approval
        is subject to the relevant lender&apos;s assessment and terms.
      </p>
    </form>
  );
}
