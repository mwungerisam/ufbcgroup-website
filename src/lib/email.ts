import nodemailer from 'nodemailer';

interface SendEmailOptions {
  to: string;
  subject: string;
  html: string;
  text?: string;
  replyTo?: string;
}

export async function sendEmail(options: SendEmailOptions) {
  // Create a test account if in development
  const testAccount = process.env.NODE_ENV === 'development' 
    ? await nodemailer.createTestAccount()
    : null;

  // Create reusable transporter object using the default SMTP transport
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST || 'smtp.sendgrid.net',
    port: parseInt(process.env.EMAIL_PORT || '587'),
    secure: process.env.EMAIL_SECURE === 'true', // true for 465, false for other ports
    auth: {
      user: process.env.EMAIL_USER || 'apikey', // SendGrid uses 'apikey' as the username
      pass: process.env.EMAIL_PASS || '',
    },
    // For development with test account
    ...(process.env.NODE_ENV === 'development' && testAccount ? {
      host: 'smtp.ethereal.email',
      port: 587,
      secure: false,
      auth: {
        user: testAccount.user,
        pass: testAccount.pass,
      },
    } : {}),
  });

  try {
    // Send mail with defined transport object
    const info = await transporter.sendMail({
      from: process.env.EMAIL_FROM || 'UNIQUE FORM BUSINESS COMPANY Ltd <ufbcltd@gmail.com>',
      to: options.to,
      replyTo: options.replyTo || process.env.EMAIL_REPLY_TO,
      subject: options.subject,
      text: options.text || '',
      html: options.html,
    });

    if (process.env.NODE_ENV === 'development') {
      console.log('Message sent: %s', info.messageId);
      console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
    }

    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error('Error sending email:', error);
    return { 
      success: false, 
      error: error instanceof Error ? error.message : 'Unknown error occurred' 
    };
  }
}

// Contact form email template
export function createContactEmailTemplate(data: {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}) {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background-color: #1a365d; color: white; padding: 20px; text-align: center; }
          .content { padding: 20px; background-color: #f9f9f9; }
          .footer { margin-top: 20px; font-size: 12px; color: #666; text-align: center; }
          .field { margin-bottom: 15px; }
          .field-label { font-weight: bold; color: #2d3748; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h2>New Contact Form Submission</h2>
          </div>
          <div class="content">
            <div class="field">
              <div class="field-label">Name:</div>
              <div>${data.name}</div>
            </div>
            <div class="field">
              <div class="field-label">Email:</div>
              <div>${data.email}</div>
            </div>
            ${data.phone ? `
              <div class="field">
                <div class="field-label">Phone:</div>
                <div>${data.phone}</div>
              </div>
            ` : ''}
            <div class="field">
              <div class="field-label">Subject:</div>
              <div>${data.subject}</div>
            </div>
            <div class="field">
              <div class="field-label">Message:</div>
              <div style="white-space: pre-line;">${data.message}</div>
            </div>
          </div>
          <div class="footer">
            <p>This email was sent from the contact form on ${process.env.NEXT_PUBLIC_SITE_URL || 'your website'}</p>
          </div>
        </div>
      </body>
    </html>
  `;
}
