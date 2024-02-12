import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';
import {Speaker} from '@utils/icons';
import appColors from '@theme/appColors';
import {useValues} from '@utils/context';

export default receiver = ({time, message, speak}) => {
  const {viewRTLStyle, viewSelfRTLStyle} = useValues();

  return (
    <View style={[styles.receiverView, {alignItems: viewSelfRTLStyle}]}>
      <View style={styles.receiverContainer}>
        <TouchableOpacity activeOpacity={1} style={styles.message}>
          <Text style={styles.receiverText}>{message}</Text>
        </TouchableOpacity>
      </View>
      <View style={[styles.receiverRow, {flexDirection: viewRTLStyle}]}>
        <TouchableOpacity onPress={() => speak(message)}>
          <Speaker color={appColors.white} />
        </TouchableOpacity>
        <View style={styles.separator} />
        <Text style={styles.time}>{time}</Text>
      </View>
    </View>
  );
};
