/**
 * ProjectLayout - Base Wrapper for Artisan's Haven (Non-Demo Pages)
 * 
 * Provides layout for project overview and direct feature access:
 * - Shows AHNavbar on pages that aren't the project home or demo
 * - Wraps content in CartProvider for shopping cart functionality
 * - Allows breadcrumb navigation through project structure
 * 
 * Used for:
 * - /projects/artisans-haven (home - no nav shown)
 * - /projects/artisans-haven/products (nav shown)
 * - /projects/artisans-haven/blog (nav shown)
 * - etc.
 * 
 * NOT used for /projects/artisans-haven/demo/* routes
 * (those use DemoLayout instead)
 */

import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import AHNavbar from "./components/AHNavbar";
import { CartProvider } from "./context/CartContext";

export default function ProjectLayout() {
    const location = useLocation();
    const isDemo = location.pathname.startsWith("/projects/artisans-haven/demo");
    const isProjectHome = location.pathname === "/projects/artisans-haven";

    return (
        <CartProvider>
            <div className="ah-layout">
                {/* Show nav on feature pages but not on project home or demo pages */}
                {!isDemo && !isProjectHome && <AHNavbar />}
                <main style={{ padding: "1rem" }}>
                    <Outlet />
                </main>
            </div>
        </CartProvider>
    );
}
