import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://npmnuesnuclrffjzeesw.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5wbW51ZXNudWNscmZmanplZXN3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzU3NTQzNjYsImV4cCI6MjA5MTMzMDM2Nn0.3vl3TOz9Q0-f8BEcQFTkHWPJvJPPt_XNYK_5UR7_z0M';

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: true,
    storage: typeof window !== 'undefined' ? window.localStorage : undefined,
    storageKey: 'lurenclass-auth',
  },
});