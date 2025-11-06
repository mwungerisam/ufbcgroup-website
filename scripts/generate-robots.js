const fs = require('fs');
const path = require('path');
const { SitemapStream, streamToPromise } = require('sitemap');
const { Readable } = require('stream');
require('dotenv').config({ path: path.resolve(process.cwd(), '.env.local') });

// Configuration
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://ufbcgroup.com';
const BUILD_DIR = path.join(process.cwd(), '.next');
const PUBLIC_DIR = path.join(process.cwd(), 'public');

// Define all the pages that should be in the sitemap
const pages = [
  { url: '/', changefreq: 'daily', priority: 1.0 },
  { url: '/about', changefreq: 'weekly', priority: 0.8 },
  { url: '/services', changefreq: 'weekly', priority: 0.9 },
  { url: '/portfolio', changefreq: 'weekly', priority: 0.9 },
  { url: '/blog', changefreq: 'daily', priority: 0.8 },
  { url: '/contact', changefreq: 'monthly', priority: 0.7 },
];

// Generate sitemap.xml
async function generateSitemap() {
  try {
    const sitemapStream = new SitemapStream({ hostname: SITE_URL });
    const writeStream = fs.createWriteStream(path.join(PUBLIC_DIR, 'sitemap.xml'));
    
    // Add static pages
    pages.forEach(page => sitemapStream.write(page));
    
    // In a real app, you would fetch dynamic routes here
    // Example: const blogPosts = await getBlogPosts();
    // blogPosts.forEach(post => sitemapStream.write({
    //   url: `/blog/${post.slug}`,
    //   changefreq: 'weekly',
    //   priority: 0.7,
    //   lastmod: post.updatedAt
    // }));

    // End the stream
    sitemapStream.end();
    
    // Pipe the sitemap to the file
    const sitemapOutput = await streamToPromise(Readable.from(sitemapStream));
    fs.writeFileSync(path.join(PUBLIC_DIR, 'sitemap.xml'), sitemapOutput);
    
    console.log('✅ Sitemap generated successfully');
  } catch (error) {
    console.error('❌ Error generating sitemap:', error);
    process.exit(1);
  }
}

// Generate robots.txt
function generateRobotsTxt() {
  const robotsTxt = `# https://www.robotstxt.org/robotstxt.html
User-agent: *
Allow: /

# Sitemap
Sitemap: ${SITE_URL}/sitemap.xml

# Disallow sensitive areas
Disallow: /admin/
Disallow: /api/
Disallow: /_next/
Disallow: /*/private/
Disallow: /*?*

# Development environment
${process.env.NODE_ENV === 'development' ? 'Disallow: /' : ''}

# Allow all robots to index the following paths
Allow: /$
Allow: /about/
Allow: /services/
Allow: /portfolio/
Allow: /blog/
Allow: /contact/`;

  fs.writeFileSync(path.join(PUBLIC_DIR, 'robots.txt'), robotsTxt);
  console.log('✅ robots.txt generated successfully');
}

// Run both generation functions
async function generate() {
  try {
    await generateSitemap();
    generateRobotsTxt();
  } catch (error) {
    console.error('❌ Error during generation:', error);
    process.exit(1);
  }
}

generate();
