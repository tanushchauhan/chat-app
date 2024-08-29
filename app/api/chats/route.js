import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://bhzptjlfocqzryogekau.supabase.co";
const supabaseKey = process.env.SUPABASE_KEY;
export const supabase = createClient(supabaseUrl, supabaseKey);

// a get request will just return the last 50 messsages from the database
export async function GET(req, res) {
  let { data: chats, error } = await supabase
    .from("chats")
    .select("*")
    .order("id", { ascending: false })
    .limit(50);
  if (error) {
    console.log(error);
    return Response.json({ success: false });
  } else {
    chats.reverse();
    return Response.json({ success: true, data: chats });
  }
}

// a post request will be where the actual sending of the message will happen
export async function POST(req) {
  const data = await req.json();
  if (data.content === "") return Response.json({ success: true });
  const { data: supaData, error } = await supabase
    .from("chats")
    .insert([{ sender: data.sender, content: data.content }]);
  if (error) {
    return Response.json({ success: false });
  } else {
    return Response.json({ success: true });
  }
}
