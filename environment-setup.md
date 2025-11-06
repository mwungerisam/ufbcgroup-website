# Environment Variables Setup

Create a `.env.local` file in the project root with the following variables:

```env
# Email Configuration (Required for contact form)
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
ADMIN_EMAIL=ufbcltd@gmail.com

# Admin Authentication (Required for admin panel)
ADMIN_TOKEN=your-secret-admin-token-here

# Google Analytics (Optional but recommended)
NEXT_PUBLIC_GA_ID=GA_MEASUREMENT_ID

# Site Configuration
NEXT_PUBLIC_SITE_URL=https://uniqueform-business.com

# Database (for future use)
# DATABASE_URL=your-database-url

# API Keys (for future use)
# GOOGLE_MAPS_API_KEY=your-google-maps-api-key
# CLOUDINARY_URL=your-cloudinary-url
```

## Quick Setup Instructions:

1. **Copy the above content** into a new file named `.env.local` in the project root
2. **Replace placeholder values** with your actual credentials:
   - `EMAIL_USER`: Your Gmail address
   - `EMAIL_PASS`: Your Gmail app password (see Gmail setup below)
   - `ADMIN_TOKEN`: Create a secure random string for admin access
   - `NEXT_PUBLIC_GA_ID`: Your Google Analytics measurement ID

## Gmail App Password Setup:
1. Enable 2-Factor Authentication on your Gmail account
2. Go to Google Account settings → Security → 2-Step Verification → App passwords
3. Generate password for "Mail"
4. Use the generated password in `EMAIL_PASS`

## Testing Commands:
```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Run production server
npm start
```
