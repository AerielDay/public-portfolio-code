import React from 'react'
export default function Home() {
    return (
        <main>
            <p style={{ fontSize: "1rem", color: "var(--text-color)", marginLeft: "2rem", marginRight: "2rem" }}>
                A modern, detail-oriented portfolio built with React, TypeScript, and SCSS, showcasing both the craft of design and the discipline of development through curated case studies and clean, scalable UI patterns.
            </p>
            <section className="home-section" aria-labelledby="home-heading">
                <div className="home-text">
                    <h1 id="home-heading" style={{ position: "absolute", left: "-10000px", width: "1px", height: "1px", overflow: "hidden" }}>Aeriel Day — Front-End Developer</h1>
                    <p style={{ fontSize: "1rem", color: "var(--text-color)" }}>
                        I’m a multidisciplinary Web Developer and Designer with nearly a decade of experience transforming complex ideas into clean, intuitive digital experiences. I blend front-end development, UX/UI design, and practical problem-solving to build solutions that are both visually compelling and structurally sound.

                        My background spans ServiceNow development, custom web applications, modern frontend frameworks, and iterative troubleshooting—often stepping in to fix broken processes, refine existing systems, and implement improvements that directly support business goals. I approach projects with a focus on clarity, scalability, and user-centered design, always pushing just enough at the boundaries to create something modern, polished, and genuinely useful.

                        To see some of the work I’ve done, check out the Projects dropdown in the navigation. I’ll continue updating it as new case studies are completed.
                    </p>
                </div>
                <div className="home-image">
                    <img src="/IMG_3161.webp" alt="Aeriel Day" />
                </div>
            </section>
        </main>
    );
}
