import { SitemapStream, streamToPromise } from 'sitemap';
import { createWriteStream } from 'fs';

// Change this to your live website URL
const BASE_URL = 'https://www.royalayurvedicbodymassage.com';

// ✅ List all your site pages here
const pages = [
  '/',
  '/about',
  '/services',
  '/gallery',
  '/contact'
];

async function generateSitemap() {
  const sitemap = new SitemapStream({ hostname: BASE_URL });
  pages.forEach(url => sitemap.write({ url, changefreq: 'monthly', priority: 0.8 }));
  sitemap.end();

  const data = await streamToPromise(sitemap);
  createWriteStream('./public/sitemap.xml').write(data.toString());
  console.log('✅ Sitemap generated successfully!');
}

generateSitemap();
