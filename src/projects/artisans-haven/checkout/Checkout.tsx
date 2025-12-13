/**
 * Checkout - Order Checkout Form Component
 * 
 * Multi-step checkout page with:
 * - Customer information form (name, email, address, city, zip)
 * - Real-time form validation
 * - Order summary with cart items
 * - Shipping and tax calculations
 * - WCAG 2.2 compliant form accessibility
 * 
 * Accessibility Features:
 * - HTML5 required attributes on all inputs
 * - aria-invalid for error states
 * - aria-describedby linking inputs to error messages
 * - Autocomplete attributes for browser autofill (WCAG 1.3.5)
 * - Error messages with role="alert" for screen readers
 * 
 * On successful submission:
 * - Clears cart using CartContext
 * - Navigates to CheckoutSuccess page
 * 
 * Demonstrates:
 * - Form validation patterns
 * - Accessible error handling
 * - Shopping cart integration
 * - Responsive form layout
 */

import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import { useNavigate, useLocation } from "react-router-dom";
import Breadcrumb from "../../../components/Breadcrumb";

export default function Checkout() {
    const { items, totalCount, clear } = useCart();
    const navigate = useNavigate();
    const location = useLocation();

    const isDemo = location.pathname.includes('/demo');
    const baseRoute = isDemo ? '/projects/artisans-haven/demo' : '/projects/artisans-haven';

    const [form, setForm] = useState({
        name: "",
        email: "",
        address: "",
        city: "",
        zip: ""
    });

    const [errors, setErrors] = useState<Record<string, string>>({});

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    function validate() {
        const e: Record<string, string> = {};
        if (!form.name.trim()) e.name = "Name is required";
        if (!form.email.trim() || !form.email.includes("@")) e.email = "Valid email required";
        if (!form.address.trim()) e.address = "Address required";
        if (!form.city.trim()) e.city = "City required";
        if (!form.zip.trim()) e.zip = "ZIP required";
        setErrors(e);
        return Object.keys(e).length === 0;
    }

    function submit(e: React.FormEvent) {
        e.preventDefault();
        if (!validate()) return;

        // Normally you'd send this to a server
        clear();
        navigate(`${baseRoute}/checkout/success`);
    }

    const crumbs = isDemo
        ? [
            { label: "Home", to: baseRoute },
            { label: "Checkout" }
        ]
        : [
            { label: "Projects", to: "/projects" },
            { label: "Artisans Haven", to: "/projects/artisans-haven" },
            { label: "Checkout" }
        ];

    const subtotal = items.reduce((sum, it) => sum + (it.product.price * it.quantity), 0);

    // Calculate shipping based on ZIP code (simplified logic)
    const calculateShipping = () => {
        if (!form.zip.trim()) return 0;
        // Demo logic: vary shipping by first digit of ZIP
        const firstDigit = parseInt(form.zip[0]!);
        if (isNaN(firstDigit)) return 0;
        // $5 base + $1 per zone (0-9)
        return 5 + firstDigit;
    };

    const shipping = calculateShipping();
    const taxRate = 0.08; // 8% tax
    const tax = subtotal * taxRate;
    const total = subtotal + shipping + tax;

    return (
        <section className="checkout-page">
            <Breadcrumb items={crumbs} />
            <h1>Checkout</h1>

            {items.length === 0 ? (
                <div className="empty-cart">
                    <p>Your cart is empty.</p>
                </div>
            ) : (
                <div className="checkout-content">
                    <div className="order-summary">
                        <h2>Order Summary</h2>
                        <div className="order-items">
                            {items.map((it) => (
                                <div key={it.product.slug} className="order-item">
                                    {it.product.image && (
                                        <img
                                            src={it.product.image}
                                            alt={it.product.title}
                                            className="order-item-image"
                                        />
                                    )}
                                    <div className="order-item-details">
                                        <h3>{it.product.title}</h3>
                                        <p className="quantity">Quantity: {it.quantity}</p>
                                        <p className="price">${(it.product.price * it.quantity).toFixed(2)}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="order-totals">
                            <div className="total-row">
                                <span>Subtotal:</span>
                                <span>${subtotal.toFixed(2)}</span>
                            </div>
                            <div className="total-row">
                                <span>Shipping:</span>
                                <span>{shipping > 0 ? `$${shipping.toFixed(2)}` : 'Enter ZIP'}</span>
                            </div>
                            <div className="total-row">
                                <span>Tax (8%):</span>
                                <span>${tax.toFixed(2)}</span>
                            </div>
                            <div className="order-total">
                                <span>Total:</span>
                                <span className="total-amount">${total.toFixed(2)}</span>
                            </div>
                        </div>
                    </div>

                    <div className="customer-info">
                        <h2>Customer Information</h2>

                        <form onSubmit={submit} className="checkout-form">
                            <div className="form-group">
                                <label htmlFor="name">Full Name</label>
                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    placeholder="John Doe"
                                    value={form.name}
                                    onChange={handleChange}
                                    required
                                    aria-required="true"
                                    aria-invalid={!!errors.name}
                                    aria-describedby={errors.name ? "name-error" : undefined}
                                    autoComplete="name"
                                />
                                {errors.name && (
                                    <p className="error" role="alert" id="name-error">{errors.name}</p>
                                )}
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    placeholder="john.doe@example.com"
                                    value={form.email}
                                    onChange={handleChange}
                                    required
                                    aria-required="true"
                                    aria-invalid={!!errors.email}
                                    aria-describedby={errors.email ? "email-error" : undefined}
                                    autoComplete="email"
                                />
                                {errors.email && (
                                    <p className="error" role="alert" id="email-error">{errors.email}</p>
                                )}
                            </div>

                            <div className="form-group">
                                <label htmlFor="address">Address</label>
                                <input
                                    id="address"
                                    name="address"
                                    type="text"
                                    placeholder="123 Main Street"
                                    value={form.address}
                                    onChange={handleChange}
                                    required
                                    aria-required="true"
                                    aria-invalid={!!errors.address}
                                    aria-describedby={errors.address ? "address-error" : undefined}
                                    autoComplete="street-address"
                                />
                                {errors.address && (
                                    <p className="error" role="alert" id="address-error">{errors.address}</p>
                                )}
                            </div>

                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="city">City</label>
                                    <input
                                        id="city"
                                        name="city"
                                        type="text"
                                        placeholder="Springfield"
                                        value={form.city}
                                        onChange={handleChange}
                                        required
                                        aria-required="true"
                                        aria-invalid={!!errors.city}
                                        aria-describedby={errors.city ? "city-error" : undefined}
                                        autoComplete="address-level2"
                                    />
                                    {errors.city && (
                                        <p className="error" role="alert" id="city-error">{errors.city}</p>
                                    )}
                                </div>

                                <div className="form-group">
                                    <label htmlFor="zip">ZIP Code</label>
                                    <input
                                        id="zip"
                                        name="zip"
                                        type="text"
                                        placeholder="12345"
                                        value={form.zip}
                                        onChange={handleChange}
                                        required
                                        aria-required="true"
                                        aria-invalid={!!errors.zip}
                                        aria-describedby={errors.zip ? "zip-error" : undefined}
                                        autoComplete="postal-code"
                                    />
                                    {errors.zip && (
                                        <p className="error" role="alert" id="zip-error">{errors.zip}</p>
                                    )}
                                </div>
                            </div>

                            <button className="checkout-btn" type="submit">
                                Place Order
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </section>
    );
}
