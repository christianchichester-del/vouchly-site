-- Create referrals table for tracking referral requests
create table if not exists public.referrals (
  id uuid primary key default gen_random_uuid(),
  candidate_email text not null,
  referrer_email text,
  company text not null,
  status text not null default 'pending' check (status in ('pending', 'accepted', 'completed', 'declined')),
  created_at timestamp with time zone default now(),
  updated_at timestamp with time zone default now()
);

-- Enable RLS
alter table public.referrals enable row level security;

-- Allow anyone to insert referral requests
create policy "referrals_insert_public"
  on public.referrals for insert
  with check (true);

-- Allow anyone to view referrals (for now, can be restricted later)
create policy "referrals_select_all"
  on public.referrals for select
  using (true);

-- Allow updates to referrals
create policy "referrals_update_all"
  on public.referrals for update
  using (true);
