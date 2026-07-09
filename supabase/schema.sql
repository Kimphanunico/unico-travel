-- Run this in the Supabase SQL editor (Project > SQL Editor > New query)
-- to create the table that stores trip request form submissions.

create table if not exists public.trip_requests (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text not null,
  email text not null,
  phone text,
  destination text,
  travel_dates text,
  travelers text,
  message text not null
);

-- Enable Row Level Security. The website only ever writes to this table
-- through the server-side API route using the service role key, which
-- bypasses RLS — so no public policies are required for the form to work.
alter table public.trip_requests enable row level security;

-- Optional: if you want to read submissions from the Supabase dashboard
-- using the built-in table editor, no extra policy is needed (dashboard
-- access uses your account, not RLS). No insert/select policy is created
-- for the anon/public role, so the table cannot be read or written from
-- the browser directly — only via the trusted server route.
