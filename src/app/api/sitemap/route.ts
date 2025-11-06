import { NextResponse } from 'next/server';

const routes = [
  '/',
  '/about',
  '/services',
  '/portfolio',
  '/blog',
  '/contact',
  '/admin',
];

export async function GET() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://ufbcgroup.com';
  const lastmod = new Date().toISOString();

  const urlset = routes
    .map((path) => {
      const loc = `${siteUrl}${path}`;
      return `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${lastmod}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>${path === '/' ? '1.0' : '0.7'}</priority>\n  </url>`;
    })
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urlset}\n</urlset>`;

  return new NextResponse(xml, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
    },
  });
}
