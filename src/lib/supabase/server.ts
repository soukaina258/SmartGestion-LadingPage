import "server-only";

import { createClient, type SupabaseClient } from "@supabase/supabase-js";

import { publicEnv } from "@/lib/env";
import type { Database } from "@/lib/supabase/types";

/**
 * Server-side Supabase client used by the contact form.
 *
 * It uses the PUBLISHABLE (anon) key on purpose: the `contact_leads` table has
 * an RLS policy that allows anon INSERT only. This is least-privilege — even if
 * this code is ever reused elsewhere, it cannot read or modify existing leads.
 *
 * `import "server-only"` guarantees this module can never be bundled into
 * client code.
 */
export function createServerSupabaseClient(): SupabaseClient<Database> {
  return createClient<Database>(
    publicEnv.supabaseUrl,
    publicEnv.supabasePublishableKey,
    {
      auth: {
        persistSession: false,
        autoRefreshToken: false,
      },
    },
  );
}
