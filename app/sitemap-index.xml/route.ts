// A sitemap index listing every svc-lab site's own sitemap.xml. Each
// individual site (a different subdomain/host) already serves its own
// spec-valid sitemap.xml listing only its own routes -- a sitemap file
// can't list URLs on a different host than the one serving it. This
// index is the standard mechanism for a multi-subdomain property to
// point at all of them from one place; add a line here whenever a new
// svc-lab service goes live.

const SITEMAPS = [
  "https://julienika.cz/sitemap.xml",
  "https://fractions.svc.julienika.cz/sitemap.xml",
  "https://yarn.svc.julienika.cz/sitemap.xml",
  "https://sourdough.svc.julienika.cz/sitemap.xml",
  "https://clay-shrinkage-calculator.svc.julienika.cz/sitemap.xml",
  "https://resin-mix-ratio-calculator.svc.julienika.cz/sitemap.xml",
  "https://ics-calendar-generator.svc.julienika.cz/sitemap.xml",
];

export async function GET() {
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${SITEMAPS.map((url) => `<sitemap><loc>${url}</loc></sitemap>`).join("\n")}
</sitemapindex>`;

  return new Response(body, {
    headers: { "Content-Type": "application/xml" },
  });
}
