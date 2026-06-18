-- ===========================================================================
-- Migration: newsletter_subscribers
-- Stores email addresses for product update notifications.
-- ===========================================================================

create extension if not exists "pgcrypto";

create table if not exists public.newsletter_subscribers (
  id          uuid        primary key default gen_random_uuid(),
  created_at  timestamptz not null    default now(),
  email       text        not null    unique,
  status      text        not null    default 'active',

  constraint newsletter_email_fmt check (email ~* '^[^@\s]+@[^@\s]+\.[^@\s]+$'),
  constraint newsletter_email_len check (char_length(email) <= 320),
  constraint newsletter_status_chk check (status in ('active', 'unsubscribed'))
);

create index if not exists newsletter_subscribers_created_at_idx
  on public.newsletter_subscribers (created_at desc);

alter table public.newsletter_subscribers enable row level security;
alter table public.newsletter_subscribers force row level security;

drop policy if exists "anon can insert subscribers" on public.newsletter_subscribers;

create policy "anon can insert subscribers"
  on public.newsletter_subscribers
  for insert
  to anon, authenticated
  with check (true);

revoke all on public.newsletter_subscribers from anon, authenticated;
grant insert on public.newsletter_subscribers to anon, authenticated;
