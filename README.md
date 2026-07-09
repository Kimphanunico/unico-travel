# Unico Travel — Website

A Next.js 16 (App Router, TypeScript, Tailwind CSS v4) marketing site for
Unico Travel, with a trip-request contact form that saves submissions to
Supabase.

Pages: Home (video hero), About, Tours (listing + detail pages), Gallery,
Journal (blog), Contact (Supabase-backed form).

All content is placeholder/sample copy in English — swap it for your real
company info before launch (see "Editing content" below).

---

## 1. Run it locally

```bash
npm install
npm run dev
```

Open http://localhost:3000. The contact form will show a friendly error
until Supabase is configured (step 4) — everything else works immediately.

---

## 2. Push to GitHub

```bash
cd unico-travel
git init
git add .
git commit -m "Initial commit: Unico Travel website"
```

Then on github.com: create a new empty repository (no README/license,
so it doesn't conflict), then:

```bash
git remote add origin https://github.com/<your-username>/unico-travel.git
git branch -M main
git push -u origin main
```

---

## 3. Deploy to Vercel

1. Go to https://vercel.com/new and sign in with GitHub.
2. Import the `unico-travel` repository.
3. Framework preset: Next.js (auto-detected). Leave build settings as default.
4. Before the first deploy, add the environment variables from step 4 below
   under **Environment Variables** (or add them after and redeploy).
5. Click **Deploy**. Vercel gives you a live `*.vercel.app` URL — you can
   add a custom domain later under Project Settings > Domains.

Every future `git push` to `main` auto-deploys.

---

## 4. Set up Supabase (for the request form)

1. Create a project at https://supabase.com/dashboard.
2. Open **SQL Editor > New query**, paste the contents of
   `supabase/schema.sql`, and run it. This creates the `trip_requests` table
   with row-level security enabled.
3. Go to **Project Settings > API** and copy:
   - **Project URL**
   - **service_role** secret key (not the `anon` key)
4. Add these as environment variables:
   - Locally: copy `.env.local.example` to `.env.local` and fill in the two
     values.
   - On Vercel: Project Settings > Environment Variables, add:
     - `SUPABASE_URL`
     - `SUPABASE_SERVICE_ROLE_KEY`

     Then redeploy (Deployments > ... > Redeploy).

Submissions land in Supabase under **Table Editor > trip_requests**.

The service role key is only ever used server-side (in
`app/api/contact/route.ts` via `lib/supabase.ts`) — it is never sent to the
browser.

---

## Editing content

- **Text & tours**: `lib/tours.ts` holds all 6 sample tours (title,
  itinerary, pricing, etc.) — edit or add entries there; tour detail pages
  are generated automatically from this file.
- **Home page copy**: `app/page.tsx`
- **About page / team**: `app/about/page.tsx`
- **Contact info**: `components/Footer.tsx` and `app/contact/page.tsx`
- **Hero video**: drop `hero.mp4` and `hero-poster.jpg` into
  `public/videos/` (see `public/videos/README.md`). Until then, the hero
  shows a gradient placeholder.
- **Photos**: the gallery and cards currently use CSS gradient placeholders
  (`gradient-ocean`, `gradient-sunset`, etc. in `app/globals.css`). Replace
  with real images via `next/image` when you have photography.
- **Colors/fonts**: `app/globals.css` (`@theme inline` block) — the palette
  is cream / near-black / terracotta / forest green.

## Project structure

```
app/
  page.tsx                Home
  about/page.tsx           About
  services/page.tsx        Tours listing
  services/[slug]/page.tsx Tour detail (dynamic)
  gallery/page.tsx          Photo gallery
  blog/page.tsx             Journal / blog listing
  contact/page.tsx          Contact + request form
  api/contact/route.ts     Form submission endpoint -> Supabase
components/               Header, Footer, Hero, TourCard, ContactForm
lib/tours.ts               Sample tour data
lib/supabase.ts             Server-only Supabase client
supabase/schema.sql        SQL to create the trip_requests table
```
