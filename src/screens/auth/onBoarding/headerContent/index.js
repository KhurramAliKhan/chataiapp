import React, {useState, useEffect} from 'react';
import {View, Image, Animated, Easing} from 'react-native';
import {onBoarding} from '@utils/images';
import styles from './styles';
import {
  leftAnim1,
  leftAnim2,
  leftAnim3,
  rightAnim1,
  rightAnim2,
  rightAnim3,
} from '@utils/images';
import {windowHeight} from '@theme/appConstant';

const headerContent = () => {
  const animations = new Animated.Value(0);
  const [opacitiess, setOpacities] = useState([]);
  const data = [rightAnim1, rightAnim2, rightAnim3, rightAnim1];
  const data1 = [leftAnim1, leftAnim2, leftAnim3, leftAnim1];

  const length = data.length;
  var opacities = [];

  useEffect(() => {
    data.map((item, index) => {
      opacities.push(
        animations.interpolate({
          inputRange: [index - 1, index, index + 1],
          outputRange: [0, 1, 0],
        }),
      );
    });
    data1.map((item, index) => {
      opacities.push(
        animations.interpolate({
          inputRange: [index - 1, index, index + 1],
          outputRange: [0, 1, 0],
        }),
      );
    });
    setOpacities(opacities);
    startanim();
  }, []);

  const startanim = () => {
    Animated.loop(
      Animated.timing(animations, {
        toValue: length - 1,
        duration: 2000 * length,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
    ).start();
  };
  return (
    <View style={styles.background}>
      <Image source={onBoarding} style={styles.bgImage} />
      <View style={styles.headerContent}>
        {data.map((item, index) => {
          const opacity = opacitiess[index];
          return (
            <Animated.Image
              style={[
                {
                  height: 80,
                  width: 80,
                  position: 'absolute',
                  resizeMode: 'contain',
                  left: 34,
                  top: windowHeight(6),
                },
                {opacity},
              ]}
              source={item}
            />
          );
        })}
        {data1.map((item, index) => {
          const opacity = opacitiess[index];
          return (
            <Animated.Image
              style={[
                {
                  height: 90,
                  width: 90,
                  position: 'absolute',
                  resizeMode: 'contain',
                  right: 34,
                  alignSelf: 'center',
                  top: windowHeight(4),
                },
                {opacity},
              ]}
              source={item}
            />
          );
        })}
      </View>
    </View>
  );
};

export default headerContent;
