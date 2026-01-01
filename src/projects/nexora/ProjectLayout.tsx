import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import NexoraNavbar from "./components/NexoraNavbar";
import { useDemoMode } from "../../contexts/DemoModeContext";

export default function ProjectLayout() {
    const location = useLocation();
    const { isDemo, setIsDemo } = useDemoMode();
    const isProjectHome = location.pathname === "/projects/nexora" || location.pathname === "/projects/nexora/";

    useEffect(() => {
        setIsDemo(location.pathname.startsWith("/projects/nexora/demo"));
    }, [location.pathname, setIsDemo]);

    return (
        <div className={`nexora-project-layout ${isDemo ? 'demo-landing' : ''}`}>
            {/* Show internal demo/project navbar only on feature pages (not on demo wrapper or project details) */}
            {!isDemo && !isProjectHome && (
                <header>
                    {/* <NexoraNavbar /> */}
                </header>
            )}

            <main>
                <Outlet />
            </main>
        </div>
    );
}
