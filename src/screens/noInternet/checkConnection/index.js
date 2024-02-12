import React from 'react';
import {View, Image, Text} from 'react-native';
import {noInternet} from '@utils/images';
import {noWifi} from '@utils/gif';
import styles from './styles';
import {useValues} from '@utils/context';

export default checkConnection = () => {
  const {t} = useValues();
  return (
    <View style={styles.main}>
      <Image source={noInternet} style={styles.noInternet} />
      <Text style={styles.oops}>{t('noInternet.noInternet')}</Text>
      <View style={styles.noWifi}>
        <Image source={noWifi} style={styles.wifi} />
      </View>
      <Text style={styles.connection}>{t('noInternet.checkConnection')}</Text>
    </View>
  );
};
