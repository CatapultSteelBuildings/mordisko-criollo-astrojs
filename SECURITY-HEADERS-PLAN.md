# Security Headers para Cloudflare

## Opciones de Implementación

### Opción 1: \_headers file (Recomendado para Cloudflare Pages)

Archivo: `public/_headers`

```
# Security Headers for Mordisko Criollo
# https://developers.cloudflare.com/pages/platform/headers/

# ============================================
# SECURITY HEADERS
# ============================================

# Prevent clickjacking
X-Frame-Options: DENY

# Prevent MIME type sniffing
X-Content-Type-Options: nosniff

# XSS Protection (legacy but still useful)
X-XSS-Protection: 1; mode=block

# Referrer Policy
Referrer-Policy: strict-origin-when-cross-origin

# Permissions Policy
Permissions-Policy: geolocation=(), microphone=(), camera=()

# ============================================
# CONTENT SECURITY POLICY (CSP)
# ============================================
# Strict but functional CSP for static site with external services

Content-Security-Policy:
  default-src 'self';
  script-src 'self' 'unsafe-inline';
  style-src 'self' 'unsafe-inline';
  img-src 'self' data: https:;
  font-src 'self';
  connect-src 'self';
  frame-ancestors 'self';
  base-uri 'self';
  form-action 'self';

# ============================================
# HSTS (Optional - enable when ready)
# ============================================
# Uncomment after testing
# Strict-Transport-Security: max-age=31536000; includeSubDomains; preload
```

---

### Opción 2: Cloudflare Dashboard (Pages → Settings → Headers)

| Header                  | Value                                    |
| ----------------------- | ---------------------------------------- |
| X-Frame-Options         | DENY                                     |
| X-Content-Type-Options  | nosniff                                  |
| Referrer-Policy         | strict-origin-when-cross-origin          |
| Permissions-Policy      | geolocation=(), microphone=(), camera=() |
| Content-Security-Policy | (see above)                              |

---

### Opción 3: \_headers file (Versión Estricta)

```
# Strict-Security Headers
X-Frame-Options: DENY
X-Content-Type-Options: nosniff
Referrer-Policy: strict-origin-when-cross-origin
Permissions-Policy: accelerometer=(), camera=(), geolocation=(), gyroscope=(), magnetometer=(), microphone=(), payment=(), usb=()

# CSP - Allow images from Cloudflare, external sites
Content-Security-Policy:
  default-src 'self';
  script-src 'self';
  style-src 'self' 'unsafe-inline';
  img-src 'self' data: https: blob:;
  font-src 'self' data:;
  connect-src 'self';
  frame-ancestors 'self';
  base-uri 'self';
  form-action 'self';
```

---

## Recomendaciones por Nivel de Seguridad

### Level 1: Básico (Recomendado para inicio)

```
X-Frame-Options: DENY
X-Content-Type-Options: nosniff
Referrer-Policy: strict-origin-when-cross-origin
```

### Level 2: Intermedio (Recomendado para producción)

```
X-Frame-Options: DENY
X-Content-Type-Options: nosniff
Referrer-Policy: strict-origin-when-cross-origin
Permissions-Policy: geolocation=(), microphone=(), camera=()
Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline';
```

### Level 3: Estricto (Solo si todo funciona)

Full CSP con todas las restricciones.

---

## Implementación Recomendada para Mordisko Criollo

### public/\_headers (Level 2):

```http
# Security Headers - Mordisko Criollo
X-Frame-Options: DENY
X-Content-Type-Options: nosniff
Referrer-Policy: strict-origin-when-cross-origin
Permissions-Policy: geolocation=(), microphone=(), camera=()

# CSP - Allow inline scripts (needed for Astro islands, analytics)
Content-Security-Policy:
  default-src 'self';
  script-src 'self' 'unsafe-inline';
  style-src 'self' 'unsafe-inline';
  img-src 'self' data: https:;
  frame-ancestors 'self';
  form-action 'self';
```

---

## Pasos de Implementación

1. [ ] Crear archivo `public/_headers`
2. [ ] Testing en staging/preview
3. [ ] Deploy a producción
4. [ ] Verificar con securityheaders.com
5. [ ] Iterar según resultados

---

## Testing

```bash
# Check headers
curl -I https://mordiskocriollo.com

# Online scanner
https://securityheaders.com/?q=mordiskocriollo.com
https://observatory.mozilla.org/scan/mordiskocriollo.com
```

---

_created: 2026-04-20_
_branch: config/security-headers-cloudflare_
