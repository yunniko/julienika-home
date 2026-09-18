import type { Metadata } from "next";
import { ArticlePage } from "@/components/article-page";
import { PAGES, pageHtml } from "@/lib/guides";

const APP_URL = process.env.APP_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  title: PAGES.about.title,
  description: PAGES.about.description,
  alternates: { canonical: `${APP_URL}/about` },
};

export default async function AboutPage() {
  const html = await pageHtml("about");
  return <ArticlePage html={html} />;
}
