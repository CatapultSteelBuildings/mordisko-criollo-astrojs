import type { ContactMessage } from '../interfaces';

const url =
  'https://script.google.com/macros/s/AKfycbwVnJfYHNWvccUC-L3_9zSTcwehtM6c-Gqr62ZDAwSKKld5emFRvGYHKi3Xz0id6QrKQg/exec';

export const sendContactMessage = async (message: ContactMessage) => {
  //const url = config.contactUsUrl;
  const formData = new FormData();
  let total = 0;
  formData.append('fullname', message.fullname);
  formData.append('email', message.email);
  formData.append('phone', message.phone);
  formData.append('message', message.message || '');
  formData.append('total', total.toString());
  return await fetch(url, {
    method: 'POST',
    body: formData,
  });
};
