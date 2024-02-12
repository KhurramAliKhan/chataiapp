import React, {useRef, useState} from 'react';
import {ImageBackground} from 'react-native';
import {authBackGround} from '@utils/images';
import {Header, AnimatedAlert} from '@commonComponents';
import {HelpMessage, AuthOption} from '@otherComponent';
import Details from './detailContainer';
import SocialSignIn from './socialSignIn';
import {useValues} from '@utils/context';
import {setValue} from '@utils/localStorage';
import {GlobalStyle} from '@style';
import Loader from './loader';
import {GET_API} from '@config/methods';

export function SignIn({navigation}) {
  const {t, setRewardCoins, viewRTLStyle, direction} =
    useValues();
  const messageRef = useRef();
  const [message, setMessage] = useState();
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const showMessage = data => {
    setMessage(data.message);
    setSuccess(data.success);
    messageRef.current.animate();
  };
  const checkValue = data => {
    console.log('DATA', data);
    if (data.success) {
      setValue('token', data.access_token);
      getUserId(data.access_token);
    }
  };

  const getUserId = async token => {
    const res = await GET_API('self', token);
    console.log('RES', res);
    if (Object.keys(res).length > 0) {
      setValue('userId', res.user.id.toString());
      setRewardCoins(parseInt(res.user.coins));
    }
    goToLanguage();
  };

  const goToSignup = () => {
    navigation.navigate('SignUp');
  };
  const goToReset = () => {
    navigation.navigate('ResetPassword');
  };

  const goToLanguage = () => {
    navigation.replace('SelectLanguage', {from: 'login'});
  };

  const goToPhone = () => {
    console.log('in phone');
    navigation.replace('PhoneVerification');
  };

  return (
    <ImageBackground source={authBackGround} style={GlobalStyle.mainView}>
      <Header title={t('auth.signIn')} />
      <Details
        t={t}
        showMessage={showMessage}
        goToReset={goToReset}
        goToLanguage={goToLanguage}
        checkValue={checkValue}
        direction={direction}
      />
      <AuthOption
        text={t('signIn.donthaveAccount')}
        subText={t('auth.signUp')}
        onPress={goToSignup}
      />
      <SocialSignIn
        goToPhone={goToPhone}
        setLoading={() => setLoading(!loading)}
        getUserId={getUserId}
        viewRTLStyle={viewRTLStyle}
      />
      <HelpMessage />
      <AnimatedAlert text={message} ref={messageRef} success={success} />
      {loading && <Loader />}
    </ImageBackground>
  );
}
