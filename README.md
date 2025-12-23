# AgriScience Website

A complete, production-ready website for an agriculture fertilizer company with a public-facing site and admin panel.

## Tech Stack

- **Frontend**: Next.js 14 (App Router), React, Tailwind CSS
- **Backend**: Supabase (PostgreSQL + Auth + Storage)
- **Deployment**: Vercel

## Features

### Public Website
- Home page with hero section
- Products listing page
- Product details pages
- About page
- Contact page
- SEO optimized

### Admin Panel
- Secure login (predefined admin users only)
- Dashboard for managing products
- CRUD operations for products
- Image upload to Supabase Storage

## Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Supabase Setup

1. Create a new project at [supabase.com](https://supabase.com)
2. Go to Settings > API to get your project URL and anon key
3. Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### 3. Database Setup

1. Go to Supabase SQL Editor
2. Run the SQL from `supabase/schema.sql` to create the products table
3. Run the SQL from `supabase/rls_policies.sql` to set up Row Level Security

### 4. Storage Setup

1. In Supabase Dashboard, go to Storage
2. Create a new bucket named `product-images`
3. Set it to public (anyone can read)
4. Add policy: Only authenticated users can upload

### 5. Create Admin User

1. In Supabase Dashboard, go to Authentication > Users
2. Click "Add user" > "Create new user"
3. Enter email and password for your admin account
4. Note: Only users created manually can log in (public signup is disabled)

### 6. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the public website.

Access admin panel at [http://localhost:3000/admin/login](http://localhost:3000/admin/login)

## Project Structure

```
/app
  /page.tsx                    -> Home
  /products
    /page.tsx                  -> Product list
    /[id]/page.tsx             -> Product details
  /about/page.tsx
  /contact/page.tsx
  /admin
    /login/page.tsx
    /dashboard/page.tsx

/components
  Navbar.tsx
  Footer.tsx
  ProductCard.tsx
  AdminProductForm.tsx

/lib
  supabaseClient.ts
  auth.ts

/middleware.ts                -> Admin route protection
```

## Security Features

- Server-side route protection for admin pages
- Row Level Security (RLS) on database
- Public signup disabled
- Only predefined admin users can authenticate
- Admin routes excluded from robots.txt

## Deployment

1. Push code to GitHub
2. Import project in Vercel
3. Add environment variables in Vercel dashboard
4. Deploy






