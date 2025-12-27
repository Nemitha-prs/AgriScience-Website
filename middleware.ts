import { NextResponse, type NextRequest } from 'next/server';
import { verifyToken } from '@/lib/auth';

export async function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  
  // Get token from cookie
  const cookie = request.cookies.get('admin_session');
  const token = cookie?.value;

  // Allow login page
  if (pathname === '/admin/login') {
    if (token) {
      const payload = await verifyToken(token);
      if (payload) {
        return NextResponse.redirect(new URL('/admin/dashboard', request.url));
      }
    }
    const response = NextResponse.next();
    addCacheHeaders(response, pathname, request);
    return response;
  }

  // Protect all other admin routes
  if (pathname.startsWith('/admin')) {
    if (!token) {
      return NextResponse.redirect(new URL('/admin/login', request.url));
    }
    
    const payload = await verifyToken(token);
    if (!payload) {
      const response = NextResponse.redirect(new URL('/admin/login', request.url));
      // Clear invalid cookie
      response.cookies.delete('admin_session');
      return response;
    }
    const response = NextResponse.next();
    addCacheHeaders(response, pathname, request);
    return response;
  }

  // Add cache headers for all other routes
  const response = NextResponse.next();
  addCacheHeaders(response, pathname, request);
  return response;
}

/**
 * Add cache headers for static assets and public API responses
 * Non-intrusive - only adds headers, doesn't modify responses
 */
function addCacheHeaders(response: NextResponse, pathname: string, request: NextRequest) {
  // Cache static assets (images, fonts, etc.)
  if (
    pathname.startsWith('/images/') ||
    pathname.startsWith('/_next/static/') ||
    pathname.match(/\.(jpg|jpeg|png|gif|svg|webp|avif|ico|woff|woff2|ttf|eot)$/i)
  ) {
    response.headers.set(
      'Cache-Control',
      'public, max-age=31536000, immutable'
    );
  }

  // Cache public API responses (products list)
  if (pathname === '/api/products' && request.method === 'GET') {
    response.headers.set(
      'Cache-Control',
      'public, s-maxage=60, stale-while-revalidate=300'
    );
  }
}

export const config = {
  matcher: ['/admin/:path*'],
};
