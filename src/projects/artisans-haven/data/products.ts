// src/projects/artisans-haven/data/products.ts
export interface Product {
  id: string;
  title: string;
  price: number;
  slug: string;
  excerpt: string;
  steps: string[];
  image?: string;
}

export const products: Product[] = [
  {
    id: "quilt-001",
    title: "Geometric Quilt",
    price: 220,
    slug: "geometric-quilt",
    excerpt: "Hand-stitched cotton quilt with geometric patterns.",
    steps: ["Gather materials", "Cut fabric", "Sew blocks", "Quilt layers", "Bind edges"],
    image: "/images/16dc2ea6181c4570e80c879cd0cd05df.jpg",
  },
  {
    id: "pattern-001",
    title: "Dress Pattern (PDF)",
    price: 15,
    slug: "dress-pattern",
    excerpt: "Printable sewing pattern with sizes XS-XL.",
    steps: ["Download pattern", "Print pattern", "Cut fabric", "Assemble"],
    image: "/images/images (1).jpg",
  },
  {
    id: "kit-001",
    title: "Beginner Quilting Kit",
    price: 65,
    slug: "beginner-quilting-kit",
    excerpt: "Complete starter kit with fabric and tools.",
    steps: ["Unbox kit", "Review instructions", "Practice cutting", "Start first project"],
    image: "/images/71UX-RUrVDL._AC_SL1500_.jpg",
  },
  {
    id: "pattern-002",
    title: "Anime Cosplay Pattern (PDF)",
    price: 90,
    slug: "anime-cosplay-pattern",
    excerpt: "Printable cosplay pattern with detailed instructions.",
    steps: ["Download pattern", "Print pattern", "Cut fabric", "Assemble"],
    image: "/images/NEW_2025_LISTING.webp",
  },
];
