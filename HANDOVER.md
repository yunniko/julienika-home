# Handover — julienika-home

Read this before touching the project. Goal in `GOALS.md` (G-001).
Company-wide standards in `E:\CLAUDE\COMPANY\`.

## Current state

Built and verified locally 2026-09-07 (lint, build, 2 Playwright e2e
tests). Not yet deployed (M2).

## How things fit together

Deliberately minimal — one static links page (`app/page.tsx`), no
`lib/` (no business logic to unit-test), `public/ads.txt` for AdSense.
Copied from the `svc-lab/template/` starter like every other portfolio
service, minus the parts that don't apply (no calculator, so no `lib/`;
kept the e2e layer since even a links page can silently break).

## Decision record

**D1 — Exists only because of a real, immediate need, not planned
scope creep.** The Owner's AdSense verification screen showed
`julienika.cz` (the bare apex) as the site to verify, but that domain
had no site at all — DNS already pointed at the VPS (a pre-existing A
record, confirmed via `nslookup`), just nothing was listening on it.
Rather than leave it unresolved or build something bigger than asked,
the Owner explicitly said (chat, 2026-09-07) to "serve just txt for
it" — this project is exactly that, plus a genuinely useful links page
instead of a truly blank placeholder, since the cost of adding one was
near zero.

**D2 — Not registered as a `svc-lab` idea/service.** It's not a
passive-income tool — no monetization angle beyond enabling AdSense
verification for the whole domain family. Tracked as its own standalone
Company project instead of added to `svc-lab`'s shipped-services table.

## Next steps and open questions

- Deploy (M2): same pattern as every `svc-lab` service — port 30070,
  `julai-new-vhost julienika.cz 30070`.
- If the Owner later wants `www.julienika.cz` too, or a fuller
  brand/portfolio page here, that's a scope change to ask about first
  rather than assume.
