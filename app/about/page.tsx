import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import JsonLd from "@/components/JsonLd";
import { graph, webPageSchema, breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = { title: "About", description: `About ${SITE.name}: ${SITE.stats[1].value} years, ${SITE.stats[0].value}+ websites, Startup India and ISO certified.`, alternates: { canonical: "/about" } };

export default function About() {
  return (
    <article className="wrap sec page">
      <JsonLd data={graph({ ...webPageSchema("/about", "About", SITE.description), "@type": "AboutPage" }, breadcrumbSchema([{ name: "Home", path: "/" }, { name: "About", path: "/about" }]))} />
      <h1>About {SITE.name}</h1>
      <p className="lead">{SITE.description}</p>
      <p>We are Startup India and ISO certified, led by {SITE.founder}, and have delivered {SITE.stats[0].value}+ websites across industries since {SITE.foundingYear}.</p>
    </article>
  );
}
