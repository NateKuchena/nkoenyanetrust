import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://www.nkoenyane.co.za';
  const routes = [
    { url: base, priority: 1.0 },
    { url: `${base}/our-story`, priority: 0.8 },
    { url: `${base}/the-farm`, priority: 0.9 },
    { url: `${base}/our-products`, priority: 0.9 },
    { url: `${base}/governance`, priority: 0.8 },
    { url: `${base}/invest`, priority: 0.95 },
    { url: `${base}/contact`, priority: 0.7 },
  ];

  return routes.map(({ url, priority }) => ({
    url,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority,
  }));
}
