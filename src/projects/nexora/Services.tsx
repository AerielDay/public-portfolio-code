// src/projects/nexora/Services.tsx
import React from "react";
import { Link, useLocation } from 'react-router-dom';
import './styles/_nexora.scss';
import Breadcrumb from '../../components/Breadcrumb';

const serviceCategories = [
  {
    id: "digital-transformation",
    title: "Digital Transformation",
    description: "Modernize your infrastructure and processes for the cloud-first era.",
    services: [
      {
        name: "Cloud Migration",
        problem: "Legacy on-premise systems are costly, inflexible, and difficult to scale.",
        process: "Assessment → Architecture Design → Phased Migration → Optimization",
        outcome: "Reduced infrastructure costs by 30-50%, improved scalability, and enhanced disaster recovery capabilities."
      },
      {
        name: "Legacy System Modernization",
        problem: "Outdated technology limits innovation and increases security risks.",
        process: "Code Audit → Migration Strategy → Incremental Refactoring → Testing & Deployment",
        outcome: "Faster feature delivery, improved maintainability, and elimination of technical debt."
      },
      {
        name: "IoT Strategy & Implementation",
        problem: "Businesses struggle to leverage IoT data for operational insights.",
        process: "Use Case Analysis → Device Integration → Data Pipeline → Analytics Dashboard",
        outcome: "Real-time operational visibility and predictive maintenance capabilities."
      }
    ]
  },
  {
    id: "software-development",
    title: "Front-End Modernization",
    description: "Custom applications and platforms built for your unique business needs.",
    services: [
      {
        name: "Custom App Development",
        problem: "Off-the-shelf solutions don't match your specific workflows or requirements.",
        process: "Discovery → Prototype → Agile Development → Launch & Support",
        outcome: "Tailored software that increases efficiency and provides competitive advantage."
      },
      {
        name: "Front-End Modernization",
        problem: "Outdated UI frameworks create poor user experiences and slow development cycles.",
        process: "Component Library → Design System → Migration Plan → Progressive Enhancement",
        outcome: "Improved user engagement by 40%+ and faster time-to-market for new features."
      },
      {
        name: "UX/UI Design & Optimization",
        problem: "Complex interfaces confuse users and increase support costs.",
        process: "User Research → Wireframing → Prototyping → Usability Testing",
        outcome: "Simplified workflows that reduce support tickets by 35% and increase conversion rates."
      }
    ]
  },
  {
    id: "data-analytics",
    title: "Data & Analytics",
    description: "Turn raw data into actionable insights that drive business growth.",
    services: [
      {
        name: "Business Intelligence & Analytics",
        problem: "Data is siloed across systems, making it difficult to gain comprehensive insights.",
        process: "Data Integration → Warehouse Design → Dashboard Creation → Training",
        outcome: "Unified reporting that enables data-driven decision making across departments."
      },
      {
        name: "Machine Learning Implementation",
        problem: "Manual processes are time-consuming and prone to human error.",
        process: "Model Selection → Training Pipeline → API Deployment → Continuous Monitoring",
        outcome: "Automated predictions that improve accuracy and free up staff for strategic work."
      },
      {
        name: "Data Pipeline Optimization",
        problem: "Slow data processing creates delays in reporting and analysis.",
        process: "Performance Audit → Architecture Redesign → ETL Optimization → Monitoring",
        outcome: "Faster data processing by 60%+ and real-time reporting capabilities."
      }
    ]
  },
  {
    id: "cybersecurity",
    title: "Cybersecurity & Compliance",
    description: "Protect your business from evolving security threats and regulatory risks.",
    services: [
      {
        name: "Security Risk Assessment",
        problem: "Unknown vulnerabilities expose your business to data breaches and downtime.",
        process: "Vulnerability Scan → Penetration Testing → Risk Analysis → Remediation Plan",
        outcome: "Identified and mitigated critical security gaps before they're exploited."
      },
      {
        name: "WCAG Accessibility Compliance",
        problem: "Inaccessible websites exclude users and create legal liability.",
        process: "Full Audit → Prioritized Remediation → Implementation → Certification",
        outcome: "WCAG 2.2 Level AA compliance that expands your audience and reduces legal risk."
      },
      {
        name: "Compliance Auditing (HIPAA, SOC 2, GDPR)",
        problem: "Regulatory compliance is complex and constantly evolving.",
        process: "Gap Analysis → Policy Documentation → Technical Controls → Third-Party Audit",
        outcome: "Certification achieved with documented processes for ongoing compliance."
      }
    ]
  }
];

