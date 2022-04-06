import { TextStyle, ViewStyle } from "react-native";
import { SvgProps } from "react-native-svg";

import {
  SUPPORTED_BUTTON_SIZES,
  SUPPORTED_BUTTON_COLOR_SCHEMES,
  SUPPORTED_SOCIAL_TYPES,
} from "@utils/constants";

export type IButtonSize = {
  [key in SUPPORTED_BUTTON_SIZES]: SUPPORTED_BUTTON_SIZES;
};

export type IButtonSizesValues = {
  [key in SUPPORTED_BUTTON_SIZES]: IButtonSizeObject;
};

export type IButtonSizeObject = {
  height: number;
  width: { wIcon: number; woIcon: number };
  text: { fontSize: number };
};

export interface IButtonProps {
  enableFullWidth?: boolean;
  colorScheme?: SUPPORTED_BUTTON_COLOR_SCHEMES;
  showIcon?: boolean;
  style?: ViewStyle;
  disabled?: boolean;
  text: string;
  textStyle?: TextStyle;
  borderRadius?: number;
  size?: SUPPORTED_BUTTON_SIZES;
  CenterIcon?: React.FC<SvgProps>;
  LeftIcon?: React.FC<SvgProps>;
  onPress: () => void;
}

export interface ISocialButtonProps {
  colorScheme?: SUPPORTED_BUTTON_COLOR_SCHEMES;
  text: string;
  style: ViewStyle;
  size?: SUPPORTED_BUTTON_SIZES;
  social: SUPPORTED_SOCIAL_TYPES;
  onPress: () => void;
}

export interface IButtonColorSchemeObject {
  backgroundColor: string;
  contentColor: string;
}

export type IButtonColorSchemes = {
  [key in SUPPORTED_BUTTON_COLOR_SCHEMES]: IButtonColorSchemeObject;
};
