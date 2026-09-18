import type { Metadata } from "next";
import Link from "next/link";
import { GUIDES, guideSlugs } from "@/lib/guides";

const APP_URL = process.env.APP_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  title: "julienika.cz — guides and calculators for makers",
  description:
    "Reference guides on the calculations behind baking, soap making, ceramics, resin, aquariums and photography, plus free browser-based calculators for each.",
  alternates: { canonical: APP_URL },
};

const TOOLS = [
  {
    href: "https://fractions.svc.julienika.cz",
    title: "Fraction Calculator",
    description: "Add, subtract, multiply, or divide fractions and mixed numbers, with the full working shown.",
  },
  {
    href: "https://yarn.svc.julienika.cz",
    title: "Yarn & Gauge Tools",
    description: "Yarn weight chart, crochet hook and knitting needle size converters, and a gauge calculator.",
  },
  {
    href: "https://sourdough.svc.julienika.cz",
    title: "Sourdough Calculators",
    description: "Hydration, baker's-percentage recipe scaling, and starter feeding calculators.",
  },
  {
    href: "https://clay-shrinkage-calculator.svc.julienika.cz",
    title: "Clay Shrinkage Calculators",
    description: "Pottery and ceramics: shrinkage percentage, predicted fired size, and target wet size.",
  },
  {
    href: "https://resin-mix-ratio-calculator.svc.julienika.cz",
    title: "Resin Mix Ratio Calculators",
    description: "Epoxy resin mix ratio, coverage ('how much do I need'), and a reference chart by brand.",
  },
  {
    href: "https://ics-calendar-generator.svc.julienika.cz",
    title: "ICS Calendar File Generator",
    description: "Single event add-to-calendar links, a recurring-event .ics builder, and a yearly birthday/anniversary reminder.",
  },
  {
    href: "https://epub-metadata-fixer.svc.julienika.cz",
    title: "EPUB Metadata Fixer",
    description: "Check and fix an EPUB's title/author/identifier metadata, and check its cover image against KDP, Kobo, and Apple Books requirements.",
  },
  {
    href: "https://image-object-splitter.svc.julienika.cz",
    title: "Image Object Splitter",
    description: "Detect the distinct objects in a photo and export each as its own file, with optional background removal. Runs entirely in your browser.",
  },
  {
    href: "https://pet-age-calculator.svc.julienika.cz",
    title: "Pet Age Calculator",
    description: "Dog age calculator (size-adjusted), cat age calculator, and a life-stage reference chart.",
  },
  {
    href: "https://soap-lye-calculator.svc.julienika.cz",
    title: "Soap Lye Calculator",
    description: "Cold-process lye and water calculator, a water:lye ratio/concentration converter, and a sourced oil SAP value reference chart.",
  },
  {
    href: "https://candle-fragrance-calculator.svc.julienika.cz",
    title: "Candle Fragrance & Cost Calculators",
    description: "Fragrance-oil load calculator by wax type, a sourced wax fragrance-load reference chart, and a per-candle cost calculator.",
  },
  {
    href: "https://ad-revenue-calculator.svc.julienika.cz",
    title: "Ad Revenue & CPM Calculators",
    description: "Ad revenue estimator, a CPM ↔ RPM converter, and directional CPM benchmark ranges by content niche and traffic geography.",
  },
  {
    href: "https://aquarium-stocking-calculator.svc.julienika.cz",
    title: "Aquarium Stocking Calculator",
    description: "Species-aware freshwater stocking/bioload calculator, a tank volume calculator, and a sourced fish species reference chart.",
  },
  {
    href: "https://hydroponic-nutrient-calculator.svc.julienika.cz",
    title: "Hydroponic Nutrient Calculator",
    description: "EC/PPM meter-scale converter, a baseline-corrected nutrient dosing and dilution calculator, and a sourced per-crop EC/pH reference chart.",
  },
  {
    href: "https://photo-metadata-cleaner.svc.julienika.cz",
    title: "Photo Metadata Cleaner",
    description: "See the EXIF and GPS metadata hidden in a photo, then remove it via canvas re-encode. Runs entirely in your browser.",
  },
  {
    href: "https://structured-data-checker.svc.julienika.cz",
    title: "Structured Data Checker",
    description: "Check JSON-LD structured data against Google's current rich-result rules, find the right schema.org type for your page, and see a sourced reference chart.",
  },
  {
    href: "https://ats-resume-checker.svc.julienika.cz",
    title: "ATS Resume Checker",
    description: "Check a .docx or .pdf resume for common ATS parsing problems, find job-description keyword gaps, and see sourced ATS formatting rules — entirely in your browser.",
  },
  {
    href: "https://natural-dye-mordant-calculator.svc.julienika.cz",
    title: "Natural Dye Mordant Calculator",
    description: "Alum and tannin mordant calculators by weight of fiber (WOF) for protein and cellulose fibers, an iron-modifier calculator with safety guidance, and a sourced reference chart.",
  },
  {
    href: "https://handmade-label-checker.svc.julienika.cz",
    title: "Handmade Label Checker",
    description: "True-soap-vs-cosmetic classification and label checklists for handmade soap, cosmetic, and candle sellers, with sourced FDA/CPSC requirements.",
  },
  {
    href: "https://care-card-generator.svc.julienika.cz",
    title: "Care Card Generator",
    description: "Free, instant, printable candle and soap care & safety cards, sourced from National Candle Association and soap-safety guidance. No signup.",
  },
  {
    href: "https://weaving-yardage-calculator.svc.julienika.cz",
    title: "Weaving Yardage Calculator",
    description: "Warp & weft yarn yardage calculator, WPI-to-sett estimator, and a sourced reed/dent reference chart for rigid-heddle and floor-loom weaving.",
  },
  {
    href: "https://woodturning-blank-calculator.svc.julienika.cz",
    title: "Woodturning Blank Calculator",
    description: "Log-to-bowl-blank yield calculator, a twice-turning rough-out wall-thickness & drying-time estimator, and a sourced 14-species reference chart for woodturners.",
  },
  {
    href: "https://knife-steel-heat-treat-calculator.svc.julienika.cz",
    title: "Knife Steel Heat Treat Calculator",
    description: "Heat-treat schedule lookup for 1075, 1084, 1095, 15N20, 52100, 80CrV2, and O1, a forge/temper color-to-temperature guide, and a sourced blade steel reference chart for bladesmiths.",
  },
];

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-3xl px-4 py-10">
      <h1 className="text-3xl font-semibold">Guides and calculators for people who make things</h1>
      <p className="mt-4 text-gray-700">
        Most crafts run on a handful of numbers. A dough is defined by its hydration, a bar
        of soap by the ratio of lye to fat, a thrown pot by how much the clay will shrink on
        the way to the kiln door. Get those wrong and the work fails in ways that are
        obvious afterwards and invisible at the time.
      </p>
      <p className="mt-4 text-gray-700">
        This site explains those calculations and gives you tools to run them. The guides
        below are written to be read on their own — they explain the principle well enough
        that you could do the arithmetic on paper. The calculators are free, need no
        account, and several of them work entirely inside your browser, so the files you
        open never leave your computer.
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