export default function Services() {
  const location = useLocation();
  const isDemo = location.pathname.includes('/demo');
  const baseRoute = isDemo ? '/projects/nexora/demo' : '/projects/nexora';

  const crumbs = isDemo
    ? [
      { label: "Home", to: `${baseRoute}/home` },
      { label: "Services" }
    ]
    : [
      { label: "Projects", to: "/projects" },
      { label: "Nexora Tech", to: "/projects/nexora" },
      { label: "Services" }
    ];

  return (
    <main className="nexora services-page nexora-base-theme">
      <div className="landing-breadcrumb-wrapper">
        <Breadcrumb items={crumbs} />
      </div>

      <div className={isDemo ? 'block1' : undefined}>
        <header className="services-header" aria-labelledby="services-heading">
          <h1 id="services-heading">Our Services</h1>
          <p className="services-intro">
            Comprehensive technology consulting services designed to solve real business challenges
            with measurable outcomes.
          </p>
        </header>

        <div className="services-detailed">
          {serviceCategories.map(category => (
            <section key={category.id} className="service-category" aria-labelledby={`${category.id}-heading`}>
              <h4 id={`${category.id}-heading`} className="category-title">{category.title}</h4>
              <p className="category-description">{category.description}</p>

              <div className="service-cards single">
                {/* Single full-width card per service category */}
                <article className="service-detail-card">
                  <h5>{category.title}</h5>

                  <div className="service-detail">
                    <p>
                      {category.id === 'digital-transformation' && (
                        "We partner with enterprise teams to re-architect processes, dataflows, and operational models so technology drives measurable business outcomes. Our work includes cloud-native platform migrations, API-driven integrations, and process automation that reduce cycle time and technical debt. We pair technical implementation with governance and change management to ensure adoption and sustained value."
                      )}

                      {category.id === 'software-development' && (
                        "We deliver end-to-end software and product engineering: from product discovery and architecture to CI/CD, testing, and iterative delivery. Our teams define scalable architectures, enforce quality through automated pipelines, and instrument observability so products operate reliably in production. We emphasize engineering practices that accelerate delivery while keeping maintainability and security front of mind."
                      )}

                      {category.id === 'data-analytics' && (
                        "We build data platforms and pipelines that enable reliable analytics and production-grade Machine Learning. Our work spans data ingestion, modeling, feature stores, and MLOps—providing repeatable workflows for training, validation, deployment, and monitoring of models. We focus on data quality, lineage, and model governance so AI-driven insights are trusted and operationalized across the business."
                      )}

                      {category.id === 'cybersecurity' && (
                        "We strengthen security posture through risk-based architecture, threat modeling, and pragmatic control implementation. Services include secure design reviews, incident preparedness, vulnerability management, and alignment with common compliance frameworks. Our approach blends engineering controls with operational processes so security becomes an enabler rather than a bottleneck."
                      )}
                    </p>
                  </div>

                  <div className="service-detail">
                    {/* Key capabilities list */}
                    <ul className="capabilities-list">
                      {category.id === 'digital-transformation' && (
                        <>
                          <li>Cloud migrations and platform modernization</li>
                          <li>Incremental legacy modernization and refactoring</li>
                          <li>IoT integration and real-time operational analytics</li>
                        </>
                      )}

                      {category.id === 'software-development' && (
                        <>
                          <li>Custom application engineering and API-first architectures</li>
                          <li>Front-end modernization and component libraries</li>
                          <li>Product discovery, UX design and iterative delivery</li>
                        </>
                      )}

                      {category.id === 'data-analytics' && (
                        <>
                          <li>Data platform design, ETL and warehousing</li>
                          <li>Production-grade Machine Learning and MLOps</li>
                          <li>Analytics, reporting and data governance</li>
                        </>
                      )}

                      {category.id === 'cybersecurity' && (
                        <>
                          <li>Risk assessments, penetration testing and remediation</li>
                          <li>Accessibility and secure-by-design reviews</li>
                          <li>Compliance readiness (HIPAA, SOC 2, GDPR)</li>
                        </>
                      )}
                    </ul>

                    {/* Link to the service detail route. Front-end/Software maps to front-end-modernization route */}
                    {(() => {
                      const slug = category.id === 'software-development' ? 'front-end-modernization' : category.id;
                      return (
                        <Link to={`${baseRoute}/services/${slug}`} className="service-cta">Read more about {category.title} →</Link>
                      );
                    })()}
                  </div>
                </article>
              </div>
            </section>
          ))}
        </div>
      </div>
      <section className={isDemo ? 'services-cta block2' : 'services-cta'} >
        <h4>Don't See What You Need?</h4>
        <p>Every business is unique. Let's discuss your specific challenges and craft a custom solution.</p>
        <Link to={`${baseRoute}/contact`} className="btn-primary btn-primary--lift">Contact Our Team</Link>
      </section>


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
          <p className="demo-note"><strong>Content Disclaimer:</strong> All content displayed in this demo are used for portfolio demonstration purposes only. I do not own the rights to this content and it will not be used for commercial purposes or distribution. All rights belong to their respective original content creators</p>
        </div>

      </footer>
    </main>
  );
}