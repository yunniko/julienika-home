# Handover — julienika-home

Last verified: 2026-09-18 at 1ced54e

The site for the apex domain `julienika.cz`: reference guides, the trust pages, and a
hub listing every live svc-lab tool. Goal: `GOALS.md` G-001. Charter: `E:\CLAUDE\COMPANY\`.

## Current state

- **Live** at https://julienika.cz (port 30070). The content rebuild below is **built and
  tested locally but not yet deployed** — the live site is still the old links-only page.
- **AdSense rejected the site on 2026-09-18** for "Бесполезный контент" (low value
  content). Ownership is verified and `ads.txt` reads Authorized; the rejection is about
  the site's content, not the file. Ads stay off until a re-review passes. JulAI can read
  and act in the AdSense console directly (Owner granted Chrome access 2026-09-18).
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

- Apply the `domain-expert` findings to the six guides (review was running at handover).
- Deploy, then request the AdSense re-review from the console and record the outcome.
- Add the `www.julienika.cz` redirect vhost via `julai-new-vhost`.

## Deploy log

| Date | Commit | What changed | Verified how |
|---|---|---|---|
| 2026-09-07 | — | First deploy after the Owner removed a dead vhost (D003) | Live over HTTPS |
| 2026-09-08 → 2026-09-17 | 3920b52 | Hub cards + sitemap index for services #6–#23 | curl of the hub and sitemap index after each ship |

## Decisions

`docs/decisions/README.md` (D001–D004; D001 superseded by D004).
