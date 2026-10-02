import Link from "next/link";
export default function NotFound() {
  return <section className="wrap sec page"><h1>Page not found</h1><p><Link href="/" className="btn">Back home</Link></p></section>;
}
