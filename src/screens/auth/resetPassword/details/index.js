import React, {useState, useEffect} from 'react';
import {Keyboard, View} from 'react-native';
import {Button, Input} from '@commonComponents';
import {windowHeight} from '@theme/appConstant';
import {useValues} from '@utils/context';
import {emailValidate} from '@utils/helper';
import {POST_API} from '@config/methods';

export default details = props => {
  const {showMessage, navigation} = props;
  const {t} = useValues();
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const onChange = ({name, value}) => {
    setForm({...form, [name]: value});
    if (value !== '') {
      setErrors(prev => {
        return {...prev, [name]: null};
      });
    }
  };

  const checkValue = data => {
    if (data.success) {
      navigation.replace('OTPVerification', {from: 'reset', data: form.email});
    }
  };
  const onSubmit = () => {
    Keyboard.dismiss();
    let isValid = true;
    if (!form.email) {
      setErrors(prev => {
        return {...prev, email: t('authError.email')};
      });
      isValid = false;
    } else if (!emailValidate.test(form.email)) {
      setErrors(prev => {
        return {...prev, email: t('authError.validEmail')};
      });
      isValid = false;
    }
    if (isValid) {
      api();
    }
  };

  const api = async () => {
    setLoading(true);
    var data = {email: form.email};
    var res = await POST_API(data, 'forgot-password');
    console.log(res);
    setLoading(false);
    checkValue(res);
    res.success === false && showMessage(res);
  };

  return (
    <View>
      <Input
        title={'auth.email'}
        placeholder={'auth.emailPlaceholder'}
        marginTop={windowHeight(4)}
        onChangeText={value => {
          onChange({name: 'email', value});
        }}
        error={errors.email}
      />
      <Button
        text={t('auth.resetPassword')}
        marginTop={windowHeight(4)}
        onPress={onSubmit}
        loading={loading}
      />
    </View>
  );
};
