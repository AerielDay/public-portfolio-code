import React from 'react';
import { Link } from 'react-router-dom';

interface DemoPlaceholderProps {
    title?: string;
    message?: string;
    backLink?: string;
    backLabel?: string;
}

export default function DemoPlaceholder({
    title = 'Page Coming Soon',
    message = 'This page is not yet available in the demo. Check back soon or explore other sections.',
    backLink = '/',
    backLabel = 'Back to Home'
}: DemoPlaceholderProps) {
    return (
        <section className="demo-placeholder">
            <div className="demo-placeholder-inner">
                <h1>{title}</h1>
                <p>{message}</p>
                <Link to={backLink} className="btn btn-primary">
                    {backLabel}
                </Link>
            </div>
        </section>
    );
}
