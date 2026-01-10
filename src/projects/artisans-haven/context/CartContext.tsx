/**
 * CartContext - Global Shopping Cart State Management
 * 
 * Provides shopping cart functionality across the Artisan's Haven project:
 * - Add/remove/update items in cart
 * - Persist cart data to localStorage
 * - Track total item count
 * - Announce cart updates to screen readers (WCAG 4.1.3 compliance)
 * 
 * Usage:
 * 1. Wrap app with <CartProvider> in main.tsx
 * 2. Access cart with useCart() hook in any component
 * 
 * State persists across page refreshes using localStorage.
 * Includes accessible announcements for cart changes.
 */

import React, { createContext, useContext, useEffect, useState } from "react";
import type { Product } from "../data/products";

type CartItem = { product: Product; quantity: number };
type CartContextType = {
    items: CartItem[];
    add: (p: Product, qty?: number) => void;
    remove: (slug: string) => void;
    updateQty: (slug: string, qty: number) => void;
    clear: () => void;
    totalCount: number;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

/**
 * Custom hook for localStorage persistence
 * Automatically syncs state changes to localStorage
 */
function useLocalStorage<T>(key: string, initial: T) {
    const [state, setState] = useState<T>(() => {
        try {
            const raw = localStorage.getItem(key);
            return raw ? (JSON.parse(raw) as T) : initial;
        } catch {
            return initial;
        }
    });
    useEffect(() => {
        try {
            localStorage.setItem(key, JSON.stringify(state));
        } catch { }
    }, [key, state]);
    return [state, setState] as const;
}

export function CartProvider({ children }: { children: React.ReactNode }) {
    const [items, setItems] = useLocalStorage<CartItem[]>("ah-cart", []);
    const [announce, setAnnounce] = useState("");

    // Auto-clear screen reader announcements after 1.5 seconds
    useEffect(() => {
        if (!announce) return;
        const id = setTimeout(() => setAnnounce(""), 1500);
        return () => clearTimeout(id);
    }, [announce]);

    /** Add product to cart (or increase quantity if already in cart) */
    function add(product: Product, qty = 1) {
        setItems((prev) => {
            const found = prev.find((it) => it.product.slug === product.slug);
            if (found) {
                return prev.map((it) =>
                    it.product.slug === product.slug ? { ...it, quantity: it.quantity + qty } : it
                );
            }
            return [...prev, { product, quantity: qty }];
        });
        setAnnounce(`${product.title} added to cart`);
    }

    /** Remove product from cart completely */
    function remove(slug: string) {
        setItems((prev) => prev.filter((it) => it.product.slug !== slug));
    }

    /** Update quantity of existing cart item */
    function updateQty(slug: string, qty: number) {
        setItems((prev) => prev.map((it) => it.product.slug === slug ? { ...it, quantity: qty } : it));
    }

    /** Clear entire cart */
    function clear() { setItems([]); }

    const totalCount = items.reduce((s, i) => s + i.quantity, 0);

    return (
        <CartContext.Provider value={{ items, add, remove, updateQty, clear, totalCount }}>
            {children}
            {/* Visually hidden live region for screen reader announcements (WCAG 4.1.3) */}
            <div aria-live="polite" style={{ position: 'absolute', left: -9999, top: 'auto' }}>{announce}</div>
        </CartContext.Provider>
    );
}

/**
 * Hook to access cart context
 * Must be used within CartProvider
 */
export function useCart() {
    const ctx = useContext(CartContext);
    if (!ctx) throw new Error("useCart must be used within CartProvider");
    return ctx;
}
