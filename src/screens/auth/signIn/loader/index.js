import React from 'react';
import {ActivityIndicator, View} from 'react-native';
import appColors from '@theme/appColors';
import styles from './styles';

export default loader = () => {
  return (
    <View style={styles.loader}>
      <ActivityIndicator size={'large'} color={appColors.primary} />
    </View>
  );
};
