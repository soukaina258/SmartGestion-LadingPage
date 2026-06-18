# Contact / Demo-Request Backend — Setup Guide

Production-ready pipeline for the landing-page contact form:

```
Browser form  ──>  Next.js Server Action  ──>  Supabase (contact_leads)  ──>  Resend email  ──>  smartgestionmaroc@gmail.com
   (UI states)        (validate + store)         (RLS: insert-only)            (notification)
```

## Files added

| File | Purpose |
| --- | --- |
| `.env.local` | All secrets (git-ignored). |
| `supabase/migrations/0001_contact_leads.sql` | Table + RLS policies. |
| `src/lib/env.ts` | Validated, typed env access. |
| `src/lib/supabase/types.ts` | Hand-written DB types. |
| `src/lib/supabase/server.ts` | Server-only Supabase client (least-privilege anon key). |
| `src/lib/validation/contact.ts` | Dependency-free validation + normalization. |
| `src/lib/email.ts` | Resend notification email (HTML + text). |
| `src/app/actions/contact.ts` | The Server Action orchestrating it all. |
| `src/components/sections/contact.tsx` | Form wired with loading / success / error states. |

New dependencies: `@supabase/supabase-js`, `resend`, `server-only`.

---

## Step 1 — Create the database table

Open the **Supabase Dashboard → SQL Editor**, paste the contents of
`supabase/migrations/0001_contact_leads.sql`, and run it.

This creates the `contact_leads` table and enables Row Level Security so that:

- Public (anon) users can **INSERT only**.
- Public **SELECT / UPDATE / DELETE are blocked** (no policy = denied).
- Only the `service_role` key (server-side) can ever read leads.

> Prefer the CLI? With the Supabase CLI linked:
> `supabase db push` (uses `DATABASE_URL` / `DIRECT_URL` from `.env.local`).

### Verify RLS is correct

Run in the SQL editor — this should **fail / return nothing** for anon:

```sql
set role anon;
select * from public.contact_leads;   -- expected: permission denied / 0 rows
reset role;
```

And an anon insert should **succeed**:

```sql
set role anon;
insert into public.contact_leads (name, email, message)
values ('Test', 'test@example.com', 'hello');
reset role;
```

---

## Step 2 — Configure email (Resend)

1. Sign up at <https://resend.com> (free tier is fine).
2. Create an API key at <https://resend.com/api-keys>.
3. Put it in `.env.local`:

   ```
   RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxx
   ```

**Sender address:** until you verify a domain, you must send from the Resend
sandbox sender, which only delivers to the email you signed up with:

```
CONTACT_NOTIFICATION_FROM=Smart Gestion <onboarding@resend.dev>
```

> To deliver to `smartgestionmaroc@gmail.com` in production, verify a domain in
> Resend (**Domains → Add Domain**, add the DNS records), then change
> `CONTACT_NOTIFICATION_FROM` to e.g. `Smart Gestion <noreply@yourdomain.com>`.

The recipient is already set:

```
CONTACT_NOTIFICATION_TO=smartgestionmaroc@gmail.com
```

---

## Step 3 — Run it

```bash
npm install      # already done
npm run dev
```

Open the page, scroll to the contact section, submit the form. You should see:

- a spinner + "submitting" label while the request is in flight,
- a success screen on completion,
- the lead row in Supabase (`contact_leads`),
- an email in the configured inbox.

---

## How the states work (UI)

The form uses React's `useActionState` (Next.js 16 / React 19):

```ts
const [state, formAction, pending] = useActionState(submitContact, initialContactState);
```

- **Loading** → `pending` is `true`; the submit button shows a spinner and is disabled.
- **Success** → `state.status === "success"`; the success panel renders.
- **Error** → `state.status === "error"`; a top-level message plus per-field errors
  (`state.errors.name`, `.email`, `.message`) render inline.

Because the form uses the native `action={formAction}` prop, it also works as
progressive enhancement (submits even before JS hydrates).

---

## Reliability & security guarantees ("no lead lost silently")

- **Validation is server-side** in the Server Action — the client is never trusted.
- The lead is **persisted to Supabase first**. If the DB write fails, the user
  gets an error and can retry — we never claim success without a stored row.
- The notification email is **non-fatal**: if Resend fails, the lead is already
  saved, and the failure is logged with the lead ID (`[contact] Lead <id> saved
  but email failed: ...`) for manual follow-up.
- A **honeypot** field (`website`) silently drops bot submissions.
- DB-level `CHECK` constraints back up the app-level validation.
- All secrets are server-only env vars; only `NEXT_PUBLIC_*` reach the browser.

---

## Deploying (Vercel etc.)

Add every variable from `.env.local` to your host's environment-variable
settings **except** rename none of them. `NEXT_PUBLIC_*` vars are exposed to the
browser by design; everything else stays server-only.

---

## ⚠️ Security action required

The database password was shared in plain text during setup. **Rotate it now**:
Supabase Dashboard → **Project Settings → Database → Reset database password**,
then update `DATABASE_URL` / `DIRECT_URL` in `.env.local` and your host.
