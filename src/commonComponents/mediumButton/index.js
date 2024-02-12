import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {styles} from './styles';
import {windowWidth} from '@theme/appConstant';
import appColors from '@theme/appColors';
import {useValues} from '../../utils/context';

export function MediumButton({text, onPress, width, styleType}) {
  const {t} = useValues();
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={[
        styles.mainContainer,
        {
          width: width ? width : windowWidth(40),
          backgroundColor: styleType ? '' : appColors.primary,
          borderWidth: styleType ? 1 : 0,
          borderColor: styleType ? appColors.primary : '',
        },
      ]}
      onPress={onPress}>
      <Text
        style={[
          styles.text,
          {color: styleType ? appColors.primary : appColors.buttonText},
        ]}>
        {t(text)}
      </Text>
    </TouchableOpacity>
  );
}
