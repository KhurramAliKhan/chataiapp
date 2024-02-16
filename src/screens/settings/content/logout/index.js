import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';
import { useValues } from '@utils/context';
import { clearValue } from '@utils/localStorage';
import { LogOut, Goto } from '@utils/icons';
import { windowHeight } from '@theme/appConstant';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { GOOGLE_WEB_CLIENT_ID } from '@config/constant';

export default logout = ({ navigation }) => {
  const { t, viewRTLStyle, imageRTLStyle } = useValues();
  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        GOOGLE_WEB_CLIENT_ID,
    });
  }, []);
  const logout = async () => {
    await clearValue();
    await GoogleSignin.signOut();
    navigation.reset({
      index: 0,
      routes: [{ name: 'SignIn' }],
    });
  };

  return (
    <View style={styles.detailMain}>
      <View style={[styles.dashedView, { marginVertical: windowHeight(0) }]}>
        <View style={styles.dash} />
      </View>
      <TouchableOpacity
        onPress={logout}
        activeOpacity={0.8}
        style={[styles.detail, { flexDirection: viewRTLStyle }]}>
        <View style={[styles.val, { flexDirection: viewRTLStyle }]}>
          <LogOut />
          <Text style={styles.name}>{t('setting.logout')}</Text>
        </View>
        <View style={{ transform: imageRTLStyle }}>
          <Goto />
        </View>
      </TouchableOpacity>
    </View>
  );
};
