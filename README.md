# One North Capital Advisors Website

A modern, responsive wealth management website built with React, TypeScript, and Tailwind CSS. The site features smooth animations, bilingual support (English/Spanish), and a mobile-first design approach.

## Features

- 🎨 Modern, minimalist design
- 📱 Fully responsive layout
- 🌐 Bilingual support (English/Spanish)
- ⚡ Fast performance with Vite
- 🎭 Smooth animations with Framer Motion
- 🎯 Accessible navigation
- 🎨 Custom UI components
- 🌙 Dark mode optimized

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
git clone https://github.com/yourusername/one-north-capital.git
cd one-north-capital
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Project Structure

```
src/
├── components/         # React components
│   ├── Navigation/    # Navigation components
│   ├── sections/      # Page sections
│   └── ui/            # Reusable UI components
├── hooks/             # Custom React hooks
├── types/             # TypeScript type definitions
├── utils/             # Utility functions
└── data/             # Static data and translations
```

## Key Features

### Responsive Navigation
- Desktop menu with smooth scroll
- Mobile-friendly hamburger menu
- Language switcher

### Sections
- Hero with animated background
- Why Choose Us with experience highlights
- Our Philosophy showcasing core values
- Services overview
- Contact section
- Footer with inspirational quote

### Animations
- Smooth scroll to sections
- Fade-in animations on scroll
- Interactive hover states
- Mobile menu transitions

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Design inspiration from modern financial websites
- Icons by [Lucide](https://lucide.dev/)
- Animations powered by [Framer Motion](https://www.framer.com/motion/)

## Deployment

### Prerequisites
- Node.js 16.x or later
- npm or yarn
- Proper environment variables set up (see Environment Setup)

### Environment Setup
1. Create a `.env` file in the root directory
2. Add required environment variables (refer to `.env.example` for required variables)

### Build and Deploy
1. Build the project:
```bash
npm run build
```

2. The built files will be in the `dist` directory, ready for deployment.

### Deployment Options

#### Static Hosting (Recommended)
The built project can be deployed to any static hosting service:
- Vercel (recommended)
- Netlify
- GitHub Pages
- AWS S3 + CloudFront

#### Manual Deployment
1. Copy the contents of the `dist` directory to your web server
2. Configure your web server to serve the application as a static site
3. Ensure all routes are redirected to `index.html` for client-side routing

### Post-Deployment Checklist
- [ ] Verify all environment variables are properly set
- [ ] Test all routes and navigation
- [ ] Confirm bilingual functionality
- [ ] Check responsive design on multiple devices
- [ ] Verify all animations and transitions
- [ ] Test contact form functionality
- [ ] Confirm proper SSL/TLS configuration

## Current Project Structure

```
├── src/               # Source code
│   ├── components/    # React components
│   ├── hooks/        # Custom React hooks
│   ├── types/        # TypeScript types
│   └── utils/        # Utility functions
├── public/           # Static assets
├── .env             # Environment variables
├── index.html       # Entry HTML file
├── vite.config.ts   # Vite configuration
├── tailwind.config.js # Tailwind CSS configuration
├── tsconfig.json    # TypeScript configuration
└── package.json     # Project dependencies and scripts
```