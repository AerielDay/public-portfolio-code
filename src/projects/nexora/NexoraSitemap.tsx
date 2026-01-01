import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './styles/_nexora.scss';
import Breadcrumb from '../../components/Breadcrumb';

export default function NexoraSitemap() {
    const location = useLocation();
    const isDemo = location.pathname.includes('/demo');
    const baseRoute = isDemo ? '/projects/nexora/demo' : '/projects/nexora';

    const crumbs = isDemo
        ? [
            { label: "Home", to: `${baseRoute}/home` },
            { label: "Sitemap" }
        ]
        : [
            { label: "Projects", to: "/projects" },
            { label: "Nexora Tech", to: "/projects/nexora" },
            { label: "Sitemap" }
        ];

    return (
        <div className="nexora-sitemap">
            <div className="landing-breadcrumb-wrapper">
                <Breadcrumb items={crumbs} />
            </div>

            <div className={isDemo ? 'block1' : undefined}>
                <div className="sitemap-container">
                    <h1>Nexora Tech Consulting - Site Map</h1>
                    <p className="sitemap-intro">
                        Navigate through all pages of the Nexora Tech Consulting demo website.
                    </p>

                    <div className="sitemap-grid">
                        <section className="sitemap-section">
                            <h2>Main Pages</h2>
                            <ul>
                                <li>
                                    <Link to="/projects/nexora/demo/home" className={location.pathname.includes('/home') ? 'active' : ''}>Home</Link>
                                    <p>Landing page with hero section and overview</p>
                                </li>
                                <li>
                                    <Link to="/projects/nexora/demo/services" className={location.pathname.includes('/services') ? 'active' : ''}>Services</Link>
                                    <p>Our consulting service offerings</p>
                                    <ul className="sitemap-sublist">
                                        <li>
                                            <Link to="/projects/nexora/demo/services/cybersecurity" className={location.pathname.includes('/cybersecurity') ? 'active' : ''}>Cybersecurity</Link>
                                        </li>
                                        <li>
                                            <Link to="/projects/nexora/demo/services/data-analytics" className={location.pathname.includes('/data-analytics') ? 'active' : ''}>Data Analytics</Link>
                                        </li>
                                        <li>
                                            <Link to="/projects/nexora/demo/services/digital-transformation" className={location.pathname.includes('/digital-transformation') ? 'active' : ''}>Digital Transformation</Link>
                                        </li>
                                        <li>
                                            <Link to="/projects/nexora/demo/services/front-end-modernization" className={location.pathname.includes('/front-end-modernization') ? 'active' : ''}>Front-End Modernization</Link>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <Link to="/projects/nexora/demo/about" className={location.pathname.includes('/about') ? 'active' : ''}>About Us</Link>
                                    <p>Company story, team, and values</p>
                                </li>
                                <li>
                                    <Link to="/projects/nexora/demo/case-studies" className={location.pathname.includes('/case-studies') ? 'active' : ''}>Case Studies</Link>
                                    <p>Client success stories and project highlights</p>
                                </li>
                                <li>
                                    <Link to="/projects/nexora/demo/insights" className={location.pathname.includes('/insights') ? 'active' : ''}>Insights</Link>
                                    <p>Blog, thought leadership, and industry insights</p>
                                </li>
                                <li>
                                    <Link to="/projects/nexora/demo/contact" className={location.pathname.includes('/contact') ? 'active' : ''}>Contact</Link>
                                    <p>Get in touch with our team</p>
                                </li>
                            </ul>
                        </section>

                        <section className="sitemap-section">
                            <h2>Resources</h2>
                            <ul>
                                <li>
                                    <Link to="/projects/nexora/demo/sitemap" className={location.pathname.includes('/sitemap') ? 'active' : ''}>Site Map</Link>
                                    <p>This page - complete site navigation</p>
                                </li>
                            </ul>
                        </section>

                        <section className="sitemap-section">
                            <h2>External Links</h2>
                            <ul>
                                <li>
                                    <a href="https://www.linkedin.com/in/aeriel-day" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                                    <p>Follow us on LinkedIn</p>
                                </li>
                                <li>
                                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
                                    <p>Connect with us on Twitter</p>
                                </li>
                                <li>
                                    <a href="mailto:hello@nexoratech.com">Email Us</a>
                                    <p>hello@nexoratech.com</p>
                                </li>
                            </ul>
                        </section>

                        <section className="sitemap-section">
                            <h2>Portfolio</h2>
                            <ul>
                                <li>
                                    <Link to="/projects/nexora">Project Overview</Link>
                                    <p>View this project in the portfolio context</p>
                                </li>
                                <li>
                                    <Link to="/projects">All Projects</Link>
                                    <p>Return to portfolio projects index</p>
                                </li>
                            </ul>
                        </section>
                    </div>
                </div>
            </div>

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
                    <p className="demo-note">This is a portfolio demonstration project by Aeriel Day.</p>
                </div>

            </footer>
        </div>
    );
}
