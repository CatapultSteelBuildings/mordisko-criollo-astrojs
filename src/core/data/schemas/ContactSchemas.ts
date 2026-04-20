import { businessData } from '@/core/data/business.data';

// 🇪🇸 CONTACT SCHEMA - SPANISH
export const CONTACT_SCHEMA_ES = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: `Contacto y Atención al Cliente - ${businessData.name}`,
  description:
    '¿Dudas, sugerencias o pedidos especiales? Contáctanos. Disfruta las mejores empanadas, pasteles y arepas a domicilio en Medellín.',
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
      contactType: 'customer service',
      areaServed: 'Medellín',
      availableLanguage: ['es', 'en'],
    },
  },
};

// 🇺🇸 CONTACT SCHEMA - ENGLISH
export const CONTACT_SCHEMA_EN = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: `Contact & Customer Service - ${businessData.name}`,
  description:
    'Questions, suggestions, or special orders? Contact us. Enjoy the best hot empanadas and paisa snacks delivered in Medellín.',
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
      contactType: 'customer service',
      areaServed: 'Medellín',
      availableLanguage: ['en', 'es'],
    },
  },
};
