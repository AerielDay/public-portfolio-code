import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/_navbar.scss";

const PROJECTS = [
    { label: "Artisans Haven", href: "/projects/artisans-haven" },
    { label: "Nexora Tech Consulting", href: "/projects/nexora" },
    // { label: "Taskflow", href: "/projects/taskflow" }, // Hidden
];

export const Navbar: React.FC = () => {
    const navigate = useNavigate();
    const [projectsOpen, setProjectsOpen] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const hoverTimeoutRef = useRef<number | null>(null);
    const dropdownRef = useRef<HTMLDivElement | null>(null);
    const navRef = useRef<HTMLElement | null>(null);

    // Clear timeouts on unmount
    useEffect(() => {
        return () => {
            if (hoverTimeoutRef.current) window.clearTimeout(hoverTimeoutRef.current);
        };
    }, []);

    // Close on outside click
    useEffect(() => {
        function onDocClick(e: MouseEvent) {
            // Check if click is outside the entire navbar
            if (navRef.current && !navRef.current.contains(e.target as Node)) {
                setMobileOpen(false);
                setProjectsOpen(false);
                return;
            }

            // Check if click is outside dropdown (for desktop)
            if (!dropdownRef.current) return;
            if (!dropdownRef.current.contains(e.target as Node)) {
                setProjectsOpen(false);
            }
        }
        document.addEventListener("mousedown", onDocClick);
        return () => document.removeEventListener("mousedown", onDocClick);
    }, []);

    // Close with Escape key
    useEffect(() => {
        function onKey(e: KeyboardEvent) {
            if (e.key === "Escape") {
                setProjectsOpen(false);
                setMobileOpen(false);
            }
        }
        document.addEventListener("keydown", onKey);
        return () => document.removeEventListener("keydown", onKey);
    }, []);

    // Hover handlers with 200ms delay
    function handleProjectsMouseEnter() {
        if (hoverTimeoutRef.current) window.clearTimeout(hoverTimeoutRef.current);
        hoverTimeoutRef.current = window.setTimeout(() => setProjectsOpen(true), 200);
    }

    function handleProjectsMouseLeave() {
        if (hoverTimeoutRef.current) window.clearTimeout(hoverTimeoutRef.current);
        setProjectsOpen(false);
    }

    // Keyboard toggle for Projects button (Enter/Space)
    function handleProjectsKeyDown(e: React.KeyboardEvent) {
        if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            // If already open, navigate to /projects; else open
            if (projectsOpen) {
                navigate("/projects");
            } else {
                setProjectsOpen(true);
            }
        }
        // Allow arrow navigation into menu
        if (e.key === "ArrowDown") {
            e.preventDefault();
            setProjectsOpen(true);
            const first = dropdownRef.current?.querySelector<HTMLAnchorElement>(
                ".dropdown-list a"
            );
            first?.focus();
        }
    }

    // Mobile menu toggle (hamburger)
    function toggleMobile() {
        setMobileOpen((s) => !s);
        // close dropdown when opening mobile menu
        if (!mobileOpen) setProjectsOpen(false);
    }

    return (
        <>
            {/* Skip link for keyboard users */}
            <a className="skip-link" href="#main-content">
                Skip to content
            </a>

            <nav className="navbar" aria-label="Main navigation" ref={navRef}>
                <div className="navbar-inner">
                    <div className="navbar-left">
                        <Link className="brand-link" to="/" aria-current="page">
                            <span className="brand-name">Aeriel Day — Front-End Developer</span>
                        </Link>
                    </div>

                    <button
                        className="hamburger"
                        aria-label={mobileOpen ? "Close menu" : "Open menu"}
                        aria-expanded={mobileOpen}
                        aria-controls="primary-navigation"
                        onClick={toggleMobile}
                    >
                        <span className="hamburger-box">
                            <span className="hamburger-inner" />
                        </span>
                    </button>

                    <div
                        id="primary-navigation"
                        className={`navbar-right ${mobileOpen ? "open" : ""}`}
                    >
                        <Link className="nav-btn" to="/">
                            Home
                        </Link>

                        {/* <div
                            className="nav-dropdown"
                            ref={dropdownRef}
                            onMouseEnter={handleProjectsMouseEnter}
                            onMouseLeave={handleProjectsMouseLeave}
                        >
                            <button
                                className="nav-btn nav-btn--toggle"
                                aria-haspopup="true"
                                aria-expanded={projectsOpen}
                                aria-controls="projects-menu"
                                onClick={() => setProjectsOpen((s) => !s)}
                                onKeyDown={handleProjectsKeyDown}
                            >
                                Projects
                                <span className="chev" aria-hidden="true">
                                    ▾
                                </span>
                            </button>

                            <ul
                                id="projects-menu"
                                className={`dropdown-list ${projectsOpen ? "visible" : ""}`}
                                role="menu"
                                aria-label="Projects"
                            >
                                {PROJECTS.map((p) => (
                                    <li key={p.href} role="none">
                                        <a
                                            role="menuitem"
                                            tabIndex={projectsOpen ? 0 : -1}
                                            href={p.href}
                                            onKeyDown={(e) => {
                                                if (e.key === "ArrowDown") {
                                                    e.preventDefault();
                                                    const next = (e.currentTarget.parentElement?.nextElementSibling
                                                        ?.querySelector("a") as HTMLAnchorElement) || null;
                                                    next?.focus();
                                                } else if (e.key === "ArrowUp") {
                                                    e.preventDefault();
                                                    const prev = (e.currentTarget.parentElement?.previousElementSibling
                                                        ?.querySelector("a") as HTMLAnchorElement) || null;
                                                    prev?.focus();
                                                } else if (e.key === "Escape") {
                                                    setProjectsOpen(false);
                                                    (dropdownRef.current?.querySelector(".nav-btn--toggle") as HTMLButtonElement)
                                                        ?.focus();
                                                }
                                            }}
                                        >
                                            {p.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div> */}

                        <div
                            className="nav-dropdown"
                            ref={dropdownRef}
                            // handles both button + list area (desktop only)
                            onMouseEnter={() => {
                                if (window.innerWidth <= 820) return; // Skip on mobile
                                if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
                                hoverTimeoutRef.current = window.setTimeout(() => setProjectsOpen(true), 200);
                            }}
                            onMouseLeave={() => {
                                if (window.innerWidth <= 820) return; // Skip on mobile
                                if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
                                hoverTimeoutRef.current = window.setTimeout(() => setProjectsOpen(false), 200);
                            }}
                        >
                            <button
                                className="nav-btn nav-btn--toggle"
                                aria-haspopup="true"
                                aria-expanded={projectsOpen}
                                aria-controls="projects-menu"
                                onClick={() => {
                                    // If already open, treat click as navigation to /projects (hash-aware)
                                    if (projectsOpen) {
                                        navigate("/projects");
                                    } else {
                                        setProjectsOpen(true);
                                    }
                                }}
                                onKeyDown={handleProjectsKeyDown}
                            >
                                Projects
                                <span className="chev" aria-hidden="true">▾</span>
                            </button>

                            <ul
                                id="projects-menu"
                                className={`dropdown-list ${projectsOpen ? "visible" : ""}`}
                                role="menu"
                                aria-label="Projects"
                            >
                                {PROJECTS.map((p) => (
                                    <li key={p.href} role="none">
                                        <Link
                                            role="menuitem"
                                            tabIndex={projectsOpen ? 0 : -1}
                                            to={p.href}
                                        >
                                            {p.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>


                        {/* <a role="menuitem" className="nav-btn" href="/about">
                            About
                        </a>
                        <a role="menuitem" className="nav-btn" href="/contact">
                            Contact
                        </a> */}
                    </div>
                </div>
            </nav>
        </>
    );
};
export default Navbar;
