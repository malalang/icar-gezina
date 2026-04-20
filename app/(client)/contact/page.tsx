import { submitLead } from '@/app/(client)/actions';

export default function ContactPage() {
  return (
    <div className="bg-slate-50 min-h-screen py-20">
      <div className="max-w-3xl mx-auto px-4">
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="bg-slate-900 border-b border-slate-800 p-8 text-center text-white">
            <h1 className="text-3xl font-bold italic tracking-tight uppercase">Contact <span className="text-blue-500">Us</span></h1>
            <p className="mt-2 text-slate-400 text-sm">Have a question? We&apos;d love to hear from you. Send us a message and we&apos;ll respond as soon as possible.</p>
          </div>
          
          <div className="p-8 md:p-12">
            <form action={submitLead} className="space-y-6">
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
                <button type="submit" className="bg-blue-600 text-white font-bold rounded-lg px-10 py-4 shadow-lg shadow-blue-200 hover:bg-blue-700 transition">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
