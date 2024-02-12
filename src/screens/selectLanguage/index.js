import React from 'react';
import {ImageBackground} from 'react-native';
import {authBackGround} from '@utils/images';
import {Header, Button} from '@commonComponents';
import {HelpMessage} from '@otherComponent';
import Languages from './languages';
import {GlobalStyle} from '@style';
import {useValues} from '@utils/context';

export function SelectLanguage({navigation, route}) {
  const {t, viewRTLStyle} = useValues();

  const goToDashboard = async () => {
    if (route.params) {
      navigation.replace('AllowNotification');
    } else {
      navigation.goBack();
    }
  };

  return (
    <ImageBackground source={authBackGround} style={GlobalStyle.mainView}>
      <Header title={'languageContent.title'} />
      <Languages viewRTLStyle={viewRTLStyle} />
      <Button text={'button.continue'} onPress={goToDashboard} />
      <HelpMessage showBot showMessage />
    </ImageBackground>
  );
}
