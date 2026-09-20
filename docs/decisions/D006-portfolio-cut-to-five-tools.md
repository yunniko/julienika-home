# D006 · The hub lists five tools; the other eighteen are decommissioned
Date: 2026-09-20 · Goal: G-001 M4 · Status: active (superseded by: —)
Context: The Owner asked for the delivered portfolio to be cut to the five most useful and interesting services, image-object-splitter among them. Server logs gave no usable ranking signal: requests are homepage-only, from scanners (`l9scan`, WordPress probes) with no hits on any tool sub-page, so the choice is judgment, not measurement.
Force: requirement — Owner instruction, 2026-09-20.
Decision: Keep image-object-splitter, photo-metadata-cleaner, ats-resume-checker, epub-metadata-fixer and sourdough-calculator — the browser-side file/ML tools that do work a search box cannot, plus the calculator with the widest repeat audience. The hub card list, the sitemap index and four guides' closing sections were edited in the same change, since each pointed at a service being removed.
Rejected: ranking by traffic (the signal is scanner noise); keeping the hub list unchanged (broken links on the most visible page, with an AdSense review pending).
Consequence: any future service added to the hub must also be added to the sitemap index. Guides must not link to a tool unless it is live.
Evidence: `app/page.tsx`; `app/sitemap-index.xml/route.ts`; `tests/e2e/home.spec.ts`
