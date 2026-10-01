# apsara-r-portfolio

## Overview
A single-page portfolio for Apsara R, an entry-level Python / Full Stack developer. The hero presents her profile as a JSON API response, reflecting her Django and REST API background. Projects come first, followed by experience, skills, about, education and contact. Light and dark themes are supported, and the layout is responsive.

## Tech stack
- Next.js 14 (App Router) and React 18
- Tailwind CSS 3
- TypeScript
- No API keys or environment variables required

## Run locally
Requires Node.js 18.17 or newer.

```bash
npm install
npm run dev
```

Open http://localhost:3000. To check a production build, run `npm run build` then `npm start`.

## Customize
- **All content** lives in `data/portfolio.ts`: profile, projects, experience, skills and education.
- **Add your Live Demo and GitHub links**: set `demo` and `code` on each project, and `github` in `profile`. Empty values are hidden automatically.
- **Resume**: replace `public/Apsara_R_Resume.pdf` (keep the filename or update `profile.resume`).
- **Colors**: edit the CSS variables at the top of `app/globals.css`.
- **Layout**: each section is a component in `components/`; reorder them in `app/page.tsx`.

## Deploy
Push to GitHub and import the repository in Vercel. No configuration is needed.
