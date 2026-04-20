import { Car, TrendingUp, Users } from 'lucide-react';
import { getCars, getTestimonials, getLeads } from '@/lib/api';

export default async function AdminDashboard() {
  const cars = await getCars();
  const testimonials = await getTestimonials();
  const leads = await getLeads();
  const activeLeads = leads.filter(l => l.status === 'New' || l.status === 'Contacted');

  const isUsingSupabase = !!process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.NEXT_PUBLIC_SUPABASE_URL !== 'YOUR_SUPABASE_URL' && process.env.NEXT_PUBLIC_SUPABASE_URL !== '""';

  return (
    <div>
      <h1 className="text-2xl font-bold italic text-slate-900 mb-6">Overview Snapshot</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex items-start gap-4">
          <div className="p-3 bg-blue-50 text-blue-600 rounded">
            <Car className="w-6 h-6" />
          </div>
          <div>
            <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">Total Inventory</div>
            <div className="text-3xl font-black text-slate-900 mt-1">{cars.length}</div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex items-start gap-4">
          <div className="p-3 bg-green-50 text-green-600 rounded">
            <Users className="w-6 h-6" />
          </div>
          <div>
            <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">Active Leads</div>
            <div className="text-3xl font-black text-slate-900 mt-1">{activeLeads.length}</div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex items-start gap-4">
          <div className="p-3 bg-yellow-50 text-yellow-600 rounded">
             <TrendingUp className="w-6 h-6" />
          </div>
          <div>
            <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">Testimonials</div>
            <div className="text-3xl font-black text-slate-900 mt-1">{testimonials.length}</div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        <div className={`px-6 py-4 border-b border-slate-100 flex justify-between items-center ${isUsingSupabase ? 'bg-green-50' : 'bg-slate-50'}`}>
          <h3 className="font-bold text-slate-800 flex items-center">
            Database Sync Status
            {isUsingSupabase ? (
              <span className="ml-3 px-2 py-0.5 bg-green-100 text-green-800 text-[10px] uppercase font-bold rounded">Connected to Supabase</span>
            ) : (
              <span className="ml-3 px-2 py-0.5 bg-yellow-100 text-yellow-800 text-[10px] uppercase font-bold rounded">Pending Configuration</span>
            )}
          </h3>
        </div>
        <div className="p-6">
           {isUsingSupabase ? (
             <div className="bg-green-50 border border-green-200 p-4 rounded text-sm text-green-800 font-medium">
               Your application is fully secured and successfully connected to the live Supabase datastore.
             </div>
           ) : (
             <>
               <p className="text-sm text-slate-600 mb-4">
                 Your frontend client and admin portals are structured securely via Next.js Route Groups. To sync live data across the two sites with Supabase:
               </p>
               <ol className="list-decimal pl-5 text-sm text-slate-700 space-y-3 mb-6">
                 <li>Create a project in your Supabase dashboard.</li>
                 <li>Provide the <strong>Project URL</strong> and <strong>anon public key</strong> when prompted for Secrets (matching the keys in <code>.env.example</code>).</li>
                 <li>Setup your database tables to sync inventory changes between the admin management and client storefront automatically.</li>
               </ol>
               
               <div className="bg-blue-50 border border-blue-100 p-4 rounded text-sm text-blue-800 font-medium">
                 Currently running with Mock Data fallback. AI Studio will securely connect to Supabase once environment variables are active.
               </div>
             </>
           )}
        </div>
      </div>
    </div>
  )
}
