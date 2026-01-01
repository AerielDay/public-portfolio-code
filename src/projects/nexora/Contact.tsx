// src/projects/nexora/Contact.tsx
import React, { useState } from "react";
import { Link, useLocation } from 'react-router-dom';
import Breadcrumb from '../../components/Breadcrumb';

export default function Contact() {
    const location = useLocation();
    const isDemo = location.pathname.includes('/demo');
    const baseRoute = isDemo ? '/projects/nexora/demo' : '/projects/nexora';

    const crumbs = isDemo
        ? [
            { label: "Home", to: `${baseRoute}/home` },
            { label: "Contact" }
        ]
        : [
            { label: "Projects", to: "/projects" },
            { label: "Nexora Tech", to: "/projects/nexora" },
            { label: "Contact" }
        ];
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        company: "",
        service: "",
        message: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Demo only - would connect to backend in real implementation
        alert("Thank you for your interest! This is a portfolio demo, so no message was actually sent.");
        setFormData({ name: "", email: "", company: "", service: "", message: "" });
    };

    return (
        <main className="nexora contact-page nexora-base-theme" aria-labelledby="contact-heading">
            <div className={isDemo ? 'block1' : undefined}>
                <div className="landing-breadcrumb-wrapper">
                    <Breadcrumb items={crumbs} />
                </div>
            </div>
            <section className="nexora-base-theme block2" aria-labelledby="contact-heading">
                <div className="contact-container">
                    <div className="contact-info">
                        <h3 id="contact-heading">Get In Touch</h3>
                        <p className="contact-intro">
                            Ready to start your digital transformation? Let's discuss how Nexora can help
                            your business leverage technology for measurable growth.
                        </p>

                        <div className="contact-details">
                            <div className="contact-item">
                                <h4>Phone</h4>
                                <p><a href="tel:+15555551234">(555) 555-1234</a></p>
                            </div>

                            <div className="contact-item">
                                <h4>Email</h4>
                                <p><a href="mailto:hello@nexoratech.com">hello@nexoratech.com</a></p>
                            </div>

                            <div className="contact-item">
                                <h4>Office</h4>
                                <p>
                                    123 Innovation Drive, Suite 400<br />
                                    San Francisco, CA 94105
                                </p>
                            </div>

                            <div className="contact-item">
                                <h4>Business Hours</h4>
                                <p>
                                    Monday - Friday: 9:00 AM - 6:00 PM PST<br />
                                    Weekend: By appointment only
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="contact-form-wrapper">
                        <form className="contact-form" onSubmit={handleSubmit}>
                            <h4>Send Us a Message</h4>

                            <div className="form-group">
                                <label htmlFor="name">Name *</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    aria-required="true" />
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">Email *</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    aria-required="true" />
                            </div>

                            <div className="form-group">
                                <label htmlFor="company">Company</label>
                                <input
                                    type="text"
                                    id="company"
                                    name="company"
                                    value={formData.company}
                                    onChange={handleChange} />
                            </div>

                            <div className="form-group">
                                <label htmlFor="service">How can we help? *</label>
                                <select
                                    id="service"
                                    name="service"
                                    value={formData.service}
                                    onChange={handleChange}
                                    required
                                    aria-required="true"
                                >
                                    <option value="">Select a service...</option>
                                    <option value="digital-transformation">Digital Transformation</option>
                                    <option value="cloud-migration">Cloud Migration</option>
                                    <option value="modernization">Legacy System Modernization</option>
                                    <option value="accessibility">Accessibility Audit</option>
                                    <option value="data-analytics">Data & Analytics</option>
                                    <option value="cybersecurity">Cybersecurity</option>
                                    <option value="other">Other / General Inquiry</option>
                                </select>
                            </div>

                            <div className="form-group">
                                <label htmlFor="message">Message *</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows={5}
                                    required
                                    aria-required="true" />
                            </div>

                            <button type="submit" className="btn-submit">
                                Start Your Consultation
                            </button>

                            <p className="privacy-note">
                                By submitting this form, you agree to our <Link to="/projects/nexora/demo/privacy">Privacy Policy</Link>.
                            </p>
                        </form>
                    </div>
                </div>

            </section>

            <footer className="nexora-footer nexora-base-theme transparent" >
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