import { NextRequest, NextResponse } from 'next/server';
import { validateCredentials, createToken } from '@/lib/auth';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, password } = body;

    console.log('[LOGIN API] Login attempt for:', email);

    if (!email || !password) {
      return NextResponse.json(
        { error: 'Email and password are required' },
        { status: 400 }
      );
    }

    // Check if environment variables are configured
    if (!process.env.ADMIN_EMAIL || !process.env.ADMIN_PASSWORD) {
      console.error('[LOGIN API] ADMIN_EMAIL or ADMIN_PASSWORD not configured');
      return NextResponse.json(
        { error: 'Server configuration error. Please contact administrator.' },
        { status: 500 }
      );
    }

    // Validate credentials
    const isValid = await validateCredentials(email, password);

    if (!isValid) {
      console.log('[LOGIN API] Invalid credentials');
      return NextResponse.json(
        { error: 'Invalid email or password' },
        { status: 401 }
      );
    }

    // Verify email is in owner list
    const { isOwnerEmail } = await import('@/lib/admin');
    if (!isOwnerEmail(email)) {
      console.log('[LOGIN API] Email not authorized:', email);
      return NextResponse.json(
        { error: 'Access denied. Email not authorized.' },
        { status: 403 }
      );
    }

    // Create JWT token
    const token = await createToken(email);

    // Create response
    const response = NextResponse.json({ 
      success: true,
      message: 'Login successful',
      redirectUrl: '/admin/dashboard'
    }, { status: 200 });
    
    // Set JWT token in cookie
    response.cookies.set('admin_session', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 24 * 60 * 60, // 24 hours in seconds
      path: '/',
    });

    console.log('[LOGIN API] Login successful, token set in cookie');
    return response;
  } catch (error: any) {
    console.error('[LOGIN API] Login error:', error);
    return NextResponse.json(
      { error: 'An error occurred during login' },
      { status: 500 }
    );
  }
}
