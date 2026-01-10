# Cleanup Review — TBD Files

Review the following files identified as potentially unnecessary for the portfolio or GitHub Pages deployment. Decide whether to keep, comment out, or remove.

## TBD Candidates

### 1. `.nojekyll`
- **Status:** Empty file
- **Purpose:** Disables Jekyll processing on GitHub Pages (only needed for project pages, not user pages)
- **Necessity:** ❌ Not needed for this portfolio
- **Recommendation:** Delete
- **Reason:** GitHub Pages on user accounts (like `AerielDay.github.io`) does not process Jekyll by default. This file is only necessary for project repositories. Since the portfolio is a standalone SPA with Vite-built static assets, Jekyll interference is not a concern, making this file unnecessary.
- **Action:** Delete from repo

---

### 2. `.pa11yci`
- **Status:** Accessibility CI configuration
- **Content:** URLs and pa11y rules for local/CI accessibility scanning
- **Purpose:** Runs automated accessibility tests on specified routes
- **Necessity:** ❌ Only useful if running pa11y checks in CI; not required for portfolio to run
- **Recommendation:** Delete
- **Reason:** This configuration file is only active if you have a GitHub Actions workflow or CI pipeline that explicitly runs `pa11y-ci`. Since there is no active pa11y CI workflow in `.github/workflows/`, this file is dormant and clutters the repo. If you later decide to add automated accessibility testing to your CI, you can recreate it. For now, it's maintenance debt with no active use.
- **Action:** Delete from repo

---

### 3. `mirror-refresh.ps1`
- **Status:** PowerShell utility script
- **Content:** Mirrors portfolio code to public repo, excluding TaskFlow
- **Purpose:** Maintenance/sync script for keeping a public-facing version separate from private projects
- **Necessity:** ❌ NotDelete
- **Reason:** This is a developer utility for maintaining a separate public mirror of the codebase. It does not contribute to the portfolio's functionality, build process, or deployment. Unless you are actively using this script to sync to a public repo, it is unnecessary baggage. If needed in the future, it can be recovered from git history or recreated.
- **Action:** Delete from repo
- **Action:** Delete from repo or move to `.scripts/` folder if needed later

---

## Files Verified as KEEP (Essential)

- `.gitattributes` — LF normalization; good practice
- `.gitignore` — Excludes `node_modules/` and `/dist`; essential
- `src/global.d.ts` — TypeScript module declarations; essential
- `src/import-meta.d.ts` — Vite glob typing; essential
- `src/main.tsx` — Application entry point; essential
- `tsconfig.json` — TypeScript config; essential
- `vite.config.ts` — Build config; essential

---

## Next Steps

1. Review the TBD candidates above.
2. For each, decide: **Keep** / **Comment out** / **Delete**.
3. Provide your decision, and I will make the changes accordingly.

