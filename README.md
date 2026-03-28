# Aurum & Noir — Fine Dining Website

A luxury restaurant portfolio website built with **React**, **TypeScript**, **Vite**, and **Tailwind CSS v4**. Designed with a dark obsidian and gold palette to reflect the elegance of fine dining.

---

## Table of Contents

- [Overview](#overview)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Pages](#pages)
- [Design System](#design-system)
- [Key Features](#key-features)

---

## Overview

Aurum & Noir is a multi-page restaurant website featuring a fully responsive layout, smooth navigation transitions, interactive menus with dietary filters, reservation and contact forms, and a rich typographic identity built on Cormorant Garamond and Montserrat.

---

## Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| React | 19 | UI framework |
| TypeScript | 5.9 | Type safety |
| Vite | 7 | Build tool & dev server |
| Tailwind CSS | 4 | Utility-first styling |
| React Router DOM | 7 | Client-side routing |
| clsx + tailwind-merge | latest | Conditional class merging |

---

## Project Structure

```
├── public/
│   ├── hero-background.jpg
│   ├── about-background.jpg
│   ├── dish-truffle-risotto.jpg
│   └── dish-chocolate-dessert.jpg
├── src/
│   ├── components/
│   │   ├── Navigation.tsx       # Fixed nav with scroll transitions
│   │   └── Footer.tsx           # Four-column footer
│   ├── pages/
│   │   ├── Home.tsx             # Hero, featured dishes, testimonials, CTA
│   │   ├── Menu.tsx             # Filterable menu by category & dietary
│   │   ├── About.tsx            # Story, team, stats, timeline
│   │   ├── Reservations.tsx     # Booking form with confirmation state
│   │   ├── Contact.tsx          # Contact form, departments, FAQ
│   │   └── NotFound.tsx         # 404 page
│   ├── utils/
│   │   └── cn.ts                # clsx + twMerge utility
│   ├── App.tsx                  # Router and layout shell
│   ├── main.tsx                 # React entry point
│   └── index.css                # Global styles, CSS variables, custom classes
├── index.html
├── vite.config.ts
├── tsconfig.json
└── package.json
```

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm 9+

### Install & Run

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

The dev server runs at `http://localhost:5173` by default.

---

## Pages

### `/` — Home
Full-screen hero section with a darkened background image, animated headline, and dual CTAs. Below: signature dish cards with hover image zoom, guest testimonials, and a reservation CTA banner.

### `/menu` — Menu
Filterable grid of 13 menu items across four categories (Starters, Mains, Desserts, Drinks). Supports combined filtering by category and dietary preference (Vegetarian, Gluten-Free, Spicy).

### `/about` — About
Brand story with a parallax-style dark hero, philosophy section with animated stat cards, team member grid, and a vertical milestone timeline.

### `/reservations` — Reservations
Reservation form with fields for name, email, phone, guest count, date (minimum today), time slot, special occasion, and requests. Shows a confirmation state on submission. Includes info panels for hours, private dining, and cancellation policy.

### `/contact` — Contact
Contact form with a success state. Sidebar displays department contacts and an accordion FAQ built with native HTML `<details>` elements.

### `*` — 404
Minimal not-found page with links back to Home and Menu.

---

## Design System

### Colour Palette

| Variable | Hex | Usage |
|---|---|---|
| `--gold` | `#C9A84C` | Primary accent, borders, active states |
| `--gold-light` | `#E2C97E` | Button gradients, highlights |
| `--gold-dark` | `#9B7D35` | Button gradients, deep gold |
| `--obsidian` | `#0A0A0A` | Page background |
| `--charcoal` | `#141414` | Card backgrounds |
| `--smoke` | `#1E1E1E` | Elevated surfaces |
| `--ivory` | `#F5F0E8` | Headings and key text |
| `--ivory-dark` | `#EAE3D5` | Secondary text |
| `--muted` | `#8C8070` | Body copy, labels |

### Typography

| Role | Font | Weight |
|---|---|---|
| Display / Headings | Cormorant Garamond | 300–600 |
| Body / UI | Montserrat | 300–500 |

Both fonts are loaded from Google Fonts via `index.css`.

### Reusable CSS Classes

| Class | Description |
|---|---|
| `.btn-gold` | Solid gold gradient button with hover shimmer |
| `.btn-outline-gold` | Gold-bordered ghost button |
| `.luxury-card` | Dark glass card with gold border and hover lift |
| `.luxury-input` | Dark form input with gold focus ring |
| `.gold-shimmer` | Animated gold gradient text effect |
| `.gold-line` | Thin centred gold divider line |
| `.animate-fade-up` | One-shot fade + translate-up entrance animation |
| `.animate-fade-in` | One-shot fade-in entrance animation |

---

## Key Features

### Smooth Navigation
The navbar is `position: fixed` and reacts to scroll:
- **Transparent** at the top of the page
- **Darkens and gains a gold border + shadow** after scrolling 40px
- **Slides out** when scrolling down past the fold
- **Slides back in** when scrolling up
- **Resets and smooth-scrolls to top** on every route change

Active nav links show an animated gold underline that slides in from the left. Hovering any link triggers the same animation.

### Menu Filtering
Category and dietary filters work independently and in combination. Filtering is instant with no network requests — all data is in-memory.

### Form States
Both the reservation and contact forms handle a submitted state — the form is replaced by a branded confirmation panel, then automatically resets after a few seconds.

### Responsive Layout
All pages use Tailwind's responsive grid utilities (`grid-cols-1 md:grid-cols-2 lg:grid-cols-4` etc.). The navigation collapses its link list on mobile (hamburger menu not yet implemented — links are hidden below `md` breakpoint).