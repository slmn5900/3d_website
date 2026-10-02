import { SITE, SERVICES, LOCATIONS } from "@/lib/site";

export const dynamic = "force-static";

export function GET() {
  const body = `# ${SITE.name}

> ${SITE.description}

Contact: ${SITE.phone} · ${SITE.email} · ${SITE.address.locality}, ${SITE.address.region}, India

## Services
${SERVICES.map((s) => `- [${s.name}](${SITE.url}/services/${s.slug}): ${s.short}`).join("\n")}

## Locations served
${LOCATIONS.map((l) => `- [${l.name}](${SITE.url}/locations/${l.slug}): ${l.blurb}`).join("\n")}

## Company
- [About](${SITE.url}/about): Team, experience and approach
- [Contact](${SITE.url}/contact): Get a quote

## Optional
- [Full content for LLMs](${SITE.url}/llms-full.txt)
- [Sitemap](${SITE.url}/sitemap.xml)
`;
  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
