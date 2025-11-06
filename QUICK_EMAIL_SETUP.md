# ⚡ Quick Email Setup Guide

Follow these steps to receive contact form messages at `ufbcltd@gmail.com`.

## 📋 Step 1: Create `.env.local` File

Create a file named `.env.local` in your project root with the following:

```env
# Email Configuration (Required)
EMAIL_USER=ufbcltd@gmail.com
EMAIL_PASS=your-gmail-app-password-here
EMAIL_TO=ufbcltd@gmail.com
EMAIL_FROM=UNIQUE FORM BUSINESS COMPANY Ltd <ufbcltd@gmail.com>
EMAIL_REPLY_TO=ufbcltd@gmail.com

# SMTP Configuration (Gmail)
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_SECURE=false

# Site Configuration
NEXT_PUBLIC_SITE_URL=https://ufbcgroup.com
NEXT_PUBLIC_COMPANY_NAME=UNIQUE FORM BUSINESS COMPANY Ltd
NEXT_PUBLIC_COMPANY_PHONE=+250 783 654 015
```

## 🔑 Step 2: Get Gmail App Password

1. **Enable 2-Factor Authentication** on `ufbcltd@gmail.com`
   - Go to https://myaccount.google.com/security
   - Click "2-Step Verification" and enable it

2. **Generate App Password**
   - Go to https://myaccount.google.com/apppasswords
   - Select "Mail" as the app
   - Select "Other" as the device
   - Name it "UFBC Website"
   - Click "Generate"

3. **Copy the 16-character password** (no spaces)
   - Example: `abcd efgh ijkl mnop` → use `abcdefghijklmnop`

4. **Paste it into `.env.local`** as `EMAIL_PASS`

## ✅ Step 3: Test the Contact Form

1. **Start the development server:**
   ```bash
   npm run dev
   ```

2. **Open your browser:**
   - Go to `http://localhost:3000/contact`

3. **Fill out the contact form:**
   - Name: Your name
   - Email: Your test email
   - Phone: Your phone number
   - Company: Your company
   - Service: Select a service
   - Message: Test message

4. **Submit the form**

5. **Check your email:**
   - ✅ Check `ufbcltd@gmail.com` inbox
   - ✅ You should receive an email with subject: "New Contact: [Name] - [Service]"
   - ✅ Email contains all form fields (name, email, phone, company, message)

## 🚢 For Production (Netlify)

When deploying to Netlify, add these environment variables in Netlify dashboard:

1. Go to **Site settings** → **Environment variables**
2. Add each variable from `.env.local` (except `NEXT_PUBLIC_*` variables are set in `netlify.toml`)
3. Make sure `EMAIL_PASS` is your Gmail App Password

## 🐛 Troubleshooting

### Email not received?

1. **Check spam/junk folder**
2. **Verify Gmail App Password** is correct (no spaces)
3. **Check terminal/console** for error messages
4. **Verify 2FA is enabled** on Gmail account

### Development Mode: Test Emails

In development, if emails don't work, check the terminal console. It will show:
- `Message sent: [message-id]`
- `Preview URL: [ethereal-email-url]` (test email service)

You can click the preview URL to see the test email.

### Still Not Working?

Try using **SendGrid** instead of Gmail for better reliability:

```env
EMAIL_HOST=smtp.sendgrid.net
EMAIL_PORT=587
EMAIL_USER=apikey
EMAIL_PASS=your_sendgrid_api_key
```

Get a free SendGrid account at https://sendgrid.com/

---

## ✅ Success Checklist

- [ ] `.env.local` file created with email credentials
- [ ] Gmail App Password generated and added
- [ ] Development server started (`npm run dev`)
- [ ] Contact form tested at `/contact`
- [ ] Email received at `ufbcltd@gmail.com`
- [ ] Email contains all form data correctly

---

**Your contact form is now ready!** 📧

All messages from users will be sent to `ufbcltd@gmail.com`.

