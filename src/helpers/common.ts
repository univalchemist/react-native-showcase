export const isEmailValid = (email: string) => {
  // eslint-disable-next-line no-useless-escape
  return /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
};

export const isPhoneValid = (phone: string) => {
  // eslint-disable-next-line no-useless-escape
  return /^[+-]?\d*(?:[.,]\d*)?$/.test(phone);
};
