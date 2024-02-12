import React from 'react';
import {ImageBackground} from 'react-native';
import {Button, Header} from '@commonComponents';
import {authBackGround} from '@utils/images';
import {windowHeight} from '@theme/appConstant';
import Details from './details';
import {GlobalStyle} from '@style';

export function AllowNotification({navigation}) {
  const goToDashboard = async () => {
    navigation.replace('Drawer');
  };

  return (
    <ImageBackground source={authBackGround} style={GlobalStyle.mainView}>
      <Header title={'notification.allowNotification'} />
      <Details />
      <Button
        marginBottom={windowHeight(10)}
        text={'notification.allow'}
        onPress={goToDashboard}
      />
    </ImageBackground>
  );
}
