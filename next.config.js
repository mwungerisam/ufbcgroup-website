/** @type {import('next').NextConfig} */
const securityHeaders = [
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on'
  },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload'
  },
  {
    key: 'X-XSS-Protection',
    value: '1; mode=block'
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff'
  },
  {
    key: 'Referrer-Policy',
    value: 'origin-when-cross-origin'
  },
  {
    key: 'Content-Security-Policy',
    value: process.env.NEXT_PUBLIC_CSP_HEADER || 
      "default-src 'self'; " +
      "script-src 'self' 'unsafe-eval' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com https://www.gstatic.com https://maps.googleapis.com; " +
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; " +
      "font-src 'self' https://fonts.gstatic.com; " +
      "img-src 'self' data: https: blob:; " +
      "frame-src 'self' https://www.google.com https://maps.google.com https://maps.googleapis.com https://www.google.com/maps https://maps.gstatic.com; " +
      "connect-src 'self' https://www.google-analytics.com https://maps.googleapis.com https://maps.gstatic.com;"
  }
];

const nextConfig = {
  reactStrictMode: true,
  productionBrowserSourceMaps: false,
  poweredByHeader: false,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'i.pinimg.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.shutterstock.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'subsaharamining.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'uniqueform-website.vercel.app',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.uniqueform-website.vercel.app',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'uniqueform.rw',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.uniqueform.rw',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'ufbcgroup.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.ufbcgroup.com',
        pathname: '/**',
      },
    ],
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: securityHeaders,
      },
    ]
  },
  async rewrites() {
    return [
      {
        source: '/sitemap.xml',
        destination: '/api/sitemap',
      },
    ]
  },
};

// Only enable PWA in production
if (process.env.NODE_ENV === 'production') {
  const withPWA = require('@ducanh2912/next-pwa').default({
    dest: 'public',
    disable: process.env.NODE_ENV !== 'production',
    register: true,
    skipWaiting: true,
  });
  module.exports = withPWA(nextConfig);
} else {
  module.exports = nextConfig;
}