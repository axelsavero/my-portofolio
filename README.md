# 🚀 Premium Developer Portfolio

A stunning, modern portfolio website built with Next.js 16, TypeScript, Tailwind CSS v4, and Framer Motion. Features a futuristic dark theme with glassmorphism, neon glow effects, smooth animations, and fully responsive design.

![Portfolio Preview](https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-06B6D4?style=for-the-badge&logo=tailwindcss)

## ✨ Features

- **Premium Dark Theme** — Zinc-950 base with electric blue/cyan/purple neon accents
- **Glassmorphism UI** — Frosted glass cards with subtle borders
- **Smooth Animations** — Framer Motion scroll reveals, text animations, counters
- **Mouse Interactions** — Spotlight cards, magnetic buttons, parallax orbs
- **Infinite Marquee** — Auto-scrolling tech stack badges
- **Responsive Design** — Mobile-first, looks great on all devices
- **SEO Optimized** — Proper meta tags, semantic HTML, Open Graph
- **Accessibility** — ARIA labels, keyboard navigation, color contrast
- **Production Ready** — Clean architecture, TypeScript strict, optimized builds

## 🏗️ Sections

1. **Floating Navbar** — Glassmorphism with active section indicator
2. **Hero Section** — Cinematic with decrypted text, rotating roles, gradient orbs
3. **About** — Glass cards with animated stat counters
4. **Tech Stack** — Dual-row infinite marquee with hover effects
5. **Projects** — Bento grid with spotlight cards
6. **Experience** — Animated vertical timeline
7. **Contact** — Glass cards + UI-only form
8. **Footer** — Minimalist with gradient accent line

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| Next.js 16 | React Framework (App Router) |
| TypeScript | Type Safety |
| Tailwind CSS v4 | Utility-first Styling |
| Framer Motion | Animations |
| GSAP | Advanced animations |
| Lucide React | Icons |

## 📁 Project Structure

```
app/
├── layout.tsx          # Root layout with SEO
├── page.tsx            # Main page
├── globals.css         # Design system
components/
├── Navbar.tsx          # Floating glassmorphism navbar
├── Hero.tsx            # Cinematic hero section
├── About.tsx           # About with stats
├── TechStack.tsx       # Marquee tech badges
├── Projects.tsx        # Bento grid projects
├── Experience.tsx      # Timeline
├── Contact.tsx         # Contact form
├── Footer.tsx          # Footer
├── ScrollProgress.tsx  # Scroll progress bar
├── ui/                 # Reusable UI components
│   ├── AnimatedText.tsx
│   ├── CountUp.tsx
│   ├── DecryptedText.tsx
│   ├── GlassCard.tsx
│   ├── GlowBorder.tsx
│   ├── MagneticButton.tsx
│   ├── Marquee.tsx
│   ├── ScrollReveal.tsx
│   └── SpotlightCard.tsx
data/
├── experience.ts       # Experience data
├── navigation.ts       # Nav links
├── projects.ts         # Projects data
├── social.ts           # Social links
└── techstack.ts        # Tech stack data
lib/
└── utils.ts            # Utility functions
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ (recommended: 20+)
- npm, pnpm, or yarn

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd my-portofolio

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm run start
```

## 🌐 Deploy to Vercel

The easiest way to deploy:

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Click **Deploy**

Or use the Vercel CLI:

```bash
npm i -g vercel
vercel
```

## 🎨 Customization

### Personal Info
Edit the data files in `data/` directory:
- `projects.ts` — Your projects
- `experience.ts` — Your experience
- `techstack.ts` — Your tech stack
- `social.ts` — Your social links

### Colors & Theme
Edit CSS variables in `app/globals.css`:
- `--accent-blue` — Primary accent
- `--accent-cyan` — Secondary accent
- `--accent-purple` — Tertiary accent

### Content
Update hero text and about section in the corresponding component files.

## 📄 License

MIT License — feel free to use this for your own portfolio!
