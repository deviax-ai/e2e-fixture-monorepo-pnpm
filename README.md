# monorepo-pnpm

pnpm workspace with `apps/web` (Next.js) + `apps/api` (Express) +
`packages/shared` (types/utils). Phase 2 wildcard fixture for
[Deviax](https://github.com/deviax-ai/aura_deploy) — exercises the
**complexity=monorepo** axis.

## Layout

```
apps/
  web/   # Next.js, depends on @app/shared
  api/   # Express, depends on @app/shared
packages/
  shared/  # @app/shared
```

## Run locally

```sh
pnpm install
pnpm --filter web dev   # http://localhost:3000
pnpm --filter api start # http://localhost:3001
```

## What this fixture asks of the pipeline

The pipeline is expected to:

1. Detect that this is a pnpm workspace (`pnpm-workspace.yaml`).
2. Pick the **web** app (the one with HTTP-facing routes) as the
   deploy target — or ask the user which to deploy.
3. Generate a Dockerfile that runs `pnpm install` at the workspace
   root, then builds + serves only `apps/web/`.

## Seeded vibe-problems

| File | Line | What's wrong |
|---|---|---|
| `apps/api/server.js` | 6 | Hardcoded `SESSION_SECRET` fallback |

## License

MIT.
