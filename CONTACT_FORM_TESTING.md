# 📧 Contact Form Testing Guide

This guide will help you set up and test the contact form so that messages from users are received at the company email (`ufbcltd@gmail.com`).

## 🔧 Setup Options

You have **two options** for sending emails:

### Option 1: SMTP (Server-Side) - Recommended for Production

Uses Nodemailer to send emails directly from your server. Works with Gmail, SendGrid, or any SMTP provider.

**Advantages:**
- More reliable for production
- Works with any email provider
- Better email deliverability
- No client-side API keys exposed

### Option 2: EmailJS (Client-Side)

Uses EmailJS service to send emails from the browser.

**Advantages:**
- Easy setup
- No server configuration needed
- Good for testing

---

## 🚀 Option 1: SMTP Setup (Recommended)

### Step 1: Set Up Environment Variables

Create a `.env.local` file in the project root with the following:

```env
# Email Configuration (Required)
EMAIL_USER=ufbcltd@gmail.com
EMAIL_PASS=your-gmail-app-password
EMAIL_FROM=Unique Form Business <ufbcltd@gmail.com>
EMAIL_TO=ufbcltd@gmail.com
EMAIL_REPLY_TO=ufbcltd@gmail.com

# SMTP Configuration (for Gmail)
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_SECURE=false

# Site Configuration
NEXT_PUBLIC_SITE_URL=https://ufbcgroup.com
NEXT_PUBLIC_COMPANY_NAME=UNIQUE FORM BUSINESS COMPANY Ltd
NEXT_PUBLIC_COMPANY_PHONE=+250 783 654 015
```

### Step 2: Generate Gmail App Password

