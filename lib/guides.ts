import { readFile } from "node:fs/promises";
import path from "node:path";
import { marked } from "marked";

// Markdown-sourced publisher content for the apex site (D004). Same pattern as
// listing-studio's src/lib/guides.ts: markdown is the source of truth, rendered
// server-side with `marked`, no user input involved anywhere in the path.
//
// `publishedDate` is the real authoring date, used for Article structured data
// — never a fabricated or back-dated one.

export const GUIDES = {
  "bakers-percentage-and-hydration": {
    file: "bakers-percentage-and-hydration.md",
    title: "Baker's percentage and hydration: how bread recipes actually scale",
    description:
      "Why flour is always 100%, what hydration predicts about a dough, why the starter changes the real figure, and how to scale a recipe from either flour weight or target dough weight.",
    publishedDate: "2026-09-18",
  },
  "lye-superfat-and-soap-recipes": {
    file: "lye-superfat-and-soap-recipes.md",
    title: "Lye, superfat, and why soap recipes are calculated rather than copied",
    description:
      "Saponification, SAP values, why swapping oils without recalculating is dangerous, what superfat really does, and the three incompatible ways recipes express water.",
    publishedDate: "2026-09-18",
  },
  "clay-shrinkage-explained": {
    file: "clay-shrinkage-explained.md",
    title: "Clay shrinkage: why your pot comes out smaller than you made it",
    description:
      "The two separate shrinkages a ceramic piece goes through, how to measure your own clay's rate with a test bar, and the formula for sizing a piece to finish at a target dimension.",
    publishedDate: "2026-09-18",
  },
  "epoxy-mix-ratios-and-exotherm": {
    file: "epoxy-mix-ratios-and-exotherm.md",
    title: "Epoxy mix ratios and exotherm: why “a bit more hardener” ruins a pour",
    description:
      "Why epoxy's ratio is stoichiometry rather than a catalyst dose, how weight and volume ratios differ, and why deep pours overheat, crack and occasionally smoke.",
    publishedDate: "2026-09-18",
  },
  "aquarium-stocking-and-bioload": {
    file: "aquarium-stocking-and-bioload.md",
    title: "Aquarium stocking: what bioload actually means",
    description:
      "Why the inch-per-gallon rule misleads, how the nitrogen cycle sets the real limit, and the behavioural constraints — schooling, territory, footprint — that volume never captures.",
    publishedDate: "2026-09-18",
  },
  "photo-metadata-exif-and-gps": {
    file: "photo-metadata-exif-and-gps.md",
    title: "What your photos reveal: EXIF, GPS, and when to strip it",
    description:
      "What EXIF, IPTC and XMP actually store, which sharing paths preserve location data, the three ways to remove it, and the cases where keeping metadata is the right call.",
    publishedDate: "2026-09-18",
  },
} as const;

export type GuideSlug = keyof typeof GUIDES;

export function guideSlugs(): GuideSlug[] {
  return Object.keys(GUIDES) as GuideSlug[];
}

export function isGuideSlug(slug: string): slug is GuideSlug {
  return slug in GUIDES;
}

export async function guideHtml(slug: GuideSlug): Promise<string> {
  const file = path.join(process.cwd(), "content", "guides", GUIDES[slug].file);
  const markdown = await readFile(file, "utf8");
  return marked.parse(markdown, { async: false });
}

// Standalone markdown pages (about/contact/privacy) live in content/pages and
// render through the same pipeline — they are publisher content too, not chrome.
export const PAGES = {
  about: { file: "about.md", title: "About", description: "Who runs julienika.cz, what is here, and how it is paid for." },
  contact: { file: "contact.md", title: "Contact", description: "How to reach julienika.cz about a guide, a tool, or a correction." },
  privacy: {
    file: "privacy.md",
    title: "Privacy Policy",
    description: "What data julienika.cz collects, what Google AdSense sets, and your rights under the GDPR.",
  },
} as const;

export type PageKey = keyof typeof PAGES;

export async function pageHtml(key: PageKey): Promise<string> {
  const file = path.join(process.cwd(), "content", "pages", PAGES[key].file);
  const markdown = await readFile(file, "utf8");
  return marked.parse(markdown, { async: false });
}
