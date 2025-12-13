/**
 * DemoLanding - Artisan's Haven Demo Home Page
 * 
 * Landing page for the live e-commerce demo featuring:
 * - Hero section with welcoming message and imagery
 * - Popular products showcase (top 3 items)
 * - Featured video tutorial with embedded YouTube player
 * - Newsletter subscription form
 * - Internal navigation with tooltips
 * 
 * This is the entry point when visiting /projects/artisans-haven/demo
 * 
 * Demonstrates:
 * - Product grid layout with add-to-cart functionality
 * - Form handling and state management
 * - Video embedding and responsive design
 * - Call-to-action buttons and links
 */

import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './styles/_nexora.scss';
import preview from './styles/assets/legacy-preview.png';
import NexoraNavbar from "./components/NexoraNavbar";
import Breadcrumb from '../../components/Breadcrumb';
// import { products } from "./data/products";
// import { useCart } from "./context/CartContext";

export default function DemoLanding() {
    const location = useLocation();
    const isDemo = location.pathname.includes('/demo');
    const baseRoute = isDemo ? '/projects/nexora/demo' : '/projects/nexora';

    const crumbs = isDemo
        ? [
            { label: "Home", to: `${baseRoute}/home` }
        ]
        : [
            { label: "Projects", to: "/projects" },
            { label: "Nexora Tech", to: "/projects/nexora" },
            { label: "Home" }
        ];

    return (
        <main className="nexora container nexora-home demo-mode nexora-base-theme" >
            <NexoraNavbar homeHref="/projects/nexora/demo" brandHref="/projects/nexora/demo" basePath="/projects/nexora/demo" />
            <div className="block1">
                <div className="landing-breadcrumb-wrapper">
                    <Breadcrumb items={crumbs} />
                </div>

                {/* Hero Section */}
                <section className="hero-section" aria-labelledby="hero-heading">
                    <div className="hero-content">
                        <h1 id="hero-heading">Strategic Technology Consulting for Next-Gen Growth</h1>
                        <p className="hero-subtitle">
                            Helping businesses navigate digital transformation and maximize ROI through
                            pragmatic solutions and proven methodologies.
                        </p>
                        <div className="hero-cta">
                            <Link to={`${baseRoute}/contact`} className="btn-primary CTAbutton">Start Your Consultation</Link>
                            <Link to={`${baseRoute}/services`} className="btn-secondary">View Our Services</Link>
                        </div>
                    </div>
                </section>
            </div>
            {/* Key Services Overview */}
            <section className="services-overview" aria-labelledby="services-overview-heading">
                <h2 id="services-overview-heading">What We Do</h2>
                <div className="services-grid-preview">
                    <div className="service-card">
                        <h3>Digital Transformation</h3>
                        <p>
                            Cloud migration, IoT strategy, and legacy system modernization that
                            aligns with your business objectives.
                        </p>
                    </div>

                    <div className="service-card">
                        <h3>Front-End Modernization</h3>
                        <p>
                            Component-based design systems, accessibility audits (WCAG AA), and
                            framework migrations that improve UX.
                        </p>
                    </div>

                    <div className="service-card">
                        <h3>Data & Analytics</h3>
                        <p>
                            Business intelligence, data visualization, and machine learning
                            implementation for data-driven decisions.
                        </p>
                    </div>

                    <div className="service-card">
                        <h3>Cybersecurity</h3>
                        <p>
                            Risk assessment, compliance auditing, and managed security services
                            to protect your digital assets.
                        </p>
                    </div>
                </div>
            </section>

            {/* Trust Signals */}
            <section className="trust-section" aria-labelledby="trust-heading">
                <h2 id="trust-heading">Trusted by Industry Leaders</h2>
                <div className="trust-stats">
                    <div className="stat">
                        <strong>50+</strong>
                        <span>Projects Completed</span>
                    </div>
                    <div className="stat">
                        <strong>98%</strong>
                        <span>Client Satisfaction</span>
                    </div>
                    <div className="stat">
                        <strong>$2.5M+</strong>
                        <span>Cost Savings Delivered</span>
                    </div>
                    <div className="stat">
                        <strong>15+</strong>
                        <span>Years Combined Experience</span>
                    </div>
                </div>
                <blockquote className="testimonial">
                    <p>
                        "Nexora transformed our legacy infrastructure into a modern, scalable platform.
                        The 6-month migration resulted in 40% faster load times and zero downtime."
                    </p>
                    <cite>— Sarah Chen, CTO at Aether Corp</cite>
                </blockquote>
            </section>

            {/* Value Proposition */}
            <section className="value-section" aria-labelledby="value-heading">
                <h2 id="value-heading">Why Choose Nexora?</h2>
                <div className="value-grid">
                    <div className="value-item">
                        <h3>Experienced Team</h3>
                        <p>
                            Senior consultants with 15+ years in enterprise software, certified
                            in AWS, Azure, and industry-leading frameworks.
                        </p>
                    </div>
                    <div className="value-item">
                        <h3>Proven Process</h3>
                        <p>
                            Structured methodology from discovery through implementation, with
                            regular check-ins and transparent progress tracking.
                        </p>
                    </div>
                    <div className="value-item">
                        <h3>Industry Focus</h3>
                        <p>
                            Deep expertise in healthcare, finance, e-commerce, and SaaS sectors
                            with compliance-ready solutions.
                        </p>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="cta-section block2">
                <h2>Ready to Transform Your Technology?</h2>
                <p>Schedule a free 30-minute consultation to discuss your goals and challenges.</p>
                <Link to={`${baseRoute}/contact`} className="btn-primary-large">Get Started Today</Link>
            </section>

            {/* Nexora Footer */}
            <footer className="nexora-footer">
                <div className="footer-branding">
                    <h2>Nexora Tech Consulting</h2>
                    <p>Strategic technology consulting for next-gen growth.</p>
                </div>
                <div className="footer-content">
                    <div className="footer-section">
                        <h4>Quick Links</h4>
                        <ul>
                            <li><Link to={`${baseRoute}/home`}>Home</Link></li>
                            <li><Link to={`${baseRoute}/services`}>Services</Link></li>
                            <li><Link to={`${baseRoute}/about`}>About Us</Link></li>
                            <li><Link to={`${baseRoute}/case-studies`}>Case Studies</Link></li>
                            <li><Link to={`${baseRoute}/insights`}>Insights</Link></li>
                            <li><Link to={`${baseRoute}/contact`}>Contact</Link></li>
                        </ul>
                    </div>
                    <div className="footer-section">
                        <h4>Connect</h4>
                        <ul>
                            <li><Link to={`${baseRoute}/contact`}>Contact Us</Link></li>
                            <li><a href="https://www.linkedin.com/in/aeriel-day" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                            <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
                            <li><a href="mailto:hello@nexoratech.com">hello@nexoratech.com</a></li>
                        </ul>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>© {new Date().getFullYear()} Nexora Tech Consulting. All rights reserved.</p>
                    <div className="footer-links">
                        <Link to={`${baseRoute}/privacy`}>Privacy Policy</Link> {' '}
                        <Link to={`${baseRoute}/terms`}>Terms of Service</Link> {' '}
                        <Link to={`${baseRoute}/sitemap`}>Sitemap</Link>
                    </div>
                    <p className="demo-note">This is a portfolio demonstration project by Aeriel Day.</p>
                </div>
            </footer>
        </main>
    );
}
