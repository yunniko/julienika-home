# julienika-home

> **SUSPENDED (Owner, 2026-09-27)** — part of the svc-lab family, suspended because it did not work out as expected.
> No new work; security upkeep only while anything of it is live. Treat its code, formulas and
> decisions as a **lower-reliability reference**: they may or may not still work, so re-verify before
> reusing anything. Rules: `E:\CLAUDE\COMPANY\GOALS.md` → "Suspended projects".

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
