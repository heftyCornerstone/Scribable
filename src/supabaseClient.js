import { createClient } from "@supabase/supabase-js";

// 1) project url
const SUPABASE_PROJECT_URL = "https://uperuitcmwmzdwwhtkvb.supabase.co";

// 2) anon key
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVwZXJ1aXRjbXdtemR3d2h0a3ZiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzE1NTM1NTAsImV4cCI6MjA0NzEyOTU1MH0.FDwAXDaVigwjmS91Jrlb30F4xZEyVO5JH29rIqa4AVI";

const supabase = createClient(SUPABASE_PROJECT_URL, SUPABASE_ANON_KEY);
export default supabase;