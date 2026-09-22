# Sagar Shinde — Portfolio

A production-oriented, static portfolio for Sagar Shinde, Senior Data Engineer in Hong Kong. The experience uses an Azure and Databricks-inspired visual system to present enterprise data engineering expertise, career history, certifications, architecture case studies, planned writing, and contact information.

## Stack

- React 19 and TypeScript with strict checking
- Vite with a GitHub Pages-compatible relative base
- Tailwind CSS plus a custom token-based design layer
- Framer Motion with reduced-motion support
- Lucide React icons
- Recharts for the responsive expertise radar
- GitHub Actions deployment to GitHub Pages

No API, backend, database, authentication, runtime secrets, or analytics are included.

## Local development

Requirements: Node.js 22 or newer and npm.

1. Install dependencies with `npm install`.
2. Start the local server with `npm run dev`.
3. Open the localhost URL printed by Vite.

The Vite server is configured for local, remote, and embedded VS Code preview use.

## Quality checks

- `npm run lint` — lint TypeScript and React hooks.
- `npm run typecheck` — run the strict TypeScript project build check.
- `npm run build` — type-check and create the production site in `dist/`.
- `npm run preview` — serve the production build locally.

## Content customization before publishing

All editable portfolio data is centralized in `src/data/portfolio.ts`.

The supplied email, LinkedIn, GitHub, Medium, Substack, and Credly profiles, experience, skills, and case-study content are already configured. Project buttons currently lead to Sagar's GitHub profile; replace each `repositoryUrl` only when a public project repository is available. The insights section presents current writing themes and links to the publishing profiles where future articles will appear.

The project intentionally avoids unsupported dates, project metrics, repository claims, and confidential client details.

## Resume updates

The published CV is `public/Sagar-Shinde-CV.pdf`, and every download action reads its path from `profile.resume` in `src/data/portfolio.ts`.

1. Export the approved public CV using the same `Sagar-Shinde-CV.pdf` filename.
2. Replace the existing file in `public/`.
3. Update `profile.resumeUpdated` when appropriate.
4. Run the full quality checks and push to `main`.

The CV is publicly accessible. Remove private addresses, identification numbers, references, signatures, and any other information that should not be indexed or downloaded publicly.

## QR codes

Run `npm run generate:qr` after changing the LinkedIn URL. This regenerates privacy-safe SVG and high-resolution downloadable PNG codes in `public/` without using an external QR service.

## SEO and social metadata

Canonical metadata targets the project site at `https://shindesagar265.github.io/sagar-shinde-profile/`. If publishing from another repository or a custom domain, update the canonical URLs in:

- `index.html`
- `public/robots.txt`
- `public/sitemap.xml`

If the deployed URL differs from the current placeholder, also update the JSON-LD `url`, Open Graph URL/image, and Twitter image URL. `public/social-preview.svg` can be exported to a 1200×630 PNG for platforms that do not render SVG social cards.

## GitHub Pages deployment

1. Create the GitHub repository and push the project to its `main` branch.
2. In **Settings → Pages**, set **Source** to **GitHub Actions**.
3. Confirm the repository is named `sagar-shinde-profile` and the canonical URLs described above are correct.
4. Push to `main` or run **Deploy portfolio to GitHub Pages** manually.

The workflow installs locked dependencies, lints, builds, uploads `dist/`, and deploys through the official Pages action. Vite uses `base: '/sagar-shinde-profile/'` so assets resolve from the GitHub Pages project path.

## Accessibility and performance notes

- Semantic landmarks and heading hierarchy
- Keyboard-operable navigation, timeline, project dialogs, and back-to-top control
- Skip link, visible focus rings, dialog Escape handling, descriptive labels, and non-color cues
- Persisted light/dark/system theme preference
- `prefers-reduced-motion` support in CSS and motion components
- Lazy-loaded radar chart and local SVG visual assets
- No remote photography or heavyweight media

## Project structure

- `src/App.tsx` — page composition and interaction state
- `src/components/` — reusable navigation, motion, architecture, chart, dialog, and utility components
- `src/data/portfolio.ts` — portfolio content and external-link configuration
- `src/hooks/useTheme.ts` — persisted system-aware theme behavior
- `src/index.css` — responsive design system and component styling
- `public/` — favicon, social preview, crawler files, and resume placeholder
- `.github/workflows/deploy-pages.yml` — CI and GitHub Pages deployment

## License and content

Source code may be adapted for personal use. Personal branding, biographical content, and resume material remain specific to Sagar Shinde and should be replaced when reusing the template.
