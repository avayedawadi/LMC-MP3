# Bits of Good – Technical Communication Toolkit

A static documentation website built with Astro, TypeScript, and Tailwind CSS.

## Features

- ✅ Fully static site (no server required)
- ✅ Built with TypeScript for type safety
- ✅ Sidebar navigation tree with expandable sections
- ✅ Client-side search functionality
- ✅ Responsive design (mobile-friendly with hamburger menu)
- ✅ Markdown content with front-matter support
- ✅ Clean, professional documentation theme

## Project Structure

```
.
├── content/                 # Markdown content files
│   ├── introduction.md
│   ├── getting-started.md
│   ├── roles.md
│   ├── guidelines.md
│   ├── nonprofit-communication.md
│   ├── examples.md
│   ├── faq.md
│   └── templates/
│       ├── index.md
│       ├── pr-template.md
│       ├── spec-template.md
│       ├── readme-template.md
│       └── email-template.md
├── src/
│   ├── components/          # Reusable components
│   │   ├── Search.astro
│   │   └── Sidebar.astro
│   ├── layouts/             # Page layouts
│   │   └── Layout.astro
│   ├── lib/                 # Utility functions
│   │   ├── nav.ts
│   │   ├── searchIndex.ts
│   │   └── content.ts
│   └── pages/               # Route pages
│       ├── index.astro
│       ├── [...slug].astro
│       └── 404.astro
└── public/                  # Static assets
    └── favicon.svg
```

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
# Install dependencies
npm install
```

### Development

```bash
# Start the dev server
npm run dev

# The site will be available at http://localhost:4321/
```

### Building for Production

```bash
# Build the static site
npm run build

# The static files will be in the dist/ directory
```

### Preview Production Build

```bash
# Preview the production build locally
npm run preview
```

## Deployment

### GitHub Pages (Automated)

The project is configured to automatically deploy to GitHub Pages when you push to the main branch.

**Initial Setup (one-time):**

1. Push your code to GitHub:
   ```bash
   git add .
   git commit -m "Initial commit: Bits of Good Toolkit"
   git push origin main
   ```

2. Enable GitHub Pages in your repository:
   - Go to your repo on GitHub
   - Navigate to **Settings** → **Pages**
   - Under "Build and deployment":
     - Set **Source** to "GitHub Actions"
   - Save the settings

3. The GitHub Action will automatically run and deploy your site

4. Your site will be available at: `https://avayedawadi.github.io/LMC-MP3/`

**Subsequent Deployments:**

Simply push to main and the site will automatically rebuild and redeploy:
```bash
git add .
git commit -m "Update content"
git push origin main
```

### Other Hosting Options

- **Netlify**: Connect your repo and set build command to `npm run build`
- **Vercel**: Import the project and it will auto-detect Astro
- **Any static host**: Upload the contents of `dist/` folder

## Adding Content

To add new pages:

1. Create a new `.md` file in the `content/` directory
2. Add front-matter with title, description, and keywords
3. Add the page to `src/lib/nav.ts` for sidebar navigation
4. Add the page to `src/lib/searchIndex.ts` for search functionality

Example:

```markdown
---
title: "My New Page"
description: "Description of the page"
keywords: ["keyword1", "keyword2"]
---

# My New Page

Content goes here...
```

## Customization

### Colors

Edit `tailwind.config.mjs` to change the color scheme.

### Navigation

Edit `src/lib/nav.ts` to modify the sidebar navigation structure.

### Styling

Edit `src/layouts/Layout.astro` to modify the global styles and layout.

## Tech Stack

- **Astro 5** - Static site generator
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Marked** - Markdown parser
- **Gray Matter** - Front-matter parser
