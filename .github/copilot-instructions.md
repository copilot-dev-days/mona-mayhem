# Mona Mayhem — Copilot Workspace Instructions

## Development Checklist (mandatory)
1. `npm run build` — ensure project compiles
2. `npm run dev` — verify dev server runs without errors

## Project Overview
- **What:** A retro arcade-themed GitHub Contribution Battle Arena
- **Stack:** Astro v5, TypeScript, Node.js adapter (SSR)
- **Entry point:** `src/pages/index.astro` — single-page battle UI
- **API:** `src/pages/api/contributions/[username].ts` — proxies GitHub contribution data

## Architecture
- Astro SSR with `@astrojs/node` adapter in standalone mode
- Single-page app with inline styles and interactive JavaScript
- Server-side API route fetches GitHub contribution graphs with 1-hour caching
- No external UI framework — plain HTML/CSS/JS in `.astro` files

## Conventions
- Use TypeScript for all new files
- Keep styling scoped within Astro components or in dedicated CSS files
- API routes go in `src/pages/api/`
- Use semantic HTML elements for accessibility
- Follow the retro arcade visual theme (pixel fonts, neon colors, scanline effects)
