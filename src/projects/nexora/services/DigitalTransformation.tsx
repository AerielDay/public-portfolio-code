import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Breadcrumb from '../../../components/Breadcrumb';
import '../styles/_nexora.scss';

export default function DigitalTransformation() {
    const location = useLocation();
    const isDemo = location.pathname.includes('/demo');
    const baseRoute = isDemo ? '/projects/nexora/demo' : '/projects/nexora';

    const crumbs = isDemo
        ? [
            { label: 'Home', to: `${baseRoute}/home` },
            { label: 'Services', to: `${baseRoute}/services` },
            { label: 'Digital Transformation' }
        ]
        : [
            { label: 'Projects', to: '/projects' },
            { label: 'Nexora Tech', to: '/projects/nexora' },
            { label: 'Services', to: '/projects/nexora/services' },
            { label: 'Digital Transformation' }
        ];

    return (
        <main className="nexora container service-detail-page nexora-base-theme">
            <div className={isDemo ? 'block1' : undefined}>
                <div className="landing-breadcrumb-wrapper">
                    <Breadcrumb items={crumbs} />
                </div>

                <header className="service-detail-header">
                    <h1>Digital Transformation</h1>
                    <p className="service-tagline">
                        Modernize your infrastructure and processes for the cloud-first era with proven strategies that deliver measurable results.
                    </p>
                </header>

                <section className="service-overview">
                    <h2>What We Deliver</h2>
                    <p>
                        Digital transformation isn't just about moving to the cloud—it's about reimagining your entire technology
                        stack to enable agility, scalability, and innovation. Our team guides you through every step of modernization,
                        from legacy system assessment to cloud migration and IoT integration, ensuring minimal disruption and maximum ROI.
                    </p>
                </section>
            </div>
            <section className="service-highlights block2">
                <h2>Key Services</h2>
                <div className="highlights-grid">
                    <div className="highlight-card">
                        <h3>Cloud Migration</h3>
                        <p>
                            Seamless transitions to AWS, Azure, or Google Cloud with architecture design, data migration planning,
                            and post-migration optimization. Reduce infrastructure costs by 30-50% while improving scalability.
                        </p>
                    </div>
                    <div className="highlight-card">
                        <h3>Legacy System Modernization</h3>
                        <p>
                            Incremental refactoring strategies that eliminate technical debt without disrupting operations.
                            Improve maintainability, accelerate feature delivery, and attract top engineering talent.
                        </p>
                    </div>
                    <div className="highlight-card">
                        <h3>IoT Strategy & Implementation</h3>
                        <p>
                            Device integration, data pipeline architecture, and analytics dashboards that turn sensor data into
                            actionable operational insights and predictive maintenance capabilities.
                        </p>
                    </div>
                    <div className="highlight-card">
                        <h3>Infrastructure as Code</h3>
                        <p>
                            Automated provisioning and deployment pipelines using Terraform, Ansible, or CloudFormation.
                            Achieve consistency, repeatability, and disaster recovery readiness.
                        </p>
                    </div>
                </div>
            </section>

            <section className="service-details block3">
                <h2>About Digital Transformation</h2>
                <h3>The Challenge of Modernization</h3>
                <p>
                    Digital Transformation at Nexora combines deep technical modernization
                    with essential process change and strategic alignment, ensuring your
                    investments deliver long-term value. We help organizations look beyond
                    simple technology adoption to fundamentally re-architect their legacy
                    platforms, strategically democratize data access, and introduce modern
                    continuous delivery practices. The goal is to build an operating model
                    where your teams can deliver impactful business value faster, reduce
                    technical debt, and operate with significantly less risk in a constantly
                    changing market. This holistic approach ensures that your transformation
                    is not just a technology project, but a sustainable driver of growth and
                    competitive advantage.
                </p>
                <h3>Our Proven Expertise and Track Record</h3>
                <p>
                    Nexora has been successfully delivering comprehensive transformation
                    programs for enterprise clients across diverse sectors for over 8 years,
                    guiding multi-year cloud migrations and business-critical modernization
                    initiatives. Our leadership in this complex space has earned us recognition,
                    including the prestigious "Enterprise Modernization Excellence Award" for
                    our work in seamless platform migration. We leverage this deep, practical
                    experience to manage the complexity of legacy system integration and the
                    vital people-side of change management, a methodology which contributed
                    to our naming as "Best in Class for Strategic Alignment" by the Tech Strategy
                    Review. This proven track record gives our clients the confidence to pursue
                    ambitious transformation goals.
                </p>
                <h3>A Phased, Collaborative Engagement Model</h3>
                <p>
                    Our engagements are structured to strategically combine strategy,
                    architecture, and hands-on delivery, ensuring maximum alignment from
                    day one. We start with an intensive discovery workshop to thoroughly
                    assess your current state and define a precise future-state vision
                    aligned with your business KPIs. This moves directly into the creation of
                    a phased modernization roadmap, which is designed to deliver immediate,
                    measurable value at every stage, not just at the final completion point.
                    Finally, execution is handled by cross-functional squads, integrating
                    specialized Nexora talent across engineering, QA, and DevOps directly into
                    your internal teams to accelerate time-to-value and build lasting capability.
                </p>
                <ul className="service-meta">
                    <li><strong>Years delivering:</strong> 8+ years</li>
                    <li><strong>Recognition:</strong> Digital Transformation Partner of the Year, Enterprise Modernization Excellence Award, Best in Class for Strategic Alignment (industry awards)</li>
                    <li><strong>Key Focus:</strong> Strategic Alignment, Cloud Migration, Data Democratization, CI/CD Integration</li>
                </ul>



                <div className="digital-cta">
                    <h2>Plan Your Transformation</h2>
                    <p>
                        Book a roadmap session to assess legacy systems, prioritize initiatives, and outline a phased migration plan that minimizes risk.
                    </p>

                    <div className="services-more">
                    <Link to="/projects/nexora/demo/contact" className="btn-primary-large">
                        Book a Roadmap Session
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
                    <p className="demo-note"><strong>Content Disclaimer:</strong> All content displayed in this demo are used for portfolio demonstration purposes only. I do not own the rights to this content and it will not be used for commercial purposes or distribution. All rights belong to their respective original content creators.</p>
                </div>

            </footer>
        </main>
    );
}