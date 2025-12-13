/**
 * ProductList - Product Catalog Page
 * 
 * Displays all available products in a grid layout:
 * - Product cards with images, titles, prices, excerpts
 * - Add to cart buttons on each card
 * - Breadcrumb navigation
 * - Responsive grid (adapts to mobile/tablet/desktop)
 * 
 * Route-aware:
 * - Detects demo vs project mode from URL
 * - Adjusts breadcrumb paths accordingly
 * - Links to individual ProductDetail pages
 * 
 * Demonstrates:
 * - Product data mapping and display
 * - Shopping cart integration
 * - Responsive CSS Grid layout
 */

import React from "react";
import { Link, useLocation } from "react-router-dom";
import { products } from "./data/products";
import { useCart } from "./context/CartContext";
import "./_artisans.scss";
import Breadcrumb from "../../components/Breadcrumb";

export default function ProductList() {
  const location = useLocation();
  const { add } = useCart();

  const isDemo = location.pathname.includes('/demo');
  const baseRoute = isDemo ? '/projects/artisans-haven/demo' : '/projects/artisans-haven';

  const crumbs = isDemo
    ? [
      { label: "Home", to: baseRoute },
      { label: "Products" }
    ]
    : [
      { label: "Projects", to: "/projects" },
      { label: "Artisans Haven", to: "/projects/artisans-haven" },
      { label: "Products" }
    ];

  return (
    <section className="artisan-products">
      <Breadcrumb items={crumbs} />
      <h1 className="page-title">Shop Handmade Goods</h1>

      <div className="product-grid">
        {products.map((product) => (
          <Link
            key={product.id}
            to={product.slug}
            className="product-card"
          >
            <div className="product-image-wrapper">
              {product.image ? (
                <img
                  src={product.image}
                  alt={product.title}
                  className="product-image"
                />
              ) : (
                <div className="placeholder-image">
                  No Image Available
                </div>
              )}
            </div>

            <div className="product-info">
              <h2 className="product-name">{product.title}</h2>
              <p className="product-price">${product.price}</p>
              <p className="product-excerpt">{product.excerpt}</p>
              <button
                className="add-to-cart-btn"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  add(product);
                }}
                aria-label={`Add ${product.title} to cart`}
              >
                Add to Cart
              </button>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
