import React, {useEffect} from 'react';
import {Animated, Image, View} from 'react-native';
import {notification, permissionBot} from '@utils/images';
import styles from './styles';

export default bot = () => {
  const animated = new Animated.Value(-250);
  const animated1 = new Animated.Value(450);
  const anim = new Animated.Value(0);
  const duration = 3000;

  useEffect(() => {
    Animated.timing(animated, {
      toValue: 48,
      duration: duration,
      useNativeDriver: true,
    }).start(() => bell());
    Animated.timing(animated1, {
      toValue: 65,
      duration: duration,
      useNativeDriver: true,
    }).start();
  }, []);
  const bell = () => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(anim, {
          toValue: -1,
          duration: 100,
          useNativeDriver: true,
          delay: 800,
        }),
        Animated.timing(anim, {
          toValue: 1,
          duration: 100,
          useNativeDriver: true,
        }),
        Animated.timing(anim, {
          toValue: -1,
          duration: 100,
          useNativeDriver: true,
        }),
        Animated.timing(anim, {
          toValue: 1,
          duration: 100,
          useNativeDriver: true,
        }),
        Animated.timing(anim, {
          toValue: 0,
          duration: 100,
          useNativeDriver: true,
        }),
      ]),
    ).start();
  };
  const rotation = anim.interpolate({
    inputRange: [-1, 1],
    outputRange: ['-10deg', '10deg'],
  });

  return (
    <View>
      <Animated.View
        style={[{transform: [{translateX: animated1}], marginBottom: 35}]}>
        <Image source={permissionBot} style={styles.bot} />
      </Animated.View>
      <Animated.View
        style={[
          {
            transform: [{translateX: animated}],
            position: 'absolute',
            bottom: 0,
            top: 70,
          },
        ]}>
        <Animated.Image
          source={notification}
          style={[
            styles.notification,
            {
              transform: [{rotate: rotation}],
            },
          ]}
        />
      </Animated.View>
    </View>
  );
};
