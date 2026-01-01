/**
 * App Component - Main Application Structure
 * 
 * Handles top-level routing and layout structure:
 * - Site header with main navigation
 * - Main content area with React Router
 * - Site footer with copyright
 * 
 * Routes:
 * - "/" - Home page (portfolio landing)
 * - "/projects/*" - Project showcase with nested routes
 * 
 * The Navbar component handles navigation between sections.
 * ProjectsIndex handles all nested project routes.
 */

import React, { useEffect } from "react";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import Home from "./pages/Home/Home";
import ProjectsIndex from "./pages/Projects/ProjectsIndex";
import Sitemap from "./pages/Sitemap/Sitemap";
import Navbar from "./components/Navbar";
// import Contact from './pages/contact/contact'; // Contact page import removed

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <div className="app-root">
      <ScrollToTop />
      <header className="site-header">
        <nav aria-label="Main navigation" className="siteNav">
          <Navbar />
        </nav>
      </header>

      <main id="maincontent">
        <Routes>
          <Route path="/" element={<Home />} />

          {/* All project routes handled by ProjectsIndex with nested routing */}
          <Route path="/projects/*" element={<ProjectsIndex />} />

          {/* Sitemap page for human navigation */}
          <Route path="/sitemap" element={<Sitemap />} />

          {/* Contact page route removed */}
          {/* <Route path="/contact" element={<Contact />} /> */}
        </Routes>
      </main>

      <footer style={{ padding: "1.25rem", textAlign: "center", borderTop: "1px solid #e0e0e0" }}>
        <div style={{ marginBottom: "0.5rem" }}>
          <Link
            to="/sitemap"
            style={{ marginRight: "1rem", color: "#D95E32", textDecoration: "none" }}
            onMouseEnter={(e) => e.currentTarget.style.textDecoration = "underline"}
            onMouseLeave={(e) => e.currentTarget.style.textDecoration = "none"}
          >
            Sitemap
          </Link>
          <a
            href="/sitemap.xml"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#D95E32", textDecoration: "none" }}
            onMouseEnter={(e) => e.currentTarget.style.textDecoration = "underline"}
            onMouseLeave={(e) => e.currentTarget.style.textDecoration = "none"}
          >
            XML Sitemap
          </a>
        </div>
        <div style={{ color: "#D6EFFF" }}>
          © {new Date().getFullYear()} Aeriel Day
        </div>
      </footer>
    </div>
  );
}
