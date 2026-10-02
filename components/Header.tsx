import Link from "next/link";
import { SITE } from "@/lib/site";

export default function Header() {
  return (
    <header className="hdr">
      <Link href="/" className="logo" aria-label={`${SITE.name} home`}>Web<b>dads</b>2u</Link>
      <nav aria-label="Primary">
        <Link href="/#services">Services</Link>
        <Link href="/locations/chennai">Locations</Link>
        <Link href="/about">About</Link>
        <Link href="/contact" className="btn sm">Get a quote</Link>
      </nav>
    </header>
  );
}
