import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles';
import {useValues} from '@utils/context';

const textContent = () => {
  const {t} = useValues();

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.title}>{t('onBoarding.fastResponse')}</Text>
      <Text style={styles.description}>
        {t('onBoarding.availableAllTimes')}
      </Text>
    </View>
  );
};

export default textContent;
