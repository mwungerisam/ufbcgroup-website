# Deployment Guide for UNIQUE FORM BUSINESS COMPANY Ltd

## Pre-Deployment Checklist

### 1. Domain Setup
- [ ] Purchase your domain (e.g., uniqueform.rw or ufbcgroup.com)
- [ ] Set up DNS management with your domain registrar
- [ ] Decide on hosting provider (Netlify, Vercel, or custom server)

### 2. Environment Configuration
- [ ] Update `.env.local` with production values:
  - `NEXT_PUBLIC_SITE_URL` - Your production domain (e.g., https://uniqueform.rw)
  - Email service configuration (SMTP details)
  - Google Analytics/Tag Manager IDs
  - reCAPTCHA production keys
  - Social media links

### 3. Email Service
- [ ] Set up a production email service (e.g., SendGrid, Mailgun, or AWS SES)
- [ ] Update email templates if needed
- [ ] Test contact form with production email settings

## Deployment Steps

### Option 1: Netlify (Recommended)
1. Push your code to a GitHub/GitLab/Bitbucket repository
2. Log in to [Netlify](https://app.netlify.com/)
3. Click "New site from Git"
4. Select your repository and configure build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
   - Add environment variables from your `.env.local`
5. Deploy the site

### Option 2: Vercel
1. Push your code to a GitHub/GitLab/Bitbucket repository
2. Log in to [Vercel](https://vercel.com/)
3. Click "New Project" and import your repository
4. Configure project settings:
   - Framework: Next.js
   - Root directory: ./
   - Add environment variables
5. Deploy

## Post-Deployment

### Domain Configuration
1. In your hosting provider, go to Domain Settings
2. Add your custom domain
3. Follow the instructions to verify domain ownership
4. Set up SSL/TLS certificate (usually automatic with Netlify/Vercel)
5. Configure DNS records:
   - A record: @ → [hosting provider IP]
   - CNAME: www → [your-site.netlify.app or similar]

### Final Checks
- [ ] Test all forms (contact, newsletter, etc.)
- [ ] Verify all internal links work
- [ ] Check mobile responsiveness
- [ ] Test page load speed and optimize if needed
- [ ] Set up monitoring and error tracking

## Maintenance
- Keep dependencies updated
- Monitor site performance
- Regularly backup your database (if applicable)
- Review analytics for insights and improvements

## Support
For any issues during deployment, please contact:
- Email: support@ufbcgroup.com
- Phone: +250 783 654 015
