import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { LOCATIONS, SERVICES, SITE } from "@/lib/site";
import JsonLd from "@/components/JsonLd";
import { graph, webPageSchema, breadcrumbSchema, abs } from "@/lib/schema";

type P = { params: Promise<{ slug: string }> };
export const dynamicParams = false;
export const generateStaticParams = () => LOCATIONS.map((l) => ({ slug: l.slug }));

export async function generateMetadata({ params }: P): Promise<Metadata> {
  const { slug } = await params;
  const l = LOCATIONS.find((x) => x.slug === slug);
  if (!l) return {};
  return { title: `Web Design, SEO & Development in ${l.name}`, description: `${l.blurb} ${SITE.name}: 500+ websites, 13 years.`, alternates: { canonical: `/locations/${l.slug}` } };
}

export default async function Location({ params }: P) {
  const { slug } = await params;
  const l = LOCATIONS.find((x) => x.slug === slug);
  if (!l) notFound();
  const path = `/locations/${l.slug}`;
  return (
    <>
      <JsonLd data={graph(
        webPageSchema(path, `Web design in ${l.name}`, l.blurb),
        { "@type": "Service", name: `Web design & SEO in ${l.name}`, provider: { "@id": `${SITE.url}/#organization` }, areaServed: { "@type": "City", name: l.name, containedInPlace: { "@type": "AdministrativeArea", name: l.region } }, url: abs(path) },
        breadcrumbSchema([{ name: "Home", path: "/" }, { name: l.name, path }]),
      )} />
      <article className="wrap sec page">
        <h1>Web Design, Development &amp; SEO in {l.name}</h1>
        <p className="lead">{l.blurb}</p>
        <h2>Services available in {l.name}</h2>
        <ul className="ticks">{SERVICES.map((s) => <li key={s.slug}><Link href={`/services/${s.slug}`}>{s.name}</Link></li>)}</ul>
        <Link href="/contact" className="btn">Talk to us</Link>
      </article>
    </>
  );
}
