import type { OrderMessage } from '@interfaces/index';

export const generateOrderWhatsapp = async (
  order: OrderMessage
): Promise<string> => {
  let message = `Hola mi nombre es ${order.fullname}, me gustaría hacer un pedido de los siguientes productos:\n`;
  order.details.forEach(item => {
    if (item.quantity < 1) return;
    message += `${item.name} - ${item.quantity}\n`;
  });
  message += `Mi número de teléfono es: ${order.phone}\n`;
  message += `Mi correo electrónico es: ${order.email}\n`;
  if (order.message.trim().length > 0) {
    message += `Mi mensaje es: ${order.message}\n`;
  }
  console.log(message);
  return await message;
};
