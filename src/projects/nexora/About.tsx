// src/projects/nexora/About.tsx
import React from "react";
import { Link, useLocation } from 'react-router-dom';
import Breadcrumb from '../../components/Breadcrumb';
import JordanPhoto from './styles/assets/Jordan_shuttershock.png';
import MorganPhoto from './styles/assets/morgan_freepik.png';
import AlexPhoto from './styles/assets/Alex_stockcake.png';

export default function About() {
    const location = useLocation();
    const isDemo = location.pathname.includes('/demo');
    const baseRoute = isDemo ? '/projects/nexora/demo' : '/projects/nexora';

    const crumbs = isDemo
        ? [
            { label: "Home", to: `${baseRoute}/home` },
            { label: "About" }
        ]
        : [
            { label: "Projects", to: "/projects" },
            { label: "Nexora Tech", to: "/projects/nexora" },
            { label: "About" }
        ];

    return (
        <main className="nexora about-page nexora-base-theme" aria-labelledby="nexora-heading">
            <div className={isDemo ? 'block1' : undefined}>
                <div className="landing-breadcrumb-wrapper">
                    <Breadcrumb items={crumbs} />
                </div>

                {/* Hero Section */}
                <section className="about-hero-section" aria-labelledby="about-hero-heading">
                    <div className="about-content">
                        <h1 id="about-heading">About Nexora Tech Consulting</h1>
                        <div className="about-story">
                            <p>
                                Founded in 2018, Nexora Tech Consulting was born from a simple observation:
                                too many businesses struggle with technology transitions that should empower them.
                                Our mission is to bridge the gap between legacy systems and modern innovation,
                                ensuring that digital transformation enhances—not disrupts—business operations.
                            </p>
                            <p>
                                We believe in pragmatic solutions over trendy buzzwords. Every project starts
                                with understanding your unique challenges, then crafting a roadmap that delivers
                                measurable results without unnecessary complexity.
                            </p>
                        </div>

                    </div>
                </section>
            </div>



            <div className="about-page block2" aria-labelledby="about-page">

                <div className="about-team">
                    <h4>Our Team</h4>
                    <div className="team-grid">
                        <article className="team-member">
                            <img className="member-photo" src={JordanPhoto} alt="Portrait of Jordan Silva, Founder & Principal Consultant" />
                            <h5>Jordan Silva</h5>
                            <p className="role">Founder & Principal Consultant</p>
                            <p className="bio">
                                15+ years in enterprise software architecture. Former tech lead at Fortune 500
                                companies. Certified AWS Solutions Architect and accessibility advocate.
                            </p>
                        </article>

                        <article className="team-member">
                            <img className="member-photo" src={MorganPhoto} alt="Portrait of Morgan Park, Senior Technical Consultant" />
                            <h5>Morgan Park</h5>
                            <p className="role">Senior Technical Consultant</p>
                            <p className="bio">
                                Specializes in front-end modernization and design systems. Led migration projects
                                for clients in healthcare, finance, and e-commerce sectors.
                            </p>
                        </article>

                        <article className="team-member">
                            <img className="member-photo" src={AlexPhoto} alt="Portrait of Alex Kim, Data & Security Consultant" />
                            <h5>Alex Kim</h5>
                            <p className="role">Data & Security Consultant</p>
                            <p className="bio">
                                Expert in data analytics, business intelligence, and cybersecurity compliance.
                                Holds CISSP and CEH certifications with a focus on secure cloud migrations.
                            </p>
                        </article>
                    </div>
                </div>
            </div>
            <div className="about-values block3">
                <h4 >Our Values</h4>
                <div className="values-grid">
                    <div className="value-card">
                        <h5>Integrity</h5>
                        <p>Honest assessments, transparent pricing, and realistic timelines. No overselling.</p>
                    </div>
                    <div className="value-card">
                        <h5>Innovation</h5>
                        <p>Staying ahead of technology trends while respecting proven, stable solutions.</p>
                    </div>
                    <div className="value-card">
                        <h5>Partnership</h5>
                        <p>Your success is our success. We're invested in long-term relationships, not one-time projects.</p>
                    </div>
                    <div className="value-card">
                        <h5>Accessibility</h5>
                        <p>Technology should work for everyone. WCAG compliance is standard in all our deliverables.</p>
                    </div>
                </div>
            </div>



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
                    <p className="demo-note"><strong>Content Disclaimer:</strong> All content displayed in this demo are used for portfolio demonstration purposes only. I do not own the rights to this content and it will not be used for commercial purposes or distribution. All rights belong to their respective original content creators</p>
                </div>

            </footer>

        </main>
    );
}