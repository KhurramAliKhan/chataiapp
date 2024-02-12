import React, {useEffect, useState} from 'react';
import {ImageBackground, Image} from 'react-native';
import styles from './styles';
import {drawerBackground, drawerLogo} from '@utils/images';
import {GlobalStyle} from '@style';
import {DottedLine} from '@commonComponents';
import Content from './content';
import LogOut from './logout';
import {getValue} from '@utils/localStorage';
import {useValues} from '@utils/context';

export function DrawerContent({navigation}) {
  const [isLogin, setIsLogin] = useState();
  const {generalSettings} = useValues();

  useEffect(() => {
    checkLogin();
  }, []);

  const checkLogin = async () => {
    const token = await getValue('token');
    if (token) {
      setIsLogin(true);
    }
  };

  return (
    <ImageBackground source={drawerBackground} style={GlobalStyle.mainView}>
      <Image
        source={{uri: generalSettings?.general_settings?.drawer_logo_url}}
        style={styles.logo}
      />
      <DottedLine width={'80%'} />
      <Content navigation={navigation} />
      {isLogin && <LogOut navigation={navigation} />}
    </ImageBackground>
  );
}
