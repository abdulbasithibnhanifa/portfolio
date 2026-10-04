# Abdul Basith — Engineering Portfolio

A single-page, editorial-style engineering portfolio documenting professional and independent software architecture work.

## Overview

This repository contains the source code for my engineering portfolio. It is designed as an "Editorial Engineering Report" and "Data Observatory," moving away from traditional grid-based portfolio layouts. It prioritizes data-driven engineering evidence, clean architectural representations, and professional restraint.

## Featured Engineering Work

The portfolio documents verified production engineering workstreams from the AutoShipp SaaS ecosystem:
- **Shopify Customer Migration:** Transactional, resumable data pipelines and reconciliation.
- **Platform Data Consolidation:** Zero-downtime database schema consolidation using dual-writes.
- **WhatsApp / Meta Tech Provider:** Multi-tenant messaging infrastructure with Redis deduplication and HMAC validation.
- **Identity & RBAC:** Dynamic account authorization and strict middleware boundaries.

## Independent Work

Independent system engineering projects represented:
- **NeuroVault:** AI knowledge platform (Next.js, pgvector, BullMQ).
- **DevDesk:** Project management system (MERN stack, JWT, robust data modeling).

## Design System

The visual language is heavily restrained and focuses on typography and precision:
- **Editorial engineering report:** Designed to resemble an annual report or technical journal.
- **Warm neutral palette:** 95% monochromatic (graphite, steel, warm paper, deep charcoal) with 5% restrained orange/amber accents.
- **Typography-led hierarchy:** Utilizes Inter (neo-grotesque) and JetBrains Mono (monospace) without relying on heavy font weights.
- **Technical/data visualizations:** Direct representation of data flows and project metrics rather than generic UI cards.
- **Light/dark themes:** Hand-tuned color pairings for both modes to maintain readability and contrast.
- **Responsive layout:** Fluid adaptation across mobile and desktop environments.

## Technical Stack

The frontend is built using:
- **React 19**
- **Vite**
- **React Bootstrap / Bootstrap 5** (Grid and layout)
- **Framer Motion** (Subtle micro-animations)
- **Lucide React** (Minimalist iconography)
- **Vanilla CSS** (Custom properties for theming and specialized components)

## Key Features

- Single-page navigation
- Responsive layout
- Light/dark mode with `localStorage` theme persistence
- Data visualizations constructed natively using CSS/HTML
- Downloadable resume integration
- Direct email contact generation
- Accessible semantic markup

## Development

The project uses NPM for package management. Standard commands available:

```bash
# Install dependencies
npm install

# Start local development server
npm run dev

# Build for production
npm run build

# Run ESLint validation
npm run lint

# Preview production build locally
npm run preview
```

## Validation

The current implementation has been successfully validated with:
- `npm run lint` (0 errors)
- `npm run build` (Successful Vite production build)
- Manual browser validation for responsive behavior, theme toggling, and data visualization rendering.

## Repository Structure

```
├── public/                 # Static assets (Resume PDF, resume preview image)
├── src/
│   ├── assets/             # Profile pictures and graphical assets
│   ├── components/         # Reusable UI (Navbar, Button, Footer, SEO)
│   ├── pages/              # Main view components (Home.jsx)
│   ├── App.jsx             # Root React component
│   ├── main.jsx            # Application entry point
│   └── index.css           # Design system tokens, typography, and utility classes
├── package.json            # Project dependencies and script definitions
├── vite.config.js          # Vite build configuration
└── eslint.config.js        # ESLint flat config
```
