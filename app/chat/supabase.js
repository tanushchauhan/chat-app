import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://kcnzfmmjfvxdjtqvpghe.supabase.co";

// Row level security is enabled. Only read and insert access using this key.
const supabaseKey = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtjbnpmbW1qZnZ4ZGp0cXZwZ2hlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc0NTI3NjgsImV4cCI6MjA3MzAyODc2OH0.ZJcc32LxJPFHRriJxe5kwr-mM2VwH8AE7Y8f8zvyog4`;
export const supabase = createClient(supabaseUrl, supabaseKey);
