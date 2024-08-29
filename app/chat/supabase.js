import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://bhzptjlfocqzryogekau.supabase.co";

// Row level security is enabled. Only read and insert access using this key.
const supabaseKey = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJoenB0amxmb2NxenJ5b2dla2F1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjQ5MTM0NDQsImV4cCI6MjA0MDQ4OTQ0NH0.21dMFQA55YS2qGVbFt6G6cjEsHFGqZiZGx9zjzA0PW0`;
export const supabase = createClient(supabaseUrl, supabaseKey);
