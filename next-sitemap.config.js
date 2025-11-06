/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://ufbcgroup.com',
  generateRobotsTxt: false, // We're generating robots.txt manually
  generateIndexSitemap: false,
  exclude: ['/admin/*', '/api/*', '/404', '/_next/*'],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin/', '/api/', '/_next/'],
      },
    ],
    additionalSitemaps: [],
  },
};

