import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {MediumButton} from '@commonComponents';
import {OrContainer} from '@otherComponent';
import {styles} from './styles';
import {useValues} from '@utils/context';

const authOption = ({navigation}) => {
  const {t, viewRTLStyle, generalSettings} = useValues();

  const goToScreen = screen => {
    navigation.navigate(screen);
  };

  const goToDashboard = () => {
    navigation.replace('Drawer');
  };

  return (
    <View style={styles.container}>
      <View style={[styles.btnContainer, {flexDirection: viewRTLStyle}]}>
        <MediumButton
          text={t('auth.signUp')}
          onPress={() => goToScreen('SignUp')}
        />
        <MediumButton
          text={t('auth.signIn')}
          onPress={() => goToScreen('SignIn')}
        />
      </View>
      {generalSettings?.general_settings?.isGuestLoginEnable && (
        <View>
          <OrContainer />
          <TouchableOpacity
            style={styles.btnStyle}
            activeOpacity={0.8}
            onPress={goToDashboard}>
            <Text style={styles.text}>{t('onBoarding.continueAsGuest')}</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default authOption;
