import Link from 'next/link';
import { logout } from './actions';
import { createClient } from '@/utils/supabase/server';

export default async function AdminLayout({children}: {children: React.ReactNode}) {
  let user = null;
  // Try to grab user securely, fail silently if Supabase is unconfigured (to allow seeing visual fallback)
  try {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    if (supabaseUrl && supabaseUrl !== 'YOUR_SUPABASE_URL' && supabaseUrl !== '""') {
      const supabase = await createClient();
      const { data } = await supabase.auth.getUser();
      user = data.user;
    }
  } catch(e) {}
  
  return (
    <div className="flex bg-slate-100 min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-slate-900 text-slate-300 flex flex-col shrink-0">
        <div className="h-16 flex items-center px-6 border-b border-slate-800">
           <Link href="/admin" className="text-white font-bold tracking-tight text-xl uppercase">Icar<span className="text-blue-500">Admin</span></Link>
        </div>
        <nav className="p-4 space-y-2 flex-1 relative z-10">
          <Link href="/admin" className="block px-4 py-2 rounded hover:bg-slate-800 text-sm font-medium transition">Dashboard</Link>
          <Link href="/admin/cars" className="block px-4 py-2 rounded hover:bg-slate-800 text-sm font-medium transition">Inventory (Cars)</Link>
          <Link href="/admin/leads" className="block px-4 py-2 rounded hover:bg-slate-800 text-sm font-medium transition text-blue-400">Leads & Enquiries</Link>
        </nav>
        <div className="p-4 border-t border-slate-800 text-xs">
           {user && (
             <form action={logout} className="mb-4">
               <button type="submit" className="text-red-400 hover:text-red-300 font-bold transition flex items-center gap-2">
                 <span>Sign Out</span>
               </button>
             </form>
           )}
           <Link href="/" className="hover:text-white transition flex items-center gap-2">
             <span>← Back to Website</span>
           </Link>
        </div>
      </aside>
      
      {/* Main Content */}
      <main className="flex-1 flex flex-col min-w-0">
        <header className="h-16 bg-white border-b border-slate-200 flex items-center px-8 shrink-0">
          <h2 className="font-bold text-slate-800">Admin Dashboard</h2>
        </header>
        <div className="p-8 flex-1 overflow-auto relative z-0">
          {children}
        </div>
      </main>
    </div>
  );
}
