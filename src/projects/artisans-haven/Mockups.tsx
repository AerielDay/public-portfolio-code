// src/projects/artisans-haven/Mockups.tsx
import React, { useState } from "react";

const mockups = [
    { id: "m1", src: "/public/figma-mockups/artisans-haven.png", alt: "Artisan's Haven mockup" }
];

function Lightbox({ src, alt, onClose }: { src: string; alt: string; onClose: () => void }) {
    return (
        <div className="lightbox" role="dialog" aria-modal="true" onClick={onClose}>
            <div className="lightbox-inner" onClick={(e) => e.stopPropagation()}>
                <button aria-label="Close" className="close" onClick={onClose}>✕</button>
                <img src={src} alt={alt} />
                <p className="download"><a href={src} download>Download PNG</a></p>
            </div>
        </div>
    );
}

export default function Mockups() {
    const [open, setOpen] = useState<string | null>(null);
    return (
        <section aria-labelledby="mockups">
            <h3 id="mockups">Interactive Mockups</h3>
            <div className="mockup-grid">
                {mockups.map(m => (
                    <button key={m.id} className="mockup-thumb" onClick={() => setOpen(m.src)} aria-label={`Open ${m.alt}`}>
                        <img src={m.src} alt={m.alt} />
                    </button>
                ))}
            </div>
            {open && <Lightbox src={open} alt="Project mockup" onClose={() => setOpen(null)} />}
        </section>
    );
}
