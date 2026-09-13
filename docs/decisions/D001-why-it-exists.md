# D001 · Exists to give the bare apex domain an AdSense-verifiable site
Date: 2026-09-07 · Goal: G-001 · Status: active
Context: AdSense verification named `julienika.cz`, which had DNS but nothing listening.
Decision: Owner asked to "serve just txt for it"; shipped `ads.txt` plus a minimal links page at near-zero extra cost.
Rejected: a fuller brand site (scope creep).
Consequence: Keep it minimal; ask before adding scope.
Evidence: `app/page.tsx`; `public/ads.txt`.
