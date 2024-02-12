import React, {useState, useRef, useEffect} from 'react';
import {Keyboard, Text, View} from 'react-native';
import {Button} from '@commonComponents';
import appColors from '@theme/appColors';
import {windowWidth} from '@theme/appConstant';
import {useValues} from '@utils/context';
import PhoneInput from 'react-native-phone-number-input';
import styles from './styles';
import {firebase} from '@react-native-firebase/auth';

export default detail = props => {
  const {showMessage, navigation} = props;
  const {textRTLStyle, direction, t} = useValues();
  const [phoneNumber, setPhoneNumber] = useState('');
  const [loading, setLoading] = useState(false);
  const [phoneNumberCode, setPhoneNumberCode] = useState('91');
  const phoneInput = useRef(null);

  const checkData = data => {
    navigation.replace('OTPVerification', {
      from: 'phone',
      data: phoneNumber,
      code: phoneNumberCode,
      confirmResult: data,
    });
  };

  const checkOtp = () => {
    Keyboard.dismiss();
    if (!phoneNumber) {
      showMessage('otpVerify.enterOTP');
    } else {
      api();
    }
  };

  const api = async () => {
    console.log(phoneNumber);
    setLoading(true);
    firebase
      .auth()
      .signInWithPhoneNumber(phoneNumber)
      .then(confirmResult => {
        console.log('RESPONSE', confirmResult);
        setLoading(false);
        checkData(confirmResult);
      })
      .catch(error => {
        setLoading(false);
        if (error.code == 'auth/too-many-requests') {
          showMessage('Please use another phone number.');
        } else {
          showMessage('commonContent.somethingWentWrong');
        }
      });
  };

  return (
    <View style={styles.mainContainer}>
      <Text
        style={[
          styles.number,
          {
            textAlign: textRTLStyle,
            right: direction ? windowWidth(6) : null,
          },
        ]}>
        Phone number
      </Text>

      <PhoneInput
        ref={phoneInput}
        placeholder={t('auth.phoneNumber')}
        defaultValue={phoneNumber}
        defaultCode="IN"
        layout="first"
        withShadow
        autoFocus
        containerStyle={styles.container}
        textContainerStyle={styles.textContainer}
        onChangeFormattedText={text => {
          setPhoneNumber(text);
        }}
        onChangeCountry={data => {
          setPhoneNumberCode(data.callingCode[0]);
        }}
        textInputProps={{
          placeholderTextColor: appColors.subText,
        }}
        countryPickerButtonStyle={styles.picker}
        textInputStyle={styles.input}
        withDarkTheme
        codeTextStyle={styles.text}
      />
      <Button
        text={t('phoneSignIn.getOTP')}
        onPress={checkOtp}
        loading={loading}
      />
    </View>
  );
};
