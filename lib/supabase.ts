import { createClient } from "@supabase/supabase-js";

/**
 * Server-only Supabase client.
 *
 * Uses the service role key so it can insert form submissions even with
 * row-level security enabled. This file must never be imported from a
 * "use client" component — it is only used inside API routes / server code.
 */
export function getSupabaseServerClient() {
  const url = process.env.SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!url || !serviceRoleKey) {
    throw new Error(
      "Missing SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY environment variables. " +
        "See .env.local.example for setup instructions."
    );
  }

  return createClient(url, serviceRoleKey, {
    auth: { persistSession: false },
  });
}
