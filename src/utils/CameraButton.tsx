import React, { useEffect } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import Animated, {
  withTiming,
  withRepeat,
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";

interface TakePictureButtonProps {
  onPress: () => void;
}

interface RecordVideoButtonProps {
  onStart: () => void;
  onEnd: () => void;
}

type CameraButtonProps = TakePictureButtonProps | RecordVideoButtonProps;

export const CameraButton: React.FC<CameraButtonProps> = (props) => {
  const { onStart, onEnd } = props as RecordVideoButtonProps;
  const { onPress } = props as TakePictureButtonProps;

  const animation = useSharedValue(1);

  useEffect(() => {
    animation.value = withRepeat(withTiming(1.2, { duration: 1000 }), -1, true);
  }, [animation.value]);

  const animatedStyles = useAnimatedStyle(() => ({
    opacity: 0.6,
    transform: [{ scale: animation.value }],
  }));

  return (
    <Animated.View style={animatedStyles}>
      {!!onPress && (
        <TouchableOpacity onPress={onPress} style={styles.button} />
      )}
      {!!onStart && !!onEnd && (
        <TouchableOpacity
          onLongPress={onStart}
          onPressOut={onEnd}
          style={[styles.button, styles.record]}
        />
      )}
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#fff",
    borderRadius: 50,
    width: 80,
    height: 80,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },
  record: {
    backgroundColor: "red",
  },
});
