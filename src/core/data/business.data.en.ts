import { businessData } from './business.data';

export const businessDataEnglish = {
  ...businessData,
  copyRight: 'All rights reserved',
  whatsapp: {
    ...businessData.whatsapp,
    message: `Hi Mordisko! 👋 Coming from your website. I have a question or inquiry about events/catering. Can you help?`,
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
    `At ${businessData.name}, we bring tradition straight to your table. We blend unmistakable homemade flavor with generous and bold fillings, like our irresistible Hawaiian or the classic Shredded Beef.`,
    `Forget about cooking. We are experts at satisfying your cravings with authentic empanadas, chicken pastries, stuffed potatoes, and cheese arepas, always hot and crispy. Enjoying the best taste of home in Medellín is as easy as a single click: we prepare your order instantly and deliver it straight to your door, ready to bite.`,
  ],
};
