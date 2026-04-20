import { businessData } from '@/core/data/business.data';

import type { Product } from '@/core/interfaces';

import { empanadaSpanish } from '../products.data.es';
import { empanadaEnglish } from '../products.data.en';

const generateMenuItems = (products: Product[]) => {
  return products.map(product => ({
    '@type': 'MenuItem',
    name: product.title,
    description: product.description[0],
    image: `${businessData.site}/_astro/${product.image}`,
    url: `${businessData.site}${product.url}`,
  }));
};

// 🇪🇸 Spanish version
export const HOME_SCHEMA_ES = {
  '@context': 'https://schema.org',
  '@type': 'FoodEstablishment',
  name: businessData.name,
  image: `${businessData.site}/_astro/mordisko-criollo-logo.Jok3GEg__Z1H9Xk0.webp`,
  description:
    '¿Antojo de empanadas en Medellín? Domicilios de empanadas, pasteles y arepas. Recibe tu pedido calientico y crujiente en minutos. ¡Pide ahora!',
  url: businessData.site,
  telephone: businessData.phone,
  priceRange: '$$',
  servesCuisine: 'Colombian, Empanadas, Comida Rápida, Delivery',
  acceptsReservations: 'False',
  areaServed: [{ '@type': 'City', name: 'Medellín' }],
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Medellín',
    addressRegion: 'Antioquia',
    addressCountry: 'CO',
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
      'Sunday',
    ],
    opens: '08:00',
    closes: '18:00',
  },
  hasMenu: {
    '@type': 'Menu',
    name: 'Menú Mordisko Criollo',
    hasMenuItem: generateMenuItems(empanadaSpanish),
  },
  sameAs: [businessData.facebook.url, businessData.instagram.url],
  potentialAction: {
    '@type': 'OrderAction',
    deliveryMethod:
      'http://purl.org/goodrelations/v1#DeliveryModeDirectDownload',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: `https://wa.me/${businessData.phone.replace('+', '')}`,
      inLanguage: 'es',
      actionPlatform: [
        'http://schema.org/DesktopWebPlatform',
        'http://schema.org/MobileWebPlatform',
      ],
    },
  },
};

// 🇺🇸English version
export const HOME_SCHEMA_EN = {
  '@context': 'https://schema.org',
  '@type': 'FoodEstablishment',
  name: businessData.name,
  image: `${businessData.site}/_astro/mordisko-criollo-logo.Jok3GEg__Z1H9Xk0.webp`,
  description:
    'Craving empanadas in Medellín? Get hot, crispy empanadas, pastries, and cheese arepas delivered straight to your door in minutes. Order now!',
  url: businessData.site,
  telephone: businessData.phone,
  priceRange: '$$',
  servesCuisine: 'Colombian, Empanadas, Fast Food, Delivery',
  acceptsReservations: 'False',
  areaServed: [{ '@type': 'City', name: 'Medellín' }],
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Medellín',
    addressRegion: 'Antioquia',
    addressCountry: 'CO',
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
      'Sunday',
    ],
    opens: '08:00',
    closes: '18:00',
  },
  hasMenu: {
    '@type': 'Menu',
    name: 'Mordisko Criollo Menu',
    hasMenuItem: generateMenuItems(empanadaEnglish),
  },
  sameAs: [businessData.facebook.url, businessData.instagram.url],
  potentialAction: {
    '@type': 'OrderAction',
    deliveryMethod:
      'http://purl.org/goodrelations/v1#DeliveryModeDirectDownload',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: `https://wa.me/${businessData.phone.replace('+', '')}`,
      inLanguage: 'en',
      actionPlatform: [
        'http://schema.org/DesktopWebPlatform',
        'http://schema.org/MobileWebPlatform',
      ],
    },
  },
};
