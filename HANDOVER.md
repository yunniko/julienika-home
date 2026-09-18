# Handover — julienika-home

Last verified: 2026-09-18 at a284d82

The site for the apex domain `julienika.cz`: reference guides, the trust pages, and a
hub listing every live svc-lab tool. Goal: `GOALS.md` G-001. Charter: `E:\CLAUDE\COMPANY\`.

## Current state

- **Live** at https://julienika.cz and https://www.julienika.cz (both port 30070), content
  rebuild deployed 2026-09-18 at a284d82 and verified: 8 URLs return 200, no other
  container restarted, 4 other sites unaffected.
- **AdSense rejected the site on 2026-09-18** for "Бесполезный контент" (low value
  content). Ownership is verified and `ads.txt` reads Authorized; the rejection is about
  the site's content, not the file. Ads stay off until a re-review passes.
- **The re-review has NOT been requested yet.** JulAI has console access (Owner granted
  it 2026-09-18) but the Chrome window reports `Viewport: 0x0`, so clicks do not land and
  the confirmation checkbox stays unchecked; `resize_window` did not fix it. Needs the
  window visibly restored, then the checkbox + "Запросить проверку" on the site detail page.
- **Rebuilt as a content site (D004):** six guides in `content/guides/`, About/Contact/
  Privacy in `content/pages/`, header nav and footer, homepage led by prose with the 23
  tool cards demoted below it.
- Verified this session: `npm run lint` clean; `npm run test:unit` **9 passed**;
  `npm run test:e2e` **4 passed**; `npm run build` succeeds, prerendering 16 routes
  including all six guides. `docs-lint` passes.
- `npm run test:unit` previously failed for want of a vitest `include` filter; fixed in
  `vitest.config.ts`, which also mirrors the `@/*` alias vitest doesn't read from tsconfig.

## How things fit together

Markdown is the source of truth for all prose: `content/guides/*.md` and
`content/pages/*.md`, registered with titles, descriptions and real publish dates in
`lib/guides.ts`, rendered server-side through `marked` and shared
`components/article-page.tsx`. Routes are `app/guides/page.tsx` (index, CollectionPage
JSON-LD) and `app/guides/[slug]/page.tsx` (Article JSON-LD, static params). This is
listing-studio's guides pattern minus its next-intl layer.

`app/sitemap.ts` enumerates every page; `/sitemap-index.xml` still points at each svc
service's own sitemap. The hub's tool list in `app/page.tsx` is edited whenever a new
svc-lab service ships — that list, not the guides, is what the daily automation touches.

## Rules in force

- Ads stay off until AdSense passes a re-review; don't request one until the content
  genuinely warrants it (a failed request costs days to weeks).
- Guides must teach the subject on their own — Google's spam policy bars pages generated
  mainly to carry ads. Domain-sensitive claims need a `domain-expert` pass before publishing.
- `npm ci`/`npm install` need `--legacy-peer-deps`.
- `www.julienika.cz` has DNS but no vhost, so it serves a cert error. Fixing it is M6.

## Next steps and open questions

- **BLOCKED:** request the AdSense re-review once the Chrome window is usable, then record
  the outcome. A re-review takes days to weeks.
- If it is rejected again, get the exact reason before changing anything — a second blind
  attempt costs another cycle.
- `www` serves the same app rather than redirecting (D005); converting it to a real 301 is
  an Owner-run nginx change if ever wanted.

## Deploy log

| Date | Commit | What changed | Verified how |
|---|---|---|---|
| 2026-09-07 | — | First deploy after the Owner removed a dead vhost (D003) | Live over HTTPS |
| 2026-09-08 → 2026-09-17 | 3920b52 | Hub cards + sitemap index for services #6–#23 | curl of the hub and sitemap index after each ship |
| 2026-09-18 | a284d82 | Content site: 6 guides, About/Contact/Privacy, nav, sitemap (D004); `www` vhost + cert (D005) | 8 URLs 200 incl. www; other containers' uptimes unchanged; 4 other sites 200 |

## Decisions

`docs/decisions/README.md` (D001–D005; D001 superseded by D004).
