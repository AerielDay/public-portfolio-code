import React, { useEffect, useRef, useState } from 'react';
import './_artisans.scss';
import { Link } from 'react-router-dom';
import landingSS from './assets/landing-SS.png';
import productsSS from './assets/products-SS.png';
import blogSS from './assets/blog-SS.png';
import videosSS from './assets/videos-SS.png';

interface ArtisansHomeProps { demo?: boolean }

export default function ArtisansHavenApp({ demo = false }: ArtisansHomeProps) {
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
      featureDesc: 'The Artisan’s Haven demo landing page includes a welcoming hero section, accessible navigation, a grid of popular products with add-to-cart, an embedded YouTube tutorial, a newsletter signup form with validation, and a featured blog preview. All elements are responsive, accessible, and styled with modular SCSS for a seamless user experience.',
      screen: {
        title: 'Landing Page',
        image: landingSS,
        desc: 'Hero section featuring popular products, embedded tutorial, and newsletter signup.'
      }
    },
    {
      id: 'products',
      featureTitle: 'Products',
      linkTo: 'products',
      linkLabel: 'Browse Products →',
      featureDesc: 'Browse a curated product grid with filtering, responsive card layout, and add-to-cart functionality powered by React Context. Each product includes image, title, price, and accessible controls for seamless cart interaction.',
      screen: {
        title: 'Products Grid',
        image: productsSS,
        desc: 'Product cards displaying handmade items with images, prices, and add-to-cart buttons.'
      }
    },
    {
      id: 'blog',
      featureTitle: 'Blog',
      linkTo: 'blog',
      linkLabel: 'Visit Blog →',
      featureDesc: 'Read crafting articles and tutorials built with Markdown support, semantic article structure, accessible heading hierarchy, and skip-navigation integration for a readable, compliant content experience.',
      screen: {
        title: 'Blog Listing',
        image: blogSS,
        desc: 'Blog posts with titles, excerpts, and read-more links in a clean layout.'
      }
    },
    {
      id: 'videos',
      featureTitle: 'Videos',
      linkTo: 'videos',
      linkLabel: 'Watch Tutorials →',
      featureDesc: 'Watch interactive craft tutorials with embedded playback, transcripts for accessibility (WCAG media guidelines), and keyboard-focusable controls for an inclusive learning experience.',
      screen: {
        title: 'Tutorial Videos',
        image: videosSS,
        desc: 'Video tutorial grid with embedded players and accessible controls.'
      }
    }
  ];

  function toggleExpand(id: string) {
    setExpanded(expanded === id ? null : id);
  }

  return (
    <section className={`artisan-haven ${demo ? 'demo-mode' : ''}`}>
      <div className="hero hero-layout">
        <div className="hero-inner">
          <div className="hero-copy">
            <h1 className="project-title">Artisan’s Haven</h1>
            <p className="project-subtitle">
              A fully responsive e-commerce demo built with React 18, TypeScript, and React Router v6.
              Features persistent cart state with Context API, modular SCSS theming, accessible navigation
              (WCAG 2.0 AA), and Vite for fast development and HMR.
            </p>

            <div className="hero-ctas">
              {demo ? (
                <>
                  <Link className="btn btn-primary" to="/projects/artisans-haven" aria-label="Back to overview">Project Overview</Link>
                  <a
                    className="btn btn-ghost"
                    href="https://github.com/AerielDay/public-portfolio-code/tree/main/src/projects/artisans-haven"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="View source code on GitHub"
                  >
                    Source Code
                  </a>
                </>
              ) : (
                <>
                  <Link className="btn btn-primary" to="/projects/artisans-haven/demo" aria-label="View live demo">Live Demo</Link>
                  <a
                    className="btn btn-ghost"
                    href="https://github.com/AerielDay/public-portfolio-code/tree/main/src/projects/artisans-haven"
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
