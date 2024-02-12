import React, {forwardRef, useImperativeHandle, useRef} from 'react';
import {Text, Animated} from 'react-native';
import appColors from '@theme/appColors';
import styles from './styles';
import {useValues} from '@utils/context';

export const AnimatedAlert = forwardRef((props, ref) => {
  const animated = useRef(new Animated.Value(100)).current;
  const duration = 1000;
  const {textRTLStyle, t} = useValues();
  useImperativeHandle(ref, () => ({
    animate: () => {
      animate();
    },
  }));

  const animate = () => {
    setTimeout(() => {
      slideIn();
    }, 1000);
    setTimeout(() => {
      slideOut();
    }, 5000);
  };

  const slideIn = () => {
    Animated.sequence([
      Animated.timing(animated, {
        toValue: 0,
        duration: duration,
        useNativeDriver: true,
      }),
    ]).start();
  };
  const slideOut = () => {
    Animated.sequence([
      Animated.timing(animated, {
        toValue: 100,
        duration: duration,
        useNativeDriver: true,
      }),
    ]).start();
  };

  return (
    <Animated.View
      style={[
        styles.mainContainer,
        {
          backgroundColor: props.success ? appColors.success : appColors.red,
          transform: [{translateY: animated}],
        },
      ]}>
      <Text style={[styles.text, {textAlign: textRTLStyle}]}>
        {t(props.text)}
      </Text>
    </Animated.View>
  );
});
