import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useCart } from "../context/CartContext";
import CartDrawer from "../../../components/CartDrawer";

type AHNavbarProps = { showTooltips?: boolean; homeHref?: string; brandHref?: string; basePath?: string };

export default function ProjectNavbar({ showTooltips = false, homeHref, brandHref, basePath }: AHNavbarProps) {
    const { totalCount } = useCart();
    const [cartOpen, setCartOpen] = useState(false);
    const base = basePath || "/projects/artisans-haven";

    return (
        <>
            <nav className="ah-nav">
                <div className="leftSide-navbox">
                <div className="left">
                    <NavLink to={brandHref || "/projects/artisans-haven"} className="brand">
                        Artisan’s Haven
                    </NavLink>
                </div>

                <div className="links">
                    {showTooltips ? (
                        <>
                            <span className="nav-item-tooltip">
                                <NavLink to={homeHref || "/projects/artisans-haven"} end aria-describedby="tt-ah-home">Home</NavLink>
                                {/* <span id="tt-ah-home" className="tooltip">Overview of the project and features</span> */}
                            </span>
                            <span className="nav-item-tooltip">
                                <NavLink to={`${base}/products`} aria-describedby="tt-ah-products">Products</NavLink>
                                {/* <span id="tt-ah-products" className="tooltip">Browse handmade items and add to cart</span> */}
                            </span>
                            <span className="nav-item-tooltip">
                                <NavLink to={`${base}/blog`} aria-describedby="tt-ah-blog">Blog</NavLink>
                                {/* <span id="tt-ah-blog" className="tooltip">Read articles and guides</span> */}
                            </span>
                            <span className="nav-item-tooltip">
                                <NavLink to={`${base}/videos`} aria-describedby="tt-ah-videos">Videos</NavLink>
                                {/* <span id="tt-ah-videos" className="tooltip">Watch tutorials with transcripts</span> */}
                            </span>
                        </>
                    ) : (
                        <>
                            <NavLink to={homeHref || "/projects/artisans-haven"} end>Home</NavLink>
                            <NavLink to={`${base}/products`}>Products</NavLink>
                            <NavLink to={`${base}/blog`}>Blog</NavLink>
                            <NavLink to={`${base}/videos`}>Videos</NavLink>
                        </>
                    )}
                </div>
            </div>
                <button
                    className="cart-icon"
                    onClick={() => setCartOpen(true)}
                    aria-label={`Open shopping cart${totalCount > 0 ? `, ${totalCount} items` : ''}`}
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="9" cy="21" r="1"></circle>
                        <circle cx="20" cy="21" r="1"></circle>
                        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                    </svg>
                    {totalCount > 0 && <span className="cart-count" aria-hidden="true">{totalCount}</span>}
                </button>
            </nav>

            <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
        </>
    );
}
