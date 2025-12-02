import { businessData } from '@/core/data/business.data';

// 🇪🇸 CONTACT SCHEMA - SPANISH
export const CONTACT_SCHEMA_ES = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: `Haz tu pedido en línea - ${businessData.name}`,
  description:
    'Realiza tu pedido de empanadas congeladas en Medellín. Contacto directo por WhatsApp para domicilios y atención al cliente.',
  url: businessData.site,
  mainEntity: {
    '@type': 'FoodEstablishment',
    name: businessData.name,
    telephone: businessData.phone,
    email: businessData.email,
    areaServed: [
      {
        '@type': 'City',
        name: 'Medellín',
      },
    ],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Medellín',
      addressRegion: 'Antioquia',
      addressCountry: 'CO',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: businessData.phone,
      contactType: 'sales',
      areaServed: 'Medellín',
      availableLanguage: ['es', 'en'],
    },
  },
};

// 🇺🇸 CONTACT SCHEMA - ENGLISH
export const CONTACT_SCHEMA_EN = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: `Order Online - ${businessData.name}`,
  description:
    'Place your order for frozen empanadas in Medellín. Direct contact via WhatsApp for delivery and customer service.',
  url: businessData.site,
  mainEntity: {
    '@type': 'FoodEstablishment',
    name: businessData.name,
    telephone: businessData.phone,
    email: businessData.email,
    areaServed: [
      {
        '@type': 'City',
        name: 'Medellín',
      },
    ],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Medellín',
      addressRegion: 'Antioquia',
      addressCountry: 'CO',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: businessData.phone,
      contactType: 'sales',
      areaServed: 'Medellín',
      availableLanguage: ['en', 'es'],
    },
  },
};
