import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    // Validate input
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    // Check if Resend API key is configured
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      // Fallback: Log to console if Resend is not configured
      console.log('Contact Form Submission (Resend not configured):');
      console.log('Name:', name);
      console.log('Email:', email);
      console.log('Message:', message);
      console.log('RESEND_API_KEY is not set in environment variables');
      
      // In production, you should set up Resend API key
      return NextResponse.json(
        { 
          error: 'Email service not configured. RESEND_API_KEY is missing. Please add it to your .env.local file.',
          success: false
        },
        { status: 500 }
      );
    }

    // Log API key status (first 10 chars only for security)
    console.log('Resend API Key configured:', apiKey.substring(0, 10) + '...');

    // Escape HTML to prevent XSS attacks
    function escapeHtml(text: string): string {
      const map: { [key: string]: string } = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;',
      };
      return text.replace(/[&<>"']/g, (m) => map[m]);
    }

    // Sanitize inputs
    const sanitizedName = escapeHtml(name);
    const sanitizedEmail = escapeHtml(email);
    const sanitizedMessage = escapeHtml(message);

    // Send email using Resend
    try {
      const { data, error } = await resend.emails.send({
        from: 'onboarding@resend.dev', // Using default Resend domain for testing
        to: 'anothu@gmail.com',
        replyTo: email, // Using camelCase for Resend API
        subject: `New Contact Form Submission from Agri Science Internationals Website`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
            <h2 style="color: #2d5016; margin-bottom: 20px;">New Contact Form Submission</h2>
            <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <p style="margin: 10px 0;"><strong>Name:</strong> ${sanitizedName}</p>
              <p style="margin: 10px 0;"><strong>Email:</strong> <a href="mailto:${sanitizedEmail}">${sanitizedEmail}</a></p>
              <p style="margin: 10px 0;"><strong>Message:</strong></p>
              <p style="white-space: pre-wrap; background-color: white; padding: 15px; border-radius: 4px; margin-top: 10px; line-height: 1.6;">${sanitizedMessage}</p>
            </div>
            <p style="color: #666; font-size: 12px; margin-top: 20px;">This email was sent from the AgriScience Internationals contact form.</p>
          </div>
        `,
      });

      if (error) {
        console.error('Resend API Error Details:', JSON.stringify(error, null, 2));
        return NextResponse.json(
          { 
            error: `Failed to send email: ${error.message || 'Unknown error'}. Please check your Resend API key and configuration.` 
          },
          { status: 500 }
        );
      }

      // Log the full response for debugging
      console.log('=== Resend Email Response ===');
      console.log('Email ID:', data?.id);
      console.log('Full Response:', JSON.stringify(data, null, 2));
      console.log('Email sent to: anothu@gmail.com');
      console.log('From: onboarding@resend.dev');
      console.log('============================');
      
      // Return the email ID so user can check in Resend dashboard
      return NextResponse.json(
        { 
          success: true, 
          message: 'Your message has been sent successfully!',
          emailId: data?.id // Include email ID for tracking
        },
        { status: 200 }
      );
    } catch (resendError: any) {
      console.error('Resend send error:', resendError);
      console.error('Error details:', JSON.stringify(resendError, null, 2));
      return NextResponse.json(
        { 
          error: `Email service error: ${resendError.message || 'Failed to send email. Please check your Resend API key.'}` 
        },
        { status: 500 }
      );
    }

  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'An error occurred. Please try again later.' },
      { status: 500 }
    );
  }
}

