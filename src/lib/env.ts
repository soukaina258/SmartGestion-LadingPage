/**
 * Centralized, validated environment-variable access.
 *
 * Reading env vars through these helpers (instead of `process.env.X` scattered
 * everywhere) gives us:
 *   - a single place that throws a clear error if a required var is missing
 *   - full TypeScript typing (no `string | undefined` leaking everywhere)
 *
 * IMPORTANT: only `NEXT_PUBLIC_*` values are safe to read in the browser.
 * Everything else must only ever be imported from server-side code
 * (Server Actions, Route Handlers, server components).
 */

function required(name: string, value: string | undefined): string {
  if (!value || value.trim() === "") {
    throw new Error(
      `Missing required environment variable: ${name}. ` +
        `Add it to .env.local (and your hosting provider's env settings).`,
    );
  }
  return value;
}

/** Public Supabase config — safe in the browser. */
export const publicEnv = {
  supabaseUrl: required(
    "NEXT_PUBLIC_SUPABASE_URL",
    process.env.NEXT_PUBLIC_SUPABASE_URL,
  ),
  supabasePublishableKey: required(
    "NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY",
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY,
  ),
} as const;

/**
 * Server-only config. Accessing this on the client will throw because the
 * underlying vars are not exposed to the bundle.
 */
export function getServerEnv() {
  return {
    resendApiKey: required("RESEND_API_KEY", process.env.RESEND_API_KEY),
    notificationTo: required(
      "CONTACT_NOTIFICATION_TO",
      process.env.CONTACT_NOTIFICATION_TO,
    ),
    notificationFrom: required(
      "CONTACT_NOTIFICATION_FROM",
      process.env.CONTACT_NOTIFICATION_FROM,
    ),
    // Optional — only present if you enabled admin reads.
    serviceRoleKey: process.env.SUPABASE_SERVICE_ROLE_KEY,
  } as const;
}
