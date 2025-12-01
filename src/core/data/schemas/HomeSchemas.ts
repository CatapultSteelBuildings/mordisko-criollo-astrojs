// 🇪🇸 Spanish version
export const HOME_SCHEMA_ES = {
  '@context': 'https://schema.org',
  '@type': 'FoodEstablishment',
  name: 'Mordisko Criollo',
  image:
    'https://mordiskocriollo.com/_astro/mordisko-criollo-logo.Jok3GEg__Z1H9Xk0.webp',
  description:
    'Fábrica de empanadas congeladas en Medellín. Sabores tradicionales y gourmet (Hawaiana, Sobrebarriga) listas para freír. Domicilios en todo el Valle de Aburrá.',
  url: 'https://mordiskocriollo.com/',
  telephone: '+573156115105',
  priceRange: '$$',
  servesCuisine: 'Colombian, Empanadas',
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
  sameAs: [
    'https://www.facebook.com/mordiskocriollo',
    'https://www.instagram.com/mordiskocriollo',
    'https://www.tiktok.com/@mordiskocriollo',
  ],
  potentialAction: {
    '@type': 'OrderAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: 'https://wa.me/573156115105',
      inLanguage: 'es',
      actionPlatform: [
        'http://schema.org/DesktopWebPlatform',
        'http://schema.org/MobileWebPlatform',
      ],
    },
    result: {
      '@type': 'FoodEstablishmentReservation',
      name: 'Pedir por WhatsApp',
    },
  },
};

// 🇺🇸English version
export const HOME_SCHEMA_EN = {
  '@context': 'https://schema.org',
  '@type': 'FoodEstablishment',
  name: 'Mordisko Criollo',
  image:
    'https://mordiskocriollo.com/_astro/mordisko-criollo-logo.Jok3GEg__Z1H9Xk0.webp',
  description:
    'Frozen empanada factory in Medellín. Traditional and gourmet flavors (Hawaiian, Slow-Cooked Beef) ready to fry. Delivery throughout the Aburrá Valley.',
  url: 'https://mordiskocriollo.com/',
  telephone: '+573156115105',
  priceRange: '$$',
  servesCuisine: 'Colombian, Empanadas',
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
  sameAs: [
    'https://www.facebook.com/mordiskocriollo',
    'https://www.instagram.com/mordiskocriollo',
    'https://www.tiktok.com/@mordiskocriollo',
  ],
  potentialAction: {
    '@type': 'OrderAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: 'https://wa.me/573156115105',
      inLanguage: 'en',
      actionPlatform: [
        'http://schema.org/DesktopWebPlatform',
        'http://schema.org/MobileWebPlatform',
      ],
    },
    result: {
      '@type': 'FoodEstablishmentReservation',
      name: 'Order via WhatsApp',
    },
  },
};
