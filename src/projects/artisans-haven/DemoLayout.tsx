/**
 * DemoLayout - Wrapper for Artisan's Haven Live Demo
 * 
 * Provides consistent layout for all demo pages:
 * - Project header with "Return to Project Details" link
 * - Demo navigation bar (hidden on landing page)
 * - Content area (React Router Outlet)
 * - Content disclaimer footer
 * 
 * The demo theme (.demo-landing class) applies special styling
 * to create an immersive e-commerce experience separate from
 * the portfolio site's main design.
 * 
 * Navigation:
 * - Conditionally shows AHNavbar on all pages except landing
 * - Sets basePath to /projects/artisans-haven/demo for proper routing
 */

import React from "react";
import { Outlet, useLocation, Link } from "react-router-dom";
import AHNavbar from "./components/AHNavbar";
import "./_artisans.scss";

export default function DemoLayout() {
    const location = useLocation();
    const isLanding = location.pathname === "/projects/artisans-haven/demo";

    return (
        <section className="artisan-haven demo-landing">
            {/* Project Header - Shows context that this is a demo */}
            <header className="demo-project-header">
                <p className="project-name">Project: Artisan's Haven Live Demo</p>
                <Link to="/projects/artisans-haven" className="return-btn">
                    Return to Project Details
                </Link>
            </header>

            {/* Demo Navigation - Hidden on landing page, shown on all other demo pages */}
            {!isLanding && (
                <div className="demo-internal-nav" aria-label="Site sections">
                    <AHNavbar homeHref="/projects/artisans-haven/demo" brandHref="/projects/artisans-haven/demo" basePath="/projects/artisans-haven/demo" />
                </div>
            )}

            {/* Page content rendered here */}
            <Outlet />

            {/* Global Disclaimer for Demo Content */}
            <footer className="demo-disclaimer">
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1rem" }}>
                    <p style={{ margin: 0, textAlign: "center" }}>
                        <strong>Content Disclaimer:</strong> All images and videos displayed in this demo are used for educational
                        and portfolio demonstration purposes only. I do not own the rights to this content and it will not be used
                        for commercial purposes or distribution. All rights belong to their respective original content creators.
                    </p>
                    <div style={{ display: "flex", gap: "1rem", alignItems: "center", fontSize: "0.85rem" }}>
                        <Link
                            to="/projects/artisans-haven/demo/sitemap"
                            className="demo-sitemap-link"
                        >
                            Demo Sitemap
                        </Link>
                    </div>
                </div>
            </footer>
        </section>
    );
}
