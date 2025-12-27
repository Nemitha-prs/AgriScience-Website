import { NextRequest, NextResponse } from 'next/server';
import { verifyToken } from '@/lib/auth';

export async function GET(request: NextRequest) {
  const token = request.cookies.get('admin_session')?.value;
  
  return NextResponse.json({
    hasToken: !!token,
    tokenLength: token?.length || 0,
    tokenPreview: token ? token.substring(0, 20) + '...' : null,
    jwtSecretSet: !!process.env.JWT_SECRET,
    verificationResult: token ? await verifyToken(token) : null,
  });
}

