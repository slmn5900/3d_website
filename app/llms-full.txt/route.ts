import { SITE, SERVICES, LOCATIONS, GLOBAL_FAQS } from "@/lib/site";

export const dynamic = "force-static";

export function GET() {
  const body = `# ${SITE.name} — full content

${SITE.description}

Key facts: ${SITE.stats.map((s) => `${s.value}${s.suffix} ${s.label.toLowerCase()}`).join("; ")}.
Phone ${SITE.phone}. Email ${SITE.email}. Based in ${SITE.address.locality}, ${SITE.address.region}, India.

${SERVICES.map((s) => `## ${s.name}\nURL: ${SITE.url}/services/${s.slug}\n${s.long}\nIncludes: ${s.features.join(", ")}.\n${s.faqs.map((f) => `Q: ${f.q}\nA: ${f.a}`).join("\n")}`).join("\n\n")}

## Locations
${LOCATIONS.map((l) => `- ${l.name}, ${l.region}: ${l.blurb} (${SITE.url}/locations/${l.slug})`).join("\n")}

## FAQ
${GLOBAL_FAQS.map((f) => `Q: ${f.q}\nA: ${f.a}`).join("\n")}
`;
  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
