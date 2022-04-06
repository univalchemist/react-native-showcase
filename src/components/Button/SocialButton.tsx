import React from "react";
import { SvgProps } from "react-native-svg";

import FacebookIcon from "@assets/images/facebook.svg";
import {
  SUPPORTED_BUTTON_SIZES,
  SUPPORTED_SOCIAL_TYPES,
  SUPPORTED_BUTTON_COLOR_SCHEMES,
} from "@utils/constants";
import Button from "./Button";
import { ISocialButtonProps } from "./types";

const getSocialIcon = (
  socialType: SUPPORTED_SOCIAL_TYPES | undefined
): React.FC<SvgProps> => {
  switch (socialType) {
    case SUPPORTED_SOCIAL_TYPES.FACEBOOK:
      return FacebookIcon;
    default:
      return FacebookIcon;
  }
};

export const SocialButton: React.FC<ISocialButtonProps> = ({
  text,
  social,
  style,
  size = SUPPORTED_BUTTON_SIZES.LG,
  colorScheme = SUPPORTED_BUTTON_COLOR_SCHEMES.BLUE,
  onPress,
}) => {
  return (
    <Button
      colorScheme={colorScheme}
      size={size}
      enableFullWidth
      text={text}
      LeftIcon={getSocialIcon(social)}
      style={style}
      onPress={onPress}
      borderRadius={16}
    />
  );
};

export default SocialButton;
