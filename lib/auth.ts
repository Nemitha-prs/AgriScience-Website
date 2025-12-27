/**
 * JWT-Based Authentication System
 * 
 * Uses JWT tokens stored in cookies for stateless authentication.
 * Works in serverless environments (Vercel, etc.) where in-memory storage doesn't persist.
 */

import { SignJWT, jwtVerify } from 'jose';

// Secret key for JWT signing/verification
// In production, use a strong random secret (at least 32 characters)
const getJWTSecret = () => {
  const secret = process.env.JWT_SECRET || 'default-jwt-secret-key-for-development-only-change-in-production-min-32-chars';
  if (!process.env.JWT_SECRET) {
    console.warn('[AUTH] WARNING: JWT_SECRET not set in environment variables!');
    console.warn('[AUTH] Using default secret for development. This will cause issues if not consistent.');
    console.warn('[AUTH] Add JWT_SECRET to .env.local and restart the server.');
  } else {
    console.log('[AUTH] JWT_SECRET is configured (length:', process.env.JWT_SECRET.length, ')');
  }
  return new TextEncoder().encode(secret);
};

// Create JWT secret once at module load
const JWT_SECRET = getJWTSecret();

const JWT_ALGORITHM = 'HS256';
const JWT_EXPIRES_IN = '24h'; // 24 hours

/**
 * Validate admin credentials
 */
export async function validateCredentials(email: string, password: string): Promise<boolean> {
  const adminEmail = process.env.ADMIN_EMAIL || '';
  const adminPassword = process.env.ADMIN_PASSWORD || '';
  
  console.log('[AUTH] Validating credentials for:', email);
  console.log('[AUTH] Admin email configured:', !!adminEmail);
  
  const isValid = email === adminEmail && password === adminPassword;
  console.log('[AUTH] Credentials valid:', isValid);
  
  return isValid;
}

/**
 * Create a JWT token for the authenticated user
 */
export async function createToken(email: string): Promise<string> {
  try {
    const token = await new SignJWT({ email })
      .setProtectedHeader({ alg: JWT_ALGORITHM })
      .setIssuedAt()
      .setExpirationTime(JWT_EXPIRES_IN)
      .sign(JWT_SECRET);

    console.log('[AUTH] Token created for:', email);
    return token;
  } catch (error) {
    console.error('[AUTH] Error creating token:', error);
    throw new Error('Failed to create authentication token');
  }
}

/**
 * Verify and decode a JWT token
 */
export async function verifyToken(token: string | null | undefined): Promise<{ email: string } | null> {
  if (!token) {
    console.log('[AUTH] No token provided');
    return null;
  }

  try {
    const { payload } = await jwtVerify(token, JWT_SECRET, {
      algorithms: [JWT_ALGORITHM],
    });

    const email = payload.email as string;
    if (!email) {
      console.log('[AUTH] Token missing email');
      return null;
    }

    console.log('[AUTH] Token valid for:', email);
    return { email };
  } catch (error: any) {
    console.log('[AUTH] Token verification failed:', error.message);
    return null;
}
}

/**
 * Validate a session token (alias for verifyToken for backward compatibility)
 */
export async function validateSession(token: string | null | undefined): Promise<boolean> {
  const result = await verifyToken(token);
  return result !== null;
}

/**
 * Get email from session token
 */
export async function getSessionEmail(token: string | null | undefined): Promise<string | null> {
  const result = await verifyToken(token);
  return result?.email || null;
}
