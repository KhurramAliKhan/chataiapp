import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';
import {useValues} from '@utils/context';
import {LogOut} from '@utils/icons';
import {DottedLine} from '@commonComponents';
import {clearValue} from '../../../utils/localStorage';

export default logout = ({navigation}) => {
  const {t, viewRTLStyle} = useValues();

  const goToLogin = async () => {
    await clearValue();
    navigation.reset({
      index: 0,
      routes: [{name: 'SignIn'}],
    });
  };

  return (
    <View style={styles.logout}>
      <DottedLine width={'90%'} />
      <TouchableOpacity
        onPress={goToLogin}
        activeOpacity={0.8}
        style={{
          flexDirection: viewRTLStyle,
        }}>
        <LogOut />
        <Text style={styles.textStyle}>{t('setting.logout')}</Text>
      </TouchableOpacity>
    </View>
  );
};
