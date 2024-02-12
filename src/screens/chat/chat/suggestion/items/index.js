import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import appColors from '@theme/appColors';
import {useValues} from '@utils/context';
import styles from './styles';

export default suggestion = ({item, selected, index, selectQuestions}) => {
  const {viewRTLStyle} = useValues();

  return (
    <View style={{flexDirection: viewRTLStyle}}>
      <View style={styles.topSeparator}>
        <View style={styles.leftSeparator} />
        <View style={styles.rightSeparator} />
      </View>
      <View style={styles.bottomSeparator}>
        <View style={styles.leftSeparator} />
        <View style={styles.rightSeparator} />
      </View>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => selectQuestions(item.questions, index)}
        style={[
          styles.nameView,
          {
            backgroundColor:
              selected === index ? appColors.primary : appColors.question,
          },
        ]}>
        <Text
          style={[
            styles.name,
            {
              color:
                selected === index ? appColors.buttonText : appColors.language,
            },
          ]}>
          {item.name}
        </Text>
      </TouchableOpacity>
    </View>
  );
};
