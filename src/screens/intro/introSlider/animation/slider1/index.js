import React, {useEffect, useRef, forwardRef, useImperativeHandle} from 'react';
import {Animated, View, Easing, Dimensions} from 'react-native';
import {slider1Anim, slider1} from '@utils/images';
import styles from './styles';
import {windowHeight, windowWidth} from '@theme/appConstant';

export default slider1Animation = forwardRef((props, ref) => {
  useEffect(() => {
    setTimeout(() => {
      handlePress();
    }, 500);
  }, []);
  const animation = useRef(new Animated.Value(-550)).current;
  const animatedValue = new Animated.Value(0);
  const height = Dimensions.get('screen').height;

  const handlePress = () => {
    Animated.spring(animation, {
      toValue: 130,
      duration: 4000,
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
      <Animated.Image style={[styles.sliderImage, trans]} source={slider1} />
      <Animated.Image
        source={slider1Anim}
        resizeMode="cover"
        style={[
          styles.image,
          {
            top: height > 800 ? windowHeight(19) : windowHeight(24),
            transform: [
              {
                scaleX: animatedValue.interpolate({
                  inputRange: [0, 1],
                  outputRange: [
                    1,
                    height > 800 ? windowWidth(50) : windowWidth(67),
                  ],
                }),
              },
              {
                scaleY: animatedValue.interpolate({
                  inputRange: [0, 1],
                  outputRange: [
                    1,
                    height > 800 ? windowHeight(32) : windowHeight(38),
                  ],
                }),
              },
            ],
          },
        ]}
      />
    </View>
  );
});
