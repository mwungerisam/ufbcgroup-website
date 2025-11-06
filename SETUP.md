# UFBC Website Technical Setup Guide

## 🚀 Technical Improvements Implemented

### 1. SEO Optimization ✅
- **Meta Tags**: Complete meta tag configuration in `layout.tsx`
- **Structured Data**: JSON-LD schema markup for better search engine understanding
- **Sitemap**: Automatic sitemap generation at `/sitemap.xml`
- **Robots.txt**: Search engine crawling configuration

### 2. Performance Optimizations ✅
- **Image Optimization**: Next.js Image component with priority loading
- **Lazy Loading**: Custom LazyImage component for better performance
- **Code Splitting**: Automatic with Next.js App Router

### 3. Contact Form ✅
- **Functional Form**: Complete contact form with validation
- **Multiple Integration Options**: Ready for EmailJS, Formspree, or custom API
- **Error Handling**: Comprehensive error states and user feedback

### 4. Analytics ✅
- **Google Analytics**: Ready for GA4 integration
- **Google Tag Manager**: Configuration prepared

## 📋 Setup Instructions

### 1. Google Analytics Setup
1. Create a Google Analytics 4 property
2. Get your Measurement ID (format: G-XXXXXXXXXX)
3. Replace `GA_MEASUREMENT_ID` in `src/app/layout.tsx` with your actual ID

```typescript
// In src/app/layout.tsx, line ~85
gtag('config', 'G-XXXXXXXXXX'); // Replace with your GA4 ID
```

### 2. Contact Form Integration

#### Option A: Formspree (Recommended for simplicity)
1. Go to [formspree.io](https://formspree.io)
2. Create a new form
3. Copy your form endpoint
4. Update `src/app/components/ContactForm.tsx`:

```typescript
// Uncomment and configure in ContactForm.tsx, around line 85
const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(formData),
});
```

#### Option B: EmailJS
1. Install EmailJS: `npm install emailjs-com`
2. Create an EmailJS account and service
3. Update `src/app/components/ContactForm.tsx`:

```typescript
// Uncomment and configure in ContactForm.tsx, around line 90
emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formData, 'YOUR_USER_ID');
```

#### Option C: Custom API
1. Create an API route at `src/app/api/contact/route.ts`
2. Uncomment the custom API section in ContactForm.tsx

### 3. Site Configuration
Update `src/app/config/site.ts` with your actual information:

```typescript
export const siteConfig = {
  url: "https://your-domain.com", // Replace with your domain
  contact: {
    phone: "+250 XXX XXX XXX", // Your actual phone
    email: "your-email@domain.com", // Your actual email
  },
  analytics: {
    googleAnalyticsId: "G-XXXXXXXXXX", // Your GA4 ID
  },
  email: {
    formspree: {
      endpoint: "https://formspree.io/f/YOUR_FORM_ID" // Your Formspree endpoint
    }
  }
};
```

### 4. Domain Verification
Update verification codes in `src/app/layout.tsx`:

```typescript
verification: {
  google: 'your-google-verification-code',
  yandex: 'your-yandex-verification-code',
  yahoo: 'your-yahoo-verification-code',
},
```

## 🔧 Performance Monitoring

### Lighthouse Audit
Run Lighthouse audit to check performance:
1. Open Chrome DevTools
2. Go to Lighthouse tab
3. Run audit for Performance, Accessibility, Best Practices, and SEO

### Core Web Vitals
Monitor Core Web Vitals through Google Analytics or Google Search Console.

## 📱 Mobile Optimization
- Responsive design implemented
- Touch-friendly navigation
- Optimized images for mobile
- Fast loading on mobile networks

## 🔒 Security Considerations
- Form validation on both client and server side
- HTTPS required for production
- Input sanitization in contact form
- Secure headers configuration

## 🚀 Deployment Checklist
- [ ] Update all placeholder URLs and IDs
- [ ] Test contact form functionality
- [ ] Verify Google Analytics tracking
- [ ] Check sitemap generation
- [ ] Test on mobile devices
- [ ] Run Lighthouse audit
- [ ] Verify meta tags with social media debuggers

## 📞 Support
For technical support or questions about the implementation, refer to:
- Next.js Documentation: https://nextjs.org/docs
- Google Analytics: https://analytics.google.com
- Formspree: https://formspree.io/docs
- EmailJS: https://www.emailjs.com/docs

## 🎯 Next Steps
1. **Content**: Add real project images and update portfolio
2. **Blog**: Create actual blog posts with images
3. **SEO**: Submit sitemap to search engines
4. **Analytics**: Set up conversion tracking
5. **Performance**: Monitor and optimize based on real user data 