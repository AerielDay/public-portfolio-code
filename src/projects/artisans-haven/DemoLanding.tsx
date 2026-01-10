/**
 * DemoLanding - Artisan's Haven Demo Home Page
 * 
 * Landing page for the live e-commerce demo featuring:
 * - Hero section with welcoming message and imagery
 * - Popular products showcase (top 3 items)
 * - Featured video tutorial with embedded YouTube player
 * - Newsletter subscription form
 * - Internal navigation with tooltips
 * 
 * This is the entry point when visiting /projects/artisans-haven/demo
 * 
 * Demonstrates:
 * - Product grid layout with add-to-cart functionality
 * - Form handling and state management
 * - Video embedding and responsive design
 * - Call-to-action buttons and links
 */

import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./_artisans.scss";
import AHNavbar from "./components/AHNavbar";
import { products } from "./data/products";
import { useCart } from "./context/CartContext";

export default function DemoLanding() {
    const { add } = useCart();
    const [email, setEmail] = useState("");
    const [subscribed, setSubscribed] = useState(false);

    // Top 3 popular products
    const popularProducts = products.slice(0, 3);

    const handleSubscribe = (e: React.FormEvent) => {
        e.preventDefault();
        setSubscribed(true);
        setEmail("");
    };

    return (
        <>
            {/* Hero Section */}
            <section className="demo-hero">
                <div className="demo-hero-inner">
                    <div className="hero-content">
                        <h1>Welcome to Artisan's Haven</h1>
                        <p>
                            Discover handcrafted quilts, vintage patterns, and DIY kits for the modern maker.
                        </p>
                    </div>
                    <div className="hero-image">
                        <img src="/images/images.jpg" alt="Artisan's Haven Logo" />
                    </div>
                </div>
            </section>

            {/* Internal Navigation */}
            <div className="demo-internal-nav" aria-label="Site sections">
                <AHNavbar showTooltips homeHref="/projects/artisans-haven/demo" brandHref="/projects/artisans-haven/demo" basePath="/projects/artisans-haven/demo" />
            </div>

            {/* Popular Products Section */}
            <section className="demo-section popular-products">
                <h2>Popular Products</h2>
                <div className="product-grid">
                    {popularProducts.map((product) => (
                        <Link
                            key={product.slug}
                            to={`/projects/artisans-haven/demo/products/${product.slug}`}
                            className="demo-product-card"
                        >
                            {product.image && (
                                <img src={product.image} alt={product.title} className="product-img" />
                            )}
                            <div className="product-info">
                                <h3>{product.title}</h3>
                                <p className="price">${product.price}</p>
                                <button
                                    className="add-to-cart-btn"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        e.stopPropagation();
                                        add(product);
                                    }}
                                    aria-label={`Add ${product.title} to cart`}
                                >
                                    Add to Cart
                                </button>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>

            <div className="home_encapsul">
            {/* Featured Video Section */}
            <section className="demo-section featured-video">
                <h2>Most Watched Tutorial</h2>
                <div className="video-feature">
                    <div className="video-embed">
                        <iframe
                            width="100%"
                            height="315"
                            src="https://www.youtube.com/embed/fe37aSedgTY"
                            title="How to Create a Patchwork Quilt"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                    <div className="video-info">
                        <h3>How to Create a Patchwork Quilt</h3>
                        <p>Learn the fundamentals of quilting with our most popular tutorial. Perfect for beginners!</p>
                        <Link to="/projects/artisans-haven/demo/videos" className="btn-link">
                            Watch More Videos →
                        </Link>
                    </div>
                </div>
            </section>

            {/* Newsletter & Featured Blog Section */}
            <section className="demo-section dual-section">
                <div className="newsletter-box">
                    <h2>Join Our Newsletter</h2>
                    <p>Get weekly crafting tips, new product releases, and exclusive offers.</p>
                    {!subscribed ? (
                        <form onSubmit={handleSubscribe} className="newsletter-form">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                aria-label="Email address"
                            />
                            <button type="submit" className="subscribe-btn">Subscribe</button>
                        </form>
                    ) : (
                        <p className="success-message">Thanks for subscribing! </p>
                    )}
                </div>

                <div className="featured-blog">
                    <h2>Featured Article</h2>
                    <Link to="/projects/artisans-haven/demo/blog" className="blog-preview">
                        <h3>Getting Started with Quilting</h3>
                        <p>
                            Quilting is an ancient craft that combines artistry with functionality.
                            In this guide, we'll cover essential tools, techniques, and beginner-friendly patterns...
                        </p>
                        <span className="read-more">Read More </span>
                    </Link>
                </div>
            </section>
            </div>
        </>
    );
}
