# Data Flow Explanation

This document explains how data flows through the AgriScience website system.

## Architecture Overview

```
Admin User → Admin Dashboard → Supabase Database → Public Website → Visitors
```

## Detailed Data Flow

### 1. Admin Creates/Updates Product

**Flow:**
1. Admin logs in at `/admin/login`
   - Credentials verified via Supabase Auth
   - Session stored in cookies (managed by Supabase SSR)

2. Admin accesses `/admin/dashboard`
   - Middleware checks for valid session
   - If no session, redirects to `/admin/login`
   - Dashboard loads and fetches existing products

3. Admin creates/edits product:
   - Fills out form in `AdminProductForm` component
   - If image is uploaded:
     - Image uploaded to Supabase Storage bucket `product-images`
     - Public URL returned
   - Product data (name, description, usage, image_url) sent to Supabase
   - Insert/Update query executed on `products` table

4. Database Security:
   - Row Level Security (RLS) policies check `auth.role() = 'authenticated'`
   - Only authenticated users can INSERT/UPDATE/DELETE
   - Operation succeeds because admin is authenticated

### 2. Data Storage

**Supabase Database (`products` table):**
```
- id (UUID, primary key)
- name (text)
- description (text)
- usage (text, nullable)
- image_url (text, nullable)
- created_at (timestamp)
```

**Supabase Storage (`product-images` bucket):**
- Public bucket (anyone can read)
- Only authenticated users can upload
- Images stored with path: `products/{random}.{ext}`
- Public URL format: `https://{project}.supabase.co/storage/v1/object/public/product-images/products/{filename}`

### 3. Public Website Displays Products

**Flow:**
1. Visitor navigates to `/products`
   - Server-side rendering (Next.js App Router)
   - `createClient()` from `lib/supabaseServer.ts` creates server-side Supabase client
   - Query executed: `SELECT * FROM products ORDER BY created_at DESC`
   - RLS policy "Public can view products" allows the query (uses `USING (true)`)
   - Products data returned to page component

2. Products displayed:
   - `ProductCard` components render each product
   - Images loaded from Supabase Storage URLs
   - Clicking a product navigates to `/products/[id]`

3. Product details page:
   - Server-side fetch for specific product by ID
   - Full product information displayed
   - SEO-optimized with dynamic metadata

## Security Layers

### 1. Route Protection (Middleware)
- **File**: `middleware.ts`
- **Protection**: All `/admin/*` routes (except `/admin/login`)
- **Method**: Server-side session check before page loads
- **Result**: Unauthorized users redirected to login

### 2. Database Security (RLS)
- **Public Access**: SELECT only (read products)
- **Authenticated Access**: INSERT, UPDATE, DELETE (manage products)
- **Enforcement**: Database-level, cannot be bypassed

### 3. Authentication
- **Provider**: Supabase Auth
- **Method**: Email/password
- **Signup**: Disabled (only manually created users)
- **Session**: Managed by Supabase SSR with secure cookies

### 4. Storage Security
- **Read**: Public (anyone can view images)
- **Write**: Authenticated users only (admin uploads)
- **Policy**: Enforced at bucket level

## Key Files and Their Roles

### Server-Side (Protected)
- `middleware.ts`: Route protection
- `lib/supabaseServer.ts`: Server-side Supabase client
- `lib/auth.ts`: Auth utilities for server components
- `app/products/page.tsx`: Server-side product fetching
- `app/products/[id]/page.tsx`: Server-side product detail fetching

### Client-Side (Admin)
- `app/admin/login/page.tsx`: Login form (client component)
- `app/admin/dashboard/page.tsx`: Admin dashboard (client component)
- `components/AdminProductForm.tsx`: Product CRUD form (client component)
- `lib/supabaseClient.ts`: Client-side Supabase client

### Public (Server-Side Rendered)
- `app/page.tsx`: Home page
- `app/products/page.tsx`: Products listing
- `app/products/[id]/page.tsx`: Product details
- `app/about/page.tsx`: About page
- `app/contact/page.tsx`: Contact page

## Data Flow Diagram

```
┌─────────────┐
│ Admin User  │
└──────┬──────┘
       │
       │ 1. Login
       ▼
┌─────────────────┐
│ /admin/login    │ ──► Supabase Auth ──► Session Created
└─────────────────┘
       │
       │ 2. Authenticated
       ▼
┌─────────────────┐
│ /admin/dashboard│
└──────┬──────────┘
       │
       │ 3. Create/Edit Product
       ▼
┌──────────────────┐
│ AdminProductForm │
└──────┬───────────┘
       │
       │ 4. Upload Image (if provided)
       ▼
┌──────────────────┐
│ Supabase Storage │ ──► product-images bucket
└──────┬───────────┘
       │
       │ 5. Save Product Data
       ▼
┌──────────────────┐
│ Supabase Database│ ──► products table
│ (RLS Protected) │
└──────┬───────────┘
       │
       │ 6. Data Available
       ▼
┌──────────────────┐
│ Public Website   │ ──► /products page
│ (Server-Side)    │ ──► /products/[id] page
└──────┬───────────┘
       │
       │ 7. Display
       ▼
┌─────────────┐
│   Visitors  │
└─────────────┘
```

## Important Notes

1. **No Client-Side Data Exposure**: Admin operations use authenticated Supabase client, but RLS ensures database-level security.

2. **SEO Optimization**: Public pages use server-side rendering with proper metadata for search engines.

3. **Image Handling**: Images are uploaded to Supabase Storage, which provides CDN-like performance and public URLs.

4. **Session Management**: Supabase SSR handles session cookies securely, refreshing tokens automatically.

5. **No Public Admin Access**: Admin routes are:
   - Protected by middleware
   - Not linked anywhere in public site
   - Excluded from robots.txt
   - Only accessible via direct URL (if you know it) + authentication

## Testing the Flow

1. **Create Product as Admin**:
   - Log in → Dashboard → Add Product → Fill form → Submit
   - Product appears in database

2. **View as Public User**:
   - Navigate to `/products` (no login)
   - Product appears in listing
   - Click product → See details page

3. **Edit Product**:
   - Admin dashboard → Edit → Modify → Save
   - Changes reflect immediately on public site

4. **Delete Product**:
   - Admin dashboard → Delete → Confirm
   - Product removed from database and public site










