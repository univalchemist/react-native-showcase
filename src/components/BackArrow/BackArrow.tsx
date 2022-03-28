import React from "react";
import { Pressable, PressableProps, View, ViewProps } from "react-native";
import Svg, { SvgProps, Path } from "react-native-svg";

const DEFAULT_HIT_SLOP = {
  top: 10,
  bottom: 10,
  left: 10,
  right: 10,
};

/**
 * TODO: add feedback
 */

type BackArrowProps = PressableProps &
  ViewProps & {
    arrowProps?: SvgProps;
  };
const BackArrow = ({ arrowProps, ...props }: BackArrowProps) => (
  <Pressable hitSlop={DEFAULT_HIT_SLOP} {...props}>
    <Svg width={24} height={24} fill="none" {...arrowProps}>
      <Path
        d="M18 12H6M12 18l-6-6 6-6"
        stroke="#000"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  </Pressable>
);

export default BackArrow;
