/**
 * Breadcrumb - Navigation Breadcrumb Component
 * 
 * Displays hierarchical navigation path:
 * - Renders clickable links for parent pages
 * - Shows current page as plain text with aria-current
 * - Separates items with › character
 * - WCAG 2.2 compliant with proper nav landmark and aria-label
 * 
 * Props:
 * - items: Array of { label, to? } objects
 *   - If 'to' is provided, renders as Link
 *   - If 'to' is omitted, renders as current page (aria-current="page")
 * 
 * Used throughout Artisan's Haven to show user's location in site hierarchy.
 */

import React from "react";
import { Link } from "react-router-dom";

export type Crumb = { label: string; to?: string };

export default function Breadcrumb({ items }: { items: Crumb[] }) {
    if (!items || items.length === 0) return null;
    return (
        <nav className="breadcrumb" aria-label="Breadcrumb">
            {items.map((it, i) => (
                <span key={i}>
                    {it.to ? (
                        <Link to={it.to}>{it.label}</Link>
                    ) : (
                        <span aria-current="page">{it.label}</span>
                    )}
                    {i < items.length - 1 && <span className="sep">›</span>}
                </span>
            ))}
        </nav>
    );
}
