<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# julienika-home — project conventions

Read `HANDOVER.md` first: why this project exists (it's deliberately
minimal — see D1), current state. Goal in `GOALS.md` (G-001).

- Keep this minimal. It exists to give the apex domain an AdSense-
  verifiable site with a links page, not to become a full brand site —
  don't add scope without checking with the Owner first.
- `npm install`/`npm ci` need `--legacy-peer-deps` (a live npm/arborist
  bug — see `svc-lab/HANDOVER.md`).
- Live at https://julienika.cz — see
  `E:\CLAUDE\COMPANY\INFRASTRUCTURE_DEPLOY.md` for the redeploy command.
