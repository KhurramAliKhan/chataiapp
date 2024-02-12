import React from 'react';
import {ImageBackground} from 'react-native';
import {authBackGround} from '@utils/images';
import {Header} from '@commonComponents';
import {useValues} from '@utils/context';
import {HelpMessage} from '@otherComponent';
import Details from './detailContainer';
import {GlobalStyle} from '@style';

export function ChangePassword({navigation, route}) {
  const {t} = useValues();
  return (
    <ImageBackground source={authBackGround} style={GlobalStyle.mainView}>
      <Header title={t('changePass.changePassword')} />
      <Details params={route.params} navigation={navigation} />
      <HelpMessage showBot />
    </ImageBackground>
  );
}
