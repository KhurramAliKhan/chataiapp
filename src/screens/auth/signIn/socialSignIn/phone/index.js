import React from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import {phone} from '@utils/images';
import LinearGradient from 'react-native-linear-gradient';
import appColors from '@theme/appColors';

const socialSignIn = props => {
  const {goToPhone} = props;
  return (
    <TouchableOpacity onPress={goToPhone} activeOpacity={0.7}>
      <LinearGradient
        useAngle={true}
        angle={143.99}
        locations={[-1.81, 109.5]}
        colors={[appColors.gradient1, appColors.gradient2]}
        style={styles.mainContainer}>
        <LinearGradient
          useAngle={true}
          angle={143.99}
          locations={[-10, 50.5]}
          colors={[appColors.gradient3, appColors.gradient4]}
          style={styles.circle}>
          <Image source={phone} style={styles.img} />
        </LinearGradient>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default socialSignIn;
