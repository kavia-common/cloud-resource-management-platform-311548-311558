# Cloud Resource Manager (Frontend)

React 18 + TypeScript + Vite + Tailwind CSS frontend.

## Theme (Royal Purple)

- Primary: `#8B5CF6`
- Secondary: `#6B7280`
- Success: `#10B981`
- Error: `#EF4444`
- Background: `#f9fafb`
- Surface: `#ffffff`
- Text: `#111827`

Tailwind theme tokens are defined in `tailwind.config.cjs` and shared UI utilities exist in `src/styles/globals.css`.

## Routing + Auth

- Uses `react-router-dom` with protected routes.
- Auth is currently stubbed using a localStorage token (no backend calls yet).
- The seam to replace with real JWT later is `src/state/auth/AuthContext.tsx` and `src/lib/api/apiClient.ts`.

## Environment Variables

Create a `.env` file (not committed) and set:

- `VITE_API_BASE_URL` — base URL of the backend API

Example in `.env.example`.

## Scripts (Preview-compatible)

These scripts keep the dev server and preview on port **3000**:

- `npm run dev` (same as `npm start`)
- `npm start`
- `npm run build` (outputs to `build/`)
- `npm run preview` (serves the production build from `build/` on port 3000)
- `npm run lint`
- `npm run format`

## Project Structure

- `src/ui/layout/*` — App shell (sidebar + topbar)
- `src/ui/pages/*` — Page skeletons (Dashboard, Organizations, Accounts, etc.)
- `src/router/*` — Route definitions and auth guard
- `src/state/auth/*` — Local auth stub (replace with JWT later)
- `src/lib/api/*` — API client scaffold
- `src/styles/*` — Tailwind + shared styling
