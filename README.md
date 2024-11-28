# 1NCA Website

A modern, responsive wealth management website built with React, TypeScript, and Tailwind CSS. The site features smooth animations, bilingual support (English/Spanish), and a mobile-first design approach.

## Features

- 🎨 Modern, minimalist design with gold accents (#DBC078)
- 📱 Fully responsive layout (mobile and desktop navigation)
- 🌐 Bilingual support (English/Spanish) with easy language toggle
- ⚡ Fast performance with Vite
- 🎭 Smooth animations with Framer Motion
- 🎯 Accessible navigation with smooth scroll
- 🎨 Custom UI components
- 🖼️ Optimized image loading

## Tech Stack

- React 18
- TypeScript
- Tailwind CSS
- Framer Motion
- Vite
- Lucide Icons

## Getting Started

### Prerequisites

- Node.js 16.x or later
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/1nca-v2.git
cd 1nca-v2
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Start the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

### Building for Production

```bash
npm run build
# or
yarn build
```

The built files will be in the `dist` directory.

## Project Structure

```
src/
├── components/         # React components
│   ├── Navigation/    # Navigation components (Desktop & Mobile)
│   ├── sections/      # Page sections
│   └── ui/            # Reusable UI components
├── types/             # TypeScript type definitions
├── utils/             # Utility functions (including scroll)
└── data/             # Static data and translations
```

## Key Components

### Navigation
- `DesktopNav`: Full-width navigation for large screens
  - Logo with animation
  - Section links with smooth scroll
  - Language toggle with globe icon
- Mobile-friendly responsive design

### Sections
- About Us
- Our Philosophy
- Services
- Contact

### Animations
- Smooth scroll to sections
- Fade-in animations
- Interactive hover states (gold accent color)
- Logo entrance animation

## Deployment

The site can be deployed to any static hosting service:
- Vercel (recommended)
- Netlify
- GitHub Pages
- AWS S3 + CloudFront

## Development Notes

- Date format: %d/%m/%y
- Metric system used where applicable
- Windows development environment supported
- Tailwind breakpoints:
  - lg: Desktop navigation (1024px and above)
  - Below lg: Mobile navigation

## License

This project is proprietary and confidential. All rights reserved.