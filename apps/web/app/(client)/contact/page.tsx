'use client';

import { useState } from 'react';
import { submitLead } from '@/app/(client)/actions';
import { ArrowRight, Clock3, Mail, MapPin, MessageCircle, Phone, Send } from 'lucide-react';

const dealership = {
  address: '669 Johan Heyns Dr, Gezina, Pretoria, 0031, South Africa',
  phone: '+27 12 329 5560',
  phoneHref: '+27123295560',
  email: 'sales@icargezina.co.za',
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=ICar%20Gezina%20669%20Johan%20Heyns%20Dr%20Gezina%20Pretoria',
  whatsappUrl: 'https://wa.me/27123295560?text=Hi%20ICar%20Gezina%2C%20I%27d%20like%20to%20get%20in%20touch.',
};

const hours = [
  ['Monday', '08:30 – 17:30'], ['Tuesday', '08:30 – 17:30'], ['Wednesday', '08:30 – 17:30'],
  ['Thursday', '08:30 – 17:30'], ['Friday', '08:30 – 17:30'], ['Saturday', '08:30 – 13:00'], ['Sunday', 'Closed'],
];

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
      e.currentTarget.reset();
      setTimeout(() => setStatus('idle'), 5000);
    } else {
      setStatus('error');
      setErrorMessage(result.error || 'Failed to submit. Please try again.');
    }
  };

  if (status === 'success') return (
    <main className="min-h-screen bg-[#282828] px-4 py-24 text-white">
      <div className="mx-auto max-w-2xl rounded-3xl bg-white p-10 text-center text-[#282828] shadow-2xl">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-3xl font-black text-green-600">✓</div>
        <h1 className="mt-6 text-3xl font-black">Message received.</h1>
        <p className="mt-3 leading-7 text-slate-500">Thank you for reaching out. The ICar Gezina team will contact you shortly.</p>
      </div>
    </main>
  );

  return (
    <main className="min-h-screen bg-[#282828] text-white">
      <section className="relative isolate overflow-hidden bg-gradient-to-br from-[#171717] via-[#282828] to-[#101010]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_20%,rgba(232,117,26,0.25),transparent_38%),radial-gradient(circle_at_15%_80%,rgba(0,114,188,0.18),transparent_35%)]" />
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
          <p className="mb-5 text-xs font-black uppercase tracking-[0.28em] text-[#E8751A]">ICar Gezina / Contact</p>
          <h1 className="max-w-4xl text-5xl font-black uppercase italic tracking-tight sm:text-6xl lg:text-7xl">Let&apos;s talk <span className="text-[#E8751A]">cars.</span></h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">Whether you are looking for your next vehicle, need help with finance, or simply have a question, our team is ready to help.</p>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#202020]">
        <div className="mx-auto grid max-w-7xl gap-3 px-4 py-6 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
          <a href={`tel:${dealership.phoneHref}`} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition hover:border-[#E8751A]/60"><Phone className="mb-4 h-5 w-5 text-[#E8751A]" /><p className="text-[11px] font-black uppercase tracking-widest text-slate-500">Call us</p><p className="mt-1 font-bold">{dealership.phone}</p></a>
          <a href={`mailto:${dealership.email}`} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition hover:border-[#E8751A]/60"><Mail className="mb-4 h-5 w-5 text-[#E8751A]" /><p className="text-[11px] font-black uppercase tracking-widest text-slate-500">Email</p><p className="mt-1 break-all font-bold">{dealership.email}</p></a>
          <a href={dealership.whatsappUrl} target="_blank" rel="noreferrer" className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition hover:border-[#E8751A]/60"><MessageCircle className="mb-4 h-5 w-5 text-[#E8751A]" /><p className="text-[11px] font-black uppercase tracking-widest text-slate-500">WhatsApp</p><p className="mt-1 font-bold">Chat with our team</p></a>
          <a href={dealership.mapsUrl} target="_blank" rel="noreferrer" className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition hover:border-[#E8751A]/60"><MapPin className="mb-4 h-5 w-5 text-[#E8751A]" /><p className="text-[11px] font-black uppercase tracking-widest text-slate-500">Visit us</p><p className="mt-1 font-bold">Gezina, Pretoria</p></a>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[.85fr_1.15fr] lg:px-8 lg:py-20">
        <div className="space-y-8">
          <div><p className="text-xs font-black uppercase tracking-[0.25em] text-[#E8751A]">Get in touch</p><h2 className="mt-3 text-3xl font-black sm:text-4xl">Tell us what you need.</h2><p className="mt-5 leading-7 text-slate-400">Looking for a specific car, need finance guidance, or have a question about our showroom? Send us a message and our team will get back to you.</p></div>
          <div className="rounded-3xl border border-white/10 bg-[#1d1d1d] p-7"><div className="flex items-start gap-4"><MapPin className="mt-1 h-5 w-5 shrink-0 text-[#E8751A]" /><div><p className="font-bold">Visit the showroom</p><p className="mt-2 text-sm leading-6 text-slate-400">{dealership.address}</p><a href={dealership.mapsUrl} target="_blank" rel="noreferrer" className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-[#0072BC]">Get directions <ArrowRight className="h-4 w-4" /></a></div></div></div>
          <div className="rounded-3xl border border-white/10 bg-white p-7 text-[#282828]"><div className="flex items-center gap-3"><Clock3 className="h-5 w-5 text-[#E8751A]" /><p className="font-black">Showroom hours</p></div><div className="mt-4 divide-y divide-slate-100">{hours.map(([day, time]) => <div key={day} className="flex justify-between py-2.5 text-sm"><span className="font-semibold">{day}</span><span className={time === 'Closed' ? 'text-slate-400' : 'text-slate-600'}>{time}</span></div>)}</div></div>
        </div>

        <div className="overflow-hidden rounded-3xl bg-white text-[#282828] shadow-2xl">
          <div className="bg-[#202020] px-7 py-8 text-white md:px-10"><p className="text-xs font-black uppercase tracking-[0.2em] text-[#E8751A]">Send us a message</p><h2 className="mt-2 text-3xl font-black">How can we help?</h2><p className="mt-3 max-w-xl text-sm leading-6 text-slate-400">Give us a few details and we&apos;ll route your enquiry to the right ICar Gezina team.</p></div>
          <form onSubmit={handleSubmit} className="p-7 md:p-10">
            {status === 'error' && <div role="alert" className="mb-6 rounded-xl border border-red-200 bg-red-50 p-4 text-sm font-medium text-red-800">{errorMessage}</div>}
            <input type="hidden" name="type" value="Contact Us" />
            <div className="grid gap-6 md:grid-cols-2">
              <label className="block"><span className="mb-2 block text-xs font-black uppercase tracking-widest text-slate-500">Full name <b className="text-[#E8751A]">*</b></span><input name="name" required autoComplete="name" placeholder="Your full name" className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 outline-none transition focus:border-[#E8751A] focus:bg-white focus:ring-2 focus:ring-[#E8751A]/10" /></label>
              <label className="block"><span className="mb-2 block text-xs font-black uppercase tracking-widest text-slate-500">Phone <b className="text-[#E8751A]">*</b></span><input name="phone" required type="tel" autoComplete="tel" placeholder="082 123 4567" className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 outline-none transition focus:border-[#E8751A] focus:bg-white focus:ring-2 focus:ring-[#E8751A]/10" /></label>
            </div>
            <label className="mt-6 block"><span className="mb-2 block text-xs font-black uppercase tracking-widest text-slate-500">Email address <b className="text-[#E8751A]">*</b></span><input name="email" required type="email" autoComplete="email" placeholder="you@example.com" className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 outline-none transition focus:border-[#E8751A] focus:bg-white focus:ring-2 focus:ring-[#E8751A]/10" /></label>
            <label className="mt-6 block"><span className="mb-2 block text-xs font-black uppercase tracking-widest text-slate-500">Enquiry type</span><select name="subject" className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 outline-none transition focus:border-[#E8751A] focus:bg-white focus:ring-2 focus:ring-[#E8751A]/10"><option value="Vehicle enquiry">I&apos;m interested in a vehicle</option><option value="Finance enquiry">I have a finance question</option><option value="Sell vehicle">I want to sell my vehicle</option><option value="General enquiry">General enquiry</option></select></label>
            <label className="mt-6 block"><span className="mb-2 block text-xs font-black uppercase tracking-widest text-slate-500">Message <b className="text-[#E8751A]">*</b></span><textarea name="message" required rows={6} placeholder="Tell us what you need help with..." className="w-full resize-y rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 outline-none transition focus:border-[#E8751A] focus:bg-white focus:ring-2 focus:ring-[#E8751A]/10" /></label>
            <div className="mt-7 flex flex-col gap-4 border-t border-slate-100 pt-6 sm:flex-row sm:items-center sm:justify-between"><p className="max-w-md text-xs leading-5 text-slate-400">By submitting this form, you agree that ICar Gezina may contact you regarding your enquiry.</p><button type="submit" disabled={status === 'submitting'} className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#E8751A] px-7 py-3.5 font-black text-white transition hover:-translate-y-0.5 hover:bg-[#d76712] disabled:cursor-not-allowed disabled:opacity-50">{status === 'submitting' ? 'Sending...' : 'Send message'} <Send className="h-4 w-4" /></button></div>
          </form>
        </div>
      </section>

      <section className="bg-[#0072BC] px-4 py-14 sm:px-6 lg:px-8"><div className="mx-auto flex max-w-7xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between"><div><p className="text-sm font-bold uppercase tracking-[0.2em] text-white/70">Ready for your next car?</p><h2 className="mt-2 text-3xl font-black">Explore the ICar Gezina showroom.</h2></div><a href="/cars" className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-7 py-4 font-black text-[#282828]">View vehicles <ArrowRight className="h-4 w-4" /></a></div></section>
    </main>
  );
}
