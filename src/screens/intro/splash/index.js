import React, {useEffect, useState} from 'react';
import {View, Image, Vibration, BackHandler} from 'react-native';
import {splash, logo} from '@utils/images';
import styles from './styles';
import {getValue} from '@utils/localStorage';
import {useTranslation} from 'react-i18next';
import {GET_API} from '@config/methods';
import {setValue} from '@utils/localStorage';
import TouchID from 'react-native-touch-id';
import {useValues} from '@utils/context';

export function Splash({navigation}) {
  const {i18n} = useTranslation();
  const {setGeneralSettings} = useValues();
  const [splashLogo, setSplashLogo] = useState('');
  useEffect(() => {
    checkFingrePrint();
    getCharacters();
  }, []);
  const optionalConfigObject = {
    fallbackLabel: 'Show Passcode',
    passcodeFallback: true,
  };
  const checkFingrePrint = async () => {
    const val = await getValue('printAdded');
    if (val) {
      TouchID.authenticate('', optionalConfigObject)
        .then(success => {
          Vibration.vibrate(30);
          goToScreen();
        })
        .catch(error => {
          BackHandler.exitApp();
        });
    } else {
      goToScreen();
    }
  };

  const goToScreen = async () => {
    var val = await getValue('token');
    var language = await getValue('language');
    if (val) {
      getKeySettings(val);
    } else {
      getSettings();
    }
    setTimeout(() => {
      if (val) {
        if (language) {
          i18n.changeLanguage(language);
          navigation.replace('Drawer');
        } else {
          navigation.replace('SelectLanguage', {from: 'login'});
        }
      } else {
        navigation.replace('IntroSlider');
      }
    }, 3000);
  };

  const getCharacters = async () => {
    const res = await GET_API('characters');
    const checkChar = await getValue('characterName');
    if (!checkChar) {
      setValue('characterName', res[0].name);
      setValue('characterUrl', res[0].image_url);
      setValue('characterId', res[0].id.toString());
    }
  };
  const getSettings = async () => {
    const res = await GET_API('frontSettings');
    if (Object.keys(res).length > 0) {
      setSplashLogo(res.general_settings.splash_logo_url);
      setGeneralSettings(res);
      setValue('generalSettings', JSON.stringify(res));
    }
  };

  const getKeySettings = async val => {
    const res = await GET_API('settings', val);
    if (res.seccess) {
      setSplashLogo(res.settings.general_settings.splash_logo_url);
      setGeneralSettings(res.settings);
      setValue('generalSettings', JSON.stringify(res.settings));
    }
  };

  return (
    <View style={styles.mainContainer}>
      <Image source={splash} style={styles.background} />
      <View style={styles.center}>
        <Image
          source={splashLogo ? {uri: splashLogo} : logo}
          style={styles.logo}
        />
      </View>
    </View>
  );
}
