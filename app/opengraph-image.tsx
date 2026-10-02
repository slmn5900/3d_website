import { ImageResponse } from "next/og";
import { SITE } from "@/lib/site";

export const alt = `${SITE.name} — ${SITE.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OG() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", padding: 80, background: "linear-gradient(135deg,#05060f,#1b1250 60%,#0b3b4a)", color: "white" }}>
        <div style={{ fontSize: 40, color: "#22d3ee" }}>{SITE.name}</div>
        <div style={{ fontSize: 76, fontWeight: 800, marginTop: 20, lineHeight: 1.05 }}>Websites that rank, convert &amp; get cited by AI</div>
        <div style={{ fontSize: 30, marginTop: 30, opacity: 0.8 }}>Chennai · 500+ sites · 13 years · SEO · GEO · Next.js</div>
      </div>
    ),
    size,
  );
}
