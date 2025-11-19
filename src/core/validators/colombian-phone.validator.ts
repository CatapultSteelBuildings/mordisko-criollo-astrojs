export const isValidColombianPhone = (phone: string) => {
  const digits = phone.replace(/\D/g, '').trim();

  const clean =
    digits.startsWith('57') && digits.length > 10
      ? digits.substring(2)
      : digits;

  if (clean.length < 7 || clean.length > 10) return false;

  if (clean.length === 10 && clean[0] === '3') {
    return true;
  }

  if ((clean.length === 7 || clean.length === 8) && clean[0] !== '3') {
    return true;
  }

  return false;
};
