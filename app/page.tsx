import Link from "next/link";
import Hero3D from "@/components/Hero3D";
import Reveal from "@/components/Reveal";
import TiltCard from "@/components/TiltCard";
import Counter from "@/components/Counter";
import FaqList from "@/components/Faq";
import JsonLd from "@/components/JsonLd";
import { SITE, SERVICES, LOCATIONS, GLOBAL_FAQS } from "@/lib/site";
import { graph, webPageSchema, serviceSchema } from "@/lib/schema";

export default function Home() {
  return (
    <>
      <JsonLd data={graph(
        webPageSchema("/", `${SITE.name} — ${SITE.tagline}`, SITE.description),
        { "@type": "ItemList", name: "Services", itemListElement: SERVICES.map((s, i) => ({ "@type": "ListItem", position: i + 1, item: serviceSchema(s) })) },
      )} />
      <section className="hero">
        <Hero3D />
        <div className="wrap hero-copy">
          <p className="eyebrow">{SITE.tagline}</p>
          <h1>Websites that rank, convert <span className="grad">&amp; get cited by AI</span></h1>
          <p className="lead">
            {SITE.name} is a Chennai web design, development and SEO agency. {SITE.stats[1].value} years, {SITE.stats[0].value}+ websites,
            every one built mobile-first with technical SEO, schema and GEO baked in.
          </p>
          <div className="cta">
            <Link href="/contact" className="btn">Start your project</Link>
            <Link href="#services" className="btn ghost">Explore services</Link>
          </div>
        </div>
      </section>

      <section className="wrap stats" aria-label="Key figures">
        {SITE.stats.map((s) => (
          <div key={s.label}><strong><Counter value={s.value} suffix={s.suffix} /></strong><span>{s.label}</span></div>
        ))}
      </section>

      <section id="services" className="wrap sec" aria-labelledby="svc-h">
        <Reveal><h2 id="svc-h">Everything your brand needs to win online</h2>
        <p className="lead">Design, engineering and search visibility under one roof.</p></Reveal>
        <div className="grid3">
          {SERVICES.map((s, i) => (
            <Reveal key={s.slug} delay={i * 70}>
              <TiltCard>
                <Link href={`/services/${s.slug}`} className="card">
                  <h3>{s.name}</h3>
                  <p>{s.short}</p>
                  <span className="more">Learn more →</span>
                </Link>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="wrap sec" aria-labelledby="geo-h">
        <Reveal>
          <h2 id="geo-h">Built for Google <span className="grad">and</span> AI search</h2>
          <div className="grid3">
            <article className="card flat"><h3>Technical SEO</h3><p>Core Web Vitals, crawl budget, canonicals, hreflang, XML sitemaps and clean information architecture.</p></article>
            <article className="card flat"><h3>Schema &amp; entities</h3><p>Connected JSON-LD graph: Organization, LocalBusiness, Service, FAQ and Breadcrumb markup that machines trust.</p></article>
            <article className="card flat"><h3>AEO &amp; GEO</h3><p>Answer-first content, llms.txt and AI-crawler policy so ChatGPT, Gemini, Claude and Perplexity can cite you.</p></article>
          </div>
        </Reveal>
      </section>

      <section className="wrap sec" aria-labelledby="loc-h">
        <h2 id="loc-h">Serving businesses across India</h2>
        <ul className="chips">
          {LOCATIONS.map((l) => <li key={l.slug}><Link href={`/locations/${l.slug}`}>Web design &amp; SEO in {l.name}</Link></li>)}
        </ul>
      </section>

      <FaqList faqs={GLOBAL_FAQS} />
    </>
  );
}
