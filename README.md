# AgriScience Website

A complete, production-ready website for an agriculture fertilizer company with a public-facing site and admin panel.

## Tech Stack

- **Frontend**: Next.js 14 (App Router), React, Tailwind CSS
- **Backend**: Local data storage (in-memory)
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
- Secure login (environment-based credentials)
- Dashboard for managing products
- CRUD operations for products
- Image upload support

## Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Environment Variables

Create a `.env.local` file in the root directory:

```env
ADMIN_EMAIL=your-admin-email@example.com
ADMIN_PASSWORD=your-secure-password
ADMIN_OWNER_EMAILS=your-admin-email@example.com
RESEND_API_KEY=your_resend_api_key_here
```

### 3. Run Development Server

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
  /api
    /products                  -> Product CRUD API
    /auth                      -> Authentication API
    /contact                   -> Contact form API

/components
  Navbar.tsx
  Footer.tsx
  ProductCard.tsx
  AdminProductForm.tsx

/lib
  productsData.ts              -> Local product storage
  auth.ts                      -> Authentication system
  admin.ts                     -> Admin utilities
```

## Security Features

- Server-side route protection for admin pages
- Environment-based authentication
- Admin routes excluded from robots.txt
- Session-based authentication

## Deployment

1. Push code to GitHub
2. Import project in Vercel
3. Add environment variables in Vercel dashboard
4. Deploy
