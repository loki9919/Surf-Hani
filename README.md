# The Cove Surf House Website

A sophisticated, static website for The Cove Surf House - a beach & surf lifestyle hostel in Tamraght, Morocco. Built with Next.js, Tailwind CSS, and designed for fast loading with handcrafted aesthetics.

## 🌊 Features

- **Static Export Ready**: Optimized for GitHub Pages deployment
- **Responsive Design**: Beautiful on all devices with mobile-first approach
- **Custom Animations**: SVG-based scroll animations with wave and surfboard elements
- **Accessibility**: Semantic HTML, focus states, and ARIA labels
- **SEO Optimized**: Meta tags, Open Graph, and semantic structure
- **Color Palette**: Custom brand colors inspired by Moroccan coastal vibes
- **Performance**: Fast loading with optimized assets and minimal JavaScript

## 🎨 Brand Colors

- **Terracotta** (#be4f34) - Warm, earthy red
- **Ocean** (#006c79) - Deep teal inspired by Atlantic waters
- **Gold** (#ef8e2f) - Sunlit orange for accents
- **Dune** (#857C5D) - Earthy beige for neutrals
- **White** (#FFFFFF) - Clean backgrounds

## 🏗️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS with custom animations
- **Language**: TypeScript for type safety
- **Deployment**: Static export for GitHub Pages
- **Fonts**: Inter (body) and Playfair Display (headings)

## 📁 Project Structure

```
├── app/                    # App Router pages
│   ├── about/             # About page
│   ├── activities/        # Activities & experiences
│   ├── contact/           # Contact & booking form
│   ├── gallery/           # Photo gallery with Instagram link
│   ├── globals.css        # Global styles & animations
│   ├── layout.tsx         # Root layout with navigation
│   └── page.tsx           # Homepage
├── components/
│   ├── sections/          # Page sections (Hero, Intro, Features, CTA)
│   ├── Navigation.tsx     # Responsive navigation component
│   └── Footer.tsx         # Footer with links and contact info
├── public/                # Static assets (to be added)
├── out/                   # Static export output (generated)
└── config files           # Next.js, Tailwind, TypeScript configs
```

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ and npm
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/[username]/Thecovesurfhouse.git
   cd Thecovesurfhouse
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:3000
   ```

## 🛠️ Development Commands

```bash
# Development server
npm run dev

# Build for production
npm run build

# Static export (for GitHub Pages)
npm run export

# Build and export in one command
npm run deploy
```

## 📦 Deployment to GitHub Pages

### Automatic Deployment

1. **Enable GitHub Pages**
   - Go to repository Settings > Pages
   - Source: GitHub Actions

2. **Create deployment workflow**
   - Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '18'
          cache: 'npm'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Build and export
        run: npm run export
        env:
          NODE_ENV: production
      
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v2
        with:
          path: ./out

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v2
```

### Manual Deployment

```bash
# Build and export
npm run export

# The `out` folder contains your static site
# Upload contents to your hosting provider
```

## 🎨 Customization

### Adding Images

1. **Place images in `public/` folder**
2. **Update placeholder image references in components**
3. **Optimize images for web (WebP format recommended)**

### Content Updates

- **Homepage**: Edit `app/page.tsx` and section components
- **About**: Update `app/about/page.tsx`
- **Activities**: Modify `app/activities/page.tsx`
- **Contact**: Update contact info in `app/contact/page.tsx`

### Styling

- **Global styles**: `app/globals.css`
- **Tailwind config**: `tailwind.config.js`
- **Component styles**: Use Tailwind classes or custom CSS classes

### Animations

- **Custom animations** defined in `globals.css`
- **Scroll animations** using Intersection Observer
- **SVG animations** for waves and surfboard elements

## 🎯 Performance Optimizations

- **Static generation** for fast loading
- **Image optimization** with Next.js Image component
- **CSS optimization** with Tailwind's purging
- **Minimal JavaScript** for better performance
- **Font optimization** with next/font

## 🔧 Configuration

### Environment Variables (if needed)

Create `.env.local` for any sensitive data:

```env
# Example - not currently used but ready for future features
INSTAGRAM_ACCESS_TOKEN=your_token_here
CONTACT_FORM_ENDPOINT=your_endpoint_here
```

### Next.js Configuration

The `next.config.js` is configured for:
- Static export (`output: 'export'`)
- GitHub Pages deployment with proper base path
- Image optimization disabled for static export
- Trailing slashes for compatibility

## 📱 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is proprietary software for The Cove Surf House. All rights reserved.

## 📞 Support

For technical issues or questions:
- Create an issue in this repository
- Contact: [your-email@example.com]

## 🎉 Credits

- **Design**: Inspired by Moroccan coastal culture and surf lifestyle
- **Icons**: Heroicons and custom SVGs
- **Fonts**: Google Fonts (Inter & Playfair Display)
- **Framework**: Next.js team for the amazing framework
- **Styling**: Tailwind CSS for utility-first styling

---

Built with ❤️ for The Cove Surf House community in Tamraght, Morocco. 