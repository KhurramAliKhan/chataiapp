import React from 'react';
import {View, Text} from 'react-native';
import {windowHeight} from '@theme/appConstant';
import {Button} from '@commonComponents';
import {useValues} from '@utils/context';
import styles from './styles';

export default wantMore = ({callRewardAd}) => {
  const {t} = useValues();
  return (
    <View style={styles.main}>
      <Text style={styles.wantMore}>{t('balance.wantMoreCoins')}</Text>
      <Text style={styles.watchVideo}>“{t('balance.watchVideo')}”</Text>
      <Button
        text={t('balance.watchVideo')}
        marginTop={windowHeight(3)}
        onPress={callRewardAd}
      />
    </View>
  );
};
