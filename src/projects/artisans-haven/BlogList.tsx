// src/projects/artisans-haven/BlogList.tsx
import React from "react";
import { Link, useLocation } from "react-router-dom";
import Breadcrumb from "../../components/Breadcrumb";
import DemoPlaceholder from "../../components/DemoPlaceholder";

type Post = {
  url: string;
  title: string;
  description?: string;
  date?: string;
  slug: string;
};

// Hardcoded blog posts
const posts: Post[] = [
  {
    url: "/projects/artisans-haven/blog/getting-started-with-quilting",
    slug: "getting-started-with-quilting",
    title: "Getting Started with Quilting: A Beginner's Guide",
    description: "Discover the art of quilting with our comprehensive beginner's guide. Learn essential techniques, tools, and tips to start your quilting journey.",
    date: "2024-01-15"
  },
  {
    url: "/projects/artisans-haven/blog/choosing-the-right-fabric",
    slug: "choosing-the-right-fabric",
    title: "Choosing the Right Fabric for Your Project",
    description: "Not all fabrics are created equal. Learn how to select the perfect material for your next quilting or crafting project.",
    date: "2024-01-08"
  },
  {
    url: "/projects/artisans-haven/blog/seasonal-crafting-ideas",
    slug: "seasonal-crafting-ideas",
    title: "Seasonal Crafting Ideas for Every Occasion",
    description: "Get inspired with our collection of seasonal crafting projects perfect for holidays and special occasions throughout the year.",
    date: "2023-12-20"
  }
];

export default function BlogList() {
  const location = useLocation();

  const isDemo = location.pathname.includes('/demo');
  const baseRoute = isDemo ? '/projects/artisans-haven/demo' : '/projects/artisans-haven';

  const crumbs = isDemo
    ? [
      { label: "Home", to: baseRoute },
      { label: "Blog" }
    ]
    : [
      { label: "Projects", to: "/projects" },
      { label: "Artisans Haven", to: "/projects/artisans-haven" },
      { label: "Blog" }
    ];

  return (
    <section className="ah-blog" aria-labelledby="blog-title">
      <Breadcrumb items={crumbs} />
      <h2 id="blog-title">Artisans Haven Blog</h2>
      <div className="post-list">
        {posts.map((p) => (
          <article className="post-card" key={p.slug}>
            <h3>
              <Link to={p.slug}>{p.title}</Link>
            </h3>
            {p.date && <time dateTime={p.date}>{p.date}</time>}
            {p.description && <p>{p.description}</p>}
            {isDemo ? (
              <Link
                to={`${baseRoute}/blog/${p.slug}`}
                className="read-more"
                aria-label={`Read ${p.title}`}
              >
                Read More →
              </Link>
            ) : (
              <button
                className="read-more"
                onClick={() => {
                  // Route to demo placeholder on non-demo view
                  window.location.hash = `#/projects/artisans-haven/demo/blog/${p.slug}`;
                }}
                aria-label={`Read ${p.title}`}
              >
                Read More →
              </button>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}