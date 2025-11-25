import type { OrderMessage } from '../interfaces';

export const sendOrder = async (order: OrderMessage) => {
  //const url = config.contactUsUrl;
  const formData = new FormData();
  let total = 0;
  formData.append('fullname', order.fullname);
  formData.append('email', order.email);
  formData.append('phone', order.phone);
  formData.append('message', order.message || '');
  order.details.forEach(item => {
    if (item.quantity < 1) return;
    formData.append(`${item.name}`, `${item.quantity} - ${item.unitPrice}`);
    total += item.quantity * item.unitPrice;
  });
  formData.append('total', total.toString());
  //return await fetch(url, {
  //  method: 'POST',
  //  body: formData,
  //});
};
