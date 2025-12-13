import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import NexoraNavbar from "./components/NexoraNavbar";

export default function ProjectLayout() {
    const location = useLocation();
    const isDemo = location.pathname.startsWith("/projects/nexora/demo");
    const isProjectHome = location.pathname === "/projects/nexora" || location.pathname === "/projects/nexora/";

    return (
        <div className="nexora-project-layout">
            {/* Show internal demo/project navbar only on feature pages (not on demo wrapper or project details) */}
            {!isDemo && !isProjectHome && (
                <header>
                    <NexoraNavbar />
                </header>
            )}

            <main style={{ padding: "1rem" }}>
                <Outlet />
            </main>
        </div>
    );
}
