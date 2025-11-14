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
    `-EN- Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
    `-EN- Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
  ],
};
