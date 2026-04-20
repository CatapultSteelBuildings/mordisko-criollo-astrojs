import { businessData } from '@/core/data/business.data';

import type { Product } from '@/core/interfaces';

import { empanadaSpanish } from '../products.data.es';
import { empanadaEnglish } from '../products.data.en';

/**
 * Generate product schemas dynamically.
 * @param productsData Array of products (ES or EN)
 * @param langPath Language prefix for the URL (e.g., '/en')
 * @returns Array of Schema.org Product objects
 */
const generateProductSchemas = (productsData: Product[], langPath = '') => {
  return productsData.map(product => ({
    '@context': 'https://schema.org/',
    '@type': 'Product',
    name: product.title,
    image: `${businessData.site}/assets/images/products/${product.image}`,
    description: product.description[0],
    brand: {
      '@type': 'Brand',
      name: businessData.name,
    },
    offers: {
      '@type': 'Offer',
      // OPTION 1: URL with anchor (#) to direct to the specific product ID
      url: `${businessData.site}${langPath}/productos#${product.code}`,
      priceCurrency: 'COP',
      price: product.price.toString(),
      priceValidUntil: '2025-12-31',
      availability: 'https://schema.org/InStock',
      itemCondition: 'https://schema.org/NewCondition',
      seller: {
        '@type': 'Organization',
        name: businessData.name,
      },
    },
  }));
};

// 🇪🇸 PRODUCT SCHEMAS IN SPANISH
// Result: https://mordiskocriollo.com/productos#hawaiian
export const PRODUCT_SCHEMAS_ES = generateProductSchemas(empanadaSpanish);

// 🇺🇸 PRODUCT SCHEMAS IN ENGLISH
// Result: https://mordiskocriollo.com/en/productos#hawaiian
export const PRODUCT_SCHEMAS_EN = generateProductSchemas(
  empanadaEnglish,
  '/en'
);
