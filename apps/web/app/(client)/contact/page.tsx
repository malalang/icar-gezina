'use client';

import { useState } from 'react';
import { submitLead } from '@/app/(client)/actions';

export default function ContactPage() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');
    const formData = new FormData(e.currentTarget);
    const result = await submitLead(formData);
    if (result.success) {
      setStatus('success');
      (e.target as HTMLFormElement).reset();
      setTimeout(() => setStatus('idle'), 5000);
    } else {
      setStatus('error');
      setErrorMessage(result.error || 'Failed to submit. Please try again.');
    }
  };

  if (status === 'success') return <div className="min-h-screen bg-[#282828] py-20"><div className="mx-auto max-w-3xl px-4"><div className="rounded-2xl border border-green-300/20 bg-green-50 p-8 text-center"><div className="mb-2 text-3xl font-bold text-green-600">✓ Success!</div><p className="text-green-800">Thank you for reaching out. We&apos;ve received your message and will contact you shortly.</p></div></div></div>;

  return (
    <div className="min-h-screen bg-[#282828] text-white">
      <section className="relative isolate overflow-hidden bg-gradient-to-br from-[#1b1b1b] via-[#282828] to-[#111]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_20%,rgba(232,117,26,0.28),transparent_38%),radial-gradient(circle_at_15%_80%,rgba(0,114,188,0.2),transparent_35%)]" />
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
          <div className="max-w-3xl">
            <div className="mb-5 inline-flex rounded-full border border-[#E8751A]/40 bg-[#E8751A]/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.25em] text-[#E8751A]">ICar Gezina</div>
            <h1 className="text-5xl font-black uppercase italic tracking-tight sm:text-6xl lg:text-7xl">Let&apos;s talk <span className="text-[#E8751A]">cars.</span></h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">Whether you are looking for your next vehicle, need help with finance, or simply have a question, our team is ready to help.</p>
            <div className="mt-8 flex flex-wrap gap-3 text-sm font-semibold text-slate-200"><span className="rounded-full bg-white/5 px-4 py-2">Vehicle enquiries</span><span className="rounded-full bg-white/5 px-4 py-2">Finance assistance</span><span className="rounded-full bg-white/5 px-4 py-2">Showroom support</span></div>
          </div>
        </div>
      </section>
      <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-2xl border border-white/10 bg-white text-slate-900 shadow-2xl">
          <div className="border-b border-slate-200 bg-slate-900 p-8 text-white"><h2 className="text-2xl font-bold">Send us a message</h2><p className="mt-2 text-sm text-slate-400">Tell us what you need and the ICar Gezina team will get back to you.</p></div>
          <div className="p-8 md:p-12">
            {status === 'error' && <div className="mb-6 rounded-lg border border-red-200 bg-red-50 p-4 text-red-800">{errorMessage}</div>}
            <form onSubmit={handleSubmit} className="space-y-6">
              <input type="hidden" name="type" value="Contact Us" />
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2"><div><label className="mb-2 block text-xs font-bold uppercase tracking-widest text-slate-500">Full Name</label><input name="name" type="text" required className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none focus:border-[#0072BC]" /></div><div><label className="mb-2 block text-xs font-bold uppercase tracking-widest text-slate-500">Phone Number</label><input name="phone" type="tel" required className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none focus:border-[#0072BC]" /></div></div>
              <div><label className="mb-2 block text-xs font-bold uppercase tracking-widest text-slate-500">Email Address</label><input name="email" type="email" required className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none focus:border-[#0072BC]" /></div>
              <div><label className="mb-2 block text-xs font-bold uppercase tracking-widest text-slate-500">Your Message</label><textarea name="message" rows={6} required placeholder="How can we help you?" className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none focus:border-[#0072BC]" /></div>
              <div className="flex justify-end border-t border-slate-100 pt-4"><button type="submit" disabled={status === 'submitting'} className="rounded-lg bg-[#E8751A] px-10 py-4 font-bold text-white shadow-lg transition hover:bg-[#d76712] disabled:cursor-not-allowed disabled:opacity-50">{status === 'submitting' ? 'Sending...' : 'Send Message'}</button></div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
