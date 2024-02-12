import React from 'react';
import {ImageBackground} from 'react-native';
import {authBackGround} from '@utils/images';
import {Header, Button} from '@commonComponents';
import {windowHeight} from '@theme/appConstant';
import {useValues} from '@utils/context';
import Character from './character';
import {GlobalStyle} from '@style';

export function SelectCharacter({navigation}) {
  const {viewRTLStyle} = useValues();

  return (
    <ImageBackground source={authBackGround} style={GlobalStyle.mainView}>
      <Header title={'charecterContent.title'} />
      <Character viewRTLStyle={viewRTLStyle} />
      <Button
        text={'button.continue'}
        onPress={() => navigation.goBack()}
        marginBottom={windowHeight(4)}
      />
    </ImageBackground>
  );
}
