import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useValues} from '@utils/context';
import styles from './styles';

export default suggestion = ({getValue, questions, setSuggestionModal}) => {
  const {viewRTLStyle, t} = useValues();

  return (
    <View>
      <Text style={styles.preQuestions}>{t('chat.preBuildQuestions')}</Text>
      {questions.map(item => (
        <TouchableOpacity
          onPress={() => {
            getValue(item.question);
            setSuggestionModal();
          }}
          style={[
            styles.questionsView,
            {
              flexDirection: viewRTLStyle,
            },
          ]}>
          <View style={styles.dot} />
          <Text style={styles.question}>{item.question}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};
