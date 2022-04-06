import React from "react";
import { View } from "react-native";
import styled from "styled-components/native";

import {
  SUPPORTED_BUTTON_SIZES,
  SUPPORTED_BUTTON_COLOR_SCHEMES,
} from "@utils/constants";
import {
  IButtonSizeObject,
  IButtonSizesValues,
  IButtonColorSchemes,
  IButtonColorSchemeObject,
} from "./types";
import type { IButtonProps } from "./types";

const BUTTON_SIZES: IButtonSizesValues = {
  LG: {
    height: 60,
    width: {
      wIcon: 136,
      woIcon: 100,
    },
    text: {
      fontSize: 16,
    },
  },
  MD: {
    height: 52,
    width: {
      wIcon: 128,
      woIcon: 92,
    },
    text: {
      fontSize: 16,
    },
  },
  SM: {
    height: 40,
    width: {
      wIcon: 110,
      woIcon: 78,
    },
    text: {
      fontSize: 14,
    },
  },
  XS: {
    height: 32,
    width: {
      wIcon: 102,
      woIcon: 70,
    },
    text: {
      fontSize: 14,
    },
  },
};

const BUTTON_COLOR_SCHEMES: IButtonColorSchemes = {
  LIGHT: {
    contentColor: "#000",
    backgroundColor: "#F2F2F7",
  },
  DARK: {
    contentColor: "#F2F2F7",
    backgroundColor: "#000",
  },
  BLUE: {
    contentColor: "#FFF",
    backgroundColor: "#1877F2",
  },
};

const getButtonSizes = (size?: SUPPORTED_BUTTON_SIZES): IButtonSizeObject => {
  if (!size || !BUTTON_SIZES[size]) {
    return BUTTON_SIZES[SUPPORTED_BUTTON_SIZES.LG];
  }
  return BUTTON_SIZES[size];
};

const getButtonWidth = (
  size?: SUPPORTED_BUTTON_SIZES,
  enableFullWidth?: boolean,
  showIcon?: boolean
): string => {
  const buttonSize = getButtonSizes(size);
  return enableFullWidth
    ? "100%"
    : showIcon
    ? `${buttonSize.width.wIcon}px`
    : `${buttonSize.width.woIcon}px`;
};

const getButtonColorScheme = (
  colorScheme?: SUPPORTED_BUTTON_COLOR_SCHEMES
): IButtonColorSchemeObject => {
  if (!colorScheme || !BUTTON_COLOR_SCHEMES[colorScheme]) {
    return BUTTON_COLOR_SCHEMES[SUPPORTED_BUTTON_COLOR_SCHEMES.DARK];
  }
  return BUTTON_COLOR_SCHEMES[colorScheme];
};

const ButtonContainer = styled.TouchableOpacity<Partial<IButtonProps>>`
  background-color: ${({ colorScheme }) => {
    return getButtonColorScheme(colorScheme).backgroundColor;
  }};
  width: ${({ size, enableFullWidth, showIcon }) => {
    return getButtonWidth(size, enableFullWidth, showIcon);
  }};
  height: ${({ size }) => {
    const buttonSize = getButtonSizes(size);
    return `${buttonSize.height}px`;
  }};
  border-radius: ${({ borderRadius }) => {
    return borderRadius ? `${borderRadius}px` : "0px";
  }};
  align-items: center;
  justify-content: center;
  flex-direction: row;
  opacity: ${({ disabled }) => {
    return disabled ? 0.2 : 1;
  }};
`;

const Label = styled.Text<Partial<IButtonProps>>`
  font-weight: 600;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${(props) => {
    return getButtonColorScheme(props.colorScheme).contentColor;
  }};
  fontsize: ${(props) => {
    const buttonSize = getButtonSizes(props.size);
    return `${buttonSize.text.fontSize}px`;
  }};
`;

const LeftIconWrapper = styled(View)`
  position: absolute;
  left: 0;
  margin-left: 14px;
`;
const CenterIconWrapper = styled(View)`
  margin-right: 5px;
`;

export const Button: React.FC<IButtonProps> = ({
  borderRadius,
  enableFullWidth,
  LeftIcon,
  CenterIcon,
  disabled,
  text,
  style,
  size = SUPPORTED_BUTTON_SIZES.LG,
  colorScheme = SUPPORTED_BUTTON_COLOR_SCHEMES.DARK,
  onPress,
}) => {
  return (
    <ButtonContainer
      borderRadius={borderRadius}
      colorScheme={colorScheme}
      size={size}
      enableFullWidth={enableFullWidth}
      showIcon={Boolean(LeftIcon ?? CenterIcon)}
      style={style}
      onPress={onPress}
      disabled={disabled}
    >
      {LeftIcon && (
        <LeftIconWrapper>
          <LeftIcon fill={getButtonColorScheme(colorScheme).contentColor} />
        </LeftIconWrapper>
      )}
      {CenterIcon && (
        <CenterIconWrapper>
          <CenterIcon fill={getButtonColorScheme(colorScheme).contentColor} />
        </CenterIconWrapper>
      )}
      {text && (
        <Label colorScheme={colorScheme} size={size}>
          {text}
        </Label>
      )}
    </ButtonContainer>
  );
};

export default Button;
