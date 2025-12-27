# Email Delivery Troubleshooting Guide

If the contact form shows "Message Sent" but you're not receiving emails, follow these steps:

## Step 1: Check Your Server Console/Logs

When you submit the form, check your terminal/console where `npm run dev` is running. You should see:

```
=== Resend Email Response ===
Email ID: re_xxxxxxxxxxxxx
Full Response: {...}
Email sent to: anothu@gmail.com
From: onboarding@resend.dev
============================
```

**If you see an Email ID**, the email was successfully sent to Resend. The issue is with delivery.

## Step 2: Check Resend Dashboard

1. Go to [resend.com](https://resend.com) and log in
2. Navigate to **Logs** or **Emails** in the dashboard
3. Look for the email with the ID from your console
4. Check the **Status**:
   - ✅ **Delivered** = Email was sent and delivered (check spam folder)
   - ⚠️ **Bounced** = Email was rejected by recipient server
   - ⏳ **Pending** = Email is still being processed
   - ❌ **Failed** = Email failed to send (check error message)

## Step 3: Check Spam/Junk Folder

**Important**: Emails from `onboarding@resend.dev` often go to spam because:
- It's an unverified domain
- Gmail/other providers flag it as potentially suspicious

**Check these locations:**
- Gmail: Spam folder, Promotions tab, All Mail
- Other providers: Junk/Spam folder

## Step 4: Verify Domain (Recommended for Production)

Using `onboarding@resend.dev` has limitations:
- Higher chance of going to spam
- Limited sending capacity
- Not professional

**To fix this:**

1. **In Resend Dashboard:**
   - Go to **Domains**
   - Click **Add Domain**
   - Enter your domain (e.g., `agriscience.com`)
   - Follow DNS verification steps

2. **Update the API route:**
   - Open `app/api/contact/route.ts`
   - Change `from: 'onboarding@resend.dev'` to `from: 'contact@yourdomain.com'`
   - Use your verified domain

## Step 5: Test with Different Email Provider

Try sending to a different email address to see if it's a Gmail-specific issue:
- Try `anothu@outlook.com` or another provider
- Update the `to` field in `app/api/contact/route.ts` temporarily

## Step 6: Check Resend Account Limits

1. Go to Resend Dashboard → **Settings** or **Usage**
2. Check if you've exceeded:
   - Daily sending limit
   - Monthly quota
   - Rate limits

Free tier: 3,000 emails/month, 100 emails/day

## Step 7: Check API Key Permissions

1. Go to Resend Dashboard → **API Keys**
2. Make sure your API key has:
   - ✅ **Send emails** permission
   - ✅ Is **Active** (not revoked)
   - ✅ Matches the key in your `.env.local`

## Step 8: Common Issues & Solutions

### Issue: Email shows as "sent" but not received
**Solution**: 
- Check spam folder (most common)
- Verify domain in Resend
- Check Resend dashboard logs for delivery status

### Issue: Emails going to spam
**Solution**:
- Verify your domain in Resend
- Use a custom "from" address
- Add SPF/DKIM records (Resend provides these)

### Issue: "Invalid API key" error
**Solution**:
- Regenerate API key in Resend dashboard
- Update `.env.local` file
- Restart dev server: `npm run dev`

### Issue: Rate limit exceeded
**Solution**:
- Wait 24 hours for daily limit reset
- Upgrade Resend plan
- Reduce email sending frequency

## Quick Test

1. Submit the contact form
2. Check your server console for the Email ID
3. Go to Resend Dashboard → Logs
4. Find the email by ID
5. Check the status and any error messages

## Still Not Working?

If emails are showing as "Delivered" in Resend but not arriving:

1. **Check Gmail filters**: Settings → Filters and Blocked Addresses
2. **Check email forwarding**: Make sure `anothu@gmail.com` isn't forwarding elsewhere
3. **Try a different recipient**: Test with another email address
4. **Contact Resend support**: They can check delivery logs on their end

## Next Steps

For production, you should:
1. ✅ Verify your domain in Resend
2. ✅ Use a custom "from" address (e.g., `contact@agriscience.com`)
3. ✅ Set up SPF/DKIM records (Resend provides instructions)
4. ✅ Monitor email delivery in Resend dashboard

