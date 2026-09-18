import Link from "next/link";

// Shared shell for markdown-sourced pages (guides and the about/contact/privacy
// pages). Mirrors listing-studio's ArticlePage, minus its next-intl layer —
// this project has no i18n, so strings are plain English here.
export function ArticlePage({
  html,
  backHref = "/",
  backLabel = "Home",
}: {
  html: string;
  backHref?: string;
  backLabel?: string;
}) {
  return (
    <main className="mx-auto flex w-full max-w-3xl flex-col gap-6 px-4 py-10">
      <Link href={backHref} className="text-sm text-gray-600 hover:underline">
        &larr; {backLabel}
      </Link>
      <article
        // Repo markdown rendered by `marked` — no user input in this path.
        className="[&_a]:text-blue-700 [&_a]:underline [&_h1]:text-3xl [&_h1]:font-semibold [&_h1]:leading-tight [&_h2]:mt-8 [&_h2]:text-xl [&_h2]:font-semibold [&_h3]:mt-6 [&_h3]:font-medium [&_li]:my-1 [&_li]:ml-5 [&_li]:list-disc [&_ol_li]:list-decimal [&_p]:my-4 [&_strong]:font-semibold text-base leading-relaxed text-gray-800"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </main>
  );
}
