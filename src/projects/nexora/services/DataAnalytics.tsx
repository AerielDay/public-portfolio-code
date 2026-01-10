import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Breadcrumb from '../../../components/Breadcrumb';
import '../styles/_nexora.scss';

export default function DataAnalytics() {
    const location = useLocation();
    const isDemo = location.pathname.includes('/demo');
    const baseRoute = isDemo ? '/projects/nexora/demo' : '/projects/nexora';

    const crumbs = isDemo
        ? [
            { label: 'Home', to: `${baseRoute}/home` },
            { label: 'Services', to: `${baseRoute}/services` },
            { label: 'Data & Analytics' }
        ]
        : [
            { label: 'Projects', to: '/projects' },
            { label: 'Nexora Tech', to: '/projects/nexora' },
            { label: 'Services', to: '/projects/nexora/services' },
            { label: 'Data & Analytics' }
        ];

    return (
        <main className="nexora container service-detail-page nexora-base-theme">
            <div className={isDemo ? 'block1' : undefined}>
                <div className="landing-breadcrumb-wrapper">
                    <Breadcrumb items={crumbs} />
                </div>

                <header className="service-detail-header">
                    <h1>Data & Analytics</h1>
                    <p className="service-tagline">
                        Turn raw data into strategic insights with business intelligence platforms, machine learning pipelines, and real-time analytics dashboards.
                    </p>
                </header>

                <section className="service-overview">
                    <h2>What We Deliver</h2>
                    <p>
                        Data scattered across CRMs, ERPs, and spreadsheets can't drive decisions. We build unified data warehouses,
                        automated ETL pipelines, and role-specific dashboards that give stakeholders real-time visibility into operations.
                        Our ML implementations automate predictions and free up teams for strategic work.
                    </p>
                </section>
            </div>

            <section className="service-highlights block2">
                <h2>Key Services</h2>
                <div className="highlights-grid">
                    <div className="highlight-card">
                        <h3>Business Intelligence & Dashboards</h3>
                        <p>
                            Custom Tableau, Power BI, or Looker implementations that integrate data from multiple sources.
                            Real-time reporting that replaces manual report generation and enables data-driven decision making.
                        </p>
                    </div>
                    <div className="highlight-card">
                        <h3>Data Warehouse Design</h3>
                        <p>
                            Snowflake, Redshift, or BigQuery architectures optimized for query performance and cost efficiency.
                            Centralize your data for comprehensive analytics and compliance reporting.
                        </p>
                    </div>
                    <div className="highlight-card">
                        <h3>Machine Learning Implementation</h3>
                        <p>
                            Predictive models for demand forecasting, churn prediction, fraud detection, and recommendation engines.
                            Production-ready API deployments with monitoring and continuous improvement pipelines.
                        </p>
                    </div>
                    <div className="highlight-card">
                        <h3>ETL Pipeline Optimization</h3>
                        <p>
                            Airflow, dbt, or Prefect workflows that transform and load data efficiently. Reduce processing time by
                            60%+ and enable near-real-time analytics for time-sensitive business operations.
                        </p>
                    </div>
                </div>
            </section>

            <section className="service-details block3">
                <h2>About Data & Analytics</h2>
                <h3>From Dispersed Data to Reliable Insights</h3>
                <p>
                    Nexora builds modern, end-to-end analytics platforms designed to transform
                    dispersed raw data into reliable, actionable business insights across
                    your organization. Our solutions span the entire data lifecycle, from robust
                    data engineering and warehouse architecture to the development of intuitive
                    dashboards and advanced Machine Learning (ML) models. We ensure that the
                    right decision-makers see the right metrics exactly when they are needed,
                    eliminating information silos and slow, manual reporting processes. By
                    focusing on data architecture and presentation, we empower your teams to
                    use data proactively, significantly improving operational efficiency and
                    strategic decision-making.
                </p>
                <h3>Experience in Production-Ready Platforms</h3>
                <p>
                    Nexora has been successfully delivering complex analytics solutions
                    for enterprise customers for over 7 years, focusing intensely on practical,
                    production-ready implementations rather than theoretical models. This
                    extensive experience has allowed us to develop deep expertise with
                    best-in-class tools, including Snowflake, dbt, and scalable streaming ETL
                    patterns. This focus on implementation excellence and measurable outcomes
                    earned us industry recognition, including the prestigious "Best Analytics
                    Solution" award for our work integrating predictive modeling into supply
                    chain logistics. Our proven track record ensures that your analytics
                    platform is not just functional, but built to handle real-world demands
                    and scale.
                </p>
                <h3>Trust, Governance, and Measurable Outcomes</h3>
                <p>
                    We understand that trust is the foundation of any effective analytics
                    platform, which is why we emphasize rigorous data governance, lineage,
                    and observability in every engagement. These essential practices ensure
                    that stakeholders can fully rely on the metrics and dashboards they use
                    to drive critical decisions. Typical engagements are structured to produce
                    rapid, high-impact wins, often deploying automated dashboards and data
                    pipelines that immediately replace error-prone manual reporting efforts.
                    This shift allows your organization to quickly enable sophisticated,
                    data-driven decision-making and achieve predictable, continuous business
                    improvements.
                </p>
                <ul className="service-meta">
                    <li><strong>Years delivering:</strong> 7+ years</li>
                    <li><strong>Recognition:</strong> Best Analytics Solution (industry awards)</li>
                    <li><strong>Key Focus:</strong> Data Governance, Lineage, Observability, Streaming ETL.</li>
                </ul>



                <div className="data-cta">
                    <h2>Ready to Unlock Your Data?</h2>
                    <p>
                        Let's assess your current data infrastructure and design a solution that delivers the insights your business needs to compete effectively.
                    </p>
                
                <div className="services-more">
                    <Link to="/projects/nexora/demo/contact" className="btn-primary-large">
                        Start a Data Assessment
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