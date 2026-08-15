'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { createBrowserClient } from '@supabase/ssr'

export default function AdminLoginPage() {
  const router = useRouter(); const [email,setEmail]=useState(''); const [password,setPassword]=useState(''); const [error,setError]=useState(''); const [loading,setLoading]=useState(false)
  async function submit(e:React.FormEvent){e.preventDefault();setLoading(true);setError('');const supabase=createBrowserClient(process.env.NEXT_PUBLIC_SUPABASE_URL!,process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!);const {error}=await supabase.auth.signInWithPassword({email,password});if(error){setError(error.message);setLoading(false);return}router.push('/dashboard');router.refresh()}
  return <main style={{minHeight:'100vh',display:'grid',placeItems:'center',padding:24}}><section className="panel" style={{width:'100%',maxWidth:420}}><div className="panel-body"><h1>ICar Gezina Admin</h1><p>Sign in with an authorized dealership account.</p><form onSubmit={submit} className="vehicle-form"><label>Email<input type="email" value={email} onChange={e=>setEmail(e.target.value)} required autoComplete="email"/></label><label>Password<input type="password" value={password} onChange={e=>setPassword(e.target.value)} required autoComplete="current-password"/></label>{error&&<p role="alert" style={{color:'#b91c1c'}}>{error}</p>}<button className="button" disabled={loading}>{loading?'Signing in…':'Sign in'}</button></form></div></section></main>
}
