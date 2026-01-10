Artisan's Haven Styles Map — TBD

Status: This project’s styles map is a placeholder (TBD). We’ll fill this out when we begin implementing Artisan’s Haven. Below is the intended structure for quick reference.

Entrypoint (planned)
- Project entry: `src/projects/artisans-haven/_artisans.scss`
  - Imports: `@use ./styles/abstracts/variables`, `@use ./styles/abstracts/mixins`
  - Page forwards: `@forward ./styles/pages/_home`, `_products`, `_blog`, `_checkout`

Abstracts (planned)
- Variables: `src/projects/artisans-haven/styles/abstracts/_variables.scss`
- Mixins: `src/projects/artisans-haven/styles/abstracts/_mixins.scss`

Pages (planned per-route partials)
- Home: `src/projects/artisans-haven/styles/pages/_home.scss`
- Products: `src/projects/artisans-haven/styles/pages/_products.scss`
- Blog: `src/projects/artisans-haven/styles/pages/_blog.scss`
- Checkout: `src/projects/artisans-haven/styles/pages/_checkout.scss`

Notes
- Media queries are scoped and colocated per page to preserve cascade.
- Demo-mode styles are separate from portfolio global styles.
