import React, {useRef, useState} from 'react';
import {ImageBackground} from 'react-native';
import {authBackGround} from '@utils/images';
import {AnimatedAlert, Header} from '@commonComponents';
import {useValues} from '@utils/context';
import {AuthOption, HelpMessage} from '@otherComponent';
import Details from './details';
import {GlobalStyle} from '@style';

export function OTPVerification({navigation, route}) {
  console.log('ROUTE', route.params);
  const {t} = useValues();
  const messageRef = useRef();
  const [message, setMessage] = useState();

  const showMessage = message => {
    setMessage(message);
    messageRef.current.animate();
  };

  return (
    <ImageBackground source={authBackGround} style={GlobalStyle.mainView}>
      <Header title={t('phoneSignIn.otpVerification')} />
      <Details
        route={route.params}
        navigation={navigation}
        showMessage={showMessage}
      />
      <AuthOption
        text={t('phoneSignIn.receiveOtp')}
        subText={t('phoneSignIn.resend')}
      />
      <HelpMessage showBot />
      <AnimatedAlert text={message} ref={messageRef} />
    </ImageBackground>
  );
}
