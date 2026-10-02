import Link from "next/link";
import { SITE, SERVICES, LOCATIONS } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="ftr">
      <div className="wrap grid4">
        <div>
          <p className="logo">Web<b>dads</b>2u</p>
          <p className="muted">{SITE.tagline}. Built for Google and AI search.</p>
          <address>
            <a href={`tel:${SITE.phone.replace(/\s/g, "")}`}>{SITE.phone}</a><br />
            <a href={`mailto:${SITE.email}`}>{SITE.email}</a><br />
            {SITE.address.locality}, {SITE.address.region}, India
          </address>
        </div>
        <nav aria-label="Services"><h3>Services</h3>{SERVICES.map((s) => <Link key={s.slug} href={`/services/${s.slug}`}>{s.name}</Link>)}</nav>
        <nav aria-label="Locations"><h3>Locations</h3>{LOCATIONS.map((l) => <Link key={l.slug} href={`/locations/${l.slug}`}>Web design {l.name}</Link>)}</nav>
        <nav aria-label="Company"><h3>Company</h3><Link href="/about">About</Link><Link href="/contact">Contact</Link><a href="/llms.txt">llms.txt</a><a href="/sitemap.xml">Sitemap</a></nav>
      </div>
      <p className="muted center">© {new Date().getFullYear()} {SITE.legalName}</p>
    </footer>
  );
}
