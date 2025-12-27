# Contact Form Email Setup

The contact form is now set up to send emails to `anothu@gmail.com` when users submit the form.

## Setup Instructions

### 1. Install Resend Package

Run the following command to install Resend:

```bash
npm install resend
```

### 2. Get Resend API Key

1. Go to [Resend.com](https://resend.com) and sign up for a free account
2. Navigate to the API Keys section in your dashboard
3. Create a new API key
4. Copy the API key

### 3. Configure Environment Variable

Create a `.env.local` file in the root of your project (if it doesn't exist) and add:

```
RESEND_API_KEY=your_resend_api_key_here
```

Replace `your_resend_api_key_here` with your actual Resend API key.

### 4. Verify Your Domain (Optional but Recommended)

For production use, you should verify your domain in Resend to send emails from your own domain instead of `onboarding@resend.dev`. However, the default sender will work for testing.

To update the sender email:
1. Go to Resend dashboard → Domains
2. Add and verify your domain
3. Update the `from` field in `app/api/contact/route.ts` to use your verified domain

### 5. Test the Form

1. Start your development server: `npm run dev`
2. Navigate to the contact page
3. Fill out and submit the form
4. Check `anothu@gmail.com` for the email

## How It Works

- When a user submits the contact form, the data is sent to `/api/contact`
- The API route validates the input and sends an email using Resend
- The email includes:
  - Sender's name
  - Sender's email (as reply-to)
  - Message content
- The email is sent to `anothu@gmail.com`

## Troubleshooting

- **Email not sending**: Check that `RESEND_API_KEY` is set in your `.env.local` file
- **API errors**: Check the browser console and server logs for error messages
- **Rate limits**: Resend free tier allows 3,000 emails/month

## Alternative: Using Nodemailer

If you prefer to use Nodemailer with your own SMTP server (Gmail, etc.), you can modify the API route accordingly. Contact the developer for assistance.

