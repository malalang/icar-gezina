"use client";

import { Send } from "lucide-react";
import { useState } from "react";
import { submitLead } from "@/app/(client)/actions";

export function ContactForm() {
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");
    const formData = new FormData(e.currentTarget);
    const result = await submitLead(formData);
    if (result.ok) {
      setStatus("success");
      (e.target as HTMLFormElement).reset();
      setTimeout(() => setStatus("idle"), 5000);
    } else {
      setStatus("error");
      setErrorMessage(result.error);
    }
  };

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-green-200 bg-green-50 p-8 text-center">
        <div className="mb-2 text-3xl font-bold text-green-600">
          &#10003; Success!
        </div>
        <p className="text-green-800 mx-auto max-w-sm">
          Thank you for reaching out. We&apos;ve received your message and will
          contact you shortly.
        </p>
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-white text-slate-900 shadow-2xl">
      <div className="border-b border-slate-200 bg-slate-900 p-8 text-white">
        <h2 className="text-2xl font-bold">Send us a message</h2>
        <p className="mt-2 text-sm text-slate-400">
          Tell us what you need and the ICar Gezina team will get back to you.
        </p>
      </div>
      <div className="p-8 md:p-12">
        {status === "error" && (
          <div className="mb-6 rounded-xl border border-red-200 bg-red-50 p-4 text-sm font-medium text-red-800">
            {errorMessage}
          </div>
        )}
        <form onSubmit={handleSubmit} className="space-y-6">
          <input type="hidden" name="type" value="Contact Us" />
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <label className="block">
              <span className="mb-2 block text-xs font-black uppercase tracking-widest text-slate-500">
                Full Name <b className="text-[#E8751A]">*</b>
              </span>
              <input
                name="name"
                type="text"
                required
                autoComplete="name"
                placeholder="Your full name"
                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm outline-none transition focus:border-[#E8751A] focus:bg-white focus:ring-2 focus:ring-[#E8751A]/10"
              />
            </label>
            <label className="block">
              <span className="mb-2 block text-xs font-black uppercase tracking-widest text-slate-500">
                Phone Number <b className="text-[#E8751A]">*</b>
              </span>
              <input
                name="phone"
                type="tel"
                required
                autoComplete="tel"
                placeholder="082 123 4567"
                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm outline-none transition focus:border-[#E8751A] focus:bg-white focus:ring-2 focus:ring-[#E8751A]/10"
              />
            </label>
          </div>
          <label className="block">
            <span className="mb-2 block text-xs font-black uppercase tracking-widest text-slate-500">
              Email Address <b className="text-[#E8751A]">*</b>
            </span>
            <input
              name="email"
              type="email"
              required
              autoComplete="email"
              placeholder="you@example.com"
              className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm outline-none transition focus:border-[#E8751A] focus:bg-white focus:ring-2 focus:ring-[#E8751A]/10"
            />
          </label>
          <label className="block">
            <span className="mb-2 block text-xs font-black uppercase tracking-widest text-slate-500">
              Your Message <b className="text-[#E8751A]">*</b>
            </span>
            <textarea
              name="message"
              rows={6}
              required
              placeholder="How can we help you?"
              className="w-full resize-y rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm outline-none transition focus:border-[#E8751A] focus:bg-white focus:ring-2 focus:ring-[#E8751A]/10"
            />
          </label>
          <div className="flex flex-col gap-4 border-t border-slate-100 pt-5 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs leading-5 text-slate-400">
              By submitting, you agree that ICar Gezina may contact you
              regarding your enquiry.
            </p>
            <button
              type="submit"
              disabled={status === "submitting"}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#E8751A] px-8 py-3.5 font-black text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-[#d76712] disabled:cursor-not-allowed disabled:opacity-50"
            >
              {status === "submitting" ? "Sending..." : "Send Message"}{" "}
              <Send className="h-4 w-4" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
