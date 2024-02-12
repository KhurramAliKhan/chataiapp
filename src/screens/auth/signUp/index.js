import React, {useRef, useState} from 'react';
import {ImageBackground, ScrollView, View} from 'react-native';
import {authBackGround} from '@utils/images';
import {Header, AnimatedAlert} from '@commonComponents';
import Details from './detailContainer';
import {HelpMessage, AuthOption} from '@otherComponent';
import {useValues} from '@utils/context';
import {setValue} from '@utils/localStorage';
import {GlobalStyle} from '@style';

export function SignUp({navigation}) {
  const {t} = useValues();
  const messageRef = useRef();
  const [message, setMessage] = useState();
  const [success, setSuccess] = useState(false);

  const showMessage = data => {
    setMessage(data.message);
    setSuccess(data.success);
    checkValue(data);
    messageRef.current.animate();
  };

  const checkValue = data => {
    console.log(data);
    if (data.success) {
      goToLanguage();
      setValue('token', data.access_token);
    }
  };

  const goToLanguage = () => {
    navigation.goBack();
  };

  return (
    <ImageBackground source={authBackGround} style={GlobalStyle.mainView}>
      <ScrollView>
        <Header title={'signUp.createAccount'} />
        <Details showMessage={showMessage} />
        <AuthOption
          text={t('signUp.alreadyHaveAccount')}
          subText={t('auth.signIn')}
          onPress={() => navigation.goBack()}
        />
        <View style={{height: 20}} />
        <HelpMessage position={'relative'} />
      </ScrollView>
      <AnimatedAlert text={message} ref={messageRef} success={success} />
    </ImageBackground>
  );
}
