import type { MetadataRoute } from "next";
import { SITE, SERVICES, LOCATIONS } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const page = (path: string, priority: number, changeFrequency: "weekly" | "monthly" = "monthly") => ({
    url: `${SITE.url}${path}`, lastModified: now, changeFrequency, priority,
  });
  return [
    page("/", 1, "weekly"),
    page("/about", 0.6),
    page("/contact", 0.7),
    ...SERVICES.map((s) => page(`/services/${s.slug}`, 0.9)),
    ...LOCATIONS.map((l) => page(`/locations/${l.slug}`, 0.7)),
  ];
}
