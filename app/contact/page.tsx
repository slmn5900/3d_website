import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import JsonLd from "@/components/JsonLd";
import { graph, webPageSchema, breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = { title: "Contact", description: `Contact ${SITE.name} in Chennai: ${SITE.phone}, ${SITE.email}.`, alternates: { canonical: "/contact" } };

export default function Contact() {
  return (
    <article className="wrap sec page">
      <JsonLd data={graph({ ...webPageSchema("/contact", "Contact", `Contact ${SITE.name}`), "@type": "ContactPage" }, breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Contact", path: "/contact" }]))} />
      <h1>Contact {SITE.name}</h1>
      <p className="lead">Tell us about your project and we&apos;ll reply within one business day.</p>
      <address>
        <p>Phone: <a href={`tel:${SITE.phone.replace(/\s/g, "")}`}>{SITE.phone}</a></p>
        <p>Email: <a href={`mailto:${SITE.email}`}>{SITE.email}</a></p>
        <p>{SITE.address.locality}, {SITE.address.region}, India</p>
      </address>
      <a className="btn" href={`mailto:${SITE.email}?subject=Project%20enquiry`}>Email us</a>
    </article>
  );
}
