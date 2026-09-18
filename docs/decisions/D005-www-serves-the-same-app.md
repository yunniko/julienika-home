# D005 · www.julienika.cz serves the same app, with the apex as canonical
Date: 2026-09-18 · Goal: G-001 M6 · Status: active (superseded by: —)
Context: www.julienika.cz resolved to the VPS but had no vhost, so it answered from the catch-all with a self-signed certificate — a browser security warning for anyone typing www, an AdSense reviewer included. A redirect-only vhost would need a hand-written nginx config, which is root-owned.
Force: requirement — the only granted vhost tool is `julai-new-vhost <domain> <port>`, which creates a proxy vhost; a custom 301 config needs root, i.e. the Owner.
Decision: Point www at the same container (port 30070) with the granted script. Every page already emits a canonical URL on the bare apex, so search engines are told which host is authoritative.
Rejected: a 301 redirect vhost (needs root, so it would have blocked on the Owner); leaving www broken (a reviewer may land there).
Consequence: www and the apex serve identical HTML, and both must stay pointed at the same port. Converting www to a real redirect later is an Owner-run nginx change.
Evidence: `app/layout.tsx`; `app/page.tsx`
