/**
 * AHSitemap Component - Artisan's Haven Demo Sitemap
 * 
 * Human-readable site navigation for the Artisan's Haven demo only.
 * Shows all available pages within the demo experience.
 */

import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function AHSitemap() {
    const location = useLocation();

    return (
        <div className="ah-sitemap-page">
            <h1>Artisan's Haven Demo - Sitemap</h1>
            <p>Complete navigation guide for this e-commerce demo</p>

            <section>
                <h2>Demo Pages</h2>
                <ul>
                    <li><Link to="/projects/artisans-haven/demo" className={location.pathname === '/projects/artisans-haven/demo' ? 'active' : ''}>Demo Home</Link> - Landing page with featured products</li>
                    <li><Link to="/projects/artisans-haven/demo/products" className={location.pathname.includes('/products') ? 'active' : ''}>Products</Link> - Browse all handmade items</li>
                    <li><Link to="/projects/artisans-haven/demo/blog" className={location.pathname.includes('/blog') ? 'active' : ''}>Blog</Link> - Articles and guides</li>
                    <li><Link to="/projects/artisans-haven/demo/videos" className={location.pathname.includes('/videos') ? 'active' : ''}>Videos</Link> - Tutorial videos</li>
                    <li><Link to="/projects/artisans-haven/demo/checkout" className={location.pathname.includes('/checkout') ? 'active' : ''}>Checkout</Link> - Order checkout (requires items in cart)</li>
                </ul>
            </section>

            <section>
                <h2>Back to Portfolio</h2>
                <ul>
                    <li><Link to="/projects/artisans-haven">Project Overview</Link> - View technical details and mockups</li>
                    <li><Link to="/">Portfolio Home</Link> - Return to main portfolio</li>
                </ul>
            </section>
        </div>
    );
}