1. **Enable 2-Factor Authentication** on your Gmail account (`ufbcltd@gmail.com`)
2. Go to [Google Account Settings](https://myaccount.google.com/)
3. Navigate to **Security** → **2-Step Verification** → **App passwords**
4. Select "Mail" as the app and "Other" as the device
5. Name it "UFBC Website" and generate
6. Copy the 16-character password (no spaces)
7. Use this password in `EMAIL_PASS` in `.env.local`

### Step 3: Test the Contact Form

1. **Start the development server:**
   ```bash
   npm run dev
   ```

2. **Open your browser** and navigate to `http://localhost:3000/contact`

3. **Fill out the contact form** with test data:
   - Name: Test User
   - Email: your-test-email@example.com
   - Phone: +250 123 456 789
   - Company: Test Company
   - Service: General Inquiry
   - Message: This is a test message from the contact form.

4. **Submit the form** and check:
   - ✅ You should see a success message: "Your message has been sent!"
   - ✅ Check `ufbcltd@gmail.com` inbox for the new contact form submission
   - ✅ The user (test email) should receive a confirmation email

### Step 4: Verify Email Received

Check your email inbox (`ufbcltd@gmail.com`) for:
- **Subject:** `New Contact: Test User - General Inquiry`
- **Content:** Should contain all form fields (name, email, phone, company, message)
- **Reply-To:** Should be set to the user's email address

---

## 📦 Option 2: EmailJS Setup

### Step 1: Create EmailJS Account

1. Go to [EmailJS.com](https://www.emailjs.com/) and sign up
2. Verify your email address

### Step 2: Set Up Email Service

1. In EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose **Gmail** (or your email provider)
4. Connect your Gmail account (`ufbcltd@gmail.com`)
5. Note your **Service ID**

### Step 3: Create Email Template

1. Go to **Email Templates** in EmailJS dashboard
2. Click **Create New Template**
3. Set up the template with these variables:
   - `{{from_name}}` - User's name
   - `{{from_email}}` - User's email
   - `{{phone}}` - User's phone
   - `{{company}}` - User's company
   - `{{service}}` - Service inquiry
   - `{{message}}` - User's message

4. **To:** Set to `ufbcltd@gmail.com`
5. **Subject:** `New Contact: {{from_name}} - {{service}}`
6. **Content:** 
   ```
   Name: {{from_name}}
   Email: {{from_email}}
   Phone: {{phone}}
   Company: {{company}}
   Service: {{service}}
   
   Message:
   {{message}}
   ```
7. Note your **Template ID**

### Step 4: Get Public Key

1. Go to **Account** → **General** in EmailJS dashboard
2. Copy your **Public Key**

### Step 5: Set Environment Variables

Add to `.env.local`:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
NEXT_PUBLIC_COMPANY_EMAIL=ufbcltd@gmail.com
```

### Step 6: Test the Contact Form

Follow the same testing steps as Option 1 (Step 3)

---

## 🧪 Testing Checklist

- [ ] Form validates required fields (name, email, phone, message)
- [ ] Form submits successfully
- [ ] Success message appears after submission
- [ ] Email received at `ufbcltd@gmail.com` inbox
- [ ] Email contains all form fields correctly
- [ ] Confirmation email sent to user
- [ ] User can reply to the email (Reply-To is set correctly)
- [ ] Form clears after successful submission

---

## 🐛 Troubleshooting

### Issue: "Failed to send notification email"

**Solution:**
- Check that `EMAIL_PASS` is correct (Gmail app password, not regular password)
- Verify 2FA is enabled on Gmail account
- Check that `EMAIL_USER` matches the Gmail account
- For production, check Netlify environment variables are set correctly

### Issue: Emails going to spam

**Solutions:**
- Use a custom domain email (instead of Gmail) for better deliverability
- Set up SPF, DKIM, and DMARC records for your domain
- Consider using SendGrid or Resend for production

### Issue: EmailJS not working

**Solutions:**
- Verify all environment variables are set correctly
- Check browser console for errors
- Ensure EmailJS service and template IDs are correct
- Verify your EmailJS account has credits/limits

### Issue: Form submits but no email received

**Solutions:**
- Check spam/junk folder
- Verify email address in `EMAIL_TO` is correct
- Check server logs (in development, check terminal for errors)
- Test with a different email provider (SendGrid, Mailgun)

---

## 🚢 Production Deployment

### For Netlify Deployment:

1. **Set Environment Variables** in Netlify dashboard:
   - Go to Site settings → Environment variables
   - Add all email-related variables:
     - `EMAIL_USER`
     - `EMAIL_PASS`
     - `EMAIL_TO`
     - `EMAIL_FROM`
     - `EMAIL_HOST`
     - `EMAIL_PORT`
     - `EMAIL_SECURE`

2. **Important:** Never commit `.env.local` to Git! It's already in `.gitignore`

3. **For Production Email Service:** Consider using:
   - **SendGrid** (recommended) - Free tier: 100 emails/day
   - **Resend** - Modern email API with good deliverability
   - **AWS SES** - If you're using AWS

### SendGrid Setup (Production):

1. Sign up at [SendGrid](https://sendgrid.com/)
2. Create an API key
3. Verify your sender email (`ufbcltd@gmail.com`)
4. Update environment variables:
   ```env
   EMAIL_HOST=smtp.sendgrid.net
   EMAIL_PORT=587
   EMAIL_USER=apikey
   EMAIL_PASS=your_sendgrid_api_key
   ```

---

## ✅ Success Criteria

Your contact form is working correctly when:
- ✅ Users can submit messages
- ✅ Company email (`ufbcltd@gmail.com`) receives all submissions
- ✅ Users receive confirmation emails
- ✅ Emails include all form data
- ✅ Reply-To is set to user's email for easy responses

---

## 📞 Support

If you encounter issues:
1. Check the browser console for client-side errors
2. Check server logs (terminal/Netlify logs) for server-side errors
3. Verify all environment variables are set correctly
4. Test with a simple email client (like Gmail) first before production setup

**Current Configuration:**
- Company Email: `ufbcltd@gmail.com`
- Contact Form API: `/api/contact`
- Email Library: `src/lib/email.ts` (uses Nodemailer)

