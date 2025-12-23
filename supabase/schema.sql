-- Create products table
CREATE TABLE IF NOT EXISTS products (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT NOT NULL,
  image_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- Enable Row Level Security
ALTER TABLE products ENABLE ROW LEVEL SECURITY;

-- Function to check if current user is an owner
-- Update the email list below with your admin email addresses
CREATE OR REPLACE FUNCTION is_owner_email()
RETURNS BOOLEAN AS $$
DECLARE
  user_email TEXT;
  owner_emails TEXT[] := ARRAY[
    -- Add owner emails here (lowercase, comma-separated in array)
    -- Example: 'admin@agriscience.com', 'owner@example.com'
  ];
BEGIN
  -- Get the current user's email from JWT
  user_email := (auth.jwt() ->> 'email');
  
  -- Return true if email is in the owner list
  RETURN user_email IS NOT NULL AND LOWER(user_email) = ANY(owner_emails);
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Policy: Allow public read access to products
CREATE POLICY "Public can view products"
  ON products
  FOR SELECT
  USING (true);

-- Policy: Only owner emails can insert products
DROP POLICY IF EXISTS "Authenticated users can insert products" ON products;
DROP POLICY IF EXISTS "Owners can insert products" ON products;
CREATE POLICY "Owners can insert products"
  ON products
  FOR INSERT
  WITH CHECK (is_owner_email());

-- Policy: Only owner emails can update products
DROP POLICY IF EXISTS "Authenticated users can update products" ON products;
DROP POLICY IF EXISTS "Owners can update products" ON products;
CREATE POLICY "Owners can update products"
  ON products
  FOR UPDATE
  USING (is_owner_email())
  WITH CHECK (is_owner_email());

-- Policy: Only owner emails can delete products
DROP POLICY IF EXISTS "Authenticated users can delete products" ON products;
DROP POLICY IF EXISTS "Owners can delete products" ON products;
CREATE POLICY "Owners can delete products"
  ON products
  FOR DELETE
  USING (is_owner_email());
