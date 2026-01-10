# Demo-prefixed CSS — Suggested Removals and Review

Summary
- This document lists `.demo-landing` and closely related demo-scoped CSS blocks found across the repo and provides a recommendation (Keep / Review / Remove) and reasoning for each.
- Use this as a checklist for manual removal; I have *not* modified any CSS yet.

Methodology
- Grepped for `.demo-landing` occurrences in SCSS files and extracted short context for each match.
- Recommendations prioritize safety: keep clear overrides, mark only exact or near-exact duplicates for removal or review.

Notes about style patterns
- The project's demo mode uses CSS custom properties defined in `src/projects/artisans-haven/styles/abstracts/_variables.scss` (these must remain).
- Some files include an `ORIGINAL:` commented block — these are preserved copies and should be left alone unless you want to delete comments.

Files & Recommendations

- src/projects/artisans-haven/styles/abstracts/_variables.scss — KEEP
  - Reason: Declares CSS variables and fallbacks used throughout demo styles.
  - Link: [src/projects/artisans-haven/styles/abstracts/_variables.scss](src/projects/artisans-haven/styles/abstracts/_variables.scss#L1-L140)

- src/projects/artisans-haven/styles/pages/_products.scss — REVIEW
  - Snippet (top of file):

```scss
.demo-landing .artisan-products {
    background: var(--demo-bg);
    max-width: $ah-max-width;
    margin: 0 auto;
    padding: $ah-spacing-2xl;
    /* ... */
}

/* Ensure product-detail receives padding when it's a top-level demo page element */
.demo-landing .product-detail {
    padding: $ah-spacing-md !important;
    max-width: 1200px;
    margin: 0 auto;
}
```

  - Reasoning: This file defines demo-scoped layout and color adjustments for the product list and a small convenience rule for `.product-detail`. The rule set differs from the base product styles found in `src/projects/artisans-haven/styles/pages/_home.scss` and `.../_project-details.scss`. I recommend a manual review to confirm whether the `.product-detail` padding belongs here or should live in `_project-details.scss` (consolidation). Leave the `.artisan-products` block if it provides distinct demo visuals.
  - Link: [src/projects/artisans-haven/styles/pages/_products.scss](src/projects/artisans-haven/styles/pages/_products.scss#L1-L260)

- src/projects/artisans-haven/styles/pages/_project-details.scss — KEEP (but consolidate)
  - Snippet (demo product-detail):

```scss
// Demo-specific product detail page
.demo-landing .product-detail {
    background: var(--demo-surface);
    color: var(--demo-text);
    border: 1px solid var(--demo-border);
    box-shadow: 0 4px 12px rgba(56, 56, 55, 0.08);
    /* ... */
}
```

  - Reasoning: These are clear visual overrides for product detail pages in demo mode; keep them. If you prefer consolidation, move the `.demo-landing .product-detail` rule into a single file (e.g., `_project-details.scss`) and remove duplicates elsewhere.
  - Link: [src/projects/artisans-haven/styles/pages/_project-details.scss](src/projects/artisans-haven/styles/pages/_project-details.scss#L480-L520)

- src/projects/artisans-haven/styles/pages/_home.scss — KEEP
  - Snippet (demo wrapper and sections):

```scss
.demo-landing {
  /* project header, hero, and general demo wrapper variables and layout */
}

.demo-landing section {
  h1, h2 { font-family: Georgia, 'Times New Roman', serif; color: var(--demo-heading); }
  p { color: var(--demo-text); }
}
```

  - Reasoning: The file contains wide-scoped demo wrapper rules that affect many child components and layout spacings. These are intentional demo-mode design changes and should remain.
  - Link: [src/projects/artisans-haven/styles/pages/_home.scss](src/projects/artisans-haven/styles/pages/_home.scss#L1-L120)

- src/projects/artisans-haven/styles/pages/_navbar.scss — REVIEW
  - Snippet (demo nav override):

```scss
// Demo-specific navbar styling
.demo-landing .ah-nav {
    background: var(--demo-accent);
    color: var(--demo-bg);
    max-width: $ah-max-width;
    margin: 0 auto;
    padding: $ah-spacing-sm $ah-spacing-2xl $ah-spacing-sm $ah-spacing-2xl;
    /* ... */
}
```

  - Reasoning: The demo nav provides distinct color, font-family, and spacing. It's a legitimate override. However, I noticed multiple `.demo-landing .ah-nav` occurrences and `ORIGINAL:` commented blocks — verify that duplicate *active* rules do not exist (commented originals are safe). If an exact active duplicate exists, remove the duplicate; otherwise keep.
  - Link: [src/projects/artisans-haven/styles/pages/_navbar.scss](src/projects/artisans-haven/styles/pages/_navbar.scss#L100-L140)

- src/projects/artisans-haven/styles/pages/_blog.scss — KEEP
  - Snippet:

```scss
.demo-landing .ah-blog {
    max-width: $ah-max-width;
    margin: 0 auto;
    padding: $ah-spacing-2xl;
    .post-card { background: var(--demo-surface); color: var(--demo-text); }
}
```

  - Reasoning: Demo-specific card styling; keep.
  - Link: [src/projects/artisans-haven/styles/pages/_blog.scss](src/projects/artisans-haven/styles/pages/_blog.scss#L1-L120)

- src/projects/artisans-haven/styles/pages/_checkout.scss — KEEP (shared rules are fine)
  - Snippet:

```scss
.checkout-page,
.demo-landing .checkout-page {
    max-width: $ah-max-width;
    margin: 0 auto;
    padding: $ah-spacing-2xl;
    color: var(--demo-text, $ah-demo-text);
}
```

  - Reasoning: The combined selector indicates the same rules apply to both base and demo pages; that's a deliberate sharing pattern — keep.
  - Link: [src/projects/artisans-haven/styles/pages/_checkout.scss](src/projects/artisans-haven/styles/pages/_checkout.scss#L1-L60)

- src/styles/main.scss — REVIEW
  - Snippet (cart drawer):

```scss
.demo-landing~.cart-overlay .cart-drawer,
.demo-landing .cart-drawer {
    background: var(--demo-surface, #FCFAF4);
    color: var(--demo-text, #383837);
    h2 { font-family: Georgia, 'Times New Roman', serif; color: var(--demo-heading, #383837); }
}
```

  - Reasoning: Demo styling for the cart drawer. If a base `.cart-drawer` rule exists that is identical to this demo block, remove the duplicate; otherwise keep. This file is global and may intentionally scope the cart drawer for demo pages.
  - Link: [src/styles/main.scss](src/styles/main.scss#L580-L610)

- src/styles/_typography.scss — KEEP
  - Snippet:

```scss
.demo-mode,
.demo-landing {
  h1, h2, h3, h4, h5, h6 { margin-bottom: 0.5rem; }
  h1 { font-size: clamp(1.2rem, 0.8rem + 1.2vw, 2rem) !important; }
}
```

  - Reasoning: Global typography adjustments for demo mode; keep.
  - Link: [src/styles/_typography.scss](src/styles/_typography.scss#L160-L200)

- src/projects/artisans-haven/styles/pages/_footer.scss — KEEP
  - Snippet (demo disclaimer card):

```scss
.demo-landing .demo-disclaimer {
    max-width: $ah-max-width;
    margin: $ah-spacing-3xl auto 0;
    padding: $ah-spacing-xl $ah-spacing-2xl;
    background: var(--demo-surface);
    border-top: $ah-border-thick solid var(--demo-accent);
}
```

  - Reasoning: The demo disclaimer is a clearly demo-only element — keep.
  - Link: [src/projects/artisans-haven/styles/pages/_footer.scss](src/projects/artisans-haven/styles/pages/_footer.scss#L1-L80)

- src/projects/artisans-haven/styles/pages/_videos.scss — KEEP
  - Reasoning: Demo-specific video adjustments appear to alter card backgrounds and headings; keep.
  - Link: [src/projects/artisans-haven/styles/pages/_videos.scss](src/projects/artisans-haven/styles/pages/_videos.scss#L1-L100)


Actionable next steps (manual)
1. Review the `REVIEW` items and decide whether to remove or consolidate them into a single canonical file (I recommend `_project-details.scss` for `.product-detail` rules and `_navbar.scss` for `.ah-nav` overrides).
2. After decisions, remove duplicates and re-run `npm run build` to verify no regressions.

If you'd like, I can prepare an automated patch that:
- Detects exact active duplicates (not commented originals) and removes them, leaving one canonical rule.
- Or, I can prepare a more detailed per-file diff preview for every `REVIEW` candidate.

---
Generated by the code-assistant on request. Review and let me know which items you'd like me to change automatically.
