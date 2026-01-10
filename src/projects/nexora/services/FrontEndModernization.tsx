
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Breadcrumb from '../../../components/Breadcrumb';
import '../styles/_nexora.scss';

export default function FrontEndModernization() {
    const location = useLocation();
    const isDemo = location.pathname.includes('/demo');
    const baseRoute = isDemo ? '/projects/nexora/demo' : '/projects/nexora';

    const crumbs = isDemo
        ? [
            { label: 'Home', to: `${baseRoute}/home` },
            { label: 'Services', to: `${baseRoute}/services` },
            { label: 'Front-End Modernization' }
        ]
        : [
            { label: 'Projects', to: '/projects' },
            { label: 'Nexora Tech', to: '/projects/nexora' },
            { label: 'Services', to: '/projects/nexora/services' },
            { label: 'Front-End Modernization' }
        ];

    return (
        <main className="nexora container service-detail-page nexora-base-theme">
            <div className={isDemo ? 'block1' : undefined}>
                <div className="landing-breadcrumb-wrapper">
                    <Breadcrumb items={crumbs} />
                </div>
                <header className="service-detail-header">
                    <h1>Front-End Modernization</h1>
                    <p className="service-tagline">
                        Transform outdated interfaces into modern, accessible, and high-performance experiences that users love and developers enjoy maintaining.
                    </p>
                </header>

                <section className="service-overview">
                    <h2>What We Deliver</h2>
                    <p>
                        Legacy front-end frameworks slow down development, frustrate users, and make recruiting difficult. We specialize
                        in incremental migrations to React, Vue, or Angular—establishing component libraries, design systems, and testing
                        strategies that ensure your UI stays maintainable as your product evolves.
                    </p>
                </section>
            </div>
            <section className="service-highlights block2">
                <h2>Key Services</h2>
                <div className="highlights-grid">
                    <div className="highlight-card">
                        <h3>Framework Migration</h3>
                        <p>
                            Phased transitions from AngularJS, Backbone, or jQuery to modern React, Vue, or Svelte. Zero-downtime
                            strategies that allow continuous feature delivery during migration.
                        </p>
                    </div>
                    <div className="highlight-card">
                        <h3>Component Library & Design Systems</h3>
                        <p>
                            Reusable, documented component libraries built with Storybook or similar tools. Ensure consistency
                            across teams and accelerate development with pre-built, tested components.
                        </p>
                    </div>
                    <div className="highlight-card">
                        <h3>WCAG AA Accessibility Audits</h3>
                        <p>
                            Comprehensive accessibility reviews covering keyboard navigation, screen reader compatibility, color contrast,
                            and ARIA implementation. Achieve WCAG 2.2 Level AA compliance and expand your addressable market.
                        </p>
                    </div>
                    <div className="highlight-card">
                        <h3>Performance Optimization</h3>
                        <p>
                            Lighthouse audits, lazy loading strategies, code splitting, and caching optimizations that improve Core Web
                            Vitals and conversion rates. Typical improvements: 40%+ faster load times.
                        </p>
                    </div>
                </div>
            </section>

            <section className="service-details block3">
                <h2>About Front-End Modernization</h2>
                <h3>From Legacy UI to High-Performance Experience</h3>
                <p>
                    Front-End Modernization at Nexora focuses on converting outdated,
                    legacy user interfaces into highly maintainable, universally accessible,
                    and high-performance digital experiences. We move beyond simple aesthetic
                    updates by prioritizing the implementation of robust, component-driven
                    design systems which act as the single source of truth for your entire
                    application portfolio. Furthermore, we integrate sophisticated automated
                    testing and embed WCAG AA accessibility patterns from the start, ensuring
                    the resulting user interface is resilient and scales seamlessly with all
                    future product needs. This ensures your customers get a modern, fast
                    experience, and your development teams gain a stable, productive foundation.
                </p>
                <h3>Our Specialized Experience and Methodology</h3>
                <p>
                    Nexora has successfully supported large-scale front-end modernization
                    efforts for a broad range of enterprise clients for over 6 years,
                    consistently delivering measurable improvements in both performance and
                    developer productivity. Our specialized methodology centers on establishing
                    a Storybook-driven component library, which accelerates development,
                    enforces consistency, and drastically reduces the cost of maintaining
                    multiple codebases. This dedicated expertise in modern UI architectures
                    has earned us recognition, including the prestigious "Design System Partner
                    Award," validating our commitment to scalable and reusable code practices.
                    Our history confirms we are experts in transforming monolithic UIs into
                    flexible, future-proof applications.
                </p>
                <h3>Measurable Outcomes and Accountability</h3>
                <p>
                    We believe that modernization must be tied to tangible business outcomes,
                    which is why we rigorously measure success beyond just code delivery.
                    Success is tracked through essential performance metrics, including
                    Largest Contentful Paint (LCP) and First Input Delay (FID), alongside
                    official accessibility scores and quantitative improvements in developer
                    velocity. Our teams fully instrument applications to continuously track
                    these critical Key Performance Indicators (KPIs) against pre-defined
                    benchmarks. This data-driven approach ensures that every phase of our
                    front-end modernization delivers verifiable, tangible outcomes that
                    improve user experience and boost team efficiency.
                </p>
                <ul className="service-meta">
                    <li><strong>Years delivering:</strong> 6+ years</li>
                    <li><strong>Recognition:</strong> Design System Partner Award</li>
                    <li><strong>Key Focus:</strong> WCAG AA Accessibility, Storybook-Driven Component Libraries</li>
                </ul>



                <div className="modern-cta">
                    <h2>Ready to Upgrade Your UI?</h2>
                    <p>
                        Let's evaluate your current front-end stack and design a migration plan that delivers immediate UX improvements without disrupting users.
                    </p>
                
                <div className="services-more">
                    <Link to={`${baseRoute}/contact`} className="btn-primary-large">
                        Request an Audit
                    </Link>
                </div>
                </div>
                {/* <Link to="/projects/nexora/demo/contact" className="btn-primary-large">
                    Request an Audit
                </Link> */}
            </section>
            <footer className="nexora-footer" >
                <div className="footer-branding">
                    <h2>Nexora Tech Consulting</h2>
                    <p>Strategic technology consulting for next-gen growth.</p>
                </div>
                <div className="footer-content">
                    <div className="footer-section">
                        <h4>Quick Links</h4>
                        <ul>
                            <li><Link to="/projects/nexora/demo/home">Home</Link></li>
                            <li><Link to="/projects/nexora/demo/services">Services</Link></li>
                            <li><Link to="/projects/nexora/demo/about">About Us</Link></li>
                            <li><Link to="/projects/nexora/demo/case-studies">Case Studies</Link></li>
                            <li><Link to="/projects/nexora/demo/insights">Insights</Link></li>
                            <li><Link to="/projects/nexora/demo/contact">Contact</Link></li>
                        </ul>
                    </div>
                    <div className="footer-section">
                        <h4>Connect</h4>
                        <ul>
                            <li><Link to="/projects/nexora/demo/contact">Contact Us</Link></li>
                            <li><a href="https://www.linkedin.com/in/aeriel-day" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                            <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
                            <li><a href="mailto:hello@nexoratech.com">hello@nexoratech.com</a></li>
                        </ul>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>© {new Date().getFullYear()} Nexora Tech Consulting. All rights reserved.</p>
                    <div className="footer-links">
                        <Link to="/projects/nexora/demo/privacy">Privacy Policy</Link> {' '}
                        <Link to="/projects/nexora/demo/terms">Terms of Service</Link> {' '}
                        <Link to="/projects/nexora/demo/sitemap">Sitemap</Link>
                    </div>
                    <p className="demo-note"><strong>Content Disclaimer:</strong> All content displayed in this demo are used for portfolio demonstration purposes only. I do not own the rights to this content and it will not be used for commercial purposes or distribution. All rights belong to their respective original content creators.</p>
                </div>

            </footer>
        </main>
    );
}
