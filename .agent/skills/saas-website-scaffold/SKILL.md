# Skill: SaaS Website Scaffold

## When to use
User wants a marketing website for a SaaS product, landing page,
or company site. Tech stack must be Astro + Tailwind + TypeScript.

## Inputs to ask for
1. Product name + 1-paragraph description
2. List of pages (default: Home, Features, How It Works, Pricing, About, Contact)
3. Brand color (default: purple→blue gradient)
4. Output location (sibling folder, inside repo, etc.)

## Workflow
1. Confirm mode (DIRECT/QUICK/HARNESS) per project protocol
2. Create folder structure
3. Write config files in parallel:
   - package.json (astro, @astrojs/tailwind, tailwindcss, typescript)
   - astro.config.mjs (Tailwind integration)
   - tailwind.config.mjs (dark mode, brand colors, content paths)
   - tsconfig.json (extend astro/tsconfigs/strict)
   - .gitignore (node_modules, dist, .env)
4. Write global CSS: Tailwind directives + design tokens + animation keyframes
5. Write BaseLayout: HTML shell, nav, footer, dark theme, skip-link
6. Write shared components (one each, write in parallel):
   - Nav.astro (sticky, mobile drawer)
   - Footer.astro (4-col, newsletter)
   - FeatureCard.astro (glass card, gradient icon)
   - WorkflowStep.astro (numbered step)
   - Testimonial.astro (quote + avatar)
   - FAQ.astro (native <details>)
   - CTA.astro (gradient section)
   - SectionHeading.astro (eyebrow + title)
7. Write 6 pages, each composing components
8. Write README.md with run instructions

## Design tokens (default)
- ink-900: #0B0B1A (background)
- ink-800: #14142B (card)
- ink-700: #1E1E3F (border)
- brand-500: #8B5CF6 (purple)
- brand-400: #A78BFA
- accent: #3B82F6 (blue)

## Animations
- @keyframes fade-in, fade-up, float, pulse-slow
- Use Tailwind `animate-*` utilities

## Accessibility checklist
- skip-to-content link
- semantic landmarks (header, main, footer, nav)
- focus-visible rings
- aria-labels on icon-only buttons
- alt text on images
- form labels associated with inputs

## Definition of done
- 24+ files created
- `npm install && npm run dev` works
- All 6 pages render
- Mobile + desktop responsive
- No console errors

## Output
Show file tree + line counts. Do NOT run `npm install` unless asked.
Do NOT commit without explicit permission — show diff first.