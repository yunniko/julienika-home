import type { Metadata } from "next";
import Link from "next/link";
import { GUIDES, guideSlugs } from "@/lib/guides";

const APP_URL = process.env.APP_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  title: "Guides",
  description:
    "Reference guides on the calculations behind craft and making: baker's percentage, soap saponification, clay shrinkage, epoxy ratios, aquarium bioload and photo metadata.",
  alternates: { canonical: `${APP_URL}/guides` },
};

// CollectionPage + ItemList: this page is a hub linking to the Article pages,
// not standalone content of its own.
function collectionJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Guides",
    url: `${APP_URL}/guides`,
    mainEntity: {
      "@type": "ItemList",
      itemListElement: guideSlugs().map((slug, i) => ({
        "@type": "ListItem",
        position: i + 1,
        url: `${APP_URL}/guides/${slug}`,
        name: GUIDES[slug].title,
      })),
    },
  };
}

export default function GuidesIndexPage() {
  return (
    <main className="mx-auto w-full max-w-3xl px-4 py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionJsonLd()) }}
      />
      <h1 className="text-3xl font-semibold">Guides</h1>
      <p className="mt-3 text-gray-600">
        Written explanations of the calculations behind the tools on this site — the
        principles themselves, not instructions for the calculators. Each one stands on
        its own.
      </p>
      <ul className="mt-8 flex flex-col gap-5">
        {guideSlugs().map((slug) => (
          <li key={slug} className="rounded-lg border border-gray-200 p-6">
            <Link
              href={`/guides/${slug}`}
              className="text-lg font-semibold text-blue-700 hover:underline"
            >
              {GUIDES[slug].title}
            </Link>
            <p className="mt-2 text-sm text-gray-600">{GUIDES[slug].description}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
