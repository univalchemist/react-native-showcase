export const formatPhoneNumber = (phoneNumber: string): string => {
  const cleanNumber = phoneNumber.replace(/[^\d]/g, "");
  const phoneNumberLength = cleanNumber.length;

  if (phoneNumberLength < 4) {
    return cleanNumber;
  } else if (phoneNumberLength < 7) {
    return `${cleanNumber.slice(0, 3)}-${cleanNumber.slice(3, 6)}`;
  }
  return `${cleanNumber.slice(0, 3)}-${cleanNumber.slice(
    3,
    6
  )}-${cleanNumber.slice(6, 10)}`;
};
