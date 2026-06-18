-- ===========================================================================
-- Migration: contact_leads
-- Stores public contact / demo-request submissions from the landing page.
--
-- Security model:
--   * Row Level Security is ENABLED.
--   * Anonymous (public) users may ONLY INSERT rows.
--   * Public SELECT / UPDATE / DELETE are completely blocked.
--   * Only the service_role key (server-side, never exposed) can read/manage.
-- ===========================================================================

-- Needed for gen_random_uuid()
create extension if not exists "pgcrypto";

-- ---------------------------------------------------------------------------
-- Table
-- ---------------------------------------------------------------------------
create table if not exists public.contact_leads (
  id          uuid        primary key default gen_random_uuid(),
  created_at  timestamptz not null    default now(),
  name        text        not null,
  email       text        not null,
  -- Optional fields collected by the landing-page form (kept so no lead data
  -- is lost). They are nullable on purpose.
  phone       text,
  company     text,
  message     text        not null,
  status      text        not null    default 'new',

  -- Defensive, DB-level guards (validation also happens in the app layer).
  constraint contact_leads_name_len    check (char_length(name)    between 1 and 200),
  constraint contact_leads_email_fmt   check (email ~* '^[^@\s]+@[^@\s]+\.[^@\s]+$'),
  constraint contact_leads_email_len   check (char_length(email)   <= 320),
  constraint contact_leads_message_len check (char_length(message) between 1 and 5000),
  constraint contact_leads_status_chk  check (status in ('new', 'contacted', 'qualified', 'closed', 'spam'))
);

-- Useful index for an admin dashboard ordering by recency.
create index if not exists contact_leads_created_at_idx
  on public.contact_leads (created_at desc);

-- ---------------------------------------------------------------------------
-- Row Level Security
-- ---------------------------------------------------------------------------
alter table public.contact_leads enable row level security;
-- Force RLS even for the table owner (defense in depth).
alter table public.contact_leads force row level security;

-- Drop existing policies if re-running the migration.
drop policy if exists "anon can insert leads"      on public.contact_leads;
drop policy if exists "no public read"             on public.contact_leads;

-- Allow anonymous + authenticated public roles to INSERT only.
-- `with check (true)` lets the row be created; there is deliberately NO
-- `using` clause for SELECT/UPDATE/DELETE, so those are denied for these roles.
create policy "anon can insert leads"
  on public.contact_leads
  for insert
  to anon, authenticated
  with check (true);

-- NOTE: With RLS enabled and no SELECT/UPDATE/DELETE policy defined for the
-- anon/authenticated roles, those operations are blocked by default. The
-- service_role key bypasses RLS entirely and is used only on the server for
-- any future admin reads. No extra "deny" policy is required.

-- ---------------------------------------------------------------------------
-- Hardening: do not leak the sequence/grant more than necessary.
-- ---------------------------------------------------------------------------
revoke all on public.contact_leads from anon, authenticated;
grant insert on public.contact_leads to anon, authenticated;
