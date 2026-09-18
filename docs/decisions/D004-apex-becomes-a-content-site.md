# D004 · The apex becomes a real content site, reversing D001's link-only scope
Date: 2026-09-18 · Goal: G-001 M4 · Status: active (superseded by: —)
Context: AdSense rejected julienika.cz on 2026-09-18 — "Бесполезный контент" (low value content). Google's publisher policy bars ads on screens "without publisher-content ... used for alerts, navigation or other behavioral purposes"; a page of 23 outbound link cards is exactly that. Subdomains cannot be separate AdSense sites (answer/12170421), so this one entry gates the whole svc-lab portfolio.
Force: requirement — the rejection stands until the site is fixed, and ads stay off meanwhile.
Decision: Give the apex its own publisher content — reference guides in `content/guides/` plus About, Contact and Privacy pages — reusing listing-studio's markdown+`marked` pattern. Tool cards stay, demoted below the content.
Rejected: forgo AdSense here (abandons portfolio monetization); rehost 23 services as subdirectories (weeks of work, unproven gain); mass-produce filler (Google's spam policy bars "many pages generated for the primary purpose of manipulating search rankings").
Consequence: D001's "keep it minimal" no longer holds. Every guide must teach on its own; domain-sensitive claims need domain-expert verification before publishing.
Evidence: `GOALS.md` G-001 M4; `app/page.tsx`
