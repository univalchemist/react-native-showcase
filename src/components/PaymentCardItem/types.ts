import PropTypes from "prop-types";
export interface PaymentCardItemProps {
  cardNumber: string;
  expiryDate: string;
  cardType: string;
  handleEditCard: () => void;
  logo: PropTypes.element.isRequired;
}
