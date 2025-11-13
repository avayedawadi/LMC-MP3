# GitHub Pages Deployment Guide

## What Was Fixed

The site is now fully configured for GitHub Pages deployment with the `/LMC-MP3` base path.

### Routing Fixes Applied:

1. **Astro Config** (`astro.config.mjs`):
   - Added `base: '/LMC-MP3'` for proper URL paths
   - Set `site: 'https://avayedawadi.github.io'`

2. **Sidebar Navigation** (`src/components/Sidebar.astro`):
   - All links now prepend the base URL
   - Current path detection accounts for base path

3. **Search Component** (`src/components/Search.astro`):
   - Search results dynamically add base URL to links
   - Uses global variables to pass base path to inline script

4. **Layout Header** (`src/layouts/Layout.astro`):
   - Home link includes base URL
   - Favicon link includes base URL

5. **404 Page** (`src/pages/404.astro`):
   - "Go home" button includes base URL

6. **Markdown Content** (`src/lib/content.ts`):
   - Added `fixInternalLinks()` function to process markdown links
   - Automatically prepends base URL to internal links in markdown

7. **Page Rendering** (`src/pages/*.astro`):
   - All pages use the `fixInternalLinks()` helper for markdown content

## Deployment Steps

### 1. Push Your Code

```bash
git add .
git commit -m "Configure GitHub Pages deployment with routing fixes"
git push origin main
```

### 2. Enable GitHub Pages

1. Go to your repository on GitHub: `https://github.com/avayedawadi/LMC-MP3`
2. Click on **Settings** tab
3. Click on **Pages** in the left sidebar
4. Under "Build and deployment":
   - **Source**: Select **"GitHub Actions"**
5. Save the settings

### 3. Monitor Deployment

1. Go to the **Actions** tab in your repository
2. You'll see the "Deploy to GitHub Pages" workflow running
3. Wait for it to complete (usually 1-2 minutes)
4. Once complete, your site will be live at: **`https://avayedawadi.github.io/LMC-MP3/`**

## Testing Locally with Base Path

To test the site locally with the base path:

```bash
npm run build
npm run preview
```

Then visit: `http://localhost:4321/LMC-MP3/`

## Future Updates

For any content or code changes:

```bash
# Make your changes
git add .
git commit -m "Your change description"
git push origin main
```

The site will automatically rebuild and redeploy via GitHub Actions.

## Troubleshooting

### Issue: Links are broken or missing /LMC-MP3/
- **Solution**: Make sure you're using the `base` variable from `import.meta.env.BASE_URL` in all links

### Issue: Search not working
- **Solution**: Check browser console for errors. The search uses `window.__SEARCH_INDEX__` and `window.__BASE_URL__`

### Issue: 404 on GitHub Pages
- **Solution**: Verify that GitHub Pages source is set to "GitHub Actions" in Settings → Pages

### Issue: Assets not loading
- **Solution**: Check that all asset paths (images, CSS, JS) use the base URL

## Files Changed

- `astro.config.mjs` - Added base path configuration
- `src/components/Sidebar.astro` - Fixed navigation links
- `src/components/Search.astro` - Fixed search result links
- `src/layouts/Layout.astro` - Fixed header and favicon links
- `src/pages/404.astro` - Fixed home link
- `src/lib/content.ts` - Added link fixing helper
- `src/pages/index.astro` - Process markdown links
- `src/pages/[...slug].astro` - Process markdown links
- `.github/workflows/deploy.yml` - GitHub Actions workflow

## Site URL

Your site will be available at:
**https://avayedawadi.github.io/LMC-MP3/**

All links, including:
- Navigation sidebar
- Search results
- Markdown content links
- Header logo
- 404 page

Will correctly use the `/LMC-MP3/` base path.
