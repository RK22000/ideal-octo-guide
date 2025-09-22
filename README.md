# Ideal Octo Guide

A personal blog and portfolio website built with Vite, TailwindCSS, and Markdeep. This is my third attempt at creating a maintainable personal site that stays simple enough to return to and update regularly.

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- Bun (recommended) or npm/yarn

### Installation & Development

1. Clone the repository:
```bash
git clone https://github.com/RK22000/ideal-octo-guide.git
cd ideal-octo-guide
```

2. Install dependencies:
```bash
bun install
```

3. Start the development server:
```bash
bun run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
bun run build
```

The built files will be in the `dist/` directory.

### Preview Production Build

```bash
bun run preview
```

## 📁 Project Structure

```
ideal-octo-guide/
├── index.html              # Main homepage
├── index.css               # Global styles and TailwindCSS components
├── package.json            # Dependencies and scripts
├── vite.config.js          # Vite configuration with multi-page setup
├── tailwind.config.js      # TailwindCSS configuration
├── postcss.config.js       # PostCSS configuration
├── projectUtils.js         # Utility functions for finding HTML files
├── newpage.py              # Python script for creating new blog pages
├── pics/                   # Image assets
│   ├── anya_peaking.png
│   ├── blue-turtle.png
│   ├── explainedVisually.gif
│   ├── PaperDragons.jpg
│   ├── richard_sutton.png
│   └── simple_RRT.gif
├── public/                 # Public assets served directly
│   ├── PaperDragons.jpg
│   └── blogs/
│       └── list.json       # Blog posts metadata
└── routes/                 # Multi-page routes
    └── blog/
        ├── index.html      # Blog listing page
        ├── FunGamesAndSites.md.html
        ├── setting_fingerprint_driver_for_linux.md.html
        └── software_and_tools.md.html
```

## 🛠️ Technology Stack

- **Build Tool**: Vite - Fast development server and build tool
- **Styling**: TailwindCSS with Typography plugin for prose content
- **Blog System**: Markdeep for markdown-like blog posts
- **Multi-page Setup**: Custom Vite configuration that automatically discovers HTML files
- **Utilities**: Python script for generating new blog pages

## ✨ Features

### Homepage
- Hero section with responsive background image
- Sticky navigation bar with external links
- Postcard-style article previews with hover effects
- Responsive design with mobile-friendly layout

### Blog System
- Markdown-like blog posts using Markdeep
- Automatic blog listing with metadata
- Individual blog pages with clean typography
- Easy content creation with the `newpage.py` script

### Development Experience
- Hot reload development server
- Automatic HTML file discovery for multi-page builds
- TailwindCSS with custom component classes
- TypeScript module support

## 🎨 Design Philosophy

This site is intentionally kept simple using vanilla HTML and TailwindCSS to ensure:
- **Maintainability**: Easy to understand and modify after long breaks
- **Performance**: Fast loading with minimal JavaScript
- **Accessibility**: Clean, semantic HTML structure
- **Flexibility**: Easy to add new pages and content

## 📝 Creating New Blog Posts

Use the included Python script to create new blog pages:

```bash
python newpage.py "my-new-post" "another-post"
# or make it executable
chmod +x newpage.py
./newpage.py "my-new-post" --by "Your Name"
```

This creates Markdeep-formatted HTML files that can be styled with TailwindCSS.

## 🚀 GitHub Workflow & Deployment

This project includes automated deployment to GitHub Pages using GitHub Actions. The workflow is configured to:

### Automatic Deployment

- **Trigger**: Automatically deploys on every push to the `main` branch
- **Manual Trigger**: Can also be triggered manually from the GitHub Actions tab
- **Build Tool**: Uses Bun for fast dependency installation and building
- **Output**: Deploys the built site to GitHub Pages

### Workflow Details

The deployment workflow (`.github/workflows/main.yml`) performs the following steps:

1. **Checkout**: Fetches the latest code from the repository
2. **Setup Bun**: Installs the latest version of Bun runtime
3. **Install Dependencies**: Runs `bun install` to install all project dependencies
4. **Build**: Executes `bun run build` with the correct base path for GitHub Pages
5. **Deploy**: Uploads the built files from the `dist/` directory to GitHub Pages

### Key Features

- **Bun Integration**: Uses the official `oven-sh/setup-bun@v2` action for optimal performance
- **Base Path Configuration**: Automatically configures the base path as `/ideal-octo-guide/` for proper GitHub Pages deployment
- **Jekyll Bypass**: Includes `.nojekyll` file to ensure all assets are served correctly
- **Concurrent Protection**: Prevents multiple deployments from running simultaneously
- **Proper Permissions**: Configured with appropriate GitHub token permissions for Pages deployment

### Accessing the Deployed Site

Once deployed, the site is available at: `https://RK22000.github.io/ideal-octo-guide/`

### Local Development vs Production

- **Local**: `bun run dev` serves the site at `http://localhost:5173`
- **Production**: GitHub Actions builds with `--base=/ideal-octo-guide/` for proper asset paths

## 🔗 External Integrations

The site includes links to:

- GitHub repository
- Robotics@SJSU
- ML@SJSU
- Previous portfolio site
- Various interesting external resources and visualizations
