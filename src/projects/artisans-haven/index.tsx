/**
 * Artisan's Haven - Portfolio Project Router
 * 
 * E-commerce craft marketplace showcasing:
 * - Shopping cart with Context API state management
 * - Product catalog with filtering and search
 * - Blog with markdown content
 * - Video gallery
 * - Full checkout flow with validation
 * - WCAG 2.2 Level AA accessibility compliance
 * 
 * Two viewing modes:
 * 1. Project View (/projects/artisans-haven) - Shows project overview and technical details
 * 2. Demo View (/projects/artisans-haven/demo) - Full interactive e-commerce experience
 * 
 * Key Features:
 * - React Router nested routes
 * - TypeScript type safety
 * - SCSS modular styling
 * - Mobile-responsive design (400px+)
 * - Accessible forms with ARIA attributes
 */

import { Routes, Route } from "react-router-dom";
import ProjectLayout from "./ProjectLayout";
import ArtisansHome from "./ArtisansHome";
import DemoLanding from "./DemoLanding";
import DemoLayout from "./DemoLayout";
import ProductList from "./ProductList";
import ProductDetail from "./ProductDetail";
import BlogList from "./BlogList";
import BlogPost from "./BlogPost";
import Videos from "./Videos";
import AHSitemap from "./AHSitemap";
import { Checkout, CheckoutSuccess } from "./checkout";

export default function ArtisansHaven() {
  return (
    <Routes>
      {/* ProjectLayout wraps all routes with breadcrumb navigation */}
      <Route element={<ProjectLayout />}>
        {/* Project overview page */}
        <Route index element={<ArtisansHome />} />

        {/* Demo routes - Full e-commerce experience with themed layout */}
        <Route path="demo" element={<DemoLayout />}>
          <Route index element={<DemoLanding />} />
          <Route path="products" element={<ProductList />} />
          <Route path="products/:slug" element={<ProductDetail />} />
          <Route path="blog" element={<BlogList />} />
          <Route path="blog/:slug" element={<BlogPost />} />
          <Route path="videos" element={<Videos />} />
          <Route path="sitemap" element={<AHSitemap />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="checkout/success" element={<CheckoutSuccess />} />
        </Route>

        {/* Direct access routes (project view, no demo theme) */}
        <Route path="products" element={<ProductList />} />
        <Route path="products/:slug" element={<ProductDetail />} />

        <Route path="blog" element={<BlogList />} />
        <Route path="blog/:slug" element={<BlogPost />} />

        <Route path="videos" element={<Videos />} />
      </Route>
    </Routes>
  );
}
