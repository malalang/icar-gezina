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

  if (status === 'success') {
    return (
      <div className="bg-slate-50 min-h-screen py-20">
        <div className="max-w-3xl mx-auto px-4">
          <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">✓ Success!</div>
            <p className="text-green-800">Thank you for reaching out. We&apos;ve received your message and will contact you shortly.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-slate-50 min-h-screen py-20">
      <div className="max-w-3xl mx-auto px-4">
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="bg-slate-900 border-b border-slate-800 p-8 text-center text-white">
            <h1 className="text-3xl font-bold italic tracking-tight uppercase">Contact <span className="text-blue-500">Us</span></h1>
            <p className="mt-2 text-slate-400 text-sm">Have a question? We&apos;d love to hear from you. Send us a message and we&apos;ll respond as soon as possible.</p>
          </div>
          
          <div className="p-8 md:p-12">
            {status === 'error' && (
              <div className="bg-red-50 border border-red-200 text-red-800 p-4 rounded-lg mb-6">
                {errorMessage}
              </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-6">
              <input type="hidden" name="type" value="Contact Us" />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Full Name</label>
                  <input name="name" type="text" required className="w-full border border-slate-200 rounded-lg px-4 py-3 text-sm outline-none focus:border-blue-500 bg-slate-50" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Phone Number</label>
                  <input name="phone" type="tel" required className="w-full border border-slate-200 rounded-lg px-4 py-3 text-sm outline-none focus:border-blue-500 bg-slate-50" />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Email Address</label>
                <input name="email" type="email" required className="w-full border border-slate-200 rounded-lg px-4 py-3 text-sm outline-none focus:border-blue-500 bg-slate-50" />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Your Message</label>
                <textarea name="message" rows={6} required placeholder="How can we help you?" className="w-full border border-slate-200 rounded-lg px-4 py-3 text-sm outline-none focus:border-blue-500 bg-slate-50"></textarea>
              </div>

              <div className="pt-4 border-t border-slate-100 flex justify-end">
                <button 
                  type="submit" 
                  disabled={status === 'submitting'}
                  className="bg-blue-600 text-white font-bold rounded-lg px-10 py-4 shadow-lg shadow-blue-200 hover:bg-blue-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === 'submitting' ? 'Sending...' : 'Send Message'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
