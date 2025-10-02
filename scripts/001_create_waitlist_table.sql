-- Create waitlist table for users who sign up
create table if not exists public.waitlist (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null unique,
  role text not null check (role in ('candidate', 'referrer')),
  created_at timestamp with time zone default now()
);

-- Enable RLS
alter table public.waitlist enable row level security;

-- Allow anyone to insert (public signup)
create policy "waitlist_insert_public"
  on public.waitlist for insert
  with check (true);

-- Allow users to view their own waitlist entry
create policy "waitlist_select_own"
  on public.waitlist for select
  using (true);
