import React, { useEffect, useRef, useState } from 'react';
import { useDemoMode } from '../../contexts/DemoModeContext';
import './styles/_nexora.scss';
import { Link } from 'react-router-dom';
import landingSS from './styles/assets/nexora_landing_SS.png';
import servicesSS from './styles/assets/Services_SS.png';
import aboutSS from './styles/assets/About_SS.png';
import caseStudiesSS from './styles/assets/case-studies_SS.png';
import insightsSS from './styles/assets/insights_SS.png';
import contactSS from './styles/assets/contact_SS.png';

interface NexoraDetailsProps { demo?: boolean }

export default function NexoraDetails({ demo = false }: NexoraDetailsProps) {
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [lightboxImage, setLightboxImage] = useState<string | null>(null);
    const [expanded, setExpanded] = useState<string | null>(null);
    const innerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        function onKey(e: KeyboardEvent) {
            if (e.key === 'Escape') setLightboxOpen(false);
        }
        if (lightboxOpen) document.addEventListener('keydown', onKey);
        return () => document.removeEventListener('keydown', onKey);
    }, [lightboxOpen]);

    const { setIsDemo } = useDemoMode();
    useEffect(() => {
        // Ensure project details are treated as non-demo pages
        setIsDemo(false);
    }, [setIsDemo]);

   

    function openLightboxFor(src: string) {
        setLightboxImage(src);
        setLightboxOpen(true);
    }

    function closeLightbox() {
        setLightboxOpen(false);
    }
    // Screens for rows (now includes Landing Page)
    const screenRows = [
        {
            id: 'landing',
            featureTitle: 'Landing Page',
            linkTo: '.',
            linkLabel: 'View Landing →',
            featureDesc: 'A welcoming hero section with company tagline, service overview cards, trust signals, and call-to-action buttons. Features responsive layout, accessible navigation, and WCAG-compliant typography for an engaging introduction.',
            screen: {
                title: 'Landing Page',
                image: landingSS,
                desc: 'Hero section with tagline, service cards, trust stats, and prominent CTAs.'
            }
        },
        {
            id: 'services',
            featureTitle: 'Services',
            linkTo: 'services',
            linkLabel: 'Browse Services →',
            featureDesc: 'Browse a comprehensive catalog of consulting services with detailed descriptions, adaptive card layout, and accessible controls. Each service includes clear value propositions and links for deeper exploration.',
            screen: {
                title: 'Services Grid',
                image: servicesSS,
                desc: 'Service catalog grid displaying consulting offerings with descriptions and links.'
            }
        },
        {
            id: 'about',
            featureTitle: 'About',
            linkTo: 'about',
            linkLabel: 'Learn More →',
            featureDesc: 'Discover company background, team expertise, and mission with semantic structure, accessible headings, and clear typography. Highlights credentials, experience, and value-driven approach.',
            screen: {
                title: 'About Section',
                image: aboutSS,
                desc: 'Company background, team credentials, and mission statement in a clean layout.'
            }
        },
        {
            id: 'case-studies',
            featureTitle: 'Case Studies',
            linkTo: 'case-studies',
            linkLabel: 'View Case Studies →',
            featureDesc: 'Explore detailed client success stories showcasing project outcomes, ROI metrics, and transformation results. Features structured case layouts with accessible headings and readable content.',
            screen: {
                title: 'Case Studies',
                image: caseStudiesSS,
                desc: 'Client success stories with project outcomes, metrics, and transformation details.'
            }
        },
        {
            id: 'insights',
            featureTitle: 'Insights',
            linkTo: 'insights',
            linkLabel: 'View Insights →',
            featureDesc: 'Read industry insights and thought leadership articles built with Markdown support, semantic article structure, accessible heading hierarchy, and skip-navigation for a compliant reading experience.',
            screen: {
                title: 'Insights',
                image: insightsSS,
                desc: 'Thought leadership articles with readable typography and accessible structure.'
            }
        },
        {
            id: 'contact',
            featureTitle: 'Contact',
            linkTo: 'contact',
            linkLabel: 'Get in Touch →',
            featureDesc: 'Connect via an accessible contact form with validation, company information, and clear call-to-action. Features keyboard-friendly controls and responsive layout for seamless communication.',
            screen: {
                title: 'Contact',
                image: contactSS,
                desc: 'Contact form with validation, company details, and clear submission prompts.'
            }
        }
    ];

    function toggleExpand(id: string) {
        setExpanded(expanded === id ? null : id);
    }

    return (
        <section className={`nexora-tech-project ${demo ? 'demo-mode' : ''}`}>
            <div className="hero hero-layout">
                <div className="hero-inner">
                    <div className="hero-copy">
                        <h1 className="project-title">Nexora Tech Consulting</h1>
                        <p className="project-subtitle">
                            A modern multi-page consulting showcase built with React 18, TypeScript, and React Router v6.
                            Features modular SCSS theming, accessible navigation (WCAG 2.0 AA), responsive design,
                            and Vite for fast development and HMR.
                        </p>

                        <div className="hero-ctas">
                            {demo ? (
                                <>
                                    <Link className="btn btn-primary" to="/projects/nexora" aria-label="Back to overview">Project Overview</Link>
                                    <a
                                        className="btn btn-ghost"
                                        href="https://github.com/AerielDay/public-portfolio-code/tree/main/src/projects/nexora"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label="View source code on GitHub"
                                    >
                                        Source Code
                                    </a>
                                </>
                            ) : (
                                <>
                                    <Link className="btn btn-primary" to="/projects/nexora/demo/home" aria-label="View live demo">Live Demo</Link>
                                    <a
                                        className="btn btn-ghost"
                                        href="https://github.com/AerielDay/public-portfolio-code/tree/main/src/projects/nexora"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label="View source code on GitHub"
                                    >
                                        Source Code
                                    </a>
                                </>
                            )}
                        </div>
                    </div>

                    {/* Landing screen card moved to rows below */}
                </div>
            </div>
            <div className="interface-rows" aria-label="Interface screens with explanations">
                {screenRows.map(row => {
                    const isOpen = expanded === row.id;
                    const imageSrc = row.screen.image;
                    return (
                        <div className="interface-row" key={row.id}>
                            {!demo && (
                                <div className="feature-explainer">
                                    <h3>{row.featureTitle}</h3>
                                    <p>{row.featureDesc}</p>
                                </div>
                            )}
                            <div className={`screen-card ${isOpen ? 'expanded' : ''}`}>
                                <div className="screen-header">
                                    <button
                                        className="expanded-btn"
                                        aria-expanded={isOpen}
                                        aria-controls={`panel-${row.id}`}
                                        onClick={() => toggleExpand(row.id)}
                                    >
                                        <span className="expand-label">{row.screen.title}</span>
                                        <span className="chevron" aria-hidden="true">{isOpen ? '▾' : '▸'}</span>
                                    </button>
                                    <button
                                        className="view-btn"
                                        onClick={() => imageSrc && openLightboxFor(imageSrc)}
                                        aria-label={`View large ${row.screen.title} screenshot`}
                                        disabled={!imageSrc}
                                    >View Large</button>
                                </div>
                                <div
                                    id={`panel-${row.id}`}
                                    className="screen-panel"
                                    hidden={!isOpen}
                                >
                                    {imageSrc && (
                                        <img
                                            src={imageSrc}
                                            alt={`${row.screen.title} screenshot`}
                                            className="screen-shot"
                                        />
                                    )}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            {lightboxOpen && lightboxImage && (
                <div
                    className="lightbox"
                    role="dialog"
                    aria-modal="true"
                    onClick={closeLightbox}
                >
                    <button className="lightbox-close" onClick={closeLightbox} aria-label="Close preview">
                        ×
                    </button>
                    <div
                        className="lightbox-inner"
                        ref={innerRef}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <img src={lightboxImage} alt="Expanded interface screenshot" />
                    </div>
                </div>
            )}
        </section>
    );
}