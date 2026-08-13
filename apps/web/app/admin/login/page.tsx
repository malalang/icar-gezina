import { login } from '../actions';

export default async function LoginPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  const resolvedParams = await searchParams;
  
  return (
    <div className="flex-1 flex flex-col items-center justify-center min-h-[calc(100vh-120px)]">
      <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200 w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold italic tracking-tight text-slate-800 uppercase">Icar<span className="text-blue-500">Admin</span> Secure Login</h1>
          <p className="text-slate-500 text-sm mt-2">Sign in with your authorized credentials. Admin accounts are managed directly through Supabase.</p>
        </div>

        {resolvedParams?.error && (
          <div className="bg-red-50 text-red-600 p-3 rounded text-sm mb-6 border border-red-100">
            {resolvedParams.error}
          </div>
        )}

        <form action={login} className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Email Address</label>
            <input
              name="email"
              type="email"
              required
              className="w-full bg-slate-50 border border-slate-200 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="admin@icargezina.co.za"
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Password</label>
            <input
              name="password"
              type="password"
              required
              className="w-full bg-slate-50 border border-slate-200 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="••••••••"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-bold rounded-lg py-2.5 text-sm hover:bg-blue-700 transition"
          >
            Sign In to Dashboard
          </button>
        </form>
      </div>
    </div>
  );
}
