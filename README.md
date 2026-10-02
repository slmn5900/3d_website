# Webdads2u — Next.js 3D + Advanced SEO/GEO rebuild

Next.js 15 (App Router) + React Three Fiber hero, built for Google and AI search.

```bash
npm install && npm run dev      # http://localhost:3000
npm run build && npm start
```

## What's included
- **3D**: R3F hero (distorting mesh, knot, wireframe, starfield, pointer + scroll parallax), lazy-mounted after idle, honours `prefers-reduced-motion`; CSS 3D tilt cards, reveal + counter animations.
- **Technical SEO**: per-page metadata/canonicals, `sitemap.xml`, `robots.txt`, web manifest, dynamic OG image, SSG pages, security headers, en-IN, geo meta tags.
- **Schema (JSON-LD graph)**: Organization/ProfessionalService/LocalBusiness, WebSite, WebPage/AboutPage/ContactPage, Service, ItemList, FAQPage, BreadcrumbList.
- **AI search / GEO / AEO**: `/llms.txt`, `/llms-full.txt`, explicit allow rules for GPTBot, OAI-SearchBot, ClaudeBot, PerplexityBot, Google-Extended etc., answer-first FAQ blocks, service + city landing pages.

## Before launch (edit `lib/site.ts`)
Content was assembled from public listings because webdads2u.com could not be fetched from the build sandbox. Replace/confirm: street address + postal code, exact geo coordinates, founder's full name, social URLs, service copy, testimonials/reviews (add `aggregateRating` only with real reviews), and add Google/Bing verification in `app/layout.tsx`. Set `NEXT_PUBLIC_SITE_URL`.
