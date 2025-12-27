# 🔍 Authentication Debugging Guide

## Quick Debug Steps

### 1. Check Environment Variables
Make sure `.env.local` has:
```env
ADMIN_EMAIL=your-email@example.com
ADMIN_PASSWORD=your-password
ADMIN_OWNER_EMAILS=your-email@example.com
JWT_SECRET=your-secret-key-at-least-32-chars
```

**IMPORTANT**: After adding/changing `.env.local`, **restart the dev server**!

### 2. Check Server Console Logs

When you try to login, you should see:
```
[LOGIN API] Login attempt for: your-email@example.com
[AUTH] Validating credentials for: your-email@example.com
[AUTH] Credentials valid: true
[AUTH] Token created for: your-email@example.com
[LOGIN API] Login successful, token set in cookie
```

When middleware runs:
```
[MIDDLEWARE] ====== Middleware Running ======
[MIDDLEWARE] Path: /admin/dashboard
[MIDDLEWARE] Cookie exists: true
[MIDDLEWARE] Token present: true
[AUTH] Token valid for: your-email@example.com
[MIDDLEWARE] Access granted to: /admin/dashboard
```

### 3. Check Browser Console

After clicking login, check browser console (F12) for:
```
[CLIENT] Login response: {success: true, message: "Login successful", ...}
[CLIENT] Cookie check: Found
[CLIENT] Has cookie before redirect: true
[CLIENT] Redirecting to dashboard...
```

### 4. Check Browser Cookies

1. Open DevTools (F12)
2. Go to **Application** tab → **Cookies** → `http://localhost:3000`
3. Look for `admin_session` cookie
4. Should have:
   - **Name**: `admin_session`
   - **Value**: A long JWT token string
   - **HttpOnly**: ✓ (checked)
   - **Path**: `/`

### 5. Test Token Verification

Visit: `http://localhost:3000/api/auth/test`

Should return:
```json
{
  "hasToken": true,
  "tokenLength": 200+,
  "jwtSecretSet": true,
  "verificationResult": {
    "email": "your-email@example.com"
  }
}
```

## Common Issues

### Issue: "JWT_SECRET not set"
**Solution**: Add `JWT_SECRET` to `.env.local` and restart server

### Issue: Cookie not being set
**Check**:
- Server console shows "Login successful, token set in cookie"
- Browser Network tab → Login request → Response Headers → `Set-Cookie: admin_session=...`
- Cookie is not blocked by browser settings

### Issue: Token verification fails
**Check**:
- JWT_SECRET is the same in both API route and middleware
- Token hasn't expired (24 hours)
- Visit `/api/auth/test` to see verification result

### Issue: Still redirecting to login
**Check**:
1. Server console for middleware logs
2. Token is actually in cookie (DevTools)
3. JWT_SECRET is set and consistent
4. No errors in server console

## Generate JWT_SECRET

If you need to generate a secure secret:

**Windows PowerShell:**
```powershell
[Convert]::ToBase64String((1..32 | ForEach-Object { Get-Random -Maximum 256 }))
```

**Linux/Mac:**
```bash
openssl rand -base64 32
```

Or use an online generator (at least 32 characters).

## Still Not Working?

1. **Clear all cookies** for localhost
2. **Restart dev server** completely
3. **Check server console** for any error messages
4. **Check browser console** for client-side errors
5. **Try the test endpoint**: `/api/auth/test` to see token status

