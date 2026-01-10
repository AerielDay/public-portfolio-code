# Aeriel Day - Portfolio

Full-stack developer portfolio showcasing React/TypeScript projects with accessibility compliance and modern design.

## 🚀 Live Projects

### 1. Artisan's Haven
E-commerce marketplace for handmade crafts
- **Tech**: React, TypeScript, Context API, SCSS
- **Features**: Shopping cart, checkout flow, blog, video gallery
- **Accessibility**: WCAG 2.2 Level AA compliant
- **Demo**: `/projects/artisans-haven/demo`

### 2. Nexora Tech Consulting
Professional consulting website
- **Tech**: React, TypeScript, SCSS
- **Features**: Service catalog, case studies, responsive design
- **Route**: `/projects/nexora`

### 3. TaskFlow
Task management application
- **Tech**: React, Context API, localStorage
- **Features**: CRUD operations, state management, data persistence
- **Route**: `/projects/taskflow`

## 🛠️ Tech Stack

- **Framework**: React 18 with TypeScript
- **Routing**: React Router v6
- **Styling**: SCSS with CSS variables
- **State Management**: React Context API
- **Build Tool**: Vite
- **Accessibility**: WCAG 2.2 Level AA

## 📂 Project Structure

```
aeriel-day-portfolio/
├── src/
│   ├── main.tsx              # Application entry point
│   ├── App.tsx               # Main router and layout
│   ├── components/           # Shared components
│   │   ├── Navbar.tsx        # Main site navigation
│   │   ├── CartDrawer.tsx    # Shopping cart overlay
│   │   └── Breadcrumb.tsx    # Navigation breadcrumbs
│   ├── pages/                # Top-level pages
│   │   ├── Home/             # Portfolio landing page
│   │   └── Projects/         # Project router
│   ├── projects/             # Individual portfolio projects
│   │   ├── artisans-haven/   # E-commerce demo
│   │   ├── nexora/           # Consulting website
│   │   └── taskflow/         # Task manager
│   ├── styles/               # Global SCSS
│   │   ├── main.scss         # Main stylesheet
│   │   ├── _fonts.scss       # Font imports
│   │   ├── _typography.scss  # Typography styles
│   │   └── _navbar.scss      # Navigation styles
│   └── assets/               # Images, fonts, icons
├── public/                   # Static assets
├── dist/                     # Production build
├── package.json              # Dependencies
├── tsconfig.json             # TypeScript config
└── vite.config.ts            # Vite configuration
```

## 🎨 Design System

### Typography
- **Headings**: Playfair Display, Georgia
- **Body**: Inter, Helvetica Neue
- **Code**: Montserrat (monospace fallback)

### Spacing Scale
- Base: 1rem (16px)
- Scale: 0.5rem, 0.75rem, 1rem, 1.25rem, 1.5rem, 2rem, 3rem

### Colors
- **Primary**: #8DB8B8 (Teal)
- **Text**: #333 (Dark gray)
- **Background**: #FFF (White)
- **Borders**: #E0E0E0 (Light gray)

### Breakpoints
- **Mobile**: 400px - 479px
- **Mobile Plus**: 480px - 639px
- **Tablet**: 640px - 899px
- **Desktop**: 900px+

## ♿ Accessibility Features

All projects meet WCAG 2.2 Level AA standards:

- ✅ **Focus Indicators**: Visible 3px outlines on all interactive elements
- ✅ **Keyboard Navigation**: Full keyboard support with proper tab order
- ✅ **Screen Reader Support**: ARIA labels, roles, and live regions
- ✅ **Form Accessibility**: Autocomplete, error messages, proper labeling
- ✅ **Touch Targets**: Minimum 44x44px for mobile (AAA level)
- ✅ **Color Contrast**: 4.5:1 ratio for all text
- ✅ **Semantic HTML**: Proper heading hierarchy and landmarks

## 🚦 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/aerielday/portfolio.git

# Navigate to project
cd aeriel-day-portfolio

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Development Server
- Local: `http://localhost:5173`
- Network: Available on local network

## 📝 Scripts

```json
{
  "dev": "vite",                    // Start dev server
  "build": "tsc && vite build",     // Build for production
  "preview": "vite preview",        // Preview production build
  "lint": "eslint . --ext ts,tsx"   // Lint TypeScript files
}
```

## 🔍 Code Quality

- **TypeScript**: Strict mode enabled for type safety
- **ESLint**: Code linting with React rules
- **Prettier**: Code formatting (optional)
- **Documentation**: Comprehensive JSDoc comments on all major functions
- **No Console Logs**: Clean production code
- **WCAG Compliance**: Accessibility verified and documented

## 📱 Responsive Design

All projects are fully responsive:
- Mobile-first approach
- Flexible layouts with CSS Grid and Flexbox
- Touch-friendly interface (44px minimum targets)
- Optimized images and media queries
- No horizontal scroll on any device

## 🎯 Project Highlights

### Artisan's Haven
- **State Management**: Global cart with Context API and localStorage
- **Form Validation**: Real-time validation with accessible error messages
- **Dynamic Routing**: Nested routes with React Router v6
- **Markdown Integration**: Blog posts loaded from .md files
- **Video Embedding**: Responsive YouTube iframe integration

### Nexora
- **Professional Design**: Corporate branding and layout
- **Service Showcase**: Dynamic service cards and case studies
- **Navigation**: Inline routing without layout wrapper

### TaskFlow
- **CRUD Operations**: Full create, read, update, delete functionality
- **Persistent Storage**: localStorage integration
- **Context Pattern**: Demonstrates state management without Redux

## 🤝 Contributing

This is a personal portfolio project. Feedback and suggestions are welcome!

## 📄 License

All rights reserved. Code may be viewed for reference, but please do not copy entire projects.

## 📧 Contact

**Aeriel Day**  
Front-End Developer  
[GitHub](https://github.com/aerielday) | [LinkedIn](#) | [Email](#)

---

Built with ❤️ using React, TypeScript, and SCSS
