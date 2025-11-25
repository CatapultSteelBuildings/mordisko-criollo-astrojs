import { businessData } from '../data/business.data';

export const generateLinkWhatsapp = (message: string): string => {
  const encodeMessage = encodeURIComponent(message);
  const phone = businessData.whatsapp;
  return `https://wa.me/${phone}?text=${encodeMessage}`;
};
