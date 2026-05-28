# AGENTS.md

Project context for AI agents working in this codebase.

## What This Is

A single-page marketing/landing site for **SteamLookup** — a free Windows tool that retrieves live Steam game data, DRM details, and download sources. The site is a TanStack Start (React SSR) app deployed on Netlify.

## Directory Structure

```
src/
  routes/
    __root.tsx     # Root layout — sets <head> metadata, loads Google Fonts
    index.tsx      # The entire landing page (single route)
  styles.css       # All visual design: CSS variables, animations, component styles
  router.tsx       # TanStack Router setup
public/
  favicon.ico
netlify.toml       # Build config
vite.config.ts     # Vite + TanStack Start + Tailwind + Netlify plugin
```

## Architecture

This is a **single-page site** — all content lives in `src/routes/index.tsx`. There are no sub-routes, no API endpoints, no database, no auth.

The design system lives entirely in `src/styles.css` using CSS custom properties (not Tailwind components). Tailwind is imported but only used sparingly for utility resets.

Icons are inline SVG function components defined at the top of `index.tsx` — no icon library dependency.

## Design System

CSS variables in `src/styles.css`:
- `--bg-base` / `--bg-card` / `--bg-elevated` — dark backgrounds
- `--steam-blue` — primary accent (#4d9de0)
- `--accent-teal` — secondary accent (#3dbfa0)
- `--font-display` — Syne (headings)
- `--font-mono` — Space Mono (code/terminal)

Named CSS classes for reusable UI: `.btn-primary`, `.btn-secondary`, `.btn-discord`, `.feature-card`, `.terminal-box`, `.badge`, `.divider-label`.

Animations: `.fade-up` + `.fade-up-1` through `.fade-up-6` for staggered entrance.

## Key Decisions

- No icon library — SVGs inline to avoid bundle overhead for a static site.
- All hover interactivity handled via `onMouseEnter`/`onMouseLeave` inline handlers (CSS-only hover wasn't sufficient for the card link pattern).
- The download link points to a GitHub Releases URL — update this when the actual distribution URL is known.
- The Discord invite URL (`discord.gg/sailing-support`) is a placeholder — replace with the real invite link.

## Conventions

- Components: PascalCase
- Styles: CSS custom properties + named classes, not inline Tailwind utilities
- No comments in JSX unless explaining a non-obvious layout choice
