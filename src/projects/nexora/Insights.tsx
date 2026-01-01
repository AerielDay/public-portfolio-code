// src/projects/nexora/Blog.tsx
import React from "react";
import { Link, useLocation } from 'react-router-dom';
import Breadcrumb from '../../components/Breadcrumb';

const blogPosts = [
    {
        id: "b1",
        title: "5 Steps for a Successful Cloud Migration",
        date: "November 10, 2025",
        category: "Best Practices",
        excerpt: "Moving to the cloud doesn't have to be overwhelming. Learn our proven five-step process that has helped dozens of enterprises transition smoothly with minimal downtime.",
        readTime: "8 min read"
    },
    {
        id: "b2",
        title: "The Hidden Costs of Legacy System Debt",
        date: "October 28, 2025",
        category: "Tech Trends",
        excerpt: "Beyond maintenance fees: How outdated technology impacts productivity, security, and competitive advantage. Real numbers from our recent client assessments.",
        readTime: "6 min read"
    },
    {
        id: "b3",
        title: "AI Implementation: Hype vs. Reality for Mid-Sized Businesses",
        date: "October 15, 2025",
        category: "Analysis",
        excerpt: "Cutting through the AI buzzwords to identify practical, high-ROI use cases that don't require a data science team or massive infrastructure investment.",
        readTime: "10 min read"
    },
    {
        id: "b4",
        title: "Accessibility Isn't Optional: WCAG 2.2 Compliance Roadmap",
        date: "September 30, 2025",
        category: "Compliance",
        excerpt: "New WCAG 2.2 standards are here. What changed, what it means for your business, and a practical 90-day action plan for achieving Level AA compliance.",
        readTime: "7 min read"
    },
    {
        id: "b5",
        title: "Nexora Wins 'Best Tech Consulting Firm' Award",
        date: "September 15, 2025",
        category: "Company News",
        excerpt: "We're honored to be recognized by the Tech Excellence Council for our commitment to accessibility-first consulting and client success outcomes.",
        readTime: "3 min read"
    }
];

export default function Blog() {
    const location = useLocation();
    const isDemo = location.pathname.includes('/demo');
    const baseRoute = isDemo ? '/projects/nexora/demo' : '/projects/nexora';

    const crumbs = isDemo
        ? [
            { label: "Home", to: `${baseRoute}/home` },
            { label: "Insights" }
        ]
        : [
            { label: "Projects", to: "/projects" },
            { label: "Nexora Tech", to: "/projects/nexora" },
            { label: "Insights" }
        ];

    return (
        <><main className="nexora container insights-page nexora-base-theme">
            <div className="landing-breadcrumb-wrapper">
                <Breadcrumb items={crumbs} />
            </div>

            <div className={isDemo ? 'block1' : undefined}>
                <header className="insights-header">
                    <h1 id="insights-heading">Insights & Expertise</h1>
                    <p className="insights-subtitle">
                        Thought leadership, best practices, and industry analysis from our consulting team.
                    </p>
                </header>
            </div>
            <section className="block2" aria-labelledby="insights-heading">
                <div className="insights-grid">
                    {blogPosts.map(post => (
                        <article key={post.id} className="insights-card">
                            <span className="insights-category">{post.category}</span>
                            <h4>{post.title}</h4>
                            <div className="insights-meta">
                                <time dateTime={post.date}>{post.date}</time>
                                <span className="read-time">{post.readTime}</span>
                            </div>
                            <p className="insights-excerpt">{post.excerpt}</p>
                            <Link
                                to={`${baseRoute}/insights/${post.id}`}
                                className="insights-link"
                                aria-label={`Read more about ${post.title}`}
                            >
                                Read More →
                            </Link>
                        </article>
                    ))}
                </div>
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
        </main></>

    );
}