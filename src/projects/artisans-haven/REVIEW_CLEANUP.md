# Artisan's Haven Styles & Code Cleanup — TBD Files

Review the following files and folders identified as redundant or unnecessary. Decide whether to delete.

## TBD Candidates for Deletion

### Redundant Sass Files (Duplicate Structures)

#### 1. `/src/projects/artisans-haven/abstracts/_mixins.scss`
- **Status:** Empty placeholder file
- **Content:** Only a comment; no actual mixins
- **Active Alternative:** `/src/projects/artisans-haven/styles/abstracts/_mixins.scss`
- **Necessity:** ❌ Redundant; duplicate of `/styles/abstracts/`
- **Reason for Deletion:** Parallel redundant file. Entry point references `/styles/abstracts/`, not this. Two identical empty files create confusion and violate DRY principle.
- **Action:** Delete

---

#### 2. `/src/projects/artisans-haven/abstracts/_variables.scss`
- **Status:** Empty placeholder file
- **Content:** Only a comment; no actual variables
- **Active Alternative:** `/src/projects/artisans-haven/styles/abstracts/_variables.scss`
- **Necessity:** ❌ Redundant; duplicate of `/styles/abstracts/`
- **Reason for Deletion:** Parallel redundant file. Entry point references `/styles/abstracts/`, not this. Consolidate into `/styles/abstracts/` only.
- **Action:** Delete

---

### Empty Layout Styles (No CSS Rules)

#### 3. `/src/projects/artisans-haven/layout/_container.scss`
- **Status:** Empty placeholder file
- **Content:** Only a comment; no actual CSS
- **Usage:** No references found in any Artisan's Haven component
- **Necessity:** ❌ Unused; no active CSS rules or component references
- **Reason for Deletion:** This file contains zero styling logic. No component imports or uses `.container`, `.ah-container`, or related classes. It's scaffolding with no purpose until actual styles are added to `/styles/pages/`.
- **Action:** Delete

---

#### 4. `/src/projects/artisans-haven/layout/_hero.scss`
- **Status:** Empty placeholder file
- **Content:** Only a comment; no actual CSS
- **Usage:** No references found in any Artisan's Haven component
- **Necessity:** ❌ Unused; no active CSS rules or component references
- **Reason for Deletion:** Zero styling logic. No component imports or uses `.hero`, `.ah-hero`, or related classes. Intended as scaffolding but adds no value while empty.
- **Action:** Delete

---

### Unused Code Files

#### 5. `/src/projects/artisans-haven/components/componentParts.ts`
- **Status:** Dead-code example/test file
- **Content:** A single async test function that tries to load markdown from a non-existent URL
- **Usage:** **Zero imports found** — not referenced anywhere in the codebase
- **Purpose:** Appears to be a leftover example or test during development
- **Necessity:** ❌ Unused; no active imports or component usage
- **Reason for Deletion:** This file serves no purpose. It's dead code that was likely used as a development example. The `loadMarkdown` utility exists in `/utils/` but this test file should not be shipped with the portfolio.
- **Action:** Delete

---

## Files Verified as KEEP (Active & Used)

- `/src/projects/artisans-haven/utils/imageConstraints.ts` — ✅ **KEEP.** Used by `ProductDetail.tsx` for responsive image sizing.
- `/src/projects/artisans-haven/utils/loadMarkdown.ts` — ✅ **KEEP.** Utility for loading markdown; used by blog/post components.
- `/src/projects/artisans-haven/context/CartContext.tsx` — ✅ **KEEP.** Global cart state management; actively used throughout checkout flow.
- `/src/projects/artisans-haven/data/products.ts` — ✅ **KEEP.** Product data; referenced by product list and detail views.
- `/src/projects/artisans-haven/assets/*` — ✅ **KEEP.** Screenshot images; referenced in demo and project content.
- `/src/projects/artisans-haven/checkout/` — ✅ **KEEP.** Active checkout flow and success page.
- `/src/projects/artisans-haven/components/` — ✅ **KEEP.** Active component library (AHNavbar, cards, etc.).

---

## Summary

**Total TBD Candidates:** 5 files

| Category | Count |
|----------|-------|
| Redundant SCSS (duplicate abstracts) | 2 |
| Empty Layout SCSS (no rules/usage) | 2 |
| Unused Code (dead code/examples) | 1 |

---

## Next Steps

1. Review TBD candidates above.
2. When ready to delete, remove files listed under "Action: Delete".
3. After deletion, verify build passes: `npm run build`



