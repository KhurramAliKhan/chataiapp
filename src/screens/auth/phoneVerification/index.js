import React, {useState, useRef} from 'react';
import {ImageBackground} from 'react-native';
import {authBackGround} from '@utils/images';
import {AnimatedAlert, Header} from '@commonComponents';
import {HelpMessage} from '@otherComponent';
import Detail from './detailContainer';
import {GlobalStyle} from '@style';

export function PhoneVerification({navigation}) {
  const messageRef = useRef();
  const [message, setMessage] = useState();
  const showMessage = message => {
    setMessage(message);
    messageRef.current.animate();
  };
  return (
    <ImageBackground source={authBackGround} style={GlobalStyle.mainView}>
      <Header title={'phoneSignIn.phoneVerification'} />
      <Detail showMessage={showMessage} navigation={navigation} />
      <HelpMessage />
      <AnimatedAlert text={message} ref={messageRef} />
    </ImageBackground>
  );
}
