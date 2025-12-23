# Setup Guide

## Prerequisites

- Node.js 18+ installed
- A Supabase account (free tier works)

## Step-by-Step Setup

### 1. Install Dependencies

```bash
npm install
```

### 2. Create Supabase Project

1. Go to [supabase.com](https://supabase.com) and create a new project
2. Wait for the project to be fully provisioned (takes a few minutes)

### 3. Configure Environment Variables

Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
ADMIN_OWNER_EMAILS=admin@agriscience.com,owner@example.com
```

**Important**: `ADMIN_OWNER_EMAILS` should be a comma-separated list of email addresses that are allowed to access the admin panel. Only these emails will be able to log in and manage products.

To find these values:
- Go to your Supabase project dashboard
- Navigate to Settings > API
- Copy the "Project URL" and "anon public" key

### 4. Set Up Database

1. In Supabase Dashboard, go to SQL Editor
2. Click "New query"
3. Copy and paste the contents of `supabase/schema.sql`
4. Click "Run" to execute the SQL

This will:
- Create the `products` table
- Enable Row Level Security (RLS)
- Set up policies for public read access and owner-only write access

**Important**: After running the SQL, you must update the `is_owner_email()` function in the SQL Editor to include your owner email addresses. Edit the function and add your admin emails to the array on line 20-22, for example:
```sql
owner_emails TEXT[] := ARRAY[
  'admin@agriscience.com',
  'owner@example.com'
];
```
Then run the updated function definition.

### 5. Set Up Storage

1. In Supabase Dashboard, go to Storage
2. Click "Create a new bucket"
3. Name it: `product-images`
4. Set it to **Public** (anyone can read)
5. Click "Create bucket"
6. Go to "Policies" tab for the bucket

#### Step 6a: Add INSERT Policy (Upload Images)

1. Click "New Policy" button
2. Select "For full customization" (or "Create a policy from scratch")
3. Fill in the policy details:
   - **Policy name**: `Allow authenticated uploads`
   - **Allowed operation**: Select `INSERT`
   - **Target roles**: Select `authenticated`
   - **Policy definition**: Enter the following:
     ```sql
     bucket_id = 'product-images' AND auth.role() = 'authenticated'
     ```
4. Click "Review" then "Save policy"

#### Step 6b: Add UPDATE Policy (Update/Replace Images)

1. Click "New Policy" button again
2. Select "For full customization"
3. Fill in the policy details:
   - **Policy name**: `Allow authenticated updates`
   - **Allowed operation**: Select `UPDATE`
   - **Target roles**: Select `authenticated`
   - **Policy definition**: Enter the following:
     ```sql
     bucket_id = 'product-images' AND auth.role() = 'authenticated'
     ```
4. Click "Review" then "Save policy"

#### Step 6c: Add DELETE Policy (Delete Images)

1. Click "New Policy" button again
2. Select "For full customization"
3. Fill in the policy details:
   - **Policy name**: `Allow authenticated deletes`
   - **Allowed operation**: Select `DELETE`
   - **Target roles**: Select `authenticated`
   - **Policy definition**: Enter the following:
     ```sql
     bucket_id = 'product-images' AND auth.role() = 'authenticated'
     ```
4. Click "Review" then "Save policy"

**Note**: After creating all three policies, you should see three policies listed:
- Allow authenticated uploads (INSERT)
- Allow authenticated updates (UPDATE)
- Allow authenticated deletes (DELETE)

### 6. Disable Public Signup

**Important**: This step prevents random users from creating accounts. Only manually created admin users will be able to log in.

1. In Supabase Dashboard, go to **Authentication** (left sidebar)
2. Click on **Providers** (or **Auth Providers** in some versions)
3. Find the **Email** provider section
4. Look for one of these options:
   - "Enable email signup" toggle/switch
   - "Enable sign ups" toggle/switch
   - "Allow new user signups" checkbox
5. **Turn it OFF** (disable it)
6. If you only see "Enable Email provider" - that's fine, keep it ON. The email provider needs to be enabled for login to work, but signups can be controlled separately.

**Note**: If you can't find a separate signup toggle, you can skip this step. Just make sure to only create users manually in the next step, and they will be the only ones who can log in.

### 7. Create Admin User

1. In Supabase Dashboard, go to Authentication > Users
2. Click "Add user" > "Create new user"
3. Enter:
   - Email: your admin email (e.g., admin@agriscience.com)
   - Password: a strong password
   - Auto Confirm User: ON (checked)
4. Click "Create user"
5. **Important**: Save these credentials - you'll need them to log in

### 8. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the public website.

### 9. Access Admin Panel

Navigate to [http://localhost:3000/admin/login](http://localhost:3000/admin/login) and log in with your admin credentials.

## Verification Checklist

- [ ] Public website loads at `/`
- [ ] Products page loads at `/products` (will be empty initially)
- [ ] Admin login works at `/admin/login`
- [ ] Can create a product in admin dashboard
- [ ] Product appears on public products page
- [ ] Can edit and delete products
- [ ] Images upload successfully

## Troubleshooting

### "Missing Supabase environment variables" error
- Make sure `.env.local` exists and has the correct values
- Restart the dev server after creating `.env.local`

### Cannot log in to admin panel
- Verify the user was created in Supabase Authentication > Users
- Check that email signup is disabled (only manually created users can log in)
- Try resetting the password in Supabase dashboard

### Images not uploading/updating/deleting
- Verify the `product-images` bucket exists in Storage
- Check that the bucket is set to Public
- Verify all three policies are set for authenticated users:
  - INSERT policy (for uploading new images)
  - UPDATE policy (for replacing existing images)
  - DELETE policy (for removing images)
- Check that policy definitions include: `bucket_id = 'product-images' AND auth.role() = 'authenticated'`

### Products not showing on public site
- Check that RLS policies are correctly set (run `supabase/schema.sql` again)
- Verify the products table exists and has data
- Check browser console for errors

## Production Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) and import your repository
3. Add environment variables in Vercel dashboard:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
4. Deploy

### Post-Deployment

- Verify all routes work correctly
- Test admin login
- Test product creation
- Check that images load properly



