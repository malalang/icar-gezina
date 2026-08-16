'use client';

import { useState } from 'react';
import { submitLead } from '@/app/(client)/actions';
import { Clock3, Mail, MapPin, Phone, MessageCircle, ArrowRight, ExternalLink, Send } from 'lucide-react';

const dealership = {
  address: '669 Johan Heyns Dr, Gezina, Pretoria, 0031, South Africa',
  phone: '+27 12 329 5560',
  phoneHref: '+27123295560',
  email: 'sales@icargezina.co.za',
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=ICar%20Gezina%20669%20Johan%20Heyns%20Dr%20Gezina%20Pretoria',
  whatsappUrl: 'https://wa.me/27123295560?text=Hi%20ICar%20Gezina%2C%20I%27d%20like%20to%20get%20in%20touch.',
};

const hours = [
  ['Monday', '08:30 – 17:30'],
  ['Tuesday', '08:30 – 17:30'],
  ['Wednesday', '08:30 – 17:30'],
  ['Thursday', '08:30 – 17:30'],
  ['Friday', '08:30 – 17:30'],
  ['Saturday', '08:30 – 13:00'],
  ['Sunday', 'Closed'],
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

      <section className="border-b border-white/10 bg-[#202020]">
        <div className="mx-auto grid max-w-7xl gap-4 px-4 py-8 sm:grid-cols-2 lg:grid-cols-4 sm:px-6 lg:px-8">
          <a href={`tel:${dealership.phoneHref}`} className="group rounded-xl border border-white/10 bg-white/[0.03] p-5 transition hover:border-[#E8751A]/50 hover:bg-white/[0.06]"><Phone className="mb-4 h-6 w-6 text-[#E8751A]" /><p className="text-xs font-bold uppercase tracking-widest text-slate-400">Call us</p><p className="mt-1 font-semibold">{dealership.phone}</p></a>
          <a href={`mailto:${dealership.email}`} className="group rounded-xl border border-white/10 bg-white/[0.03] p-5 transition hover:border-[#E8751A]/50 hover:bg-white/[0.06]"><Mail className="mb-4 h-6 w-6 text-[#E8751A]" /><p className="text-xs font-bold uppercase tracking-widest text-slate-400">Email</p><p className="mt-1 font-semibold break-all">{dealership.email}</p></a>
          <a href={dealership.whatsappUrl} target="_blank" rel="noreferrer" className="group rounded-xl border border-white/10 bg-white/[0.03] p-5 transition hover:border-[#E8751A]/50 hover:bg-white/[0.06]"><MessageCircle className="mb-4 h-6 w-6 text-[#E8751A]" /><p className="text-xs font-bold uppercase tracking-widest text-slate-400">WhatsApp</p><p className="mt-1 font-semibold">Chat with our team</p></a>
          <a href={dealership.mapsUrl} target="_blank" rel="noreferrer" className="group rounded-xl border border-white/10 bg-white/[0.03] p-5 transition hover:border-[#E8751A]/50 hover:bg-white/[0.06]"><MapPin className="mb-4 h-6 w-6 text-[#E8751A]" /><p className="text-xs font-bold uppercase tracking-widest text-slate-400">Visit us</p><p className="mt-1 font-semibold">Gezina, Pretoria</p></a>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.05fr_.95fr] lg:px-8 lg:py-20">
        <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#1d1d1d] shadow-2xl">
          <div className="p-7 sm:p-9"><div className="flex items-center gap-3"><MapPin className="h-6 w-6 text-[#E8751A]" /><div><p className="text-xs font-bold uppercase tracking-[0.2em] text-[#E8751A]">Find us</p><h2 className="mt-1 text-2xl font-black">Visit the ICar Gezina showroom</h2></div></div><p className="mt-5 max-w-xl leading-7 text-slate-400">Come through to our Gezina showroom, browse the latest arrivals and speak to our team in person.</p><p className="mt-5 font-semibold text-white">{dealership.address}</p><a href={dealership.mapsUrl} target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-2 rounded-lg bg-[#0072BC] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#0064a7]">Get directions <ExternalLink className="h-4 w-4" /></a></div>
          <div className="min-h-[300px] bg-[#111] p-3"><iframe title="ICar Gezina location map" src="https://www.google.com/maps?q=ICar%20Gezina%20669%20Johan%20Heyns%20Dr%20Gezina%20Pretoria&output=embed" className="h-[300px] w-full rounded-xl border-0" loading="lazy" referrerPolicy="no-referrer-when-downgrade" /></div>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white p-7 text-slate-900 shadow-2xl sm:p-9">
          <div className="flex items-center gap-3"><Clock3 className="h-6 w-6 text-[#E8751A]" /><div><p className="text-xs font-bold uppercase tracking-[0.2em] text-[#E8751A]">Showroom hours</p><h2 className="mt-1 text-2xl font-black">When to visit</h2></div></div>
          <div className="mt-7 divide-y divide-slate-100">{hours.map(([day, time]) => <div key={day} className="flex items-center justify-between py-3 text-sm"><span className="font-semibold">{day}</span><span className={time === 'Closed' ? 'font-semibold text-slate-400' : 'text-slate-600'}>{time}</span></div>)}</div>
          <div className="mt-7 rounded-xl bg-slate-50 p-5"><p className="font-bold">Planning a visit?</p><p className="mt-2 text-sm leading-6 text-slate-500">Call ahead or message us on WhatsApp and we can help you prepare for your visit.</p><a href={dealership.whatsappUrl} target="_blank" rel="noreferrer" className="mt-4 inline-flex items-center gap-2 font-bold text-[#0072BC]">Message us <ArrowRight className="h-4 w-4" /></a></div>
        </div>
      </section>

      <section className="bg-[#1d1d1d] px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[.8fr_1.2fr] lg:items-start">
          <div><p className="text-xs font-bold uppercase tracking-[0.25em] text-[#E8751A]">Get in touch</p><h2 className="mt-3 text-3xl font-black sm:text-4xl">Tell us what you need.</h2><p className="mt-5 max-w-md leading-7 text-slate-400">Looking for a specific car, need finance guidance, or have a question about our showroom? Send us a message and our team will get back to you.</p></div>
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-white text-slate-900 shadow-2xl">
            <div className="border-b border-slate-200 bg-slate-900 p-8 text-white"><h2 className="text-2xl font-bold">Send us a message</h2><p className="mt-2 text-sm text-slate-400">Tell us what you need and the ICar Gezina team will get back to you.</p></div>
            <div className="p-8 md:p-12">
              {status === 'error' && <div className="mb-6 rounded-xl border border-red-200 bg-red-50 p-4 text-sm font-medium text-red-800">{errorMessage}</div>}
              <form onSubmit={handleSubmit} className="space-y-6">
                <input type="hidden" name="type" value="Contact Us" />
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <label className="block"><span className="mb-2 block text-xs font-black uppercase tracking-widest text-slate-500">Full Name <b className="text-[#E8751A]">*</b></span><input name="name" type="text" required autoComplete="name" placeholder="Your full name" className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm outline-none transition focus:border-[#E8751A] focus:bg-white focus:ring-2 focus:ring-[#E8751A]/10" /></label>
                  <label className="block"><span className="mb-2 block text-xs font-black uppercase tracking-widest text-slate-500">Phone Number <b className="text-[#E8751A]">*</b></span><input name="phone" type="tel" required autoComplete="tel" placeholder="082 123 4567" className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm outline-none transition focus:border-[#E8751A] focus:bg-white focus:ring-2 focus:ring-[#E8751A]/10" /></label>
                </div>
                <label className="block"><span className="mb-2 block text-xs font-black uppercase tracking-widest text-slate-500">Email Address <b className="text-[#E8751A]">*</b></span><input name="email" type="email" required autoComplete="email" placeholder="you@example.com" className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm outline-none transition focus:border-[#E8751A] focus:bg-white focus:ring-2 focus:ring-[#E8751A]/10" /></label>
                <label className="block"><span className="mb-2 block text-xs font-black uppercase tracking-widest text-slate-500">Your Message <b className="text-[#E8751A]">*</b></span><textarea name="message" rows={6} required placeholder="How can we help you?" className="w-full resize-y rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm outline-none transition focus:border-[#E8751A] focus:bg-white focus:ring-2 focus:ring-[#E8751A]/10" /></label>
                <div className="flex flex-col gap-4 border-t border-slate-100 pt-5 sm:flex-row sm:items-center sm:justify-between"><p className="text-xs leading-5 text-slate-400">By submitting, you agree that ICar Gezina may contact you regarding your enquiry.</p><button type="submit" disabled={status === 'submitting'} className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#E8751A] px-8 py-3.5 font-black text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-[#d76712] disabled:cursor-not-allowed disabled:opacity-50">{status === 'submitting' ? 'Sending...' : 'Send Message'} <Send className="h-4 w-4" /></button></div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#E8751A] px-4 py-14 sm:px-6 lg:px-8"><div className="mx-auto flex max-w-7xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between"><div><p className="text-sm font-bold uppercase tracking-[0.2em] text-white/70">Ready for your next car?</p><h2 className="mt-2 text-3xl font-black text-white">Explore the ICar Gezina showroom.</h2></div><a href="/cars" className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#282828] px-7 py-4 font-bold text-white transition hover:bg-[#1a1a1a]">View vehicles <ArrowRight className="h-4 w-4" /></a></div></section>
    </div>
  );
}
