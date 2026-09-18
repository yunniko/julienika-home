import type { MetadataRoute } from "next";
import { guideSlugs } from "@/lib/guides";

const APP_URL = process.env.APP_URL ?? "http://localhost:3000";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: APP_URL, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${APP_URL}/guides`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    ...guideSlugs().map((slug) => ({
      url: `${APP_URL}/guides/${slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    { url: `${APP_URL}/about`, lastModified: now, changeFrequency: "yearly" as const, priority: 0.4 },
    { url: `${APP_URL}/contact`, lastModified: now, changeFrequency: "yearly" as const, priority: 0.4 },
    { url: `${APP_URL}/privacy`, lastModified: now, changeFrequency: "yearly" as const, priority: 0.3 },
  ];
}
