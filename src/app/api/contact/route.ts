import { NextRequest, NextResponse } from 'next/server';
import { sendEmail, createContactEmailTemplate } from '@/lib/email';

// Rate limiting configuration
const RATE_LIMIT = {
  WINDOW_MS: 60 * 1000, // 1 minute
  MAX_REQUESTS: 5,
};

// Simple in-memory rate limiter (replace with Redis in production)
const requestCounts = new Map<string, { count: number; resetAt: number }>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const record = requestCounts.get(ip);

  if (!record || record.resetAt < now) {
    requestCounts.set(ip, { count: 1, resetAt: now + RATE_LIMIT.WINDOW_MS });
    return false;
  }

  if (record.count >= RATE_LIMIT.MAX_REQUESTS) {
    return true;
  }

  record.count += 1;
  return false;
}

export async function POST(request: NextRequest) {
  const ip = request.headers.get('x-forwarded-for') || 'unknown';
  
  // Apply rate limiting
  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: 'Too many requests. Please try again later.' },
      { status: 429 }
    );
  }

  try {
    const body = await request.json();
    const { name, email, phone, company, service, message } = body;

    // Basic validation
    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Please enter a valid email address' },
        { status: 400 }
      );
    }

    // Prepare email content
    const emailHtml = createContactEmailTemplate({
      name,
      email,
      phone,
      subject: service ? `Service Inquiry: ${service}` : 'New Contact Form Submission',
      message: `Company: ${company || 'Not specified'}\n\n${message}`,
    });

    // Send email to admin
    const adminEmailResult = await sendEmail({
      to: process.env.EMAIL_TO || 'ufbcltd@gmail.com',
      subject: `New Contact: ${name} - ${service || 'General Inquiry'}`,
      html: emailHtml,
      replyTo: email,
    });

    if (!adminEmailResult.success) {
      console.error('Failed to send admin email:', adminEmailResult.error);
      throw new Error('Failed to send notification email');
    }

    // Send confirmation email to user
    const userEmailResult = await sendEmail({
      to: email,
      subject: 'Thank you for contacting UFBC',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1A237E;">Thank you for contacting us, ${name}!</h2>
          <p>We've received your message and will get back to you as soon as possible.</p>
          
          <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3>Your inquiry details:</h3>
            ${service ? `<p><strong>Service:</strong> ${service}</p>` : ''}
            ${company ? `<p><strong>Company:</strong> ${company}</p>` : ''}
            <p><strong>Message:</strong> ${message.replace(/\n/g, '<br>')}</p>
          </div>
          
          <p>If you have any urgent questions, please call us at <strong>${process.env.NEXT_PUBLIC_COMPANY_PHONE || '+250 788 888 888'}</strong>.</p>
          
          <p>Best regards,<br>
          <strong>${process.env.NEXT_PUBLIC_COMPANY_NAME || 'UFBC Team'}</strong></p>
        </div>
      `,
    });

    if (!userEmailResult.success) {
      console.error('Failed to send confirmation email:', userEmailResult.error);
      // Don't fail the request if confirmation email fails
    }

    return NextResponse.json(
      { 
        success: true,
        message: 'Message sent successfully! We\'ll get back to you soon.' 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { 
        success: false,
        error: 'An error occurred while sending your message. Please try again later.' 
      },
      { status: 500 }
    );
  }
}

// Add CORS headers for API routes
export function OPTIONS() {
  return new NextResponse(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    },
  });
}