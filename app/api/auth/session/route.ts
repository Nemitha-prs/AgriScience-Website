export const dynamic = "force-dynamic";
import { NextRequest, NextResponse } from 'next/server';
import { validateSession, getSessionEmail } from '@/lib/auth';
import { isOwnerEmail } from '@/lib/admin';

export async function GET(request: NextRequest) {
  try {
    const sessionId = request.cookies.get('admin_session')?.value;

    if (!sessionId || !(await validateSession(sessionId))) {
      return NextResponse.json({ authenticated: false }, { status: 401 });
    }

    const email = await getSessionEmail(sessionId);
    
    if (!email || !isOwnerEmail(email)) {
      return NextResponse.json({ authenticated: false }, { status: 401 });
    }

    return NextResponse.json({ authenticated: true, email });
  } catch (error: any) {
    console.error('Session check error:', error);
    return NextResponse.json({ authenticated: false }, { status: 401 });
  }
}

