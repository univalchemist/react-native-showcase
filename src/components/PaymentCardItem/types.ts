import PropTypes from "prop-types";
export interface PaymentCardItemProps {
  cardNumber: string;
  expiryDate: string;

  cardType: string;
  handleEditCard: () => void;
  logo: PropTypes.element.isRequired;
  // value: string;
  // textInputStyles?: object;
  // otherTextInputProps?: object;
  // enableSecureMode?: boolean;
  // keyboardType?: KeyboardTypeOptions;
  // shouldDisplayCheck?: boolean;
  // errorMessage?: string;
  // isFieldValid?: boolean;
}
