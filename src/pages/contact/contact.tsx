// src/projects/nexora/Contact.tsx
import React, { useState } from "react";
import { Link } from 'react-router-dom';
import './contact.scss';

export default function Contact() {
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

    return (<><section className="contact-me" aria-labelledby="contact-heading">
        <div className="contact-container">
            <div className="contact-info">
                <h3 id="contact-heading">Get In Touch</h3>
                <p className="contact-intro">
                    Ready to collaborate or discuss a potential project? Feel free to reach out—I’d love to connect and hear what you're working on.
                </p>

                <div className="contact-details">
                    <div className="contact-item">
                        <h4>Phone</h4>
                        <p><a href="tel:+15555551234">Available on request</a></p>
                    </div>

                    <div className="contact-item">
                        <h4>Email</h4>
                        <p><a href="mailto:hello@nexoratech.com">Available on request</a></p>
                    </div>
                </div>
            </div>

            <div className="contact-form-wrapper">
                <form className="contact-form" onSubmit={handleSubmit}>
                    <h4>Send me a message</h4>

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

                    
                </form>
            </div>
        </div>

    </section></>


    );
}
