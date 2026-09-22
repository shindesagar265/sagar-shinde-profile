# Approved Project Plan — Sagar Shinde Portfolio

Status: In Progress
Date: 2026-09-22

## Objective
Build a premium, production-ready, static personal portfolio for Sagar Shinde, Senior Data Engineer in Hong Kong, targeting global recruiters, hiring managers, consulting clients, technology leaders, and the Azure/Data Engineering community.

## Architecture
- React + TypeScript single-page application
- Vite build system with GitHub Pages-compatible relative base path
- Tailwind CSS for responsive, dark-first styling
- Framer Motion for restrained scroll reveals, timelines, and card interactions
- Lucide React for accessible icons
- Recharts for an accessible responsive radar chart
- Static content only; no API, backend, database, authentication, or secrets
- GitHub Actions deployment to GitHub Pages

## Experience and Brand
- Executive Azure + Databricks-inspired visual language
- Palette: Azure #0078D4, violet #6B46C1, green #00C853, dark #0B1120
- Glass surfaces, subtle gradients, technical grid/architecture motifs, premium typography
- Dark/light theme with persisted preference and system fallback
- Fully responsive navigation and layouts
- Respect prefers-reduced-motion

## Page Sections
1. Sticky navigation, scroll progress, theme toggle, mobile menu
2. Hero with name, title, brand statement, tagline, location, contact CTAs, and technical cloud visual
3. Recruiter-friendly About section covering 15+ years, enterprise data engineering, Azure/AWS, Databricks Medallion architecture, cloud migration, insurance, MDM, GenAI, and leadership
4. Six featured achievement cards
5. Visual skills dashboard with category cards, animated proficiency bars, and radar chart
6. Interactive experience timeline for Manulife, Larsen & Toubro, Infosys, Capgemini, and Zensar Technologies
7. Microsoft-style DP-203 and AI-102 certification cards
8. Five premium project cards with architecture placeholders, technology badges, GitHub links, and accessible detail dialogs
9. Five placeholder blog/article cards
10. Beyond Technology section
11. Contact section with email, LinkedIn, GitHub, and resume download
12. Footer and back-to-top control

## Content
Use all personal information, achievements, skills, roles, certifications, projects, blog titles, and personal themes supplied in the user request. Write polished recruiter-friendly supporting copy without inventing unsupported metrics, dates, employers, credentials, or project repositories.

## Assets
- Use lightweight original CSS/SVG-style architectural illustrations and gradient placeholders rather than remote copyrighted images
- Include a downloadable professional resume placeholder document clearly marked for replacement
- Include favicon and social preview SVG assets

## Quality
- Semantic HTML, skip link, keyboard navigation, visible focus states, ARIA labels, accessible modal focus/escape behavior, adequate contrast
- SEO title/description/canonical/Open Graph/Twitter metadata
- JSON-LD Schema.org Person profile
- Lazy/non-blocking visual effects and minimal runtime overhead, aiming for Lighthouse 95+
- TypeScript strict mode
- Build and lint scripts

## Deliverables
- Complete source and configuration
- Tailwind and Vite configuration
- GitHub Pages workflow
- README with local development, customization, resume replacement, and deployment instructions
- Successful dependency install, lint/type check, and production build validation
