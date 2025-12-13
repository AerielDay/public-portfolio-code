/**
 * ProjectsIndex Component - Portfolio Project Router
 * 
 * Routes to individual portfolio project showcases:
 * - /projects/artisans-haven/* - E-commerce craft marketplace (React + TypeScript)
 * - /projects/nexora/* - Tech consulting website (React + SCSS)
 * - /projects/taskflow/* - Task management app (React Context API)
 * 
 * Each project is a self-contained mini-application demonstrating
 * different frontend skills and techniques.
 */


import { Routes, Route, Link } from "react-router-dom";
import React, { useState } from "react";

// Import your three portfolio project apps
import ArtisansHaven from "../../projects/artisans-haven";
import Nexora from "../../projects/nexora";
import NexoraLanding from "../../projects/nexora/styles/assets/nexora_landing_SS.png";
import Taskflow from "../../projects/taskflow";

function ProjectsIntro() {
    const [modalImg, setModalImg] = useState<string | null>(null);

    return (
        <>
            <div className="projects-index-intro">
                <h1 className="projects-index-title">Portfolio Projects</h1>
                <p className="projects-index-subtitle">
                    Explore the demos below. Click a project name to view its detailed overview.
                </p>
                <div className="projects-intro-list">
                    <div className="projects-intro-card">
                        <div className="projects-intro-info">
                            <Link className="projects-intro-link" to="/projects/artisans-haven">Artisan's Haven</Link>
                            <p className="projects-intro-desc">
                                E-commerce craft marketplace demo featuring product grid, cart, tutorials, and newsletter.
                            </p>
                            <Link to="/projects/artisans-haven" className="portfolio-btn">View Project Details</Link>
                        </div>
                        <div className="projects-intro-thumb">
                            <img
                                src="/images/landing-SS.png"
                                alt="Artisan's Haven preview"
                                onClick={() => setModalImg("/images/landing-SS.png")}
                                style={{ cursor: "pointer" }}
                            />
                        </div>
                    </div>
                    <div className="projects-intro-card">
                        <div className="projects-intro-info">
                            <Link className="projects-intro-link" to="/projects/nexora">Nexora Consulting</Link>
                            <p className="projects-intro-desc">
                                Tech consulting showcase with services, case studies, and accessibility-focused UI.
                            </p>
                            <Link to="/projects/nexora" className="portfolio-btn">View Project Details</Link>
                        </div>
                        <div className="projects-intro-thumb">
                            <img
                                src={NexoraLanding}
                                alt="Nexora preview"
                                onClick={() => setModalImg(NexoraLanding)}
                                style={{ cursor: "pointer" }}
                            />
                        </div>
                    </div>
                </div>
            </div>
            {modalImg && (
                <div
                    className="modal-overlay"
                    onClick={() => setModalImg(null)}
                    role="dialog"
                    aria-modal="true"
                    aria-label="Project preview image"
                    onKeyDown={(e) => {
                        if (e.key === 'Escape') setModalImg(null);
                    }}
                >
                    <div className="modal-content" onClick={e => e.stopPropagation()}>
                        <img src={modalImg} alt="Project large preview" className="modal-img" />
                        <button className="modal-close" onClick={() => setModalImg(null)} aria-label="Close preview">×</button>
                    </div>
                </div>
            )}
        </>
    );
}

export default function ProjectsIndex() {
    return (
        <Routes>
            {/* Each project gets its own sub-route with nested routing */}
            <Route path="artisans-haven/*" element={<ArtisansHaven />} />
            <Route path="nexora/*" element={<Nexora />} />
            <Route path="taskflow/*" element={<Taskflow />} />

            {/* Default index route when visiting /projects */}
            <Route
                index
                element={<ProjectsIntro />}
            />
        </Routes>
    );
}
