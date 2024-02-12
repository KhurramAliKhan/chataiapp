import React from 'react';
import {Text, View, Image} from 'react-native';
import styles from './styles';
import {bot} from '@utils/images';
import {useValues} from '@utils/context';
import {windowHeight} from '@theme/appConstant';

export function HelpMessage(props) {
  const {showBot, showMessage, position} = props;
  const {t} = useValues();
  return (
    <View
      style={[
        styles.container,
        {
          position: position ? position : 'absolute',
          bottom: position ? 0 : windowHeight(4),
        },
      ]}>
      {showBot && <Image source={bot} style={styles.bot} />}
      {!showMessage && (
        <Text style={styles.text}>{t('auth.simplyUseMegabot')}</Text>
      )}
    </View>
  );
}
