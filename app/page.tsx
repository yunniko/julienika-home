import type { Metadata } from "next";
import Link from "next/link";
import { GUIDES, guideSlugs } from "@/lib/guides";

const APP_URL = process.env.APP_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  title: "julienika.cz — guides and tools for makers",
  description:
    "Reference guides on the calculations behind baking, soap making, ceramics, resin, aquariums and photography, plus free browser-based tools for images, photo metadata, ebooks and resumes.",
  alternates: { canonical: APP_URL },
};

// The portfolio was cut to five tools on 2026-09-20 (D006). Keep this list in
// step with what is actually live: a card pointing at a decommissioned
// subdomain is a broken link on the site's most visible page.
const TOOLS = [
  {
    href: "https://image-object-splitter.svc.julienika.cz",
    title: "Image Object Splitter",
    description:
      "Detect the distinct objects in a photo and export each as its own file, with optional background removal. Runs entirely in your browser.",
  },
  {
    href: "https://photo-metadata-cleaner.svc.julienika.cz",
    title: "Photo Metadata Cleaner",
    description:
      "See the EXIF and GPS metadata hidden in a photo, then remove it via canvas re-encode. Runs entirely in your browser.",
  },
  {
    href: "https://ats-resume-checker.svc.julienika.cz",
    title: "ATS Resume Checker",
    description:
      "Check a .docx or .pdf resume for common ATS parsing problems, find job-description keyword gaps, and see sourced ATS formatting rules — entirely in your browser.",
  },
  {
    href: "https://epub-metadata-fixer.svc.julienika.cz",
    title: "EPUB Metadata Fixer",
    description:
      "Check and fix an EPUB's title/author/identifier metadata, and check its cover image against KDP, Kobo, and Apple Books requirements.",
  },
  {
    href: "https://sourdough.svc.julienika.cz",
    title: "Sourdough Calculators",
    description:
      "Hydration, baker's-percentage recipe scaling, and starter feeding calculators.",
  },
];

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-3xl px-4 py-10">
      <h1 className="text-3xl font-semibold">Guides and tools for people who make things</h1>
      <p className="mt-4 text-gray-700">
        Most crafts run on a handful of numbers. A dough is defined by its hydration, a bar
        of soap by the ratio of lye to fat, a thrown pot by how much the clay will shrink on
        the way to the kiln door. Get those wrong and the work fails in ways that are
        obvious afterwards and invisible at the time.
      </p>
      <p className="mt-4 text-gray-700">
        This site explains those calculations, and keeps a small set of tools for the jobs
        that genuinely need software. The guides below are written to be read on their own —
        they explain the principle well enough that you could do the arithmetic on paper. The
        tools are free, need no account, and every one of them works inside your browser, so
        the files you open never leave your computer.
      </p>

      <section className="mt-12">
        <div className="flex items-baseline justify-between gap-4">
          <h2 className="text-2xl font-semibold">Guides</h2>
          <Link href="/guides" className="text-sm text-blue-700 hover:underline">
            All guides
          </Link>
        </div>
        <ul className="mt-5 flex flex-col gap-5">
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
      </section>

      <section id="tools" className="mt-14 scroll-mt-4">
        <h2 className="text-2xl font-semibold">Tools</h2>
        <p className="mt-3 text-gray-700">
          Each tool lives on its own address and does one job. No signup, no limits.
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {TOOLS.map((tool) => (
            <a
              key={tool.href}
              href={tool.href}
              className="rounded-lg border border-gray-200 p-5 hover:border-gray-400"
            >
              <h3 className="font-semibold text-blue-700">{tool.title}</h3>
              <p className="mt-1 text-sm text-gray-600">{tool.description}</p>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
