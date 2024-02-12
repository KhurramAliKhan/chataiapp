import React, {useEffect} from 'react';
import {Image, View} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withRepeat,
  withTiming,
  interpolate,
} from 'react-native-reanimated';
import {notificationCircle} from '@utils/images';
import styles from './styles';

const Circle = ({delay}) => {
  const ring = useSharedValue(0);

  const ringStyle = useAnimatedStyle(() => {
    return {
      opacity: 0.8 - ring.value,
      transform: [
        {
          scale: interpolate(ring.value, [0, 1], [0, 8]),
        },
      ],
    };
  });
  useEffect(() => {
    ring.value = withDelay(
      delay,
      withRepeat(
        withTiming(1, {
          duration: 5000,
        }),
        -1,
        false,
      ),
    );
  }, []);
  return <Animated.View style={[styles.ring, ringStyle]} />;
};

export default function Ring() {
  return (
    <View style={styles.mainContainer}>
      <Circle delay={0} />
      <Circle delay={500} />
      <Circle delay={1000} />
      <Circle delay={1500} />
      <Circle delay={2000} />
      <Circle delay={2500} />
      <Circle delay={3000} />
      <Circle delay={3500} />
      <Circle delay={4000} />
      <Circle delay={4500} />
      <View style={styles.circle} />
      <Image source={notificationCircle} style={styles.notificationCircle} />
    </View>
  );
}
