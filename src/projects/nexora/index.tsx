/**
 * Nexora Tech Consulting - Portfolio Project Router
 * 
 * Tech consulting website showcasing:
 * - Professional business website layout
 * - Service catalog presentation
 * - Case studies with project highlights
 * - Complete consulting company structure
 * - SCSS styling with professional theme
 * 
 * Routes:
 * - /projects/nexora - Home page with hero section
 * - /projects/nexora/services - Detailed service offerings
 * - /projects/nexora/about - Company story, team, and values
 * - /projects/nexora/case-studies - Client success stories
 * - /projects/nexora/blog - Insights and thought leadership
 * - /projects/nexora/contact - Contact form and information
 */

// src/projects/nexora/index.tsx
import React from "react";
import { Routes, Route, Link, Outlet } from "react-router-dom";
import ProjectDetails from "./ProjectDetails";
import NexoraHome from "./NexoraHome";
import Services from "./Services";
import About from "./About";
import CaseStudies from "./CaseStudies";
import Contact from "./Contact";
import NexoraDemoLayout from "./NexoraDemoLayout";
import Insights from "./Insights";
import NexoraSitemap from "./NexoraSitemap";
import ServiceDetailRouter from "./services/ServiceDetailRouter";
import DemoPlaceholder from "../../components/DemoPlaceholder";
// import "./styles/_nexora.scss";

export default function NexoraModule() {
  return (
    <Routes>
      {/* Main project view (no demo theme, neutral wrapper) */}
      <Route element={<main className="container" aria-labelledby="nexora-heading">
        <Outlet />
      </main>}>
        <Route index element={<ProjectDetails />} />
        <Route path="home" element={<NexoraHome />} />
        <Route path="services">
          <Route index element={<Services />} />
          <Route path=":slug" element={<ServiceDetailRouter />} />
        </Route>
        <Route path="about" element={<About />} />
        <Route path="case-studies" element={<CaseStudies />} />
        <Route path="insights" element={<Insights />} />
        <Route
          path="insights/:id"
          element={
            <DemoPlaceholder
              title="Demo Article Placeholder"
              message="This article is a placeholder in the demo."
              backLink="/projects/nexora/insights"
              backLabel="Back to Insights"
            />
          }
        />
        <Route path="contact" element={<Contact />} />
        <Route
          path="privacy"
          element={
            <DemoPlaceholder
              title="Privacy Policy (Demo)"
              message="This page is a placeholder in the demo."
              backLink="/projects/nexora/home"
              backLabel="Back to Nexora"
            />
          }
        />
        <Route
          path="terms"
          element={
            <DemoPlaceholder
              title="Terms of Service (Demo)"
              message="This page is a placeholder in the demo."
              backLink="/projects/nexora/home"
              backLabel="Back to Nexora"
            />
          }
        />
      </Route>
      {/* Demo routes - wrapped in NexoraDemoLayout */}
      <Route path="demo/*" element={<NexoraDemoLayout />}>
        <Route index element={<NexoraHome />} />
        <Route path="home" element={<NexoraHome />} />
        <Route path="services">
          <Route index element={<Services />} />
          <Route path=":slug" element={<ServiceDetailRouter />} />
        </Route>
        <Route path="about" element={<About />} />
        <Route path="case-studies" element={<CaseStudies />} />
        <Route path="caseStudies" element={<CaseStudies />} />
        <Route path="insights" element={<Insights />} />
        <Route
          path="insights/:id"
          element={
            <DemoPlaceholder
              title="Demo Article Placeholder"
              message="This article is a placeholder in the demo."
              backLink="/projects/nexora/demo/insights"
              backLabel="Back to Demo Insights"
            />
          }
        />
        <Route path="contact" element={<Contact />} />
        <Route path="sitemap" element={<NexoraSitemap />} />
        <Route
          path="privacy"
          element={
            <DemoPlaceholder
              title="Privacy Policy (Demo)"
              message="This page is a placeholder in the demo."
              backLink="/projects/nexora/demo/home"
              backLabel="Back to Demo Home"
            />
          }
        />
        <Route
          path="terms"
          element={
            <DemoPlaceholder
              title="Terms of Service (Demo)"
              message="This page is a placeholder in the demo."
              backLink="/projects/nexora/demo/home"
              backLabel="Back to Demo Home"
            />
          }
        />
      </Route>
    </Routes>
  );
}
