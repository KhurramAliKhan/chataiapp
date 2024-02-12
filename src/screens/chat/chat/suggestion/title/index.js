import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {Cross} from '@utils/icons';
import {useValues} from '@utils/context';
import styles from './styles';

export default title = ({setSuggestionModal}) => {
  const {viewRTLStyle, t} = useValues();
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={setSuggestionModal}
      style={[
        styles.suggestionView,
        {
          flexDirection: viewRTLStyle,
        },
      ]}>
      <Text style={styles.suggestion}>{t('chat.suggestion')}</Text>
      <Cross />
    </TouchableOpacity>
  );
};
