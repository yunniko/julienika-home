import { access, readFile } from "node:fs/promises";
import path from "node:path";
import { describe, expect, it } from "vitest";
import { GUIDES, PAGES, guideHtml, guideSlugs, isGuideSlug, pageHtml } from "@/lib/guides";

const guidesDir = path.join(process.cwd(), "content", "guides");
const pagesDir = path.join(process.cwd(), "content", "pages");

describe("guide registry", () => {
  it("exposes every registered slug", () => {
    expect(guideSlugs()).toHaveLength(Object.keys(GUIDES).length);
    expect(guideSlugs().length).toBeGreaterThanOrEqual(6);
  });

  it("recognises real slugs and rejects others", () => {
    expect(isGuideSlug(guideSlugs()[0])).toBe(true);
    expect(isGuideSlug("no-such-guide")).toBe(false);
  });

  it("has a markdown file on disk for every entry", async () => {
    for (const slug of guideSlugs()) {
      await expect(access(path.join(guidesDir, GUIDES[slug].file))).resolves.toBeUndefined();
    }
  });

  it("gives every guide a distinct title and a non-trivial description", () => {
    const titles = guideSlugs().map((slug) => GUIDES[slug].title);
    expect(new Set(titles).size).toBe(titles.length);
    for (const slug of guideSlugs()) {
      expect(GUIDES[slug].description.length).toBeGreaterThan(60);
    }
  });

  it("dates every guide as an ISO calendar date", () => {
    for (const slug of guideSlugs()) {
      expect(GUIDES[slug].publishedDate).toMatch(/^\d{4}-\d{2}-\d{2}$/);
    }
  });
});

describe("guide content", () => {
  it("renders markdown to HTML with a heading and paragraphs", async () => {
    const html = await guideHtml("bakers-percentage-and-hydration");
    expect(html).toContain("<h1>");
    expect(html).toContain("<h2>");
    expect(html).toContain("<p>");
  });

  // The rejection this content answers was for thin, low-value pages, so
  // length is a product requirement here, not a style preference (D004).
  it("holds substantial prose in every guide", async () => {
    for (const slug of guideSlugs()) {
      const markdown = await readFile(path.join(guidesDir, GUIDES[slug].file), "utf8");
      const words = markdown.split(/\s+/).filter(Boolean).length;
      expect(words, `${slug} is too short`).toBeGreaterThan(700);
    }
  });
});

describe("standalone pages", () => {
  it("has a markdown file for about, contact and privacy", async () => {
    for (const key of Object.keys(PAGES) as (keyof typeof PAGES)[]) {
      await expect(access(path.join(pagesDir, PAGES[key].file))).resolves.toBeUndefined();
    }
  });

  it("renders the privacy policy and names the AdSense processing", async () => {
    const html = await pageHtml("privacy");
    expect(html).toContain("<h1>");
    expect(html).toContain("AdSense");
    expect(html).toContain("GDPR");
  });
});
