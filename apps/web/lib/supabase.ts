import { createClient } from '@supabase/supabase-js';

let supabaseClient: any = null;

export const getSupabase = () => {
  if (!supabaseClient) {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

    // Check if variables are missing or if they are still set to the default placeholder strings
    if (
      !supabaseUrl || 
      !supabaseAnonKey || 
      supabaseUrl === 'YOUR_SUPABASE_URL' || 
      supabaseUrl === '""' ||
      !supabaseUrl.startsWith('http')
    ) {
      console.warn('Missing or invalid Supabase environment variables! The application will fallback to mock data.');
      return null;
    }
    
    try {
      supabaseClient = createClient(supabaseUrl, supabaseAnonKey);
    } catch (err) {
      console.warn('Failed to initialize Supabase client. Falling back to mock data.', err);
      return null;
    }
  }
  return supabaseClient;
};
