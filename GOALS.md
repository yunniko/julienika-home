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
- [x] M3 — AdSense verification outcome established (2026-09-18, JulAI
      read the dashboard directly — Owner granted Chrome access): ownership
      verified and `ads.txt` **Разрешено/Authorized**, but the site review
      **rejected** julienika.cz for "Бесполезный контент" (low value
      content). Ads stay off until that is fixed and re-reviewed.
- [ ] M4 — Build the apex into a real content site (D004): self-contained
      reference guides in `content/guides/` rendered via markdown+`marked`
      (listing-studio's pattern), About/Contact/Privacy pages, real
      navigation, homepage led by content with tool cards demoted.
      Domain-sensitive claims verified by the `domain-expert` agent first.
- [ ] M5 — Verify and deploy: unit + e2e tests, lint, `docs-lint`, build,
      redeploy to the VPS, confirm every page live over HTTPS and every
      other site on the host unaffected.
- [ ] M6 — Request the AdSense re-review from the dashboard and report the
      outcome. Fix `www.julienika.cz` (no vhost → cert error) as part of
      this, so a reviewer never lands on a broken host.

**Progress log** (newest first):
- 2026-09-18 — M5 done, M6 partly done. `domain-expert` reviewed all six
  guides; its safety findings were verified against primary sources before
  acting (WEST SYSTEM sensitization figures, classicbells zap-vs-pH, NIOSH
  NaOH first aid, Epoxyworks/TotalBoat amine blush). Fixed: soap pH-strip
  advice replaced by the zap test (pH is the wrong observable), 9.5–11.5
  range, first aid, container materials; epoxy PPE/sensitization section,
  amine blush vs off-ratio ("scrape and redo" was wrong), MEKP as initiator.
  Unsourced findings (M^0.75 scaling, PRNU, Windows recoverable-strings,
  EPA per-pH figures) deliberately **not** published. Guides now 1123–1723
  words each. Verified: lint, 9 unit + 4 e2e, build, docs-lint all pass.
  Deployed (a284d82): all 8 live URLs 200, no other container restarted
  (uptimes unchanged), 4 other sites still 200. `www.julienika.cz` vhost +
  cert created via `julai-new-vhost` (D005) — was a cert error, now 200.
  **BLOCKED: the AdSense re-review was NOT submitted.** The Chrome window
  reports `Viewport: 0x0`, so clicks don't land; the confirmation checkbox
  still reads unchecked and `resize_window` did not restore a viewport.
  Owner: restore/un-minimize the Chrome window and say so — then JulAI ticks
  "Я подтверждаю, что все нарушения устранены" and clicks "Запросить
  проверку" (site detail page for julienika.cz), or the Owner can click it.
- 2026-09-18 — M4 built (not yet deployed). Owner directed autonomous
  fix-and-ship, and granted AdSense console access; JulAI read the console
  directly: one site (julienika.cz), ownership verified, `ads.txt`
  **Authorized**, review **rejected** for "Бесполезный контент", with a
  "Запросить проверку" control available once fixed. Built per D004: 6
  guides (~1000–1400 words each) in `content/guides/`, About/Contact/Privacy
  in `content/pages/`, `lib/guides.ts` + `components/article-page.tsx`
  (listing-studio's markdown+`marked` pattern), guides index and `[slug]`
  routes with CollectionPage/Article JSON-LD, header nav + footer, homepage
  led by prose with the 23 tool cards demoted, sitemap covering every page.
  Verified: lint clean, **9 unit tests pass** (vitest `include`+alias bug
  fixed), **4 e2e pass**, build prerenders 16 routes, `docs-lint` ok.
  Codex critique unavailable (account usage limit until 2026-09-19 15:13).
  Next: apply the running `domain-expert` review, then deploy (M5), then
  request the re-review and fix `www` (M6).
- 2026-09-18 — AdSense review outcome: **rejected — "Бесполезный контент"**
  (low value content); Owner must fix and request a re-review. So the
  ads.txt "Not found" was downstream of the review, not a server fault
  (file verified correct and 200 on 09-15). Google (answer/12170421):
  subdomains can no longer be added or managed as separate sites, so every
  `*.svc.julienika.cz` service sits under the julienika.cz site entry —
  meaning apex approval likely gates AdSense for the whole svc-lab
  portfolio on this domain (inference; Google docs don't state it outright).
  Apex is ~400 visible words of link cards, no content of its own.
  BLOCKED: Owner to choose — (a) give the apex real, original content and
  re-request review (reverses D001's "keep it minimal"), (b) accept no
  AdSense on julienika.cz, or (c) rehost the services under a domain that
  has content. No server-side change until then.
- 2026-09-15 — Owner: site is under AdSense review ("Getting ready"), so
  "Check for updates" is disabled. Google: review takes a few days to 2–4
  weeks; "Not found" = none found "when the AdSense crawler last crawled".
  Apex page carries the AdSense script and ~400 visible words (a list of
  tool links, no content of its own); Google lists "not enough unique
  content" as a rejection reason — a risk, not a confirmed cause.
  BLOCKED: wait for review outcome; Owner decides on a `www.julienika.cz`
  redirect vhost (D001 scope). Nothing to change server-side meanwhile.
- 2026-09-15 12:23 — Watched apex + svc nginx logs 11:53–12:23 CEST: no
  Google request of any kind (ads.txt or otherwise) on the apex; only
  ads.txt hits were from the Owner's own IP. No Owner confirmation that
  "Check for updates" was clicked in that window, so the crawler's
  behavior is still unobserved. BLOCKED: Owner to say whether they clicked
  it (and whether status changed) and decide on a `www.julienika.cz` →
  apex redirect vhost (D001 scope).
- 2026-09-15 (later) — Owner clarified: status is "Not found", was
  "Authorized" before. Google docs: entries purge only on a re-crawl 404.
  Checked: nginx logs for julienika.cz cover 09-07..09-15 continuously,
  Googlebot visits daily, but no Google `/ads.txt` request since 09-07
  (that one → 200); no Google ads.txt request with a non-200 on any
  readable `*.julienika.cz` vhost log; all 19 ads.txt (apex + 18 svc) →
  200 with the correct line; all 3 Contabo NS agree (A 62.171.183.241 for
  apex + www, no AAAA), no DNSSEC. Not observable: `www.julienika.cz`
  (catch-all, TLS fails, unlogged). No server-side cause found.
  Next: Owner clicks "Check for updates" while JulAI watches logs to see
  what the crawler actually requests; www vhost is an Owner decision (D001).
- 2026-09-15 — Owner reports AdSense shows ads.txt "unavailable".
  Checked: https://julienika.cz/ads.txt → 200, text/plain, correct pub ID
  (also under Googlebot/Mediapartners UAs); http→https 301; valid cert;
  robots.txt allows all; nginx log shows Googlebot fetched it 2026-09-07
  15:35 → 200 (59 B), no Google ads.txt fetch since. No fault found on the
  apex. Side finding: `www.julienika.cz` has a DNS A record but no vhost
  (catch-all self-signed cert, empty HTTP reply) — not crawled by AdSense
  per Google docs, but untidy; adding it is scope → Owner decision (D001).
  Next: Owner presses "Check for updates" in AdSense and reports the
  exact wording; M3 still open.
- 2026-09-07 — M2 complete. Live at https://julienika.cz. See
  HANDOVER.md D3 for the pre-existing-vhost incident.
- 2026-09-07 — M1 complete, verified locally.
