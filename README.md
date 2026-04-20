# Mordisko Criollo 🇨🇴

> Premium frozen Colombian empanadas and traditional baked goods for the Antioquia region. Direct-to-consumer e-commerce website with multilingual support (Spanish/English).

![Astro](https://img.shields.io/badge/Astro-5.17.1-FF3E00?style=flat&logo=astro)
![Svelte](https://img.shields.io/badge/Svelte-5.43.2-FF3E00?style=flat&logo=svelte)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-3178C6?style=flat&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4.1.13-06B6D4?style=flat&logo=tailwind-css)

Official website: [mordiskocriollo.com](https://mordiskocriollo.com)

## About This Project

Mordisko Criollo is an e-commerce platform for selling authentic Colombian frozen empanadas, arepas, pastelitos, and traditional baked goods. Built with modern web technologies for optimal performance, SEO, and user experience.

### Key Features

- **Bilingual Support**: Full Spanish/English internationalization (i18n)
- **Static Site Generation**: Fast loading with Astro's island architecture
- **Interactive Components**: Svelte 5 for dynamic form handling
- **Delivery Integration**: Rappi and Didi Food ordering buttons
- **SEO Optimized**: Meta tags, Open Graph, sitemap, robots.txt
- **Accessibility**: WCAG 2.2 compliant
- **Responsive Design**: Mobile-first with Tailwind CSS 4

---

## Technology Stack

| Category      | Technology                  | Version      |
| ------------- | --------------------------- | ------------ |
| Framework     | Astro                       | 5.17.1       |
| UI Components | Svelte                      | 5.43.2       |
| Styling       | Tailwind CSS                | 4.1.13       |
| Language      | TypeScript                  | 5.9.3        |
| Icons         | astro-icon                  | 1.1.5        |
| SEO           | astro-seo, @astrojs/sitemap | 0.8.4, 3.7.0 |
| Optimization  | astro-compressor, astro-min | 1.2.0, 1.3.1 |

---

## Project Structure

```
mordisko-criollo/
├── src/
│   ├── assets/              # Optimized images (webpack processed)
│   │   └── images/
│   │       ├── hero/       # Hero section images
│   │       ├── logo/       # Logo variants
│   │       └── products/  # Product images
│   │
│   ├── components/         # Reusable UI components
│   │   ├── home/           # Home page sections
│   │   │   ├── BusinessHome.astro
│   │   │   ├── ContactHome.section.astro
│   │   │   ├── ContactHomeRappiDidi.astro
│   │   │   ├── ContactHomeRappiDidiButton.astro
│   │   │   ├── ContactLogo.astro
│   │   │   ├── HeroHome.astro
│   │   │   ├── HeroHomeImages.astro
│   │   │   ├── ProductsHome.astro
│   │   │   ├── ProductsHomeItem.astro
│   │   │   ├── SocialMediaHome.section.astro
│   │   │   └── WhatsappHome.section.astro
│   │   │
│   │   ├── products/       # Products page components
│   │   │   ├── HeroProducts.astro
│   │   │   ├── ProductDescription.section.astro
│   │   │   ├── ProductsMain.section.astro
│   │   │   └── ProductsMainIitem.astro
│   │   │
│   │   ├── contact/        # Contact page components
│   │   │   ├── ContactForm.section.astro
│   │   │   ├── ContactForm.svelte
│   │   │   ├── ContactFormOrders.svelte
│   │   │   ├── ContactInfo.section.astro
│   │   │   ├── ContactOrder.modal.svelte
│   │   │   ├── ContactThanks.modal.svelte
│   │   │   └── HeroContact.section.astro
│   │   │
│   │   ├── shared/         # Shared layout components
│   │   │   ├── Button.svelte
│   │   │   ├���─ Delivery.astro
│   │   │   ├── Footer.astro
│   │   │   ├── Head.astro
│   │   │   ├── Header.astro
│   │   │   ├── Input.svelte
│   │   │   ├── InputQuantity.svelte
│   │   │   ├── LogoBig.astro
│   │   │   ├── ModalForms.svelte
│   │   │   ├── Section.astro
│   │   │   ├── TextArea.svelte
│   │   │   ├── footer/
│   │   │   │   └── Copyright.astro
│   │   │   └── header/
│   │   │       ├── HeaderMenu.astro
│   │   │       ├── HeaderMenuItem.astro
│   │   │       ├── Header-social-media.astro
│   │   │       ├── Main-logo.astro
│   │   │       └── Secondary-logo.astro
│   │   │
│   │   └── ui/             # Atomic UI components
│   │       ├── buttons/
│   │       ├── icons/
│   │       └── links/
│   │
│   ├── config/
│   │   └── index.ts        # App configuration
│   │
│   ├── core/               # Business logic & data
│   │   ├── data/          # Static data files
│   │   ├── interfaces/     # TypeScript interfaces
│   │   ├── types/         # TypeScript types
│   │   └── utils/        # Utility functions
│   │
│   ├── i18n/              # Internationalization
│   │   ├── ui.ts          # Translation strings
│   │   └── utils.ts       # i18n utilities
│   │
│   ├── layouts/
│   │   └── Layout.astro  # Base HTML layout
│   │
│   ├── pages/              # File-based routing
│   │   ├── index.astro                  # Home (Spanish)
│   │   ├── contacto/
│   │   ├── productos/
│   │   └── en/                        # English locale
│   │
│   └── styles/
│       └── global.css           # Global styles
│
├── public/                 # Static assets (served as-is)
│   ├── assets/
│   ├── _headers           # Cloudflare headers
│   ├── robots.txt
│   └── web-app-manifest-*.png
│
├── astro.config.mjs       # Astro configuration
├── svelte.config.js       # Svelte configuration
├── eslint.config.js      # ESLint configuration
└── package.json
```

---

## Getting Started

### Prerequisites

- **Node.js**: v18+ or v20+
- **Package Manager**: npm (recommended), pnpm, or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/CatapultSteelBuildings/mordisko-criollo-astrojs.git
cd mordisko-criollo-astrojs

# Install dependencies
npm install

# Install Husky git hooks (optional)
npm run prepare
```

### Development Commands

| Command           | Description                                  |
| ----------------- | -------------------------------------------- |
| `npm run dev`     | Start development server at `localhost:4321` |
| `npm run build`   | Build production site to `./dist/`           |
| `npm run preview` | Preview production build locally             |
| `npm run check`   | Run TypeScript type checking                 |
| `npm run lint`    | Run ESLint on all source files               |
| `npm run format`  | Format code with Prettier                    |

---

## Code Style & Conventions

### Formatting (Prettier)

```json
{
  "tabWidth": 2,
  "useTabs": false,
  "singleQuote": true,
  "semi": true,
  "trailingComma": "es5"
}
```

### Import Order (Astro Frontmatter)

1. External packages (`astro:`, `npm:`)
2. Components (grouped by feature)
3. Data & Utils
4. Interfaces & Types
5. Styles

### Component Patterns

**Astro Components:**

- Define `interface Props` for type safety
- Use destructuring with defaults for optional props
- Use path aliases (`@components/*`, `@layouts/*`, etc.)

**Svelte 5 Components:**

- Use `$props()`, `$state()`, `$derived()` runes

### Naming Conventions

| Type        | Convention | Example                   |
| ----------- | ---------- | ------------------------- |
| Astro Pages | kebab-case | `contacto/index.astro`    |
| Components  | PascalCase | `ProductsHome.astro`      |
| Svelte      | PascalCase | `ContactForm.svelte`      |
| Utils       | camelCase  | `sendEmail.util.ts`       |
| Interfaces  | PascalCase | `Product.interface.ts`    |
| CSS Classes | BEM        | `.ComponentName__element` |

### Git Workflow

This project uses [Conventional Commits](https://www.conventionalcommits.org/):

```
<type>(<scope>): <description>

Types: feat | fix | refactor | docs | style | test | chore
```

**Examples:**

```bash
git commit -m "feat(products): add new empanada variety"
git commit -m "fix: correct button styling on mobile"
```

**Pre-commit Hook:**  
Husky + lint-staged automatically run ESLint and Prettier before each commit.

---

## Deployment

### Build for Production

```bash
npm run build
```

Output is generated in the `dist/` directory.

### Recommended Platforms

- **Cloudflare Pages** (recommended)
- **Vercel**
- **Netlify**
- **Static Hosting**: Any CDN

---

## License

This project is proprietary software. All rights reserved.

---

## Acknowledgments

- [Astro](https://astro.build)
- [Tailwind CSS](https://tailwindcss.com)
- [Svelte](https://svelte.dev)

---

_Built with ❤️ in Medellín, Colombia_
