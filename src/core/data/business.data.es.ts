import { businessData } from './business.data';

export const businessDataSpanish = {
  ...businessData,
  copyRight: 'Todos los derechos reservados',
  whatsapp: {
    ...businessData.whatsapp,
    message:
      'Hola Mordisko! 👋 Vengo de la web. Tengo una duda especial o consulta sobre eventos/catering. ¿Me ayudan?',
  },
  facebook: {
    ...businessData.facebook,
    message: 'Visita y siguenos en nuestra pagina de Facebook',
  },
  instagram: {
    ...businessData.instagram,
    message: 'Visita y siguenos en nuestra pagina de Instagram',
  },
  tiktok: {
    ...businessData.tiktok,
    message: 'Visita y siguenos en nuestra pagina de Tiktok',
  },
  history: [
    `En ${businessData.name} llevamos la tradición directamente a tu mesa. Fusionamos el inconfundible sazón casero con rellenos generosos y atrevidos, como nuestra irresistible Hawaiana o la clásica Carne Desmechada."`,
    `Olvídate de cocinar. Somos expertos en calmar tus antojos con auténticas empanadas, pasteles de pollo, papas rellenas y arepas de queso, siempre crocantes y calienticas. Disfrutar del mejor sabor de la tierrita en Medellín es tan fácil como dar un clic: preparamos tu pedido al instante y lo enviamos directo a tu puerta, listo para morder.`,
  ],
};
