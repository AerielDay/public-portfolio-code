import React from "react";
import { Link, useLocation } from "react-router-dom";
import Breadcrumb from "../../../components/Breadcrumb";

export default function CheckoutSuccess() {
    const location = useLocation();
    const isDemo = location.pathname.includes('/demo');
    const baseRoute = isDemo ? '/projects/artisans-haven/demo' : '/projects/artisans-haven';

    const crumbs = isDemo
        ? [
            { label: "Home", to: baseRoute },
            { label: "Order Complete" }
        ]
        : [
            { label: "Projects", to: "/projects" },
            { label: "Artisans Haven", to: "/projects/artisans-haven" },
            { label: "Order Complete" }
        ];

    return (
        <section className="checkout-success">
            <Breadcrumb items={crumbs} />
            <div className="success-content">
                <div className="success-icon">✓</div>
                <h1>Order Complete!</h1>
                <p>Your order has been placed successfully. Thank you for your purchase!</p>
                <p className="order-note">You will receive a confirmation email shortly.</p>

                <Link to={`${baseRoute}/products`} className="continue-btn">
                    Continue Shopping
                </Link>
            </div>
        </section>
    );
}
