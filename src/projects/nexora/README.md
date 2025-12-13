Nexora Styles Map

Purpose: quick reference linking Nexora UI sections to SCSS sources.

Entrypoint
- Project entry: `src/projects/nexora/styles/_nexora.scss`
	- Imports: `@use ./abstracts/variables`, `@use ./abstracts/mixins`
	- Page forwards: `@forward ./pages/_home`, `_services`, `_about`, `_contact`, `_case-studies`, `_insights`

Abstracts
- Variables: `src/projects/nexora/styles/abstracts/_variables.scss`
	- Nexora color tokens and gradients
- Mixins: `src/projects/nexora/styles/abstracts/_mixins.scss`
	- Project-specific patterns (if any)

Pages (per-route partials)
- Home: `src/projects/nexora/styles/pages/_home.scss`
- Services: `src/projects/nexora/styles/pages/_services.scss`
- About: `src/projects/nexora/styles/pages/_about.scss`
- Contact: `src/projects/nexora/styles/pages/_contact.scss`
- Case Studies: `src/projects/nexora/styles/pages/_case-studies.scss`
- Insights: `src/projects/nexora/styles/pages/_insights.scss`

Notes
- Media queries are scoped and colocated per page to preserve cascade.
- Demo-mode styles are separate from portfolio global styles.