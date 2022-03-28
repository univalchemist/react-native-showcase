import { StyleSheet, TouchableOpacity } from "react-native";
import Animated, {
  Easing,
  interpolate,
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { SwitchProps } from "./types";

const CIRCLE_SIZE = 28;
const CIRCLE_TRANSFORM_ACTIVE = 20;

const Switch = ({ value, onChange }: SwitchProps) => {
  const translateX = useSharedValue(value ? 0 : CIRCLE_TRANSFORM_ACTIVE);

  const onPress = () => {
    onChange(!!translateX.value);
    translateX.value = withTiming(
      translateX.value ? 0 : CIRCLE_TRANSFORM_ACTIVE,
      {
        easing: Easing.ease,
        duration: 150,
      }
    );
  };

  const animatedDotStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: interpolate(
            translateX.value,
            [0, CIRCLE_TRANSFORM_ACTIVE],
            [0, CIRCLE_TRANSFORM_ACTIVE]
          ),
        },
      ],
    };
  });

  const animatedContainerStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: interpolateColor(
        translateX.value,
        [0, CIRCLE_TRANSFORM_ACTIVE],
        ["#D6D6DB", "#000000"]
      ),
    };
  });

  return (
    <Animated.View style={[styles.container, animatedContainerStyle]}>
      <Animated.View style={[styles.circle, animatedDotStyle]}>
        <TouchableOpacity
          onPress={onPress}
          style={{ flex: 1 }}
        ></TouchableOpacity>
      </Animated.View>
    </Animated.View>
  );
};

export default Switch;

const styles = StyleSheet.create({
  container: {
    width: 52,
    height: 32,
    borderRadius: 20,
    justifyContent: "center",
  },
  circle: {
    backgroundColor: "white",
    width: CIRCLE_SIZE,
    height: CIRCLE_SIZE,
    borderRadius: CIRCLE_SIZE,
    left: 2,
  },
});
