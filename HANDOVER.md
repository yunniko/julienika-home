# Handover — julienika-home

Read this before touching the project. Goal in `GOALS.md` (G-001).
Company-wide standards in `E:\CLAUDE\COMPANY\`.

## Current state

**Live at https://julienika.cz** (deployed 2026-09-07). Built, verified
locally, and deployed the same day — see D3 for a real snag hit and
resolved along the way.

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

**D3 — Deploy hit a pre-existing, disabled vhost config; stopped and
asked rather than assume it was safe to overwrite.** `julai-new-vhost`
refused with "already exists" — `/etc/nginx/sites-available/julienika.cz`
turned out to be a real config from May 13 2026, shaped for a PHP/
WordPress site (`root /var/www/julienika.cz/public`, PHP-FPM), not
enabled (no `sites-enabled` symlink), and its referenced site directory
no longer existed on disk. Rather than guess whether this represented
real, recoverable prior work, stopped and asked the Owner directly —
per the charter's instinct to investigate unfamiliar state before
deleting or overwriting it. Owner confirmed it was dead and removed it
themselves (deleting a root-owned file isn't within JulAI's sudo
grants); the deploy then succeeded normally. Worth remembering: an
"already exists" refusal from this script is a real signal something
is there, not just a naming collision to route around.

## Next steps and open questions

- Deploy (M2): same pattern as every `svc-lab` service — port 30070,
  `julai-new-vhost julienika.cz 30070`.
- If the Owner later wants `www.julienika.cz` too, or a fuller
  brand/portfolio page here, that's a scope change to ask about first
  rather than assume.
