import { businessData } from '@/core/data/business.data';
import { empanadaSpanish, empanadaEnglish } from '@data/index.data';

// 🇪🇸 PRODUCT SCHEMAS IN SPANISH
export const PRODUCT_SCHEMAS_ES = [
  {
    '@context': 'https://schema.org/',
    '@type': 'Product',
    name: 'Empanada Hawaiana - Paquete x 10',
    image: `${businessData.site}/_astro/empanada-hawaiana.webp`,
    description: empanadaSpanish[0].description,
    brand: {
      '@type': 'Brand',
      name: businessData.name,
    },
    offers: {
      '@type': 'Offer',
      url: `${businessData.site}/productos`,
      priceCurrency: 'COP',
      price: '0',
      priceValidUntil: '2025-12-31',
      availability: 'https://schema.org/InStock',
      itemCondition: 'https://schema.org/NewCondition',
      seller: {
        '@type': 'Organization',
        name: businessData.name,
      },
    },
  },
  {
    '@context': 'https://schema.org/',
    '@type': 'Product',
    name: 'Empanada de Carne Desmechada - Paquete x 10',
    image: `${businessData.site}/_astro/empanada-carne.webp`,
    description: empanadaSpanish[1].description,
    brand: {
      '@type': 'Brand',
      name: 'Mordisko Criollo',
    },
    offers: {
      '@type': 'Offer',
      url: `${businessData.site}/productos`,
      priceCurrency: 'COP',
      price: '0',
      availability: 'https://schema.org/InStock',
      itemCondition: 'https://schema.org/NewCondition',
      seller: {
        '@type': 'Organization',
        name: 'Mordisko Criollo',
      },
    },
  },
  {
    '@context': 'https://schema.org/',
    '@type': 'Product',
    name: 'Empanada de Pollo Desmechado - Paquete x 10',
    image: `${businessData.site}/_astro/empanada-pollo.webp`,
    description: empanadaSpanish[2].description,
    brand: {
      '@type': 'Brand',
      name: 'Mordisko Criollo',
    },
    offers: {
      '@type': 'Offer',
      url: `${businessData.site}/productos`,
      priceCurrency: 'COP',
      price: '0',
      availability: 'https://schema.org/InStock',
      itemCondition: 'https://schema.org/NewCondition',
      seller: {
        '@type': 'Organization',
        name: 'Mordisko Criollo',
      },
    },
  },
  {
    '@context': 'https://schema.org/',
    '@type': 'Product',
    name: 'Empanada de Sobrebarriga - Paquete x 10',
    image: `${businessData.site}/_astro/empanada-sobrebarriga.webp`,
    description: empanadaSpanish[3].description,
    brand: {
      '@type': 'Brand',
      name: 'Mordisko Criollo',
    },
    offers: {
      '@type': 'Offer',
      url: `${businessData.site}/productos`,
      priceCurrency: 'COP',
      price: '0',
      availability: 'https://schema.org/InStock',
      itemCondition: 'https://schema.org/NewCondition',
      seller: {
        '@type': 'Organization',
        name: 'Mordisko Criollo',
      },
    },
  },
];

// 🇺🇸 PRODUCT SCHEMAS IN ENGLISH
export const PRODUCT_SCHEMAS_EN = [
  {
    '@context': 'https://schema.org/',
    '@type': 'Product',
    name: 'Hawaiian Empanada - Pack of 10',
    image: `${businessData.site}/_astro/empanada-hawaiana.webp`,
    description: empanadaEnglish[0].description,
    brand: {
      '@type': 'Brand',
      name: businessData.name,
    },
    offers: {
      '@type': 'Offer',
      url: `${businessData.site}/en/products`,
      priceCurrency: 'COP',
      price: '0',
      priceValidUntil: '2025-12-31',
      availability: 'https://schema.org/InStock',
      itemCondition: 'https://schema.org/NewCondition',
      seller: {
        '@type': 'Organization',
        name: businessData.name,
      },
    },
  },
  {
    '@context': 'https://schema.org/',
    '@type': 'Product',
    name: 'Shredded Beef Empanada - Pack of 10',
    image: `${businessData.site}/_astro/empanada-carne.webp`,
    description: empanadaEnglish[1].description,
    brand: {
      '@type': 'Brand',
      name: businessData.name,
    },
    offers: {
      '@type': 'Offer',
      url: `${businessData.site}/en/products`,
      priceCurrency: 'COP',
      price: '0',
      availability: 'https://schema.org/InStock',
      itemCondition: 'https://schema.org/NewCondition',
      seller: {
        '@type': 'Organization',
        name: businessData.name,
      },
    },
  },
  {
    '@context': 'https://schema.org/',
    '@type': 'Product',
    name: 'Shredded Chicken Empanada - Pack of 10',
    image: `${businessData.site}/_astro/empanada-pollo.webp`,
    description: empanadaEnglish[2].description,
    brand: {
      '@type': 'Brand',
      name: businessData.name,
    },
    offers: {
      '@type': 'Offer',
      url: `${businessData.site}/en/products`,
      priceCurrency: 'COP',
      price: '0',
      availability: 'https://schema.org/InStock',
      itemCondition: 'https://schema.org/NewCondition',
      seller: {
        '@type': 'Organization',
        name: businessData.name,
      },
    },
  },
  {
    '@context': 'https://schema.org/',
    '@type': 'Product',
    name: 'Slow-Cooked Beef Empanada - Pack of 10',
    image: `${businessData.site}/_astro/empanada-sobrebarriga.webp`,
    description: empanadaEnglish[3].description,
    brand: {
      '@type': 'Brand',
      name: businessData.name,
    },
    offers: {
      '@type': 'Offer',
      url: `${businessData.site}/en/products`,
      priceCurrency: 'COP',
      price: '0',
      availability: 'https://schema.org/InStock',
      itemCondition: 'https://schema.org/NewCondition',
      seller: {
        '@type': 'Organization',
        name: businessData.name,
      },
    },
  },
];
