import type { Metadata } from "next";
import { ArticlePage } from "@/components/article-page";
import { PAGES, pageHtml } from "@/lib/guides";

const APP_URL = process.env.APP_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  title: PAGES.privacy.title,
  description: PAGES.privacy.description,
  alternates: { canonical: `${APP_URL}/privacy` },
};

export default async function PrivacyPage() {
  const html = await pageHtml("privacy");
  return <ArticlePage html={html} />;
}
