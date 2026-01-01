import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Breadcrumb from '../../../components/Breadcrumb';
import '../styles/_nexora.scss';

export default function Cybersecurity() {
    const location = useLocation();
    const isDemo = location.pathname.includes('/demo');
    const baseRoute = isDemo ? '/projects/nexora/demo' : '/projects/nexora';

    const crumbs = isDemo
        ? [
            { label: 'Home', to: `${baseRoute}/home` },
            { label: 'Services', to: `${baseRoute}/services` },
            { label: 'Cybersecurity & Compliance' }
        ]
        : [
            { label: 'Projects', to: '/projects' },
            { label: 'Nexora Tech', to: '/projects/nexora' },
            { label: 'Services', to: '/projects/nexora/services' },
            { label: 'Cybersecurity & Compliance' }
        ];

    return (
        <main className="nexora container service-detail-page nexora-base-theme">
            <div className={isDemo ? 'block1' : undefined}>
                <div className="landing-breadcrumb-wrapper">
                    <Breadcrumb items={crumbs} />
                </div>

                <header className="service-detail-header">
                    <h1>Cybersecurity & Compliance</h1>
                    <p className="service-tagline">
                        Protect your business from evolving threats and regulatory risks with comprehensive security audits, compliance frameworks, and managed security services.
                    </p>
                </header>

                <section className="service-overview">
                    <h2>What We Deliver</h2>
                    <p>
                        Cybersecurity isn't optional—it's essential for business continuity and customer trust. We perform penetration
                        testing, vulnerability assessments, and compliance audits (HIPAA, SOC 2, GDPR) that identify gaps before they
                        become breaches. Our team implements technical controls and documentation that satisfy auditors and protect assets.
                    </p>
                </section>
            </div>

            <section className="service-highlights block2">
                <h2>Key Services</h2>
                <div className="highlights-grid">
                    <div className="highlight-card">
                        <h3>Security Risk Assessment</h3>
                        <p>
                            Comprehensive vulnerability scans and penetration testing that identify critical security gaps.
                            Prioritized remediation plans with estimated risk levels and implementation timelines.
                        </p>
                    </div>
                    <div className="highlight-card">
                        <h3>WCAG Accessibility Compliance</h3>
                        <p>
                            Full accessibility audits for WCAG 2.2 Level AA certification. Remediation implementation that improves
                            usability for all users while reducing legal exposure and expanding market reach.
                        </p>
                    </div>
                    <div className="highlight-card">
                        <h3>Regulatory Compliance (HIPAA, SOC 2, GDPR)</h3>
                        <p>
                            Gap analysis, policy documentation, technical controls implementation, and third-party audit coordination.
                            Achieve certification and maintain ongoing compliance with changing regulations.
                        </p>
                    </div>
                    <div className="highlight-card">
                        <h3>Managed Security Services</h3>
                        <p>
                            24/7 monitoring, incident response, security patch management, and regular security training for staff.
                            Proactive threat detection and response that prevents breaches before they impact operations.
                        </p>
                    </div>
                </div>
            </section>

            <section className="service-details block3">
                <h2>About Cybersecurity & Compliance</h2>
                <h3>Proactive Risk Reduction and Resilience</h3>
                <p>
                    Nexora delivers comprehensive security programs that strategically combine
                    robust technical controls, clear policy frameworks, and disciplined operational
                    processes to achieve true resilience. Our primary focus is on proactive risk
                    reduction, meaning we don't just react to threats but actively
                    identify critical vulnerabilities across your infrastructure and remediate
                    immediate exposure. This strategy includes establishing continuous,
                    ongoing monitoring and effective, tested incident response plans that can
                    quickly contain and neutralize threats. We ensure your security posture is
                    dynamic, minimizing your attack surface and elevating your organization's
                    ability to maintain operations under duress.
                </p>
                <h3>Enterprise-Grade Compliance and Trust</h3>
                <p>
                    Nexora has provided essential enterprise-grade security assessments and
                    complex compliance programs for over 8 years, consistently helping clients
                    navigate highly regulated environments. Our deep experience includes supporting
                    successful engagements aligned with critical regulations such as HIPAA, SOC 2,
                    and GDPR, ensuring your organization meets mandatory legal and industry
                    standards. This history of effective delivery has earned us significant
                    recognition, including the prestigious "Cybersecurity Excellence Award"
                    for our risk mitigation methodology. Our longevity and focused expertise
                    allow us to build trust with your stakeholders by making compliance a
                    fundamental business advantage, not just a checklist item.
                </p>
                <h3>A Layered and Operational Approach</h3>
                <p>
                    Our programs are designed to combine rigorous technical testing with
                    essential policy and people-focused practices, creating a truly layered defense.
                    We regularly perform comprehensive penetration testing to challenge your
                    systems, provide secure SDLC guidance to embed security into development,
                    and facilitate realistic tabletop exercises to train your incident response
                    teams. Complementing this, we offer ongoing managed detection and response
                    (MDR) services to provide 24/7 coverage. This layered, operational
                    approach significantly reduces your organization's exposure to evolving
                    threats and dramatically improves overall organizational resilience.
                </p>
                <ul className="service-meta">
                    <li><strong>Years delivering:</strong> 8+ years</li>
                    <li><strong>Recognition:</strong> Cybersecurity Excellence Award</li>
                    <li><strong>Key Services:</strong> Penetration Testing, SOC Readiness, Managed Detection Services.</li>
                </ul>


                <div className="security-cta">
                    <h2>Ready to Strengthen Your Security?</h2>
                    <p>
                        Let's conduct a security assessment and identify vulnerabilities before they become costly breaches or compliance violations.
                    </p>
                
                <div className="services-more">
                    <Link to="/projects/nexora/demo/contact" className="btn-primary-large">
                        Request a Security Audit
                    </Link>
                </div>
                </div>
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
                    <p className="demo-note"><strong>Content Disclaimer:</strong> All content displayed in this demo are used for portfolio demonstration purposes only. I do not own the rights to this content and it will not be used for commercial purposes or distribution. All rights belong to their respective original content creators</p>
                </div>

            </footer>
        </main>
    );
}