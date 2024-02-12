import React from 'react';
import {View, ActivityIndicator, StyleSheet} from 'react-native';
import appColors from '@theme/appColors';

export function Loader() {
  return (
    <View style={styles.loader}>
      <ActivityIndicator size={'large'} color={appColors.primary} />
    </View>
  );
}

const styles = StyleSheet.create({
  loader: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '80%',
    width: '100%',
  },
});
