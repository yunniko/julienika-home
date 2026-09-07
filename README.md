# julienika-home

Minimal placeholder site for the bare `julienika.cz` domain — a links
page to the live `svc-lab` tools, plus `ads.txt` so AdSense can verify
domain ownership at the apex. Not a `svc-lab` product itself; exists
because AdSense's site-verification screen showed `julienika.cz` and
that domain had no site at all yet.

## Running it

```
npm install --legacy-peer-deps
npm run dev
```

Production build/run: `docker compose --profile app up -d --build`.

## Current state

Built and deployed 2026-09-07. See `HANDOVER.md`.
