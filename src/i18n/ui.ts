import { businessData } from '@/core/data/business.data';

export const languages = {
  es: 'es Español',
  en: 'en English',
};

export const defaultLang = 'es';

export type NavKey = 'nav.home' | 'nav.products' | 'nav.contact';

export const uiMenu = {
  es: {
    'nav.label': 'Navegación principal',
    'nav.home': 'Inicio',
    'nav.home.url': '/',
    'nav.products': 'Productos',
    'nav.products.url': '/productos',
    'nav.contact': 'Contacto',
    'nav.contact.url': '/contacto',
  },
  en: {
    'nav.label': 'Main navigation',
    'nav.home': 'Home',
    'nav.home.url': '/en',
    'nav.products': 'Products',
    'nav.products.url': '/en/products',
    'nav.contact': 'Contact',
    'nav.contact.url': '/en/contact',
  },
};

export const ui = {
  es: {
    ...uiMenu.es,
    'hero.title': 'Domicilios de Empanadas en Medellín',
    'hero.subtitle': 'Calienticas, crujientes y con Puro Sabor Criollo',
    'hero.message':
      'Olvídate de cocinar. Pide ahora por Rappi o DiDi Food y recibe tu antojo en minutos, listo para disfrutar.',
    'hero.message-desktop':
      'Olvídate de cocinar. Pide tu antojo al instante por Rappi y recíbelo en minutos, o explora nuestro menú para conocer todos los productos.',
    'delivery.message': 'Domicilios a todo Medellín',
    'copyRight.message': 'Todos los derechos reservados',
    'message.facebook': 'Visita y siguenos en nuestra pagina de Facebook',
    'message.instagram': 'Visita y siguenos en nuestra pagina de Instagram',
    'message.tiktok': 'Visita y siguenos en nuestra pagina de Tiktok',
    'message.whatsapp': 'Visita y siguenos en nuestra pagina de WhatsApp',
    'product.page.title': 'Nuestro Menú: Empanadas, Pasteles y Más',
    'product.page.subtitle':
      'El Auténtico Sabor Paisa, Calientico y Directo a tu Puerta',
    'product.page.description': `En ${businessData.name} no ahorramos en relleno. Descubre nuestra selección artesanal elaborada con ingredientes naturales y guisos que respetan la tradición. Desde empanadas crujientes hasta papas rellenas y arepas de queso; calidad premium lista para calmar tu antojo en minutos, sin moverte de casa.`,
    'contact.page.title': '¿Tienes comentarios?',
    'contact.page.subtitle': 'Escríbenos tus opiniones o sugerencias',
  },
  en: {
    ...uiMenu.en,
    'hero.title': 'Empanada Delivery in Medellín',
    'hero.subtitle': 'Hot, crispy, and full of Authentic Criollo Flavor',
    'hero.message':
      'Forget about cooking. Order now on Rappi or DiDi Food and satisfy your cravings in minutes, ready to enjoy.',
    'hero.message-desktop':
      'Forget about cooking. Order your cravings instantly on Rappi and get them in minutes, or explore our menu to discover all our products.',
    'delivery.message': 'Home delivery throughout Medellín',
    'copyRight.message': 'All rights reserved',
    'message.facebook': 'Visit and follow us on our Facebook page',
    'message.instagram': 'Visit and follow us on our Instagram page',
    'message.tiktok': 'Visit and follow us on our Tiktok page',
    'message.whatsapp': 'Visit and follow us on our WhatsApp page',
    'product.page.title': 'Our Menu: Empanadas, Pastries & More',
    'product.page.subtitle':
      'Authentic Paisa Flavor, Hot and Straight to Your Door',
    'product.page.description': `At ${businessData.name}, we don't skimp on the filling. Discover our artisanal selection made with natural ingredients and traditional recipes. From crispy empanadas to stuffed potatoes and cheese arepas; premium quality ready to satisfy your cravings in minutes, delivered right to your home.`,
    'contact.page.title': 'Do you have comments?',
    'contact.page.subtitle': 'Write us your opinions or suggestions',
  },
};
