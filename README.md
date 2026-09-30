# Aureole Process Equipment — React Revamp

## Stack

- React
- Vite
- JavaScript / JSX
- Tailwind CSS v4
- Framer Motion
- React Router
- Lucide React

## Start

```bash
npm install
npm run dev
```

## Brand colors

All site colors are controlled from:

`src/styles/theme.css`

Do **not** hard-code brand colors inside individual components.

Tailwind aliases are defined in `src/styles/index.css`, so components use semantic classes such as:

```jsx
<div className="bg-brand text-white" />
<p className="text-muted" />
<div className="border-border bg-surface" />
```

Changing the variables in `theme.css` updates the complete site.

## Site-wide content

Repeated company values live in `src/config/site.js`, including:

- phone
- email
- address
- catalogue URL
- logo URL
- shared asset URLs

This keeps global values out of components.

## Architecture

- `app/` routing/app setup
- `components/` reusable UI/layout/navigation
- `pages/` route-level screens
- `features/` domain modules as the project grows
- `data/` data-driven product/industry content
- `config/` site-wide configuration
- `styles/` tokens/global styling
- `assets/` local images/logos/icons

## Implemented

- theme-token system
- top contact bar
- responsive desktop navbar
- products dropdown
- animated mobile navigation drawer
- responsive hero section
- official Aureole logo reference
- official Aureole equipment image reference
- trust/statistics strip
- reduced-motion support

## Next stage

Build featured products and the reusable product-card/data architecture, followed by capabilities and industries.
