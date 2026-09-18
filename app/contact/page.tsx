import type { Metadata } from "next";
import { ArticlePage } from "@/components/article-page";
import { PAGES, pageHtml } from "@/lib/guides";

const APP_URL = process.env.APP_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  title: PAGES.contact.title,
  description: PAGES.contact.description,
  alternates: { canonical: `${APP_URL}/contact` },
};

export default async function ContactPage() {
  const html = await pageHtml("contact");
  return <ArticlePage html={html} />;
}
