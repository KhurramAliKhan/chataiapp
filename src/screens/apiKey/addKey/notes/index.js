import React from 'react';
import { View, Text } from 'react-native';
import { Instruction } from '@utils/icons';
import styles from './styles';
import { useValues } from '@utils/context';

export default notes = () => {
  const { viewRTLStyle, textRTLStyle, t } = useValues();

  return (
    <View style={styles.noteView}>
      <Text style={[styles.note, { textAlign: textRTLStyle }]}>Note :</Text>
      <View style={[styles.deviceView, { flexDirection: viewRTLStyle }]}>
        <Instruction />
        <Text style={[styles.instruction, { textAlign: textRTLStyle }]}>
          {t('apiKey.storeKey')}
        </Text>
      </View>
      <View style={[styles.removeView, { flexDirection: viewRTLStyle }]}>
        <Instruction />
        <Text style={[styles.instruction, { textAlign: textRTLStyle }]}>
          {t('apiKey.removeLater')}
        </Text>
      </View>
    </View>
  );
};
