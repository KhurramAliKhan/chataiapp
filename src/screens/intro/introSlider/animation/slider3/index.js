import React, {useEffect, useRef, forwardRef, useImperativeHandle} from 'react';
import {Animated, View, Easing} from 'react-native';
import {slider3, slider3Anim} from '@utils/images';
import styles from './styles';

export default slider3Animation = forwardRef((props, ref) => {
  useEffect(() => {
    setTimeout(() => {
      handlePress();
    }, 500);
  }, []);
  const animation = useRef(new Animated.Value(-550)).current;
  const animatedValue = new Animated.Value(0);
  const handlePress = () => {
    Animated.spring(animation, {
      toValue: 100,
      duration: 10000,
      friction: 10,
      tension: 20,
      useNativeDriver: true,
    }).start();
    setTimeout(() => {
      handleAnimation();
    }, 500);
  };
  useImperativeHandle(ref, () => ({
    handlePress: () => {
      handlePress();
    },
  }));
  const trans = {
    transform: [{translateY: animation}],
  };

  const handleAnimation = () => {
    Animated.timing(animatedValue, {
      toValue: 1,
      duration: 1000,
      easing: Easing.ease,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View style={styles.mainContainer}>
      <Animated.Image style={[styles.sliderImage, trans]} source={slider3} />
      <Animated.Image
        source={slider3Anim}
        resizeMode="cover"
        style={[
          styles.image,
          {
            transform: [
              {
                scaleX: animatedValue.interpolate({
                  inputRange: [0, 1],
                  outputRange: [1, 80],
                }),
              },
              {
                scaleY: animatedValue.interpolate({
                  inputRange: [0, 1],
                  outputRange: [1, 80],
                }),
              },
            ],
          },
        ]}
      />
    </View>
  );
});
