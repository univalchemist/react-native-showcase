export interface BankCardProps {
  otherTextInputProps?: object;
  cardType: string;
  onChangeCardNumber: (value: string) => void;
  onChangeExpiryDate: () => void;
  onChangeSecurity: (value: string) => void;
  expirtyDateValue: string;
  cardNumberValue: string;
  securityCodeValue: string;
  disabled: boolean;
}
