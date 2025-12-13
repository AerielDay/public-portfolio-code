# Global Styles Map

Purpose: quick reference linking UI areas to SCSS sources, with notes on imports, mixins, and responsiveness.

Sections
- Global Entrypoint: `src/styles/main.scss`
	- Imports/Forwards: `@use _variables`, `@use _mixins`, `@use _typography`; forwards project entries
	- Projects Index: containers, intro list, cards, project cards, modal styles
	- Media Queries: colocated with affected blocks (700px, 768px)
- Variables: `src/styles/_variables.scss`
	- Tokens: colors, font families, sizes, weights, line-heights
	- CSS Custom Properties: `:root` variables for components using `var(--token)`
- Mixins: `src/styles/_mixins.scss`
	- Breakpoints: `mobile-small`, `mobile`, `mobile-medium`, `tablet-break`
	- Accessibility: `skip-link`, `respect-reduced-motion`
	- Patterns: `nav-button`, `portfolio-button`, `project-intro-card`, `project-card`, `content-container`, `thumbnail-image`, `modal-overlay`, `modal-content`, `hamburger-bar`, `hamburger-open-state`, `dropdown-link`, `dropdown-button-link`, `dropdown-panel-desktop`, `dropdown-panel-mobile`
- Typography: `src/styles/_typography.scss`
	- Base: body, headings h1–h6, accents, utilities
	- Responsive: base font and headings at ≤768px
- Fonts: `src/styles/_fonts.scss`
	- `@font-face` declarations for Inter, Montserrat, Playfair Display
- Demo Placeholder: `src/styles/_demo-placeholder.scss`
	- Generic demo wrapper styles with mobile adjustments
- Navbar: `src/styles/_navbar.scss`
	- Shell: brand, hamburger, actions, dropdown (uses mixins)
	- Responsive: ≤820px; media kept near rules

Notes
- Media queries remain next to the blocks they affect to preserve cascade.
- Legacy `@import` entries in `main.scss` are grouped near the top for visibility.
