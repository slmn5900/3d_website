// Single source of truth. Replace values marked TODO with verified business data.
export const SITE = {
  name: "Webdads2u",
  legalName: "Webdads2u Private Limited",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.webdads2u.com",
  tagline: "Website Development Company in Chennai",
  description:
    "Webdads2u is a Chennai web design, development and SEO agency with 13 years of experience and 500+ websites delivered. Websites built mobile-first and structured for Google and AI search from day one.",
  phone: "+91 9884113386",
  email: "solomon@webdads2u.com",
  founder: "Solomon", // TODO: confirm full name
  foundingYear: 2013, // derived from "13 years of experience"
  address: {
    locality: "Chennai",
    region: "Tamil Nadu",
    country: "IN",
    street: "", // TODO: real street address + postal code
    postal: "",
  },
  geo: { lat: 13.0827, lng: 80.2707 }, // TODO: exact office coordinates
  social: ["https://www.instagram.com/webdads2u/", "https://clutch.co/profile/webdads2u-private"],
  stats: [
    { value: 500, suffix: "+", label: "Websites delivered" },
    { value: 13, suffix: "", label: "Years of experience" },
    { value: 6, suffix: "", label: "Core services" },
    { value: 100, suffix: "%", label: "Mobile-first builds" },
  ],
} as const;

export type Faq = { q: string; a: string };

export const SERVICES = [
  {
    slug: "web-development",
    name: "Custom Website Development",
    short: "Fast, secure, conversion-focused websites built on Next.js, React and modern CMS stacks.",
    long: "We design and engineer custom websites that load fast, rank well and convert visitors into enquiries. Every build ships with semantic HTML, structured data, Core Web Vitals tuning and a clean content model.",
    features: ["Next.js / ReactJS builds", "Core Web Vitals optimised", "Headless CMS integration", "Accessibility (WCAG 2.2 AA)", "Schema.org structured data"],
    faqs: [
      { q: "How long does a custom website take?", a: "A typical business website takes 3–6 weeks from kickoff to launch, depending on page count and integrations." },
      { q: "Do you build with Next.js and React?", a: "Yes. We build with Next.js and ReactJS for speed and SEO, and also work with WordPress and headless CMS setups." },
    ],
  },
  {
    slug: "seo-services",
    name: "SEO, AEO & GEO Services",
    short: "Technical SEO, answer-engine and generative-engine optimisation so you are cited by Google and AI assistants.",
    long: "Search now includes Google, AI Overviews, ChatGPT, Perplexity and Gemini. We combine technical SEO, entity-based schema, topical authority and GEO (Generative Engine Optimisation) so your brand is both ranked and cited.",
    features: ["Technical SEO audits", "JSON-LD schema markup", "AI search / GEO optimisation", "llms.txt & crawler policy", "Local SEO & Google Business Profile"],
    faqs: [
      { q: "What is GEO (Generative Engine Optimisation)?", a: "GEO is the practice of structuring content, entities and schema so AI systems such as ChatGPT, Gemini and Perplexity can understand, trust and cite your brand in generated answers." },
      { q: "How is AEO different from SEO?", a: "SEO earns rankings in a list of links. AEO (Answer Engine Optimisation) earns the direct answer, using concise answer blocks, FAQ schema and clear entity signals." },
    ],
  },
  {
    slug: "digital-marketing",
    name: "Digital Marketing",
    short: "Performance marketing, content and social campaigns tied to measurable leads.",
    long: "Full-funnel digital marketing covering paid search, social, content and email, reported against leads and revenue rather than vanity metrics.",
    features: ["Google & Meta Ads", "Content strategy", "Social media management", "Email automation", "Conversion tracking (GA4)"],
    faqs: [{ q: "Do you offer monthly retainers?", a: "Yes. Retainers cover strategy, execution and a monthly performance report." }],
  },
  {
    slug: "app-development",
    name: "Mobile & Web App Development",
    short: "Tailored web and mobile applications that streamline operations and delight users.",
    long: "From MVPs to production platforms, we build web apps and mobile apps with clean architecture, secure APIs and room to scale.",
    features: ["React & React Native", "API design", "Cloud deployment", "CRM & ERP integrations", "Ongoing maintenance"],
    faqs: [{ q: "Can you build an MVP first?", a: "Yes. We scope a lean MVP, validate it with users, then iterate." }],
  },
  {
    slug: "ecommerce",
    name: "E-commerce Solutions",
    short: "High-converting online stores with payments, inventory and SEO built in.",
    long: "Online stores engineered for speed and conversion, with Product schema, rich results, payment gateway integration and analytics.",
    features: ["Shopify / WooCommerce / custom", "Product & Offer schema", "Payment gateways (Razorpay, Stripe)", "Inventory sync", "Cart-abandonment flows"],
    faqs: [{ q: "Do you support Indian payment gateways?", a: "Yes, including Razorpay, PayU, Stripe and UPI-based flows." }],
  },
  {
    slug: "branding",
    name: "Branding & Logo Design",
    short: "Logos and brand systems that make your business instantly recognisable.",
    long: "Brand strategy, logo design and visual identity systems that stay consistent across web, print and social.",
    features: ["Logo design", "Brand guidelines", "Social templates", "Stationery & collateral", "Motion identity"],
    faqs: [{ q: "What do I receive with a logo project?", a: "Vector logo files, colour and type guidelines, and social-ready exports." }],
  },
] as const satisfies readonly { slug: string; name: string; short: string; long: string; features: readonly string[]; faqs: readonly Faq[] }[];

export const LOCATIONS = [
  { slug: "chennai", name: "Chennai", region: "Tamil Nadu", blurb: "Our home city. On-site workshops and in-person support across Chennai." },
  { slug: "coimbatore", name: "Coimbatore", region: "Tamil Nadu", blurb: "Web design and SEO for Coimbatore manufacturers, startups and retailers." },
  { slug: "madurai", name: "Madurai", region: "Tamil Nadu", blurb: "Local SEO and websites for Madurai businesses." },
  { slug: "bangalore", name: "Bangalore", region: "Karnataka", blurb: "Remote-first web development and SEO for Bangalore startups and SaaS." },
  { slug: "hyderabad", name: "Hyderabad", region: "Telangana", blurb: "Websites and growth SEO for Hyderabad companies." },
] as const;

export const GLOBAL_FAQS: Faq[] = [
  { q: "What does Webdads2u do?", a: "Webdads2u is a Chennai-based agency providing website development, SEO (including AI search and GEO), digital marketing, app development, e-commerce and branding." },
  { q: "How many websites has Webdads2u delivered?", a: "More than 500 websites over 13 years of operation." },
  { q: "Where is Webdads2u located?", a: "Webdads2u is based in Chennai, Tamil Nadu, India, and serves clients across India and internationally." },
  { q: "How do I contact Webdads2u?", a: `Call ${SITE.phone} or email ${SITE.email}.` },
  { q: "Do you optimise for ChatGPT, Gemini and Perplexity?", a: "Yes. We implement GEO: entity-rich JSON-LD, answer-first content, llms.txt and crawler policies so AI assistants can cite your brand accurately." },
];
