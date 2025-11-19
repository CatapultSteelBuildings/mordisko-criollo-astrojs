export const emailValidator = (email: string) => {
  const regex = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
  return email.trim().match(regex);
};
