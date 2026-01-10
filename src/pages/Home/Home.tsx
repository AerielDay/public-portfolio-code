import React from 'react'
export default function Home() {
    return (
        <main style={{maxWidth:'1300px', margin:'0 auto'}}>
            <h2 className="titlesForHome">System Overview</h2>
            <p className="portIntro">
                A modern, detail-oriented portfolio engineered with React, TypeScript, and SCSS. 
    This space showcases the intersection of aesthetic design and technical 
    discipline through scalable UI patterns and documented case studies.
            </p>
            <h2 className="titlesForHome">Project Status</h2>
            <p className="ongoingNote">
           <strong>Status: Active Development & Refinement</strong> <br></br>
           This portfolio serves as a live documentation of my technical journey 
           and professional work. While the featured projects are functional
             and representative of my capabilities, I am currently performing final
             optimizations and minor refinements to ensure peak performance and documentation.
             As I continue to explore new technologies, this space will evolve with regular
             updates and new project additions. I invite you to check back frequently 
             to see my latest builds and progress.
            </p>
            <section className="home-section" aria-labelledby="home-heading">
                <div className="home-text">
                    <h1 id="home-heading" style={{ position: "absolute", left: "-10000px", width: "1px", height: "1px", overflow: "hidden" }}>Aeriel Day — Front-End Developer</h1>
                    <h2 className="titlesForHome">About Aeriel</h2>
                    <p className="myIntro" >
                      I’m a multidisciplinary Web Developer and Designer with nearly a decade of 
    experience transforming complex ideas into clean, intuitive digital experiences. 
    I bridge the gap between front-end development, UX/UI design, and practical 
    engineering to build solutions that are as visually compelling as they are 
    structurally sound.<br></br><br></br>

    My background spans ServiceNow development, custom web applications, and modern 
    frontend frameworks. I specialize in iterative troubleshooting—stepping in to 
    deconstruct broken processes, refine existing systems, and implement improvements 
    that drive business goals. I approach every project with a focus on clarity and 
    scalability, pushing the boundaries of modern design to create tools that are 
    polished, functional, and genuinely useful.
                    </p>
                </div>
                <div className="home-image">
                    <img src="/IMG_3161.webp" alt="Aeriel Day" />
                </div>
            </section>
        </main>
    );
}
