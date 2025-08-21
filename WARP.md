# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.
``

Repository overview
- Stack: React + TypeScript app built with Vite, styled with Tailwind CSS, navigation via React Router, UI animations via Framer Motion.
- Purpose: Centralized campus clubs portal with a clean directory, per-club pages (announcements, events, socials), and a modern animated UI.

Commands
- Install dependencies:
  - npm install
- Start dev server (opens on http://localhost:5173):
  - npm run dev
- Type-check only:
  - npm run typecheck
- Build production assets (outputs to dist/):
  - npm run build
- Preview the production build locally:
  - npm run preview

Notes on tests/lint
- No test or lint tooling is configured yet. When adding tests (e.g., Vitest/Jest) or lint/format (e.g., ESLint/Prettier), update this file with exact commands, including how to run a single test.

High-level architecture
- Entry and tooling:
  - index.html bootstraps the app and loads src/main.tsx
  - Vite config: vite.config.ts
  - TypeScript config: tsconfig.json, tsconfig.node.json
  - Styling: Tailwind configured via tailwind.config.ts and postcss.config.js; global styles in src/index.css
- App shell and routing:
  - src/main.tsx sets up the Router with routes: / (Home), /clubs (directory), /clubs/:slug (club detail)
  - src/App.tsx provides the page layout with Navbar and Footer and renders the active route
- Pages and components:
  - Pages: src/pages/Home.tsx (hero/feature cards), src/pages/Clubs.tsx (search/filter grid), src/pages/ClubDetail.tsx (profile: description, announcements, events, socials)
  - Components: src/components/Navbar.tsx, Footer.tsx, ClubCard.tsx, SearchBar.tsx, AnimatedText.tsx
- Data and types:
  - Mock data in src/data/clubs.ts to power listings and detail pages
  - Shared types in src/types/index.ts (Club type)

Important docs in this repo
- README.md includes introductory lines:
  - "This is a special project!"
  - "These classes are condected by the InE-Cell"

CI/CD and workflows
- None configured. When adding CI (e.g., GitHub Actions) or deployment (e.g., Vercel/Netlify), document the exact commands and environment expectations here.

