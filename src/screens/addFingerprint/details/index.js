import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import Bot from './animation/bot';
import Ring from './animation/ring';
import {useValues} from '@utils/context';

export default details = () => {
  const {t} = useValues();
  return (
    <View style={styles.mainContainer}>
      <View style={styles.details}>
        <Ring />
        <Bot />
      </View>
      <Text style={styles.wish}>
        To make your application more secure, set up a fingerprint scanner.
      </Text>
    </View>
  );
};
