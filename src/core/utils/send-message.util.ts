import type { ContactMessage } from '../interfaces';

//import { config } from '@/config';

export const sendMessage = async (message: ContactMessage) => {
  //const url = config.contactUsUrl;
  const formData = new FormData();
  formData.append('fullname', message.fullname);
  formData.append('email', message.email);
  formData.append('phone', message.phone);
  formData.append('message', message.message || '');
  console.log(formData);
  //return await fetch(url, {
  //  method: 'POST',
  //  body: formData,
  //});
};
