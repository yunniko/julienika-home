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
