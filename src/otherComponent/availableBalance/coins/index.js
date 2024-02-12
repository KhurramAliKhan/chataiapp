import React from 'react';
import {View, Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useValues} from '@utils/context';
import styles from './styles';
import appColors from '@theme/appColors';

export default coins = () => {
  const {rewardCoins, viewRTLStyle, t} = useValues();

  return (
    <LinearGradient
      colors={[appColors.coinsBg, appColors.coinsBg, appColors.coinsBgLight]}
      start={{x: 0, y: 0.9}}
      end={{x: 0, y: 0.9}}
      style={[
        styles.main,
        {
          flexDirection: viewRTLStyle,
        },
      ]}>
      <View
        style={[
          styles.gradient,
          {
            flexDirection: viewRTLStyle,
          },
        ]}>
        <LinearGradient
          useAngle={true}
          angle={123.26}
          locations={[-86.3, 125.31]}
          colors={[appColors.balanceGardient1, appColors.balanceGardient2]}
          style={styles.balance}>
          <Text style={styles.coins}>{rewardCoins}</Text>
        </LinearGradient>
        <Text style={styles.coinsAvailable}>{t('balance.coinsAvailable')}</Text>
      </View>
    </LinearGradient>
  );
};
