import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SERVICES, SITE } from "@/lib/site";
import JsonLd from "@/components/JsonLd";
import FaqList from "@/components/Faq";
import { graph, webPageSchema, serviceSchema, breadcrumbSchema } from "@/lib/schema";

type P = { params: Promise<{ slug: string }> };
export const dynamicParams = false;
export const generateStaticParams = () => SERVICES.map((s) => ({ slug: s.slug }));

export async function generateMetadata({ params }: P): Promise<Metadata> {
  const { slug } = await params;
  const s = SERVICES.find((x) => x.slug === slug);
  if (!s) return {};
  return { title: `${s.name} in Chennai`, description: s.short, alternates: { canonical: `/services/${s.slug}` }, openGraph: { url: `/services/${s.slug}`, title: s.name, description: s.short } };
}

export default async function Service({ params }: P) {
  const { slug } = await params;
  const s = SERVICES.find((x) => x.slug === slug);
  if (!s) notFound();
  const path = `/services/${s.slug}`;
  return (
    <>
      <JsonLd data={graph(
        webPageSchema(path, s.name, s.short), serviceSchema(s),
        breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Services", path: "/#services" }, { name: s.name, path }]),
      )} />
      <article className="wrap sec page">
        <nav aria-label="Breadcrumb" className="crumbs"><Link href="/">Home</Link> / <Link href="/#services">Services</Link> / {s.name}</nav>
        <h1>{s.name} in Chennai</h1>
        <p className="lead">{s.short}</p>
        <p>{s.long}</p>
        <h2>What&apos;s included</h2>
        <ul className="ticks">{s.features.map((f) => <li key={f}>{f}</li>)}</ul>
        <Link href="/contact" className="btn">Get a free quote</Link>
      </article>
      <FaqList faqs={s.faqs} />
    </>
  );
}
