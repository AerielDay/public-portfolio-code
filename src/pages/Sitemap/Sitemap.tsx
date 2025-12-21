/**
 * Sitemap Component - Human-Readable Site Navigation
 * 
 * Provides a comprehensive view of all pages in the portfolio:
 * - Main portfolio pages
 * - All project pages and sub-routes
 * - Organized by section for easy navigation
 * 
 * Accessible from main navigation or footer.
 * Helps users and search engines understand site structure.
 */

import React from "react";
import { Link } from "react-router-dom";

export default function Sitemap() {
    return (
        <div className="sitemap-page" style={{ padding: "2rem", maxWidth: "1200px", margin: "0 auto" }}>
            <div style={{
                background: "#D4E8E8",
                padding: "2rem",
                borderRadius: "8px",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                color: "#0E3D59"
            }}>
                <h1 style={{ color: "#D95E32", marginTop: 0 }}>Sitemap</h1>
                <p style={{ color: "#732D46" }}>Complete navigation guide for this portfolio</p>

                <section style={{ marginTop: "2rem" }}>
                    <h2 style={{ color: "#D95E32" }}>Main Pages</h2>
                    <ul style={{ color: "#0E3D59" }}>
                        <li><Link to="/" style={{ color: "#124673" }}>Home</Link> - Portfolio landing page</li>
                        <li><Link to="/projects" style={{ color: "#124673" }}>Projects</Link> - All portfolio projects</li>
                    </ul>
                </section>

                <section style={{ marginTop: "2rem" }}>
                    <h2 style={{ color: "#D95E32" }}>Portfolio Projects</h2>
                    <h3 style={{ marginTop: "1.5rem", color: "#D95E32" }}>Artisan's Haven</h3>
                    <p style={{ color: "#732D46" }}>E-commerce marketplace for handmade crafts</p>
                    <ul style={{ color: "#0E3D59" }}>
                        <li><Link to="/projects/artisans-haven" style={{ color: "#124673" }}>Project Overview</Link> - Technical details and features</li>
                        <li><Link to="/projects/artisans-haven/demo" style={{ color: "#124673" }}>Live Demo Home</Link> - Interactive demo experience</li>
                        <li><Link to="/projects/artisans-haven/demo/products" style={{ color: "#124673" }}>Products</Link> - Browse handmade items</li>
                        <li><Link to="/projects/artisans-haven/demo/blog" style={{ color: "#124673" }}>Blog</Link> - Articles and guides</li>
                        <li><Link to="/projects/artisans-haven/demo/videos" style={{ color: "#124673" }}>Videos</Link> - Tutorial videos</li>
                    </ul>

                    <h3 style={{ marginTop: "1.5rem", color: "#D95E32" }}>Nexora Tech Consulting</h3>
                    <p style={{ color: "#732D46" }}>Professional consulting website</p>
                    <ul style={{ color: "#0E3D59" }}>
                        <li><Link to="/projects/nexora" style={{ color: "#124673" }}>Project Overview</Link> - Technical details and features</li>
                        <li><Link to="/projects/nexora/demo/home" style={{ color: "#124673" }}>Live Demo Home</Link> - Interactive demo experience</li>
                        <li><Link to="/projects/nexora/demo/services" style={{ color: "#124673" }}>Services</Link> - Service offerings and details</li>
                        <li><Link to="/projects/nexora/demo/about" style={{ color: "#124673" }}>About</Link> - Company story and team</li>
                        <li><Link to="/projects/nexora/demo/case-studies" style={{ color: "#124673" }}>Case Studies</Link> - Client success stories</li>
                        <li><Link to="/projects/nexora/demo/insights" style={{ color: "#124673" }}>Insights</Link> - Blog and thought leadership</li>
                        <li><Link to="/projects/nexora/demo/contact" style={{ color: "#124673" }}>Contact</Link> - Contact form</li>
                    </ul>

                    {/* <h3 style={{ marginTop: "1.5rem", color: "#D95E32" }}>TaskFlow</h3>
                    <p style={{ color: "#732D46" }}>Task management application</p>
                    <ul style={{ color: "#0E3D59" }}>
                        <li><Link to="/projects/taskflow" style={{ color: "#124673" }}>TaskFlow App</Link> - Interactive task manager demo</li>
                    </ul>
                    <ul style={{ color: "#0E3D59" }}>
                        <li><Link to="/projects/artisans-haven" style={{ color: "#124673" }}>Artisan's Haven</Link> - E-commerce marketplace project</li>
                        <li><Link to="/projects/nexora" style={{ color: "#124673" }}>Nexora Tech Consulting</Link> - Consulting website project</li>
                    </ul> */}
                </section>

                <section style={{ marginTop: "2rem" }}>
                    <h2 style={{ color: "#D95E32" }}>Resources</h2>
                    <ul style={{ color: "#0E3D59" }}>
                        <li><a href="/sitemap.xml" target="_blank" rel="noopener noreferrer" style={{ color: "#124673" }}>XML Sitemap</a> - Machine-readable sitemap for search engines</li>
                    </ul>
                </section>
            </div>
        </div>
    );
}
