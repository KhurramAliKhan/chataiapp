import React, {useRef, useState} from 'react';
import {ImageBackground} from 'react-native';
import {authBackGround} from '@utils/images';
import {Header, AnimatedAlert} from '@commonComponents';
import {HelpMessage} from '@otherComponent';
import {useValues} from '@utils/context';
import Details from './details';
import {GlobalStyle} from '@style';

export function ResetPassword({navigation}) {
  const {t} = useValues();
  const messageRef = useRef();
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState(false);

  const showMessage = data => {
    setMessage(data.message);
    setSuccess(data.success);
    messageRef.current.animate();
  };

  return (
    <ImageBackground source={authBackGround} style={GlobalStyle.mainView}>
      <Header title={t('auth.resetPassword')} />
      <Details showMessage={showMessage} navigation={navigation} />
      <HelpMessage showBot />
      <AnimatedAlert text={message} ref={messageRef} success={success} />
    </ImageBackground>
  );
}
