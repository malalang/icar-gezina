'use client';

import { useState } from 'react';
import { submitLead } from '@/app/(client)/actions';

export function CarLeadForms({ carId }: { carId: string }) {
  const [modal, setModal] = useState<'none' | 'enquire' | 'test_drive'>('none');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    const formData = new FormData(e.currentTarget);
    formData.append('carId', carId);
    formData.append('type', modal === 'enquire' ? 'Enquiry' : 'Test Drive');
    
    await submitLead(formData);
    setStatus('success');
  };

  if (status === 'success') {
    return (
      <div className="bg-green-50 border border-green-200 text-green-800 p-4 rounded-xl text-center">
        <div className="font-bold mb-1">Success!</div>
        <p className="text-sm">We&apos;ve received your details. Our team will contact you shortly.</p>
        <button onClick={() => { setModal('none'); setStatus('idle'); }} className="mt-3 text-xs font-bold uppercase text-green-700 hover:underline">
          Close
        </button>
      </div>
    );
  }

  if (modal === 'none') {
    return (
      <div className="space-y-3">
        <button onClick={() => setModal('enquire')} className="w-full bg-blue-600 text-white font-bold rounded-lg py-3 text-sm shadow-lg shadow-blue-200 transition hover:bg-blue-700">
          Enquire Now
        </button>
        <button onClick={() => setModal('test_drive')} className="w-full bg-slate-100 text-slate-900 font-bold rounded-lg py-3 text-sm transition hover:bg-slate-200">
          Book a Test Drive
        </button>
      </div>
    );
  }

  return (
    <div className="bg-slate-50 border border-slate-200 p-4 rounded-xl">
      <div className="flex justify-between items-center mb-3">
        <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest">
          {modal === 'enquire' ? 'Vehicle Enquiry' : 'Test Drive Booking'}
        </h4>
        <button onClick={() => setModal('none')} className="text-slate-400 hover:text-red-500 text-lg leading-none">&times;</button>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-3">
        <div>
          <input name="name" type="text" required placeholder="Full Name" className="w-full border border-slate-200 rounded px-3 py-2 text-sm outline-none focus:border-blue-500" />
        </div>
        <div>
          <input name="email" type="email" required placeholder="Email Address" className="w-full border border-slate-200 rounded px-3 py-2 text-sm outline-none focus:border-blue-500" />
        </div>
        <div>
          <input name="phone" type="tel" required placeholder="Phone Number" className="w-full border border-slate-200 rounded px-3 py-2 text-sm outline-none focus:border-blue-500" />
        </div>
        
        {modal === 'test_drive' && (
          <div>
            <input name="preferredDate" type="date" required className="w-full border border-slate-200 rounded px-3 py-2 text-sm outline-none focus:border-blue-500 text-slate-500" />
          </div>
        )}

        <div>
          <textarea name="message" rows={2} placeholder="Any specific questions?" className="w-full border border-slate-200 rounded px-3 py-2 text-sm outline-none focus:border-blue-500"></textarea>
        </div>

        <button disabled={status === 'submitting'} type="submit" className="w-full bg-slate-900 text-white font-bold rounded-lg py-3 text-sm transition hover:bg-slate-800 disabled:opacity-50">
          {status === 'submitting' ? 'Submitting...' : 'Submit Details'}
        </button>
      </form>
    </div>
  );
}
