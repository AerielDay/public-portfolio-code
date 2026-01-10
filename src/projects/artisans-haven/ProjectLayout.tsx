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

import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
//import AHNavbar from "./components/AHNavbar";
import { CartProvider } from "./context/CartContext";
import { useDemoMode } from "../../contexts/DemoModeContext";

export default function ProjectLayout() {
    const location = useLocation();
    const { isDemo, setIsDemo } = useDemoMode();
    const isProjectHome = location.pathname === "/projects/artisans-haven";

    useEffect(() => {
        setIsDemo(location.pathname.startsWith("/projects/artisans-haven/demo"));
    }, [location.pathname, setIsDemo]);

    return (
        <CartProvider>
            <div className={`ah-layout ${isDemo ? 'demo-landing' : ''}`}
            style={{ background: 'transparent' }}>
                {/* Show nav on feature pages but not on project home or demo pages */}
                {/* {!isDemo && !isProjectHome && <AHNavbar />} */}
                <main className="demoLand-main">
                    <Outlet />
                </main>
            </div>
        </CartProvider>
    );
}
