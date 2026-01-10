/**
 * CartDrawer - Shopping Cart Overlay Component
 * 
 * Side drawer that displays cart contents with:
 * - Item list with quantity controls
 * - Item removal buttons
 * - Total price calculation
 * - Checkout button
 * - WCAG 2.2 compliant accessibility (dialog role, keyboard navigation)
 * 
 * Features:
 * - Closes on ESC key or overlay click
 * - Focus management (drawer receives focus when opened)
 * - Accessible quantity controls with aria-labels
 * - Live region for quantity updates
 * - Dynamic checkout URL (adapts for demo vs project routes)
 * 
 * Used by AHNavbar component across all Artisan's Haven pages.
 */

import React, { useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { useCart } from "../projects/artisans-haven/context/CartContext";

interface CartDrawerProps {
    open: boolean;
    onClose: () => void;
}

export default function CartDrawer({ open, onClose }: CartDrawerProps) {
    const { items, remove, updateQty, totalCount } = useCart();
    const drawerRef = useRef<HTMLDivElement | null>(null);
    const location = useLocation();

    // Detect if we're in demo mode
    const isDemo = location.pathname.includes('/demo');
    const checkoutUrl = isDemo
        ? '/projects/artisans-haven/demo/checkout'
        : '/projects/artisans-haven/checkout';

    // compute total price locally
    const totalPrice = items.reduce((sum, it) => sum + it.product.price * it.quantity, 0);

    // Close on ESC key
    useEffect(() => {
        function handleKey(e: KeyboardEvent) {
            if (e.key === "Escape") onClose();
        }
        if (open) document.addEventListener("keydown", handleKey);
        return () => document.removeEventListener("keydown", handleKey);
    }, [open, onClose]);

    // Focus drawer when opened
    useEffect(() => {
        if (open && drawerRef.current) {
            drawerRef.current.focus();
        }
    }, [open]);

    if (!open) return null;

    return (
        <div
            className="cart-overlay"
            role="dialog"
            aria-modal="true"
            aria-label="Shopping cart"
            onClick={onClose}
        >
            <div
                className="cart-drawer"
                ref={drawerRef}
                tabIndex={-1}
                onClick={(e) => e.stopPropagation()} // prevent overlay click from closing
            >
                {/* Header */}
                <div className="cart-header">
                    <h2>Cart ({totalCount})</h2>
                    <button
                        className="close-btn"
                        aria-label="Close cart"
                        onClick={onClose}
                    >
                        ×
                    </button>
                </div>

                {/* Cart items */}
                <div className="cart-items">
                    {items.length === 0 ? (
                        <p className="empty">Your cart is empty.</p>
                    ) : (
                        items.map((it) => (
                            <div className="cart-item" key={it.product.slug}>
                                {it.product.image && (
                                    <img
                                        src={it.product.image}
                                        alt={it.product.title}
                                        className="cart-item-image"
                                    />
                                )}
                                <div className="info">
                                    <h3>{it.product.title}</h3>
                                    <p>
                                        {it.quantity} × ${it.product.price}
                                    </p>
                                </div>

                                <div className="controls">
                                    <div className="qty-controls" aria-label={`Quantity controls for ${it.product.title}`}>
                                        <button
                                            onClick={() => updateQty(it.product.slug, Math.max(it.quantity - 1, 1))}
                                            aria-label={`Decrease quantity of ${it.product.title}`}
                                        >
                                            –
                                        </button>

                                        <span aria-live="polite" aria-atomic="true">{it.quantity}</span>

                                        <button
                                            onClick={() => updateQty(it.product.slug, it.quantity + 1)}
                                            aria-label={`Increase quantity of ${it.product.title}`}
                                        >
                                            +
                                        </button>
                                    </div>

                                    <button
                                        className="remove-btn"
                                        onClick={() => remove(it.product.slug)}
                                        aria-label={`Remove ${it.product.title}`}
                                    >
                                        Remove
                                    </button>
                                </div>
                            </div>
                        ))
                    )}
                </div>

                {/* Footer */}
                {items.length > 0 && (
                    <div className="cart-footer">
                        <p className="total">Total: ${totalPrice}</p>

                        <Link
                            to={checkoutUrl}
                            className="checkout-btn"
                            onClick={onClose}
                        >
                            Go to Checkout
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
}
