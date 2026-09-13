# Handover — julienika-home
Last verified: 2026-09-12 at 18d5e7a

Minimal links + `ads.txt` page for the bare apex domain. Goal: `GOALS.md` G-001. Charter:
`E:\CLAUDE\COMPANY\`.

## Current state

- **Live** at https://julienika.cz (deployed 2026-09-07, port 30070; HTTP 200 re-checked
  2026-09-12). Redeployed whenever a svc-lab service ships (hub card + sitemap index).
- One static page (`app/page.tsx`), `public/ads.txt`, no `lib/`, no tests beyond e2e.
- Verification on 2026-09-12: `npm run test:unit` **fails** — `vitest.config.ts` has no
  `include` filter, so it picks up `tests/e2e/home.spec.ts` (Playwright) and errors with
  "Playwright Test did not expect test() to be called here". Not a product bug; fix by adding
  `include: ["tests/unit/**/*.spec.ts"]` or removing the script. e2e not re-run this session.
- Git tree clean.

## How things fit together

Copied from `svc-lab/template/` minus the calculator parts. The hub page lists every live
svc-lab service and the site serves a sitemap index (`/sitemap-index.xml`) pointing at each
service's own sitemap.

## Rules in force

- Keep it minimal; adding scope (www, a brand page) needs an Owner ask (D001).
- `npm ci --legacy-peer-deps`.

## Next steps and open questions

- Fix the vitest config so `npm run test:unit` is meaningful or absent.
- Add the hydroponic-nutrient-calculator card once its vhost is fixed.

## Deploy log

| Date | Commit | What changed | Verified how |
|---|---|---|---|
| 2026-09-07 | — | First deploy after the Owner removed a dead vhost (D003) | Live over HTTPS |
| 2026-09-08 → 2026-09-10 | 18d5e7a | Hub cards + sitemap index for services #6–#13 | curl of the hub and sitemap index after each ship |

## Decisions

`docs/decisions/README.md` (D001–D003).
