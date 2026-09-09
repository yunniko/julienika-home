import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "julienika.cz",
  description: "Free web tools and calculators.",
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
];

export default function Home() {
  return (
    <main className="mx-auto max-w-2xl px-4 py-12">
      <h1 className="text-3xl font-semibold">julienika.cz</h1>
      <p className="mt-3 text-gray-600">Free web tools and calculators.</p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {TOOLS.map((tool) => (
          <a
            key={tool.href}
            href={tool.href}
            className="rounded-lg border border-gray-200 p-5 hover:border-gray-400"
          >
            <h2 className="font-semibold text-blue-700">{tool.title}</h2>
            <p className="mt-1 text-sm text-gray-600">{tool.description}</p>
          </a>
        ))}
      </div>
    </main>
  );
}
