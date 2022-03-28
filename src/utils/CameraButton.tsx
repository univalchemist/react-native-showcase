import React, { useEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import Animated, { withTiming, withRepeat, useAnimatedStyle, useSharedValue } from 'react-native-reanimated';

interface CameraButtonProps {
  onPress: () => void;
}

export const CameraButton: React.FC<CameraButtonProps> = ({ onPress }) => {
  const animation = useSharedValue(1);

  useEffect(() => {
    animation.value = withRepeat(
      withTiming(
        1.2, 
        { duration: 1000 },
      ),
      -1,
      true
    );
  }, [animation.value]);

  const animatedStyles = useAnimatedStyle(() => (
    {
      opacity: 0.6,
      transform: [{ scale: animation.value }],
    }
  ));

  return (
    <Animated.View style={animatedStyles}>
      <TouchableOpacity onPress={onPress} style={styles.button} />
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#fff',
    borderRadius: 50,
    width: 80,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  }
});
