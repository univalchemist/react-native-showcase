import { useMemo } from "react";
import { Text, TextProps, TextStyle } from "react-native";

export const Typography = ({
  children,
  ...props
}: React.PropsWithChildren<TextProps>) => {
  const getFontWeight = useMemo(() => {
    switch ((props?.style as TextStyle)?.fontWeight) {
      case "300":
        return "Inter-Light";
      case "400":
        return "Inter-Regular";
      case "500":
        return "Inter-Medium";
      case "600":
        return "Inter-SemiBold";
      case "700":
        return "Inter-Bold";
      case "bold":
        return "Inter-Bold";
      default:
        return "Inter-Regular";
    }
  }, [props.style]);

  return (
    <Text {...props} style={[props.style, { fontFamily: getFontWeight }]}>
      {children}
    </Text>
  );
};
