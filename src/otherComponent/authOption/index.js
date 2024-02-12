import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styles from './styles';
import {useValues} from '@utils/context';

export function AuthOption(props) {
  const {text, subText, onPress} = props;
  const {viewRTLStyle} = useValues();
  return (
    <TouchableOpacity
      style={[styles.mainContainer, {flexDirection: viewRTLStyle}]}
      activeOpacity={0.8}
      onPress={onPress}>
      <Text style={styles.account}>{text}</Text>
      <Text style={styles.subText}>{subText}</Text>
    </TouchableOpacity>
  );
}
