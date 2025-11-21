import { businessData } from './business.data';

export const businessDataSpanish = {
  ...businessData,
  copyRight: 'Todos los derechos reservados',
  whatsapp: {
    ...businessData.whatsapp,
    message: 'Visita y siguenos en nuestra pagina de WhatsApp',
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
    `En ${businessData.name} revolucionamos la tradición. Vamos mucho más allá de las típicas empanadas, fusionando el inconfundible sazón casero con rellenos atrevidos e innovadores, como nuestra Hawaiana o la potente Sobrebarriga.`,
    `Somos expertos en empanadas congeladas listas para freír. Si quieres disfrutar una auténtica empanada paisa, de masa crocante y cargada de relleno sin salir de casa, llegaste al lugar indicado. Cubrimos tus antojos llevando las mejores empanadas Medellín directamente hasta tu puerta con nuestro servicio de domicilios.`,
  ],
};
