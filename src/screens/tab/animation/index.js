import React, {useRef, useEffect} from 'react';
import {Animated, Easing, StyleSheet} from 'react-native';
import RadialGradient from 'react-native-radial-gradient';
import appColors from '@theme/appColors';

export default animation = props => {
  const {activeIcon} = props;
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const handlePress = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
      easing: Easing.elastic(4),
    }).start();
  };
  useEffect(() => {
    handlePress();
  }, []);

  return (
    <Animated.View
      style={{
        transform: [
          {
            translateY: fadeAnim.interpolate({
              inputRange: [0, 1],
              outputRange: [0, -8],
            }),
          },
          {
            rotate: fadeAnim.interpolate({
              inputRange: [0, 1],
              outputRange: ['0deg', '-16deg'],
            }),
          },
        ],
        alignItems: 'center',
      }}>
      {activeIcon}
      <RadialGradient
        style={styles.bg}
        colors={[appColors.primary, 'transparent', 'transparent']}
        stops={[0.1, 0.3, 0.3, 1]}
        center={[22, 22]}
        radius={44}
      />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  bg: {
    width: 44,
    height: 44,
    position: 'absolute',
    top: 4,
    opacity: 0.3,
  },
});
