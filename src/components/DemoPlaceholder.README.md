# DemoPlaceholder Component

A reusable global component for displaying placeholder/stub pages in demo modes. Useful when a demo project doesn't have all pages implemented yet.

## Location

- **Component**: `src/components/DemoPlaceholder.tsx`
- **Styles**: `src/styles/_demo-placeholder.scss`
- **Imported in**: `src/styles/main.scss`

## Import

```tsx
import DemoPlaceholder from '../../../components/DemoPlaceholder';
```

(Adjust relative path based on your file's location.)

## Basic Usage

### Default "Page Coming Soon"
```tsx
<DemoPlaceholder />
```

### Custom Title & Message
```tsx
<DemoPlaceholder
  title="Products Page"
  message="This product catalog is not yet available in the demo. Explore our services instead."
  backLink="/projects/nexora/demo/services"
  backLabel="Back to Services"
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | string | "Page Coming Soon" | Heading displayed on the placeholder |
| `message` | string | "This page is not yet available in the demo..." | Body text explaining the situation |
| `backLink` | string | "/" | React Router path for the back button |
| `backLabel` | string | "Back to Home" | Label text for the back button |

All props are optional; component has sensible defaults.

## Implementation Examples

### Example 1: Inline in a page
```tsx
import DemoPlaceholder from '../../../components/DemoPlaceholder';

export default function MyDemoPage() {
  return (
    <DemoPlaceholder
      title="Blog"
      message="The blog section is coming soon!"
      backLink="/projects/nexora/demo/home"
      backLabel="Back to Home"
    />
  );
}
```

### Example 2: Route-based (catch-all for stub pages)
In your Nexora demo router:
```tsx
<Route path="demo/coming-soon" element={<DemoPlaceholder />} />
<Route path="demo/coming-soon/:page" element={<DemoPlaceholder />} />
```

Then link to it:
```tsx
<Link to="/projects/nexora/demo/coming-soon/products">View Products</Link>
```

### Example 3: Conditional rendering
```tsx
const [currentPage, setCurrentPage] = useState('home');

if (currentPage === 'coming-soon') {
  return <DemoPlaceholder title="Coming Soon" backLabel="Go Back" />;
}
```

## Styling

The component uses `src/styles/_demo-placeholder.scss` for styling. Key classes:

- `.demo-placeholder` — main container with centered layout
- `.demo-placeholder-inner` — inner content wrapper
- `h1`, `p` — semantic headings and paragraphs
- `.btn` — styled button (inherits from global button styles)

Responsive breakpoint at `max-width: 640px` adjusts typography and spacing for mobile.

## Customization

To adjust the look:
1. Edit `src/styles/_demo-placeholder.scss` for styling.
2. Edit `src/components/DemoPlaceholder.tsx` for structure or prop additions.
3. Changes apply globally to all instances using this component.

## Global Availability

Since styles are imported in `src/styles/main.scss`, the component is available for use in any project (Nexora, Artisans Haven, future projects, etc.).
