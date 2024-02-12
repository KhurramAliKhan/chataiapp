import React, {useEffect} from 'react';
import {Animated, Image, View, TouchableOpacity} from 'react-native';
import {botBottom, box, hint, info, key, settings, topBot} from '@utils/images';
import styles from './styles';

export default animation = ({viewRTLStyle}) => {
  const animated = new Animated.Value(3);
  const animated1 = new Animated.Value(0);
  const duration = 2000;

  useEffect(() => {
    animation();
  }, []);

  const animation = () => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(animated, {
          toValue: 8,
          duration: duration,
          useNativeDriver: true,
        }),
        Animated.timing(animated, {
          toValue: 3,
          duration: duration,
          useNativeDriver: true,
        }),
      ]),
    ).start();
    setTimeout(() => {
      anim();
    }, 2000);
  };

  const anim = () => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(animated1, {
          toValue: 8,
          duration: duration,
          useNativeDriver: true,
        }),
        Animated.timing(animated1, {
          toValue: 0,
          duration: duration,
          useNativeDriver: true,
        }),
      ]),
    ).start();
  };

  return (
    <View style={styles.main}>
      <Image source={botBottom} style={styles.floor} />
      <TouchableOpacity
        activeOpacity={1}
        style={[styles.settingView, {flexDirection: viewRTLStyle}]}
        onPress={animation()}>
        <Animated.Image
          source={settings}
          style={[
            styles.setting,
            {
              transform: [{translateY: animated}],
            },
          ]}
        />
        <Animated.Image
          source={box}
          style={[
            styles.box,
            {
              transform: [{translateY: animated}],
            },
          ]}
        />
        <Animated.Image
          source={info}
          style={[
            styles.info,
            {
              transform: [{translateY: animated1}],
            },
          ]}
        />
      </TouchableOpacity>
      <View style={[styles.botView, {flexDirection: viewRTLStyle}]}>
        <Animated.Image
          source={hint}
          style={[
            styles.hint,
            {
              transform: [{translateY: animated}],
            },
          ]}
        />
        <Animated.Image
          source={topBot}
          style={[
            styles.bot,
            {
              transform: [{translateY: animated1}],
            },
          ]}
        />
        <Animated.Image
          source={key}
          style={[
            styles.key,
            {
              transform: [{translateY: animated}],
            },
          ]}
        />
      </View>
    </View>
  );
};
