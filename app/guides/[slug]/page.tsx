import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArticlePage } from "@/components/article-page";
import { GUIDES, guideHtml, guideSlugs, isGuideSlug } from "@/lib/guides";

const APP_URL = process.env.APP_URL ?? "http://localhost:3000";

export function generateStaticParams() {
  return guideSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  if (!isGuideSlug(slug)) return {};
  return {
    title: GUIDES[slug].title,
    description: GUIDES[slug].description,
    alternates: { canonical: `${APP_URL}/guides/${slug}` },
  };
}

// Article structured data — datePublished is the guide's real authoring date
// from the registry, not a fabricated one.
function articleJsonLd(slug: keyof typeof GUIDES) {
  const guide = GUIDES[slug];
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: guide.title,
    description: guide.description,
    datePublished: guide.publishedDate,
    url: `${APP_URL}/guides/${slug}`,
    author: { "@type": "Organization", name: "julienika.cz" },
    publisher: { "@type": "Organization", name: "julienika.cz" },
  };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!isGuideSlug(slug)) notFound();
  const html = await guideHtml(slug);
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd(slug)) }}
      />
      <ArticlePage html={html} backHref="/guides" backLabel="All guides" />
    </>
  );
}
