# D003 · Deploy hit a pre-existing disabled vhost; stopped and asked
Date: 2026-09-07 · Goal: G-001 · Status: active
Context: `julai-new-vhost` refused with "already exists": a May-2026 PHP/WordPress-shaped config, not enabled, its root directory gone.
Decision: Asked the Owner rather than overwrite; Owner confirmed it was dead and removed it (root-owned), then the deploy succeeded.
Rejected: routing around the refusal.
Consequence: An "already exists" refusal is a real signal, not a naming collision.
Evidence: `GOALS.md` progress log.
