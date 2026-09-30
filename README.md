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

## Production build

```bash
npm run build
npm run preview
```

Every pull request and push to `main` also runs the GitHub Actions build workflow in `.github/workflows/build.yml`.

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
- `components/` reusable UI/layout/navigation/SEO helpers
- `pages/` route-level screens
- `features/` domain modules as the project grows
- `data/` data-driven product/industry/company content
- `services/` external form/API integrations
- `config/` site-wide configuration
- `styles/` tokens/global styling
- `assets/` local images/logos/icons

## Environment variables

Copy `.env.example` to `.env` for local configuration.

### Public site URL

Set the final production origin so canonical and Open Graph URLs can be generated correctly:

```bash
VITE_SITE_URL=https://www.example.com
```

Do not include a trailing slash.

### Quote form endpoint

The Contact page works with a configurable multipart form endpoint:

```bash
VITE_QUOTE_ENDPOINT=https://your-api.example.com/quotes
```

The endpoint should accept `multipart/form-data` POST requests. If no endpoint is configured, the form falls back to opening the visitor's email client with the enquiry details prefilled. Attachments cannot be transferred through the email fallback and must be attached manually.

## SEO & accessibility

- route-aware titles and meta descriptions
- Open Graph and Twitter metadata
- canonical URLs when `VITE_SITE_URL` is configured
- Organization JSON-LD
- `noindex` handling for unknown routes
- crawler defaults in `public/robots.txt`
- global hash scrolling and scroll restoration
- skip-to-content navigation
- visible keyboard focus states
- keyboard-focusable featured product carousel
- reduced-motion support

## Implemented

- Aureole v3 design-token system
- responsive navigation and full footer
- animated homepage and product carousel
- capabilities, industries and manufacturing storytelling
- client/trust and company sections
- full About page
- filterable Products page
- reusable production-ready product-detail system
- Contact / Request Quote experience with validation and optional URS upload
- product-to-contact preselection
- route-aware SEO and social metadata
- accessibility and scroll behavior polish
- branded 404 page
- GitHub Actions production build validation
- reduced-motion support
