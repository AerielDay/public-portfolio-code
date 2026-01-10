import React from "react";
import { useParams, Link, useLocation } from "react-router-dom";
import DemoPlaceholder from "../../components/DemoPlaceholder";
/// <reference types="vite/client" />

interface ImportMeta {
    glob: (pattern: string, options?: { eager?: boolean }) => Record<string, any>;
}

// Vite import
const modules = import.meta.glob("./posts/*.md", { eager: true });

export default function BlogPost() {
    const { slug } = useParams<{ slug: string }>();
    const location = useLocation();
    const isDemo = location.pathname.includes('/demo');

    if (!slug) return <div>Post not found</div>;

    // In demo mode, show placeholder instead of trying to load markdown
    if (isDemo) {
        return (
            <DemoPlaceholder
                title="Blog Post"
                message="This is a demo blog post placeholder."
                backLink="/projects/artisans-haven/demo/blog"
                backLabel="Back to Blog"
            />
        );
    }

    const key = `./posts/${slug}.md`;
    const mod = (modules as any)[key];

    if (!mod) return <div>Post not found</div>;

    // depending on md loader, content might be default export HTML or a rendered component
    const Content = (mod as any).default;
    const meta = (mod as any).metadata || (mod as any).frontmatter || {};

    return (
        <article className="ah-post" style={{ maxWidth: 900, margin: '1rem auto', padding: '0 1rem' }}>
            <Link to="../" className="back-link">← Back to Blog</Link>
            <h1>{meta.title || slug}</h1>
            {meta.date && <time dateTime={meta.date}>{meta.date}</time>}
            <hr />
            <div className="post-body">
                {typeof Content === "function" ? <Content /> : <div dangerouslySetInnerHTML={{ __html: Content }} />}
            </div>
        </article>
    );
}
