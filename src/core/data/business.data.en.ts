import { businessData } from './business.data';

export const businessDataEnglish = {
  ...businessData,
  copyRight: 'All rights reserved',
  whatsapp: {
    ...businessData.whatsapp,
    message: 'Visit and follow us on our WhatsApp page',
  },
  facebook: {
    ...businessData.facebook,
    message: 'Visit and follow us on our Facebook page',
  },
  instagram: {
    ...businessData.instagram,
    message: 'Visit and follow us on our Instagram page',
  },
  tiktok: {
    ...businessData.tiktok,
    message: 'Visit and follow us on our Tiktok page',
  },
  history: [
    `At ${businessData.name}, we are revolutionizing tradition. We go far beyond the typical empanadas, fusing unmistakable home-style savory flavor with bold, innovative fillings like our Hawaiian or the hearty slow-cooked beef (Sobrebarriga).`,
    `We specialize in premium frozen empanadas, ready to fry at home. If you want to enjoy an authentic "paisa" empanada—featuring a crispy corn crust and generous filling—without leaving the house, you’ve found the right spot. We satisfy your cravings by delivering the best empanadas in Medellín straight to your doorstep.`,
  ],
};
