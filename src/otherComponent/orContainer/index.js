import React from 'react';
import {Text, View} from 'react-native';
import {styles} from './styles';
import {useValues} from '@utils/context';

export function OrContainer() {
  const {t} = useValues();

  return (
    <View style={styles.orView}>
      <View style={styles.horizontalLine} />
      <Text style={styles.orText}>{t('onBoarding.or')}</Text>
      <View style={styles.horizontalLine} />
    </View>
  );
}
