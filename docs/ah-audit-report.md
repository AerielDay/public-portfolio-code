# Artisan's Haven — Quick Accessibility & Mobile Responsiveness Audit

Date: 2025-12-14
Scope: `src/projects/artisans-haven` + related shared styles/components.
Checks performed:
- Presence of responsive meta viewport
- Mobile responsive patterns (media queries, breakpoints, touch targets, responsive units)
- WCAG (2.0 / 2.1 / 2.2) focused checks: landmarks, ARIA usage, form semantics, focus management, skip links, contrast (high-level)
- Keyboard & semantic checks: focusable controls, role usage, dialog semantics

Summary (high level)
- Overall: Good. The project shows strong accessibility and responsive practices: meta viewport, ARIA landmarks, aria-* usage on dialogs/forms, skip-link, focus-visible rules, responsive breakpoints, touch-target sizing, and prefers-reduced-motion support are present.
- Recommendation: run automated audits (pa11y, axe or Lighthouse) for contrast / semantic issues and perform manual keyboard testing on all interactive flows (cart, lightbox, menus, checkout).

Positives (what's implemented)
- Responsive viewport: [index.html](index.html) includes `<meta name="viewport" content="width=device-width, initial-scale=1.0" />`.
- Responsive CSS: media queries and mixins used widely (`@include mobile`, `@media (max-width: ...)` present in project styles).
- Skip link: `.skip-link` is present and used in the Navbar (see [src/components/Navbar.tsx](src/components/Navbar.tsx#L101)).
- Landmark roles & ARIA: `nav` with `aria-label`, `main` sections with `aria-labelledby`, breadcrumbs using `aria-current`, dialogs use `role="dialog"` + `aria-modal="true` (e.g., [src/components/CartDrawer.tsx](src/components/CartDrawer.tsx#L65-L67)).
- Form accessibility: `aria-required`, `aria-invalid`, and `aria-describedby` linking inputs to error messages used in checkout and contact forms (see [src/projects/artisans-haven/checkout/Checkout.tsx](src/projects/artisans-haven/checkout/Checkout.tsx#L169-L176)). Error messages have `role="alert"`.
- Image alt text: most images include `alt` attributes (examples: [ProductDetail.tsx](src/projects/artisans-haven/ProductDetail.tsx#L84), [DemoLanding.tsx](src/projects/artisans-haven/DemoLanding.tsx#L53), [Mockups.tsx](src/projects/artisans-haven/Mockups.tsx#L13)).
- Focus styles: `:focus-visible` and focus outline mixins are present across styles (see [src/styles/_mixins.scss](src/styles/_mixins.scss#L69) and various components using `:focus-visible`).
- Accessible interactive controls: hamburger/menu controls use `aria-expanded`, `aria-controls`, and `aria-haspopup` in the Navbar ([src/components/Navbar.tsx](src/components/Navbar.tsx#L115-L117)).
- ARIA live regions: cart quantity announcements use `aria-live="polite"` in `CartContext` (see [src/projects/artisans-haven/context/CartContext.tsx](src/projects/artisans-haven/context/CartContext.tsx#L98)).
- Reduced-motion: `prefers-reduced-motion` media queries exist in styles for animation reduction.

Findings & Suggested Fixes (prioritized)
1) Contrast checks (Automated; MEDIUM)
- Why: I cannot compute color contrast precisely here. Some demo theme variables set light backgrounds with medium text (e.g., `--demo-text` on `--demo-bg`).
- Action: Run an automated color-contrast check (axe, pa11y, or Lighthouse). Command examples:

```bash
# pa11y CLI (if available):
npx pa11y http://localhost:5174/projects/artisans-haven/demo

# Lighthouse (from Chrome):
# open DevTools -> Lighthouse -> run audit (Mobile + Accessibility)
```
- Files to inspect: `src/projects/artisans-haven/styles/abstracts/_variables.scss` and demo overrides in `src/projects/artisans-haven/styles/pages/*`.

2) Keyboard focus order & trap in dialogs (Manual + MEDIUM)
- Why: Dialogs/lightboxes exist (`role="dialog"`), and cart drawer uses `aria-modal`. Ensure focus is moved into dialogs and restored on close, and focus is trapped while open.
- Action: Test keyboard-only:
  - Open cart/lightbox, press Tab/Shift+Tab to ensure focus cycles within dialog.
  - Verify Escape closes dialog and focus returns to the triggering control.
- Files to check: `src/components/CartDrawer.tsx`, `src/projects/artisans-haven/Mockups.tsx`, `ArtisansHome.tsx` lightbox usage.

3) Interactive element semantics (Automated/Manual; LOW-MEDIUM)
- Why: Some elements use `role="menuitem"` and anchors; make sure anchor-based controls have `href` or are real `button`s when triggering actions.
- Action: Search for `role="menuitem"` or `[role="button"]` and ensure correct element types or keyboard handlers. Fix by replacing `a` with `button` when no navigation occurs.
- Files: `src/components/Navbar.tsx` (menu items), any comment-marked nav items.

4) Skip-link visibility & order (Manual; LOW)
- Why: `.skip-link` mixin exists and is used, but ensure it becomes visible on focus and targets `#main-content` or correct main landmark.
- Action: Keyboard Tab to top-of-page and confirm skip link appears and works.
- Files: `_mixins.scss`, `Navbar.tsx`.

5) Touch target sizes & spacing (Manual; LOW)
- Why: Many components use `$ah-min-touch-target` (44px). Verify on small screens that tappable elements meet minimum size and have adequate spacing.
- Action: Test on device/emulator.
- Files: `_variables.scss`, `_navbar.scss`, product card CTA buttons.

6) Form label associations (Manual; LOW)
- Why: Inputs use `aria-describedby` and `aria-required`. Confirm visible labels are present or `aria-label` used where necessary.
- Action: Inspect contact and checkout forms for explicit `<label for>` or visible labels.
- Files: `src/pages/contact/contact.tsx`, `src/projects/artisans-haven/checkout/Checkout.tsx`.

Small code-level notes (low-effort fixes)
- Avoid inline styles that may interfere with theming or reduce maintainability (a few inline style props appear in TSX; e.g., some `style={{ background: 'transparent' }}` in `ProductDetail.tsx`). Consider moving to CSS classes.
- Confirm all meaningful images use descriptive `alt` text (product images use the product title which is good).

Recommended next steps
1. Run an automated accessibility scan (pa11y/axe/Lighthouse) on key pages:
   - `/projects/artisans-haven` (project overview)
   - `/projects/artisans-haven/products` (product listing)
   - `/projects/artisans-haven/demo` (demo landing)
   - `/projects/artisans-haven/checkout` (form flow)

2. Manually test keyboard navigation for dialogs, menus, and checkout flow.
3. Run color-contrast checks and adjust variables in `src/projects/artisans-haven/styles/abstracts/_variables.scss` if any ratios fail.

If you want, I can:
- Run `npx pa11y-ci` (if you want me to run it here), capture the report and auto-open affected files, or
- Produce a concrete checklist with commands and targeted file edits to fix the highest-severity issues.

Audit artifacts
- Quick report file: `docs/ah-audit-report.md` (this file)
- Demo duplicates report: `docs/demo-duplicate-suggestions.md` (created earlier)

Status update
- Todo items updated; audit report created. Let me know whether you want me to run `pa11y`/`axe` now and capture output.