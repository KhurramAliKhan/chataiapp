import React, {useEffect, forwardRef, useImperativeHandle, useRef} from 'react';
import {Animated, View, Easing, Dimensions} from 'react-native';
import {windowHeight, windowWidth} from '@theme/appConstant';
import {slider2, slider2Anim} from '@utils/images';
import styles from './styles';

export default slider2Animation = forwardRef((props, ref) => {
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
      toValue: height <= 800 ? 100 : 120,
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
      <Animated.Image style={[styles.sliderImage, trans]} source={slider2} />
      <Animated.Image
        source={slider2Anim}
        resizeMode="cover"
        style={[
          styles.image,
          {
            bottom: height <= 800 ? windowHeight(16) : windowHeight(20),
            transform: [
              {
                scaleX: animatedValue.interpolate({
                  inputRange: [0, 1],
                  outputRange: [1, height <= 800 ? 140 : 200],
                }),
              },
              {
                scaleY: animatedValue.interpolate({
                  inputRange: [0, 1],
                  outputRange: [1, height <= 800 ? 140 : 220],
                }),
              },
            ],
          },
        ]}
      />
    </View>
  );
});
