/**
 * ProductDetail - Individual Product Page Component
 * 
 * Displays detailed product information:
 * - Product title, price, and description
 * - Product image with constrained sizing
 * - Step-by-step instructions (if available)
 * - Purchase section with Add to Cart button
 * - Breadcrumb navigation
 * 
 * Features:
 * - Dynamic route parameter handling (slug)
 * - Image constraint utility for responsive sizing
 * - Shopping cart integration
 * - Route-aware breadcrumbs (demo vs project mode)
 * - Proper semantic heading hierarchy (H2 → H3)
 * 
 * Accessibility:
 * - WCAG 2.2 compliant heading structure
 * - Descriptive button labels
 * - Breadcrumb navigation for context
 * 
 * The constrainProductImages utility ensures images don't
 * overflow their containers on various screen sizes.
 */

// src/projects/artisans-haven/ProductDetail.tsx

import React, { useEffect } from "react";
import { useParams, Link, useLocation } from "react-router-dom";
import { products } from "./data/products";
import Breadcrumb from "../../components/Breadcrumb";
import { useCart } from "./context/CartContext";
import { constrainProductImages } from "./utils/imageConstraints";
import { useDemoMode } from "../../contexts/DemoModeContext";

export default function ProductDetail() {
  const { slug } = useParams<{ slug: string }>();
  const location = useLocation();
  const product = products.find((p) => p.slug === slug);
  const cart = useCart();

  useEffect(() => {
    // Apply image constraints after component mounts
    const timer = setTimeout(() => constrainProductImages(), 100);
    return () => clearTimeout(timer);
  }, [product]);

  // Ensure product detail pages are treated as non-demo pages
  const { setIsDemo } = useDemoMode();
  useEffect(() => {
    setIsDemo(false);
  }, [setIsDemo]);

  if (!product) return <div className="card">Product not found</div>;

  // Detect if we're in demo mode
  const isDemo = location.pathname.includes('/demo');
  const baseRoute = isDemo ? '/projects/artisans-haven/demo' : '/projects/artisans-haven';

  const crumbs = isDemo
    ? [
      { label: "Home", to: baseRoute },
      { label: "Products", to: `${baseRoute}/products` },
      { label: product.title }
    ]
    : [
      { label: "Projects", to: "/projects" },
      { label: "Artisans Haven", to: "/projects/artisans-haven" },
      { label: "Products", to: `${baseRoute}/products` },
      { label: product.title }
    ];

  return (
    <article className="card product-detail" aria-labelledby="pd-title">
      <Breadcrumb items={crumbs} />

      <h2 id="pd-title">{product.title}</h2>
      <p className="price" aria-hidden="true">${product.price}</p>

      <div className="detail-grid">
        <div className="media">
          {product.image && (
            <img src={product.image} alt={product.title} className="detail-image" />
          )}
        </div>

        <div className="instructions" style={{ background: 'transparent', border: 'none' }}>
          <h3>Step by Step</h3>
          <ol>
            {product.steps.map((s, i) => (
              <li key={i}>{s}</li>
            ))}
          </ol>

          <h3>Purchase</h3>
          <button 
            className="add-to-cart-btn"
            style={{border: 'none', cursor: 'pointer',fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
    fontWeight: 700, transition: 'background-color 0.2s ease', textDecoration: 'none',
    display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
    background: 'var(--demo-accent)', color: '#fff', padding: '0.75rem 1.25rem',
    minHeight: '44px', borderRadius: '6px'  }}
            onClick={() => cart.add(product)}
            aria-label={`Add ${product.title} to cart`}
          >
            Add to cart
          </button>

          <p className="meta">
            Also available on <a href="#" aria-label="Visit seller on Etsy">Etsy</a> (placeholder)
          </p>
        </div>
      </div>
    </article>
  );
}
