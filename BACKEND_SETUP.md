# UFBC Website Backend Setup Guide

## 🚀 Backend Features Implemented

### 1. **Contact Form API** ✅
- **Endpoint**: `/api/contact`
- **Method**: POST
- **Features**: Email sending, validation, confirmation emails
- **Security**: Input validation, error handling

### 2. **Blog Management API** ✅
- **Endpoint**: `/api/blog`
- **Methods**: GET, POST
- **Features**: CRUD operations, pagination, filtering
- **Admin**: Draft/publish functionality

### 3. **Portfolio Management API** ✅
- **Endpoint**: `/api/portfolio`
- **Methods**: GET, POST
- **Features**: Project management, categorization, featured items
- **Admin**: Content approval system

### 4. **Admin API** ✅
- **Endpoint**: `/api/admin`
- **Method**: POST
- **Features**: Content management, analytics, site configuration
- **Security**: Token-based authentication

## 📋 Environment Setup

### 1. Create Environment Variables
Create a `.env.local` file in your project root:

```env
# Email Configuration
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
ADMIN_EMAIL=ufbcltd@gmail.com

# Admin Authentication
ADMIN_TOKEN=your-secret-admin-token-here

# Google Analytics
NEXT_PUBLIC_GA_ID=GA_MEASUREMENT_ID

# Site Configuration
NEXT_PUBLIC_SITE_URL=https://uniqueform-business.com

# Database (for future use)
# DATABASE_URL=your-database-url

# API Keys (for future use)
# GOOGLE_MAPS_API_KEY=your-google-maps-api-key
# CLOUDINARY_URL=your-cloudinary-url
```

### 2. Email Setup (Gmail Example)

#### Option A: Gmail with App Password (Recommended)
1. Enable 2-Factor Authentication on your Gmail account
2. Generate an App Password:
   - Go to Google Account settings
   - Security → 2-Step Verification → App passwords
   - Generate password for "Mail"
3. Use the generated password in `EMAIL_PASS`

#### Option B: Other Email Providers
Update the transporter configuration in `/api/contact/route.ts`:

```typescript
// For Outlook/Hotmail
const transporter = nodemailer.createTransporter({
  service: 'outlook',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// For custom SMTP
const transporter = nodemailer.createTransporter({
  host: 'your-smtp-host.com',
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});
```

## 🔧 API Endpoints Documentation

### Contact Form API
```http
POST /api/contact
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+250123456789",
  "company": "Example Corp",
  "service": "Construction",
  "message": "I need a quote for a construction project."
}
```

**Response:**
```json
{
  "message": "Message sent successfully"
}
```

### Blog API
```http
GET /api/blog?category=Agriculture&page=1&limit=10
```

**Response:**
```json
{
  "posts": [...],
  "pagination": {
    "currentPage": 1,
    "totalPages": 5,
    "totalPosts": 50,
    "hasNextPage": true,
    "hasPrevPage": false
  }
}
```

### Portfolio API
```http
GET /api/portfolio?category=Construction&featured=true&limit=6
```

**Response:**
```json
{
  "items": [...],
  "total": 6
}
```

### Admin API
```http
POST /api/admin
Content-Type: application/json

{
  "action": "get_analytics",
  "token": "your-admin-token"
}
```

## 🗄️ Database Integration (Future Enhancement)

### Option 1: PostgreSQL with Prisma
```bash
npm install prisma @prisma/client
npx prisma init
```

### Option 2: MongoDB with Mongoose
```bash
npm install mongoose
```

### Option 3: Supabase (Recommended for easy setup)
```bash
npm install @supabase/supabase-js
```

## 🔒 Security Features

### 1. Input Validation
- Email format validation
- Required field checking
- XSS prevention
- SQL injection protection

### 2. Rate Limiting
Add rate limiting to prevent spam:

```typescript
// Install: npm install express-rate-limit
import rateLimit from 'express-rate-limit';

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5 // limit each IP to 5 requests per windowMs
});
```

### 3. CORS Configuration
```typescript
// In next.config.ts
const nextConfig = {
  async headers() {
    return [
      {
        source: '/api/:path*',
        headers: [
          { key: 'Access-Control-Allow-Origin', value: '*' },
          { key: 'Access-Control-Allow-Methods', value: 'GET,POST,PUT,DELETE' },
          { key: 'Access-Control-Allow-Headers', value: 'Content-Type' },
        ],
      },
    ];
  },
};
```

## 🚀 Deployment Considerations

### 1. Vercel Deployment
- API routes work automatically
- Environment variables in Vercel dashboard
- Automatic HTTPS

### 2. Database Setup
- Use Vercel Postgres or external database
- Set up connection pooling
- Configure backups

### 3. Email Service
- Consider using SendGrid or Resend for production
- Set up email templates
- Monitor delivery rates

## 📊 Monitoring & Analytics

### 1. API Monitoring
```typescript
// Add logging to API routes
console.log(`[${new Date().toISOString()}] ${method} ${url} - ${statusCode}`);
```

### 2. Error Tracking
```bash
npm install @sentry/nextjs
```

### 3. Performance Monitoring
- Vercel Analytics
- Google Analytics
- Custom metrics

## 🔄 Content Management

### 1. Admin Dashboard (Future)
- Create admin interface for content management
- User authentication with NextAuth.js
- Rich text editor for blog posts

### 2. Image Upload
```bash
npm install cloudinary multer
```

### 3. SEO Management
- Dynamic meta tags
- Sitemap generation
- Open Graph images

## 🧪 Testing

### 1. API Testing
```bash
npm install --save-dev jest @testing-library/jest-dom
```

### 2. Test Examples
```typescript
// tests/api/contact.test.ts
describe('Contact API', () => {
  it('should send email successfully', async () => {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(validFormData),
    });
    expect(response.status).toBe(200);
  });
});
```

## 🎯 Next Steps

1. **Set up environment variables** with your actual email credentials
2. **Test the contact form** to ensure emails are sent correctly
3. **Configure email templates** for better branding
4. **Set up database** for persistent data storage
5. **Implement admin dashboard** for content management
6. **Add authentication** for secure admin access
7. **Set up monitoring** for production deployment

## 📞 Support

For backend-related questions:
- Next.js API Routes: https://nextjs.org/docs/api-routes/introduction
- Nodemailer: https://nodemailer.com/
- Vercel Deployment: https://vercel.com/docs 