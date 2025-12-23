'use client';

import { createBrowserClient } from '@supabase/ssr';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('Missing Supabase environment variables');
}

// Create a browser-only Supabase client.
// We rely on @supabase/ssr's built-in storage handling, so we DON'T
// touch document.cookie here (which avoids SSR \"document is not defined\" errors).
export const supabase = createBrowserClient(supabaseUrl, supabaseAnonKey);