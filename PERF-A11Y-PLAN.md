# Optimización Total: Accesibilidad, Performance y Web Vitals

## Estado Actual del Proyecto

**Stack:** Astro 5 + Svelte 5 + Tailwind CSS 4 + TypeScript  
**Última PR:** #20 (SEO schemas dinámicos)

---

## Análisis Por Categoría

### 1. Accesibilidad (WCAG 2.2 AA)

#### ✅ Ya implementando:

- `aria-label` en botones (RappiButton, DidiFoodButton)
- `aria-invalid`, `aria-describedby`, `role="alert"` en formularios
- `aria-live="polite"` para errores
- Etiquetas de idioma dinámicas

#### ❌ Pendiente:

- [ ] **Skip links** para navegación por teclado
- [ ] **Focus visible** personalizado (`:focus-visible`)
- [ ] **Contraste de color** insuficiente en algunos elementos
- [ ] **Dimensiones** faltantes en imágenes
- [ ] **ARIA** en iconos svg sin etiquetas
- [ ] **Atributo lang** en cambios de idioma dentro del copy

### 2. Performance (Lighthouse)

#### ✅ Ya implementando:

- **lazy loading** en imágenes
- **decoding="async"**
- **fetchpriority** configurado
- **Astro islands** (zero JS por defecto)

#### ❌ Pendiente:

- [ ] **Preload** para LCP image (hero)
- [ ] **Dimensiones explícitas** en todas las imágenes
- [ ] **Optimización de fuentes** (font-display: swap)
- [ ] **Critical CSS** inlining
- [ ] **Third-party** scripts lazy loaded
- [ ] **Imágenes WebP/AVIF** con picture element

### 3. Core Web Vitals

#### LCP (Largest Contentful Paint) - Target: <2.5s

- [ ] **TTFB** < 800ms (verificar con build)
- [ ] **Hero image** con `fetchpriority="high"` y preload
- [ ] **No render-blocking CSS** en `<head>`
- [ ] **Font-display: swap** para evitar FOIT

#### INP (Interaction to Next Paint) - Target: <200ms

- [ ] **Event handlers** optimizados
- [ ] **Third-party** no bloqueante
- [ ] **Zero main-thread blocking** >50ms

#### CLS (Cumulative Layout Shift) - Target: <0.1

- [ ] **Todas las imágenes** con width/height
- [ ] **Reserve space** para ads/embeds
- [ ] **Aspect-ratio** CSS donde corresponda
- [ ] **Fonts con size-adjust** para evitar FOUT

### 4. Best Practices

#### ✅ Ya implementando:

- HTTPS
- Viewport meta
- Charset declarada
- Passive event listeners
- Semantic HTML (header, main, footer, nav)

#### ❌ Pendiente:

- [ ] **CSP headers** recomendados
- [ ] **Security headers** (X-Frame-Options, etc.)
- [ ] **Image aspect ratios** explícitos
- [ ] **Fuente maps** en producción: hidden

---

## Plan de Implementación

### Fase 1: Accesibilidad Crítica (WCAG A)

```
1.1 Agregar skip link al Layout
1.2 Personalizar focus-visible styles
1.3 Agregar alt texts a imágenes faltantes
1.4 ARIA labels en iconos SVG
1.5 Verificar contraste de colores
```

### Fase 2: Performance LCP

```
2.1 Preload hero image con fetchpriority="high"
2.2 Agregar width/height todas las imágenes
2.3 Optimizar fuentes (font-display: swap)
2.4 Fix render-blocking resources
```

### Fase 3: CLS & INP

```
3.1 Aspect-ratio en todas las imágenes
3.2 Reserve space para componentes dinámicos
3.3 Lazy load third-party scripts
3.4 Debounce event handlers
```

### Fase 4: Best Practices & Web Vitals

```
4.1 Agregar CSP y security headers
4.2 Image optimization pipeline (WebP/AVIF)
4.3 Service worker para caching
4.4 Audit final Lighthouse
```

---

## Métricas Objetivo

| Métrica        | Actual (estimado) | Target |
| -------------- | ----------------- | ------ |
| Accessibility  | ~70               | 100    |
| Performance    | ~80               | 95+    |
| Best Practices | ~85               | 100    |
| LCP            | ~3.5s             | <2.5s  |
| INP            | ~150ms            | <200ms |
| CLS            | ~0.15             | <0.1   |

---

## Archivos Clave a Modificar

1. `src/layouts/Layout.astro` - skip link, focus styles
2. `src/components/shared/Head.astro` - preload, preconnect
3. `src/components/home/HeroHome.astro` - LCP optimization
4. `src/components/products/ProductsMainIitem.astro` - dimensions
5. `src/styles/global.css` - focus-visible, reduced-motion, skip link styles
6. `astro.config.mjs` - image optimization config

---

## Testing Commands

```bash
# Lighthouse completo
npx lighthouse https://mordiskocriollo.com --output html --output-path audit.html

# Web Vitals
npx web-vitals

# Accesibilidad
npx axe https://mordiskocriollo.com
```

---

_Plan creado: 2026-04-20 | Branch: perf/a11y-optimization_
