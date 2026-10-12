<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## Cursor Cloud specific instructions

- Install dependencies from the repo root with `pnpm install --frozen-lockfile`. The package manager is pnpm `10.33.4` (`packageManager` in the root `package.json`). Node `>=20` is required.
- The only application is `apps/web` (Next.js). Start it with `pnpm --filter web dev`. It listens on `0.0.0.0:3000`.
- Open `http://localhost:3000` or `http://127.0.0.1:3000`. `127.0.0.1` is listed in `allowedDevOrigins` in `apps/web/next.config.ts` so dev assets and HMR load on that host.
- Do not pass dev-server flags as `pnpm --filter web dev -- --hostname ...`. pnpm inserts an extra `--`, and `next dev` treats the next token as a project directory. To pass flags, run `pnpm --filter web exec next dev --hostname 0.0.0.0 --port 3000`.
- Checks: `pnpm typecheck`, `pnpm lint`, and `pnpm build`. Press `d` on the homepage (outside a text field) to toggle dark mode.
