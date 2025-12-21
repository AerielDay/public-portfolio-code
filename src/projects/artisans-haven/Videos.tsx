import React from "react";
import { useLocation } from "react-router-dom";
import Breadcrumb from "../../components/Breadcrumb";

const videos = [
    {
        title: "Quilting Tutorial for Beginners",
        src: "https://www.youtube.com/embed/fe37aSedgTY",
        description: "Learn the basics of quilting with this comprehensive tutorial.",
    },
];

export default function Videos() {
    const location = useLocation();

    const isDemo = location.pathname.includes('/demo');
    const baseRoute = isDemo ? '/projects/artisans-haven/demo' : '/projects/artisans-haven';

    const crumbs = isDemo
        ? [
            { label: "Home", to: baseRoute },
            { label: "Videos" }
        ]
        : [
            { label: "Projects", to: "/projects" },
            { label: "Artisans Haven", to: "/projects/artisans-haven" },
            { label: "Videos" }
        ];

    if (!videos || videos.length === 0) {
        return <p>No videos available</p>;
    }

    return (
        <section className="videos-page">
            <Breadcrumb items={crumbs} />
            <h1>How-To Videos</h1>

            <div className="video-grid">
                {videos.map((v) => (
                    <article key={v.title} className="video-card">
                        <h2>{v.title}</h2>

                        <div className="video-wrapper">
                            <iframe
                                src={v.src}
                                title={v.title}
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>

                        {v.description && <p>{v.description}</p>}
                    </article>
                ))}
            </div>
        </section>
    );
}
