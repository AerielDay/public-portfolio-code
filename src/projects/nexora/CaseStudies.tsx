// src/projects/nexora/CaseStudies.tsx
import React from "react";
import { Link, useLocation } from 'react-router-dom';
import './styles/_nexora.scss';
import Breadcrumb from '../../components/Breadcrumb';

const caseStudies = [
  {
    id: "cs1",
    client: "Aether Corp",
    industry: "Enterprise SaaS",
    challenge: "Aether Corp's 8-year-old AngularJS platform was suffering from slow performance, poor mobile experience, and difficulty recruiting developers familiar with the outdated framework. Their technical debt was preventing them from shipping new features quickly.",
    solution: "We designed a phased migration strategy that allowed Aether to continue operating while we incrementally converted critical components to React. We established a component library, implemented comprehensive testing, and trained their internal team on modern development practices.",
    results: [
      "Reduced page load times by 40%",
      "Increased mobile user engagement by 45%",
      "Deployed new platform in 6 months with zero downtime",
      "Cut development time for new features by 50%"
    ],
    testimonial: "Nexora's approach was pragmatic and collaborative. They didn't just rewrite our code—they empowered our team with the skills to maintain it. The results speak for themselves.",
    testimonialAuthor: "Sarah Chen, CTO at Aether Corp"
  },
  {
    id: "cs2",
    client: "Soluna Labs",
    industry: "Healthcare Technology",
    challenge: "Soluna Labs' patient portal failed WCAG 2.1 Level AA compliance, exposing them to legal risk and excluding users with disabilities. They needed a comprehensive accessibility overhaul without disrupting their existing user base.",
    solution: "We conducted a full accessibility audit identifying 87 compliance gaps across keyboard navigation, screen reader compatibility, and color contrast. We prioritized remediation based on impact and implemented fixes with extensive user testing including actual assistive technology users.",
    results: [
      "Achieved WCAG 2.2 Level AA certification",
      "Reduced accessibility complaints by 100%",
      "Expanded user base by 12% within first quarter",
      "Avoided potential litigation costs estimated at $250K+"
    ],
    testimonial: "The Nexora team showed us that accessibility isn't just about compliance—it's about better design for everyone. Our portal is now easier to use for all our patients.",
    testimonialAuthor: "Dr. Marcus Okoye, Chief Medical Officer"
  },
  {
    id: "cs3",
    client: "Global FinTech Company",
    industry: "Financial Services",
    challenge: "A multinational fintech company was running critical applications on expensive on-premise servers with no disaster recovery plan. They needed to migrate to AWS while maintaining PCI DSS compliance and ensuring zero transaction downtime.",
    solution: "We architected a multi-region AWS infrastructure with automated failover, implemented CI/CD pipelines for safe deployments, and worked closely with their security team to maintain compliance throughout the migration. The transition happened over 4 months with a blue-green deployment strategy.",
    results: [
      "Reduced infrastructure costs by 35% annually",
      "Achieved 99.99% uptime (previously 99.7%)",
      "Maintained PCI DSS Level 1 compliance",
      "Enabled automatic scaling during peak transaction periods"
    ],
    testimonial: "We were skeptical about cloud migration given our compliance requirements, but Nexora handled every detail. The cost savings alone paid for the project in 18 months.",
    testimonialAuthor: "Confidential, VP of Engineering"
  },
  {
    id: "cs4",
    client: "RetailFlow Logistics",
    industry: "Supply Chain & E-Commerce",
    challenge: "RetailFlow was drowning in data from multiple sources (warehouse systems, shipping partners, e-commerce platforms) but lacked unified reporting. Executives couldn't get real-time visibility into operations, causing delays in strategic decisions.",
    solution: "We built a custom business intelligence platform that integrated 7 disparate data sources into a centralized data warehouse. We created role-specific dashboards for different stakeholders (operations, finance, executive) and implemented predictive analytics for inventory management.",
    results: [
      "Unified reporting across all business units",
      "Reduced report generation time from 3 days to real-time",
      "Improved inventory forecasting accuracy by 28%",
      "Decreased operational costs by $400K annually through data-driven optimization"
    ],
    testimonial: "Before Nexora, we were making decisions based on gut feeling and week-old data. Now we have real-time insights that have fundamentally changed how we operate.",
    testimonialAuthor: "Jennifer Park, COO at RetailFlow"
  },
  {
    id: "cs5",
    client: "TechStart Accelerator",
    industry: "Startup Incubator",
    challenge: "TechStart's internal application platform was cobbled together from various SaaS tools and spreadsheets, creating a disjointed experience for startup applicants and evaluators. The manual processes were time-consuming and error-prone.",
    solution: "We designed and built a custom web application that streamlined the entire application-to-funding pipeline. Features included automated document collection, collaborative evaluation workflows, and integrated communication tools. Built with React, Node.js, and PostgreSQL for scalability.",
    results: [
      "Reduced application review time by 60%",
      "Increased applicant satisfaction scores from 3.2 to 4.7 out of 5",
      "Processed 3x more applications without additional staff",
      "Launched in 4 months, on time and under budget"
    ],
    testimonial: "Nexora delivered exactly what we needed—no bloat, no unnecessary features. Just a solid platform that works beautifully and scales with our growth.",
    testimonialAuthor: "David Liu, Managing Director"
  }
];

export default function CaseStudies() {
  const location = useLocation();
  const isDemo = location.pathname.includes('/demo');
  const baseRoute = isDemo ? '/projects/nexora/demo' : '/projects/nexora';

  const crumbs = isDemo
    ? [
      { label: "Home", to: `${baseRoute}/home` },
      { label: "Case Studies" }
    ]
    : [
      { label: "Projects", to: "/projects" },
      { label: "Nexora Tech", to: "/projects/nexora" },
      { label: "Case Studies" }
    ];

  return (
    <main className={`nexora case-studies-page nexora-base-theme ${isDemo ? 'demo-mode' : ''}`}>

      <div className="landing-breadcrumb-wrapper">
        <Breadcrumb items={crumbs} />
      </div>

      <div className="case-studies-intro block1">
        <header className="case-studies-header" aria-labelledby="cs-heading">
          <h1 id="cs-heading">Case Studies</h1>
          <p className="case-studies-intro">
            Real projects, real results. See how we've helped businesses across industries
            leverage technology for measurable growth and competitive advantage.
          </p>
        </header>
        <div className="case-studies-grid">
          {caseStudies.map(study => (
            <article key={study.id} className="case-study-card">
              <div className="case-study-header">
                <h4>{study.client}</h4>
                <span className="industry-tag">{study.industry}</span>
              </div>

              <div className="case-study-section">
                <h5>Challenge</h5>
                <p>{study.challenge}</p>
              </div>

              <div className="case-study-section">
                <h5>Solution</h5>
                <p>{study.solution}</p>
              </div>

              <div className="case-study-section results">
                <h5>Results</h5>
                <ul>
                  {study.results.map((result, idx) => (
                    <li key={idx}>{result}</li>
                  ))}
                </ul>
              </div>

              <blockquote className="case-study-testimonial">
                <p >"{study.testimonial}"</p>
                <cite >— {study.testimonialAuthor}</cite>
              </blockquote>
            </article>
          ))}
        </div>
      </div>
      <section className={isDemo ? 'case-studies-cta block3' : 'case-studies-cta'}>
        <div>
          <h4>Ready to Write Your Success Story?</h4>
          <p>Let's discuss how we can help you achieve similar results.</p>
          <Link to={`${baseRoute}/contact`} className="btn-primary">Schedule a Consultation</Link>
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