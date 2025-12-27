# Setup Guide

## Prerequisites

- Node.js 18+ installed

## Step-by-Step Setup

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

**Important**: 
- `ADMIN_EMAIL` and `ADMIN_PASSWORD` are used for admin login
- `ADMIN_OWNER_EMAILS` should match your admin email (comma-separated list)
- `RESEND_API_KEY` is for contact form email functionality (optional)

### 3. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the public website.

### 4. Access Admin Panel

Navigate to [http://localhost:3000/admin/login](http://localhost:3000/admin/login) and log in with your admin credentials.

## Verification Checklist

- [ ] Public website loads at `/`
- [ ] Products page loads at `/products`
- [ ] Admin login works at `/admin/login`
- [ ] Can create a product in admin dashboard
- [ ] Product appears on public products page
- [ ] Can edit and delete products

## Troubleshooting

### Cannot log in to admin panel
- Verify `ADMIN_EMAIL` and `ADMIN_PASSWORD` are set in `.env.local`
- Make sure `ADMIN_OWNER_EMAILS` includes your admin email
- Restart the dev server after updating `.env.local`

### Products not showing
- Check browser console for errors
- Verify API routes are working
- Check that products exist in the system

## Production Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) and import your repository
3. Add environment variables in Vercel dashboard:
   - `ADMIN_EMAIL`
   - `ADMIN_PASSWORD`
   - `ADMIN_OWNER_EMAILS`
   - `RESEND_API_KEY` (for contact form)
4. Deploy

### Post-Deployment

- Verify all routes work correctly
- Test admin login
- Test product creation
- Check that images load properly
