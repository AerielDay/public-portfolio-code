import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { Link, useLocation } from "react-router-dom";
import "../styles/_nexora.scss";

/**
 * NexoraNavbar - Internal navigation for Nexora demo pages
 * Features responsive overflow menu for mobile
 * Props:
 * - homeHref: string (link to demo landing)
 * - brandHref: string (link to demo landing)
 * - basePath: string (base route for demo pages)
 */
export default function NexoraNavbar({ homeHref, brandHref, basePath }: {
    homeHref: string;
    brandHref: string;
    basePath: any;
}) {
    const location = useLocation();
    const [isOverflowMenuOpen, setIsOverflowMenuOpen] = useState(false);
    const overflowRef = useRef<HTMLDivElement>(null);

    // All nav links
    const allLinks = [
        { label: "Home", to: `${basePath}/home` },
        { label: "Services", to: `${basePath}/services` },
        { label: "About", to: `${basePath}/about` },
        { label: "Case Studies", to: `${basePath}/caseStudies` },
        { label: "Insights", to: `${basePath}/insights` },
        { label: "Contact", to: `${basePath}/contact` },
    ];

    // Priority items always visible on mobile
    const priorityLinks = [
        { label: "Home", to: `${basePath}/home` },
        { label: "Services", to: `${basePath}/services` },
        { label: "Contact", to: `${basePath}/contact` },
    ];

    // Overflow items (hidden in ellipsis menu on mobile)
    const overflowLinks = [
        { label: "About", to: `${basePath}/about` },
        { label: "Case Studies", to: `${basePath}/caseStudies` },
        { label: "Insights", to: `${basePath}/insights` },
    ];

    // Close menu when clicking outside
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (overflowRef.current && !overflowRef.current.contains(event.target as Node)) {
                setIsOverflowMenuOpen(false);
            }
        }

        if (isOverflowMenuOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOverflowMenuOpen]);

    // Close menu when route changes
    useEffect(() => {
        setIsOverflowMenuOpen(false);
    }, [location.pathname]);

    return (
        <nav className="nexora-navbar" aria-label="Nexora demo navigation">
            <div className="navbar-brand">
                {/* Logo placeholder - will be replaced when logo is chosen */}
                <Link to={`${basePath}/home`} className="brand-link">
                    <span className="brand-text">Nexora</span>
                </Link>
            </div>

            {/* Desktop: Show all links horizontally */}
            <ul className="navbar-links all-links">
                {allLinks.map(link => (
                    <li key={link.to} className={location.pathname === link.to ? "active" : ""}>
                        <Link to={link.to}>{link.label}</Link>
                    </li>
                ))}
            </ul>

            {/* Mobile: Show priority links only */}
            <ul className="navbar-links priority-links">
                {priorityLinks.map(link => (
                    <li key={link.to} className={location.pathname === link.to ? "active" : ""}>
                        <Link to={link.to}>{link.label}</Link>
                    </li>
                ))}
            </ul>

            {/* Mobile: Overflow menu */}
            <div className="navbar-overflow" ref={overflowRef}>
                <button
                    className="overflow-toggle"
                    onClick={() => setIsOverflowMenuOpen(!isOverflowMenuOpen)}
                    aria-expanded={isOverflowMenuOpen}
                    aria-controls="nexora-overflow-menu"
                    aria-label="More menu items"
                >
                    ⋯
                </button>

                {isOverflowMenuOpen && (
                    <ul className="overflow-menu" id="nexora-overflow-menu">
                        {overflowLinks.map(link => (
                            <li key={link.to} className={location.pathname === link.to ? "active" : ""}>
                                <Link to={link.to}>{link.label}</Link>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </nav>
    );
}
