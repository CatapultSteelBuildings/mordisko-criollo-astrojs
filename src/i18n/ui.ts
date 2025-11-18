export const languages = {
  es: 'es Español',
  en: 'en English',
};

export const defaultLang = 'es';

export type NavKey = 'nav.home' | 'nav.products' | 'nav.contact';

export const uiMenu = {
  es: {
    'nav.home': 'Inicio',
    'nav.home.url': '/',
    'nav.products': 'Productos',
    'nav.products.url': '/productos',
    'nav.contact': 'Contacto',
    'nav.contact.url': '/contacto',
  },
  en: {
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
    copyRight: 'Todos los derechos reservados',
    'message.facebook': 'Visita y siguenos en nuestra pagina de Facebook',
    'message.instagram': 'Visita y siguenos en nuestra pagina de Instagram',
    'message.tiktok': 'Visita y siguenos en nuestra pagina de Tiktok',
    'message.whatsapp': 'Visita y siguenos en nuestra pagina de WhatsApp',
  },
  en: {
    ...uiMenu.en,
    copyRight: 'All rights reserved',
    'message.facebook': 'Visit and follow us on our Facebook page',
    'message.instagram': 'Visit and follow us on our Instagram page',
    'message.tiktok': 'Visit and follow us on our Tiktok page',
    'message.whatsapp': 'Visit and follow us on our WhatsApp page',
  },
};
