/**
 * NexoraDemoLayout - Wrapper for Nexora Live Demo
 * 
 * Provides consistent layout for all Nexora demo pages:
 * - Project header with "Return to Project Details" link
 * - Demo navigation bar (hidden on landing page)
 * - Content area (React Router Outlet)
 * - Content disclaimer footer
 * 
 * The demo theme (.nexora-landing class) applies special styling
 * to create an immersive SaaS experience separate from
 * the portfolio site's main design.
 * 
 * Navigation:
 * - Conditionally shows NexoraNavbar on all pages except landing
 * - Sets basePath to /projects/nexora/demo for proper routing
 */

import React from "react";
import { Outlet, Link } from "react-router-dom";
import NexoraNavbar from "./components/NexoraNavbar";
import "./styles/_nexora.scss";

export default function NexoraDemoLayout() {
    // Always render the demo navbar and apply `demo-mode` at the root so styles
    // can be safely scoped to demo pages only (prevents leakage to non-demo pages).
    return (
        <main className="nexora nexora-landing demo-mode" aria-labelledby="nexora-heading">
            <header className="nexora-project-header">
                <p className="project-name">Project: Nexora Live Demo</p>
                <Link to="/projects/nexora" className="return-btn">
                    Return to Project Details
                </Link>
            </header>

            {/* Demo Navigation - show on landing and all demo pages */}
            <div className="demo-internal-nav" aria-label="Site sections">
                <NexoraNavbar homeHref="/projects/nexora/demo/home" brandHref="/projects/nexora/demo/home" basePath="/projects/nexora/demo" />
            </div>

            {/* Page content rendered here */}
            <Outlet />
        </main>
    );
}
