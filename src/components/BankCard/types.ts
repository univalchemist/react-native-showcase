export interface BankCardProps {
  otherTextInputProps?: object;
  cardType: string;
  onChangeCardNumber: (value: string) => void;
  onChangeExpiryDate: () => void;
  onChangeSecurity: (value: string) => void;
  disableExpiryDate: boolean;
  expirtyDateValue: string;
  cardNumberValue: string;
  securityCodeValue: string;
  disabled: boolean;
}
