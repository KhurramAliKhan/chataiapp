import React, {useState, useEffect} from 'react';
import {Keyboard, Text, View} from 'react-native';
import styles from './styles';
import {windowHeight} from '@theme/appConstant';
import OTPTextView from 'react-native-otp-textinput';
import {Button} from '@commonComponents';
import {setValue} from '@utils/localStorage';
import {POST_API, GET_API} from '@config/methods';
import {useValues} from '@utils/context';

export default details = props => {
  const {route, navigation, showMessage} = props;
  const [verificationCode, setverificationCode] = useState('');
  const [from, setFrom] = useState('');
  const [val, setVal] = useState('');
  const [loading, setLoading] = useState(false);
  const {t, setRewardCoins} = useValues();
  useEffect(() => {
    checkValue();
  }, []);

  const checkValue = () => {
    if (route.from === 'reset') {
      setFrom('phoneSignIn.email');
    } else {
      setFrom('phoneSignIn.mobilePhone');
    }
    setVal(route.data);
  };

  const checkData = data => {
    console.log(data);
    if (data.success) {
      if (route.from === 'reset') {
        navigation.replace('ChangePassword', {
          val: val,
          code: verificationCode,
        });
      } else {
        setValue('token', data.token);
        getUserId(data.token);
      }
    }
    showMessage(data.message);
  };

  const getUserId = async token => {
    const res = await GET_API('self', token);
    if (Object.keys(res).length > 0) {
      setValue('userId', res.user.id.toString());
      setRewardCoins(parseInt(res.user.coins));
    }
    navigation.replace('SelectLanguage', {from: 'login'});
  };

  const api = async (data, url) => {
    setLoading(true);
    var res = await POST_API(data, url);
    setLoading(false);
    checkData(res);
  };

  const checkApi = () => {
    Keyboard.dismiss();
    var data = {};
    var url = '';
    if (verificationCode.length != 6) {
      showMessage('Please enter OTP.');
    } else {
      if (route.from === 'reset') {
        data = {email: val, otp: verificationCode};
        url = 'verify-token';
        api(data, url);
      } else {
        handleVerifyCode();
      }
    }
  };

  const handleVerifyCode = () => {
    setLoading(true);
    const verifyOtpCode = route.confirmResult;
    console.log('Verification code is========>', verificationCode.length);
    // Request for OTP verification
    verifyOtpCode
      .confirm(verificationCode)
      .then(user => {
        console.log('User is', user);
        signin();
      })
      .catch(error => {
        setLoading(false);
        if (error.code == 'auth/invalid-verification-code') {
          showMessage('Invalid Code');
        } else if (error.code == 'auth/session-expired') {
          showMessage(
            'The sms code has expired. Please re-send the code to try again.',
          );
        }
        console.log(error.code);
      });
  };

  const signin = async () => {
    var data = {
      login_with: 'phone',
      user: {
        phone: route.data,
        code: route.code,
      },
    };
    var res = await POST_API(data, 'social/login');
    checkData(res);
  };

  return (
    <View>
      <Text style={styles.from}>
        {route.from === 'reset'}
        {t('phoneSignIn.otpContent')} {t(from)}.
      </Text>
      <Text style={styles.val}>“ {val} “</Text>
      <OTPTextView
        containerStyle={styles.container}
        autoFocus={true}
        textInputStyle={styles.textInput}
        inputCount={6}
        handleTextChange={text => {
          setverificationCode(text);
        }}
      />
      <Button
        text={'phoneSignIn.proceed'}
        marginTop={windowHeight(1)}
        loading={loading}
        onPress={checkApi}
      />
    </View>
  );
};
