# Supabase Database Setup Guide

This guide will walk you through setting up your Supabase database for the AgriScience website.

## Step 1: Create Supabase Project

1. Go to [supabase.com](https://supabase.com) and sign in
2. Click **"New Project"**
3. Fill in:
   - **Project Name**: AgriScience Website (or your preferred name)
   - **Database Password**: Create a strong password (save this!)
   - **Region**: Choose closest to your users
4. Click **"Create new project"**
5. Wait 2-3 minutes for the project to be provisioned

## Step 2: Get Your API Keys

1. In your Supabase project dashboard, go to **Settings** → **API**
2. Copy these values:
   - **Project URL** (looks like: `https://xxxxx.supabase.co`)
   - **anon public** key (long string starting with `eyJ...`)
3. Add them to your `.env.local` file:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=your_project_url_here
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key_here
   ADMIN_OWNER_EMAILS=your-admin-email@example.com
   ```

## Step 3: Create the Products Table

1. In Supabase dashboard, go to **SQL Editor**
2. Click **"New query"**
3. Copy and paste the entire contents of `supabase/schema.sql` from this project
4. **IMPORTANT**: Before running, edit line 20-22 in the SQL to add your admin email:
   ```sql
   owner_emails TEXT[] := ARRAY[
     'your-admin-email@example.com',  -- Add your email here
   ];
   ```
5. Click **"Run"** (or press Ctrl+Enter)
6. You should see "Success. No rows returned"

## Step 4: Verify Table Creation

1. Go to **Table Editor** in the left sidebar
2. You should see a `products` table with these columns:
   - `id` (uuid, primary key)
   - `name` (text, required)
   - `description` (text, required)
   - `image_url` (text, optional)
   - `created_at` (timestamp)

## Step 5: Set Up Storage for Images

1. Go to **Storage** in the left sidebar
2. Click **"Create a new bucket"**
3. Name it: `product-images`
4. Set it to **Public** (toggle ON)
5. Click **"Create bucket"**

### Set Up Storage Policies

1. Click on the `product-images` bucket
2. Go to **Policies** tab
3. Click **"New Policy"**

#### Policy 1: Allow Public Read Access
- **Policy name**: `Public can view images`
- **Allowed operation**: `SELECT`
- **Target roles**: `public`
- **Policy definition**: Leave empty (or `true`)
- Click **"Review"** then **"Save policy"**

#### Policy 2: Allow Authenticated Uploads
- **Policy name**: `Owners can upload images`
- **Allowed operation**: `INSERT`
- **Target roles**: `authenticated`
- **Policy definition**: 
  ```sql
  bucket_id = 'product-images'
  ```
- Click **"Review"** then **"Save policy"**

#### Policy 3: Allow Authenticated Updates
- **Policy name**: `Owners can update images`
- **Allowed operation**: `UPDATE`
- **Target roles**: `authenticated`
- **Policy definition**: 
  ```sql
  bucket_id = 'product-images'
  ```
- Click **"Review"** then **"Save policy"**

#### Policy 4: Allow Authenticated Deletes
- **Policy name**: `Owners can delete images`
- **Allowed operation**: `DELETE`
- **Target roles**: `authenticated`
- **Policy definition**: 
  ```sql
  bucket_id = 'product-images'
  ```
- Click **"Review"** then **"Save policy"**

## Step 6: Create Admin User

1. Go to **Authentication** → **Users**
2. Click **"Add user"** → **"Create new user"**
3. Fill in:
   - **Email**: Your admin email (must match the email in `ADMIN_OWNER_EMAILS` env variable)
   - **Password**: Create a strong password
   - **Auto Confirm User**: Toggle **ON** (important!)
4. Click **"Create user"**
5. **Save these credentials** - you'll need them to log in

## Step 7: Update Owner Email Function

1. Go back to **SQL Editor**
2. Run this query to update the owner email function with your email:

```sql
CREATE OR REPLACE FUNCTION is_owner_email()
RETURNS BOOLEAN AS $$
DECLARE
  user_email TEXT;
  owner_emails TEXT[] := ARRAY[
    'your-admin-email@example.com'  -- Replace with your actual email
  ];
BEGIN
  user_email := (auth.jwt() ->> 'email');
  RETURN user_email IS NOT NULL AND LOWER(user_email) = ANY(owner_emails);
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;
```

Replace `'your-admin-email@example.com'` with your actual admin email address.

## Step 8: Test the Setup

1. Restart your Next.js dev server:
   ```bash
   npm run dev
   ```
2. Go to `http://localhost:3000/admin/login`
3. Log in with your admin credentials
4. Try adding a product with name, description, and image
5. Verify it appears in the dashboard

## Troubleshooting

### "Missing Supabase environment variables"
- Make sure `.env.local` exists in the project root
- Check that variable names are exactly: `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- Restart the dev server after adding env variables

### "Permission denied" when adding products
- Check that your email is in the `is_owner_email()` function array
- Verify `ADMIN_OWNER_EMAILS` env variable matches your login email
- Make sure you're logged in with the correct account

### Images not uploading
- Verify the `product-images` bucket exists and is set to **Public**
- Check that all 4 storage policies are created
- Make sure you're logged in (authenticated)

### Table doesn't exist
- Run the SQL from `supabase/schema.sql` again
- Check the Table Editor to verify the `products` table exists

## Database Schema

The `products` table has the following structure:

| Column | Type | Required | Description |
|--------|------|----------|-------------|
| `id` | UUID | Yes | Primary key (auto-generated) |
| `name` | TEXT | Yes | Product name |
| `description` | TEXT | Yes | Product description |
| `image_url` | TEXT | No | URL to product image in storage |
| `created_at` | TIMESTAMP | Yes | Auto-set when created |

## Security

- **Row Level Security (RLS)** is enabled on the products table
- Public users can only **read** products
- Only owner emails (defined in the function) can **create, update, or delete** products
- Images are stored in a public bucket but only authenticated owners can upload

