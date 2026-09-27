# TaskFlow AI — Project Management UI

A modern, AI-first SaaS marketing website for **TaskFlow AI** — the project management platform that helps teams ship 10x faster with AI.

## ✨ Features

- **6 pages**: Home, Features, How It Works, Pricing, About, Contact
- **Dark theme** with purple→blue gradient aurora background
- **Glass-morphism cards** with hover animations
- **CSS-only animations**: fade-in, fade-up, float, pulse
- **Fully responsive** (mobile-first, breakpoints sm/md/lg)
- **Accessible**: skip-link, semantic HTML, focus rings, ARIA labels
- **No JS framework** — pure Astro + TypeScript + Tailwind
- **No external icon library** — inline SVGs only

## 🛠 Tech Stack

- [Astro.js](https://astro.build) — Static site generator
- [TypeScript](https://www.typescriptlang.org) — Strict mode
- [Tailwind CSS](https://tailwindcss.com) — Utility-first styling
- No React/Vue/JS frameworks
- No paid fonts — system fonts via Tailwind defaults

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

Visit `http://localhost:4321` (Astro default) to see the site.

## 📁 Project Structure

```
project-management-ui/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Nav.astro
│   │   ├── Footer.astro
│   │   ├── FeatureCard.astro
│   │   ├── SectionHeading.astro
│   │   ├── CTA.astro
│   │   ├── WorkflowStep.astro
│   │   ├── Testimonial.astro
│   │   └── FAQ.astro
│   ├── layouts/
│   │   └── BaseLayout.astro
│   ├── pages/
│   │   ├── index.astro
│   │   ├── features.astro
│   │   ├── how-it-works.astro
│   │   ├── pricing.astro
│   │   ├── about.astro
│   │   └── contact.astro
│   └── styles/
│       └── global.css
├── astro.config.mjs
├── tailwind.config.mjs
├── tsconfig.json
└── package.json
```

## 🎨 Design Tokens

- **Background**: `#0B0B1A` (ink-900)
- **Card**: `#14142B` (ink-800)
- **Border**: `#1E1E3F` (ink-700)
- **Brand**: `#8B5CF6` (purple-500) → `#3B82F6` (blue-500)

## ♿ Accessibility

- Skip-to-content link
- Semantic landmarks (`<header>`, `<main>`, `<footer>`, `<nav>`)
- Focus-visible rings
- ARIA labels on icon-only buttons
- Form labels associated with inputs
- Native `<details>` for FAQ accordion (no JS)

## 📦 Build

The static site outputs to `dist/` and can be deployed to any static host (Vercel, Netlify, Cloudflare Pages, GitHub Pages, etc.).
