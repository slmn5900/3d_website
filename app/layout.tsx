import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { SITE } from "@/lib/site";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { graph, organizationSchema, websiteSchema } from "@/lib/schema";

const inter = Inter({ subsets: ["latin"], variable: "--f-body", display: "swap" });
const grotesk = Space_Grotesk({ subsets: ["latin"], variable: "--f-head", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: { default: `${SITE.name} | ${SITE.tagline} — Web Design, SEO & GEO`, template: `%s | ${SITE.name}` },
  description: SITE.description,
  applicationName: SITE.name,
  authors: [{ name: SITE.name, url: SITE.url }],
  creator: SITE.name,
  alternates: { canonical: "/", languages: { "en-IN": "/" } },
  openGraph: { type: "website", siteName: SITE.name, locale: "en_IN", url: SITE.url, title: `${SITE.name} | ${SITE.tagline}`, description: SITE.description },
  twitter: { card: "summary_large_image", title: `${SITE.name} | ${SITE.tagline}`, description: SITE.description },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
  other: { "geo.region": "IN-TN", "geo.placename": "Chennai", "geo.position": `${SITE.geo.lat};${SITE.geo.lng}`, ICBM: `${SITE.geo.lat}, ${SITE.geo.lng}` },
  icons: { icon: "/icon.svg" },
  // verification: { google: "TODO" },
};

export const viewport: Viewport = { themeColor: "#05060f", width: "device-width", initialScale: 1 };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN" className={`${inter.variable} ${grotesk.variable}`}>
      <body>
        <JsonLd data={graph(organizationSchema(), websiteSchema())} />
        <a href="#main" className="skip">Skip to content</a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
