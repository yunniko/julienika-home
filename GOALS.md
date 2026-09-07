# Goals — julienika-home

Owner writes goals here; The Company plans, executes, and logs against them.
Statuses: `DRAFT` · `ACTIVE` · `BLOCKED` · `DONE`.
Template/numbering conventions in `E:\CLAUDE\COMPANY\GOALS.md`.

## Active goals

### G-001 · Minimal apex-domain placeholder — ACTIVE
- **What:** A links page at `julienika.cz` pointing to the live
  `svc-lab` tools, plus `ads.txt` at the apex.
- **Why:** Owner's AdSense verification screen showed `julienika.cz` as
  the site being verified, but the bare apex had no site or nginx vhost
  at all (only `*.julienika.cz` subdomains were live) — DNS for the
  apex already resolved to the VPS, just nothing was listening. Owner
  asked (2026-09-07 chat) to "serve just txt for it" rather than build
  a full site.
- **Acceptance criteria:** `julienika.cz` resolves over HTTPS, serves
  `ads.txt` with the AdSense-provided content, and the AdSense
  verification screen recognizes it.
- **Constraints:** Deliberately minimal — this is not meant to become a
  full site/brand page unless the Owner asks for one later.

**Milestones:**
- [x] M1 — Build: minimal Next.js links page + `ads.txt`, verified
      locally (build, lint, 2 Playwright e2e tests). ✔ 2026-09-07.
- [x] M2 — Deploy: git repo, push, clone to VPS, docker compose up on
      port 30070. Found a pre-existing, disabled, filesystem-empty
      vhost config for `julienika.cz` (PHP/WordPress-shaped, dated
      May 13) blocking `julai-new-vhost` — stopped and asked the Owner
      rather than overwrite it; Owner confirmed it was dead and removed
      it (`sudo rm`, since deleting a root-owned file isn't in JulAI's
      sudo grants). Vhost + TLS then succeeded; verified live over
      HTTPS at https://julienika.cz, `ads.txt` serving correctly, every
      other host container's uptime unaffected. ✔ 2026-09-07.
- [ ] M3 — Owner to confirm AdSense verification actually passed (JulAI
      can't see the AdSense dashboard).

**Progress log** (newest first):
- 2026-09-07 — M2 complete. Live at https://julienika.cz. See
  HANDOVER.md D3 for the pre-existing-vhost incident.
- 2026-09-07 — M1 complete, verified locally.
