import React from 'react';
import {Text, TouchableOpacity, ActivityIndicator} from 'react-native';
import {styles} from './styles';
import appColors from '@theme/appColors';
import {useValues} from '@utils/context';

export function Button({text, onPress, marginTop, marginBottom, loading}) {
  const {t} = useValues();
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={[
        styles.mainContainer,
        {
          marginTop: marginTop,
          marginBottom: marginBottom,
        },
      ]}
      onPress={onPress}>
      {loading ? (
        <ActivityIndicator size={'large'} color={appColors.white} />
      ) : (
        <Text style={styles.text}>{t(text)}</Text>
      )}
    </TouchableOpacity>
  );
}
