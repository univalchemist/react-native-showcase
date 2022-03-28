import { KeyboardTypeOptions } from "react-native";

export interface IInputField {
  title: string;
  value: string;
  onChangeValue: (value: string) => void;
  textInputStyles?: object;
  otherTextInputProps?: object;
  enableSecureMode?: boolean;
  keyboardType?: KeyboardTypeOptions;
  shouldDisplayCheck?: boolean;
  errorMessage?: string;
  isFieldValid?: boolean;
}
