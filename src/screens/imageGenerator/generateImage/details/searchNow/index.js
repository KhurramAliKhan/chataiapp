import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './styles';
import {noSearch} from '@utils/images';
import {useValues} from '@utils/context';

export default function SearchNow() {
  const {t} = useValues();

  return (
    <View style={styles.mainContainer}>
      <Image source={noSearch} style={styles.imageStyle} />
      <Text style={styles.text}>{t('image.searchDesc')}</Text>
    </View>
  );
}
