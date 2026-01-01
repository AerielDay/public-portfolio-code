/**
 * Main Entry Point
 * 
 * Initializes the React application with:
 * - React Router for client-side routing
 * - Cart Context Provider for Artisan's Haven shopping cart state
 * - Global SCSS styles
 * 
 * The App component handles all page routing and layout structure.
 */

import React from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import App from './App'
import './styles/main.scss'
import { CartProvider } from "./projects/artisans-haven/context/CartContext";
import { DemoModeProvider } from "./contexts/DemoModeContext";

// If the user lands on a non-hash URL (e.g. /projects), redirect to the hash-based route
if (!window.location.hash && window.location.pathname !== '/') {
  const newHash = `#${window.location.pathname}${window.location.search}${window.location.hash}`;
  window.location.replace(newHash);
}

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HashRouter>
      <DemoModeProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </DemoModeProvider>
    </HashRouter>
  </React.StrictMode>
)
