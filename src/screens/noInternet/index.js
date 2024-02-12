import React from 'react';
import {ImageBackground} from 'react-native';
import {authBackGround} from '@utils/images';
import {GlobalStyle} from '@style';
import {Button, Header} from '@commonComponents';
import {windowHeight} from '@theme/appConstant';
import CheckConnection from './checkConnection';

export function NoInternet({navigation}) {
  return (
    <ImageBackground
      source={authBackGround}
      style={[GlobalStyle.mainView, {justifyContent: 'space-between'}]}>
      <Header
        navigation={navigation}
        showBack
        title={'noInternet.NoInternet'}
      />
      <CheckConnection />
      <Button text={'noInternet.retry'} marginBottom={windowHeight(4)} />
    </ImageBackground>
  );
}
