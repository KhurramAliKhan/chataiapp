import React, {useRef, useImperativeHandle, forwardRef} from 'react';
import {View, Animated, Text} from 'react-native';
import {useValues} from '@utils/context';
import styles from './styles';

export default animation = forwardRef((props, ref) => {
  const animated = useRef(new Animated.Value(-100)).current;

  const {t, direction} = useValues();

  const duration = 2000;

  useImperativeHandle(ref, () => ({
    animateView: () => {
      animateView();
    },
  }));

  const animateView = () => {
    Animated.sequence([
      Animated.timing(animated, {
        toValue: 10,
        duration: duration,
        useNativeDriver: true,
      }),
      Animated.timing(animated, {
        toValue: -100,
        duration: duration,
        useNativeDriver: true,
      }),
    ]).start();
  };

  return (
    <Animated.View style={[styles.main, {transform: [{translateY: animated}]}]}>
      <View
        style={[
          styles.content,
          {alignItems: direction ? 'flex-end' : 'flex-start'},
        ]}>
        <Text style={styles.generated}>{t('image.generated')}</Text>
        <Text style={styles.loading}>{t('image.loadingImage')}</Text>
      </View>
    </Animated.View>
  );
});
