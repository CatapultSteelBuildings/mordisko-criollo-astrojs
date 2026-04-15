# Agent Guidelines - Mordisko Criollo

> Coding conventions and instructions for AI agents working in this repository.

**Project:** Mordisko Criollo - Colombian Frozen Empanadas Website  
**Stack:** Astro 5 + Svelte 5 + Tailwind CSS 4 + TypeScript  
**Version:** 1.0.0

---

## Table of Contents

1. [Development Commands](#development-commands)
2. [Code Style](#code-style)
3. [TypeScript Guidelines](#typescript-guidelines)
4. [Astro Components](#astro-components)
5. [Svelte Components](#svelte-components)
6. [Project Structure](#project-structure)
7. [Naming Conventions](#naming-conventions)
8. [i18n Patterns](#i18n-patterns)
9. [SEO & Performance](#seo--performance)
10. [Git Workflow](#git-workflow)

---

## Development Commands

```bash
# Core Commands
npm run dev          # Start development server (http://localhost:4321)
npm run build        # Production build
npm run preview      # Preview production build
npm run check        # TypeScript type checking

# Linting & Formatting
npm run lint         # Run ESLint on .js, .ts, .astro, .svelte files
npm run format       # Format all files with Prettier

# Git Hooks
npm run prepare      # Install Husky git hooks (runs on npm install)
```

**Pre-commit Hook:**  
Husky + lint-staged runs automatically before each commit:

- ESLint with `--fix` on `.js`, `.ts`, `.astro`, `.svelte`
- Prettier `--write` on all staged files

---

## Code Style

### Formatting (Prettier)

```json
{
  "tabWidth": 2,
  "useTabs": false,
  "singleQuote": true,
  "semi": true,
  "bracketSpacing": true,
  "arrowParens": "avoid",
  "trailingComma": "es5",
  "bracketSameLine": true,
  "printWidth": 80
}
```

### Import Order (Astro Frontmatter)

```astro
---
// 1. External packages
import { fade } from 'astro:transitions';
import { Image } from 'astro:assets';

// 2. Components (grouped by feature)
import ProductsHomeItem from './ProductsHomeItem.astro';
import Header from '@components/shared/Header.astro';

// 3. Data & Utils
import { uiMenu } from '@/i18n/ui';
import { getLangFromUrl } from '@i18n/utils';
import { empanadaSpanish } from '@data/products.data.es';

// 4. Interfaces & Types
import type { Product } from '@interfaces/Product.interface';

// 5. Styles
import '../styles/global.css';
---

<!-- Template -->
```

### CSS/Styling

**BEM Naming with Tailwind:**

```astro
<style>
  .ComponentName {
    @apply base-styles;
  }

  .ComponentName__element {
    @apply element-styles;
  }

  .ComponentName__element--modifier {
    @apply modifier-styles;
  }
</style>
```

**Tailwind v4 Syntax:**

```astro
<style>
  @reference "tailwindcss";

  .MyComponent {
    @apply flex items-center gap-4;
  }
</style>
```

---

## TypeScript Guidelines

### TypeScript Config

Project extends `astro/tsconfigs/strict`. Key settings:

```json
{
  "compilerOptions": {
    "baseUrl": "./src",
    "paths": {
      "@/*": ["*"],
      "@assets/*": ["./assets/*"],
      "@components/*": ["./components/*"],
      "@config/*": ["./config/*"],
      "@layouts/*": ["./layouts/*"],
      "@data/*": ["./core/data/*"],
      "@i18n/*": ["./i18n/*"],
      "@interfaces/*": ["./core/interfaces/*"],
      "@utils/*": ["./core/utils/*"]
    }
  }
}
```

### Props Interface Pattern

```astro
---
interface Props {
  title: string;
  description?: string;
  variant?: 'primary' | 'secondary';
  schema?: Record<string, unknown> | Record<string, unknown>[] | null;
}

const {
  title,
  description = 'Default description',
  variant = 'primary',
  schema = null,
} = Astro.props;
---
```

### Type Definitions Location

- **Interfaces:** `src/core/interfaces/`
- **Types:** `src/core/types/`
- **Schemas:** `src/core/data/schemas/`
- **Data:** `src/core/data/`

---

## Astro Components

### Component Structure

```astro
---
import Layout from '@layouts/Layout.astro';
import { getLangFromUrl } from '@i18n/utils';

interface Props {
  title: string;
}

const { title } = Astro.props;
const lang = getLangFromUrl(Astro.url);
---

<Layout title={title}>
  <main>
    <h1>{title}</h1>
  </main>
</Layout>
```

### Rules

**MUST:**

- Define `interface Props` for type safety
- Use destructuring with defaults for optional props
- Use path aliases (`@components/*`, `@layouts/*`, etc.)
- Import styles at bottom of frontmatter
- Use `class:list` for conditional classes

**MUST NOT:**

- Access browser APIs (window, document) in frontmatter
- Use inline styles when scoped styles work
- Skip TypeScript interfaces for Props

### Image Handling

**For local images in `public/`:**

```astro
<img
  src={`/assets/images/products/${product.image}`}
  alt={product.title}
  loading="lazy"
  fetchpriority="low"
  decoding="async"
/>
```

**For optimized local images (import pattern):**

```astro
---
import { Image } from 'astro:assets';
import heroImage from '@assets/images/hero.webp';
---

<Image
  src={heroImage}
  alt="Hero image"
  width={800}
  height={600}
  format="webp"
/>
```

---

## Svelte Components

### Svelte 5 Syntax

```svelte
<script lang="ts">
  interface Props {
    label: string;
    onSubmit: (data: FormData) => void;
  }

  let { label, onSubmit }: Props = $props();

  let loading = $state(false);

  async function handleSubmit(e: Event) {
    e.preventDefault();
    loading = true;
    try {
      const formData = new FormData(e.target as HTMLFormElement);
      await onSubmit(formData);
    } finally {
      loading = false;
    }
  }
</script>

<button onclick={handleSubmit} disabled={loading}>
  {loading ? 'Loading...' : label}
</button>
```

### ESLint Svelte Rules

```javascript
// eslint.config.js
rules: {
  'svelte/no-unused-svelte-ignore': 'warn',
  '@typescript-eslint/no-unused-vars': [
    'error',
    {
      argsIgnorePattern: '^_',
      varsIgnorePattern: '^\\$\\$(Props|Events|Slots|Generic)$',
    },
  ],
}
```

---

## Project Structure

```
src/
├── assets/           # Local image assets (optimized)
├── components/
│   ├── home/         # Home page components
│   ├── products/      # Product page components
│   ├── contact/      # Contact page components
│   ├── shared/       # Shared components (Header, Footer, etc.)
│   └── ui/           # Reusable UI elements (buttons, icons)
├── config/           # App configuration
├── core/
│   ├── data/         # Data files (products, menu, business)
│   ├── interfaces/    # TypeScript interfaces
│   ├── types/        # TypeScript types
│   ├── utils/        # Utility functions
│   └── validators/   # Input validation
├── i18n/             # Internationalization
├── layouts/          # Page layouts
├── pages/            # Astro pages (file-based routing)
│   ├── en/           # English locale pages
│   ├── contacto/     # Spanish contact page
│   └── productos/    # Products pages
└── styles/           # Global styles (Tailwind)

public/
├── assets/
│   └── images/       # Public images (logos, products)
└── favicon.svg
```

### File Naming

| Type        | Convention          | Example                |
| ----------- | ------------------- | ---------------------- |
| Astro Pages | `kebab-case.astro`  | `contacto/index.astro` |
| Components  | `PascalCase.astro`  | `ProductsHome.astro`   |
| Svelte      | `PascalCase.svelte` | `ContactForm.svelte`   |
| Utils       | `camelCase.ts`      | `sendEmail.util.ts`    |
| Data        | `kebab-case.ts`     | `products.data.es.ts`  |
| Interfaces  | `PascalCase.ts`     | `Product.interface.ts` |

---

## Naming Conventions

### CSS Classes (BEM)

```css
.ComponentName {
} /* Block */
.ComponentName__element {
} /* Element */
.ComponentName__element--modifier {
} /* Modifier */
.ComponentName--variant {
} /* Block modifier */
```

### JavaScript/TypeScript

| Type         | Convention           | Example                                |
| ------------ | -------------------- | -------------------------------------- |
| Variables    | camelCase            | `const isLoading = true`               |
| Constants    | UPPER_SNAKE_CASE     | `const API_URL = '...'`                |
| Functions    | camelCase            | `function sendEmail()`                 |
| Classes      | PascalCase           | `class ContactForm`                    |
| Interfaces   | PascalCase           | `interface ProductProps`               |
| Types        | PascalCase           | `type FormState = 'idle' \| 'loading'` |
| Enums        | PascalCase           | `enum Status { Active, Inactive }`     |
| Boolean vars | is/has/should prefix | `isLoading`, `hasError`                |

### Astro Component Props

```typescript
interface Props {
  title: string; // camelCase for props
  metaDescription: string;
  noindex?: boolean;
  variant?: 'primary' | 'secondary';
}
```

---

## i18n Patterns

### Translation Files Location

`src/i18n/ui.ts` - All UI strings

### Translation Structure

```typescript
export const ui = {
  es: {
    'hero.title': 'Texto en español',
    'hero.subtitle': 'Subtítulo',
  },
  en: {
    'hero.title': 'English text',
    'hero.subtitle': 'Subtitle',
  },
};
```

### Using Translations

```astro
---
import { getLangFromUrl } from '@i18n/utils';
import { ui } from '@/i18n/ui';

const lang = getLangFromUrl(Astro.url);
const title = ui[lang]['hero.title'];
---

<h1>{title}</h1>
```

### Language Switcher

Use `lang` attribute on `<html>` element:

```astro
<html lang={lang}></html>
```

---

## SEO & Performance

### Meta Tags (Head Component)

All pages should pass proper meta tags to Layout:

```astro
---
import Layout from '@layouts/Layout.astro';

interface Props {
  title: string;
  metaDescription: string;
}

const { title, metaDescription } = Astro.props;
---

<Layout title={title} metaDescription={metaDescription}>
  <!-- Page content -->
</Layout>
```

### Open Graph Images

- Use `businessData.logo` (1200x630px) for OG images
- Always provide `alt` text for images
- Use `loading="lazy"` for below-fold images
- Use `fetchpriority="high"` for hero/LCP images

### Performance Rules

1. **Images:** Use WebP format, specify dimensions
2. **Fonts:** System fonts preferred, limit font loading
3. **JavaScript:** Ship zero JS by default, use islands for interactivity
4. **CSS:** Tailwind generates minimal CSS, avoid global styles

---

## Git Workflow

### Commit Convention

```
type(scope): description

Types: feat | fix | refactor | docs | style | test | chore
Scopes: home | products | contact | components | config | etc.
```

**Examples:**

```bash
git commit -m "feat(products): add new empanada variety"
git commit -m "fix: correct button styling on mobile"
git commit -m "refactor: migrate to Svelte 5 syntax"
```

### Pre-commit Hook

Husky automatically runs:

1. ESLint with `--fix`
2. Prettier with `--write`

**DO NOT skip hooks.** If linting fails, fix the issues.

---

## Quick Reference

| Category    | Rule                                          |
| ----------- | --------------------------------------------- |
| **Props**   | Always define `interface Props`               |
| **Types**   | Use path aliases (`@components/*`, `@data/*`) |
| **Styles**  | BEM with Tailwind `@apply`                    |
| **Images**  | Use WebP, lazy load below fold                |
| **i18n**    | Use `getLangFromUrl()` + `ui` object          |
| **Svelte**  | Use `$props()`, `$state()`, `$derived()`      |
| **Linting** | Don't skip pre-commit hooks                   |
| **Commits** | Conventional commits format                   |

---

_Last Updated: 2025-01-15_
