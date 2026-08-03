import { createClient } from '@supabase/supabase-js';

// Access environment variables using import.meta.env for Vite
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL; 
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// #GANTI: isi .env dengan VITE_SUPABASE_URL & VITE_SUPABASE_ANON_KEY milikmu
// Tanpa .env, app tetap berjalan tapi data proyek/sertifikat/komentar kosong.
if (!supabaseUrl || !supabaseKey) {
  console.warn("Supabase credentials belum diisi (.env). Data akan tampil kosong.");
}

export const supabase = createClient(
  supabaseUrl || "https://placeholder.supabase.co",
  supabaseKey || "placeholder-anon-key"
);