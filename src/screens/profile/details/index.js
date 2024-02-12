import React, {useRef, useState} from 'react';
import {View, Text, Keyboard, Platform} from 'react-native';
import {Button, Input} from '@commonComponents';
import {useValues} from '@utils/context';
import {windowHeight} from '@theme/appConstant';
import {GET_API} from '@config/methods';
import {getValue} from '@utils/localStorage';
import {emailValidate} from '@utils/helper';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';
import PhoneInput from 'react-native-phone-number-input';
import styles from './styles';
import axios from 'axios';
import {BASE_URL} from '@config/baseUrl';

export default details = ({checkValue, file, showModal, res}) => {
  const [name, setName] = useState(res.name);
  const [email, setEmail] = useState(res.email);
  const [phoneNumber, setPhoneNumber] = useState(res.phone);
  const [phoneNumberCode, setPhoneNumberCode] = useState(res.code);
  const [nameError, setNameError] = useState();
  const [emailError, setEmailError] = useState();
  const [loading, setLoading] = useState(false);
  const {t} = useValues();
  const phoneInput = useRef(null);

  const onSubmit = () => {
    Keyboard.dismiss();
    let isValid = true;
    if (!name) {
      setNameError('Please enter fullName');
      isValid = false;
    }
    if (!email) {
      setEmailError('authError.email');
      isValid = false;
    } else if (!emailValidate.test(email)) {
      setEmailError('authError.validEmail');
      isValid = false;
    }
    if (isValid) {
      api();
    }
  };

  const api = async () => {
    let data = new FormData();
    setLoading(true);
    const token = await getValue('token');
    if (Object.keys(file).length > 0) {
      data.append('image', {
        name: file.fileName,
        type: file.type,
        uri:
          Platform.OS === 'android'
            ? file.uri
            : file.uri.replace('file://', ''),
      });
    }
    data.append('name', name);
    data.append('email', email);
    data.append('code', phoneNumberCode);
    data.append('_method', 'PUT');
    data.append('phone', phoneNumber);
    axios
      .post(`${BASE_URL}updateProfile`, data, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: 'Bearer ' + token,
          Accept: 'application/json',
        },
      })
      .then(response => {
        setLoading(false);
        checkValue(response.data);
      })
      .catch(error => {
        setLoading(false);
        console.log('ERROR', error);
      });
  };

  const deleteAccount = async () => {
    const token = await getValue('token');
    const res = await GET_API('deleteAccount', token);
    if (res.success) {
      showModal();
    }
  };

  return (
    <View>
      <View style={styles.mainView}>
        <View style={styles.leftCurv} />
        <View style={styles.curv} />
        <View style={styles.rightCurv} />
      </View>
      <View style={styles.details}>
        <Input
          title={'signUp.fullName'}
          placeholder={'signUp.enterFullName'}
          error={nameError}
          color={'#37424D'}
          value={name}
          onChangeText={value => {
            setName(value);
          }}
        />
        <Input
          title={'auth.email'}
          placeholder={'auth.enterEmail'}
          error={emailError}
          color={'#37424D'}
          value={email}
          onChangeText={value => {
            setEmail(value);
          }}
        />
        <Text style={styles.phone}>{t('auth.phoneNumber')}</Text>
        <PhoneInput
          ref={phoneInput}
          placeholder={t('auth.phoneNumber')}
          value={phoneNumber}
          defaultCode={phoneNumberCode}
          layout="first"
          containerStyle={{
            width: '90%',
            alignSelf: 'center',
            marginBottom: windowHeight(3),
            backgroundColor: null,
          }}
          textContainerStyle={{
            paddingVertical: 0,
            backgroundColor: '#37424D',
            alignSelf: 'center',
            borderRadius: windowHeight(1),
          }}
          onChangeText={text => {
            setPhoneNumber(text);
          }}
          onChangeCountry={data => {
            setPhoneNumberCode(data.callingCode[0]);
          }}
          textInputProps={{
            placeholderTextColor: appColors.subText,
          }}
          countryPickerButtonStyle={{
            backgroundColor: '#37424D',
            marginRight: 10,
            borderRadius: windowHeight(1),
          }}
          textInputStyle={{
            color: appColors.white,
            fontFamily: appFonts.OutfitMedium,
            alignSelf: 'center',
          }}
          withDarkTheme
          codeTextStyle={{
            color: appColors.white,
            fontFamily: appFonts.OutfitMedium,
          }}
        />
        <Button
          text={'profile.update'}
          marginTop={windowHeight(2)}
          onPress={onSubmit}
          loading={loading}
        />
        <Button
          text={'button.deleteAccount'}
          marginTop={windowHeight(2)}
          onPress={deleteAccount}
        />
      </View>
    </View>
  );
};
