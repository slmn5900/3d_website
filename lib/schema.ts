import { SITE, type Faq } from "./site";

const ORG_ID = `${SITE.url}/#organization`;
const SITE_ID = `${SITE.url}/#website`;

export const abs = (path = "/") => `${SITE.url}${path}`;

export const organizationSchema = () => ({
  "@type": ["Organization", "ProfessionalService", "LocalBusiness"],
  "@id": ORG_ID,
  name: SITE.name,
  legalName: SITE.legalName,
  url: SITE.url,
  logo: { "@type": "ImageObject", url: abs("/icon.svg"), width: 512, height: 512 },
  image: abs("/opengraph-image"),
  description: SITE.description,
  email: SITE.email,
  telephone: SITE.phone,
  foundingDate: String(SITE.foundingYear),
  founder: { "@type": "Person", name: SITE.founder },
  priceRange: "₹₹",
  address: {
    "@type": "PostalAddress",
    addressLocality: SITE.address.locality,
    addressRegion: SITE.address.region,
    addressCountry: SITE.address.country,
    ...(SITE.address.street ? { streetAddress: SITE.address.street } : {}),
    ...(SITE.address.postal ? { postalCode: SITE.address.postal } : {}),
  },
  geo: { "@type": "GeoCoordinates", latitude: SITE.geo.lat, longitude: SITE.geo.lng },
  areaServed: [{ "@type": "Country", name: "India" }, { "@type": "City", name: "Chennai" }],
  sameAs: SITE.social,
  contactPoint: [{ "@type": "ContactPoint", telephone: SITE.phone, email: SITE.email, contactType: "sales", areaServed: "IN", availableLanguage: ["en", "ta"] }],
  knowsAbout: ["Web development", "Search engine optimization", "Generative engine optimization", "Answer engine optimization", "Next.js", "Digital marketing", "E-commerce", "Branding"],
});

export const websiteSchema = () => ({
  "@type": "WebSite",
  "@id": SITE_ID,
  url: SITE.url,
  name: SITE.name,
  description: SITE.description,
  publisher: { "@id": ORG_ID },
  inLanguage: "en-IN",
});

export const webPageSchema = (path: string, name: string, description: string) => ({
  "@type": "WebPage",
  "@id": `${abs(path)}#webpage`,
  url: abs(path),
  name,
  description,
  isPartOf: { "@id": SITE_ID },
  about: { "@id": ORG_ID },
  inLanguage: "en-IN",
});

export const breadcrumbSchema = (items: { name: string; path: string }[]) => ({
  "@type": "BreadcrumbList",
  itemListElement: items.map((it, i) => ({ "@type": "ListItem", position: i + 1, name: it.name, item: abs(it.path) })),
});

export const faqSchema = (faqs: readonly Faq[]) => ({
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
});

export const serviceSchema = (s: { slug: string; name: string; long: string }, area = "India") => ({
  "@type": "Service",
  "@id": `${abs(`/services/${s.slug}`)}#service`,
  name: s.name,
  description: s.long,
  provider: { "@id": ORG_ID },
  areaServed: { "@type": "Country", name: area },
  url: abs(`/services/${s.slug}`),
});

export const graph = (...nodes: object[]) => ({ "@context": "https://schema.org", "@graph": nodes });
