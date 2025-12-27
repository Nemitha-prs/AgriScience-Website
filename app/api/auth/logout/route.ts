import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    console.log('[LOGOUT API] Logout requested');
    
    const response = NextResponse.json({ success: true });
    response.cookies.delete('admin_session');

    console.log('[LOGOUT API] Session cookie deleted');
    return response;
  } catch (error: any) {
    console.error('[LOGOUT API] Logout error:', error);
    return NextResponse.json(
      { error: 'An error occurred during logout' },
      { status: 500 }
    );
  }
}
