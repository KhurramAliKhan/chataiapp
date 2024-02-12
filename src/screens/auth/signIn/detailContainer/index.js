import React, {useState} from 'react';
import {Text, View, Keyboard} from 'react-native';
import {Input, Button} from '@commonComponents';
import {windowHeight} from '@theme/appConstant';
import {emailValidate} from '@utils/helper';
import styles from './styles';
import {POST_API} from '@config/methods';

const details = ({t, showMessage, goToReset, checkValue, direction}) => {
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
  const onSubmit = () => {
    Keyboard.dismiss();
    let isValid = true;
    if (!form.email) {
      setErrors(prev => {
        return {...prev, email: 'authError.email'};
      });
      isValid = false;
    } else if (!emailValidate.test(form.email)) {
      setErrors(prev => {
        return {...prev, email: 'authError.validEmail'};
      });
      isValid = false;
    }
    if (!form.password) {
      setErrors(prev => {
        return {...prev, password: 'authError.password'};
      });
      isValid = false;
    } else if (form.password.length < 8) {
      setErrors(prev => {
        return {...prev, password: 'authError.validPassword'};
      });
      isValid = false;
    }
    if (isValid) {
      api();
    }
  };

  const api = async () => {
    setLoading(true);
    var data = {email: form.email, password: form.password};
    var res = await POST_API(data, 'login');
    setLoading(false);
    res.success === false ? showMessage(res) : checkValue(res);
  };

  return (
    <View style={styles.mainContainer}>
      <Input
        title={'auth.email'}
        placeholder={'auth.enterEmail'}
        error={errors.email}
        onChangeText={value => {
          onChange({name: 'email', value});
        }}
      />
      <Input
        title={'auth.password'}
        placeholder={'auth.enterPassword'}
        password
        error={errors.password}
        secureTextEntry={true}
        onChangeText={value => {
          onChange({name: 'password', value});
        }}
      />
      <Text
        onPress={goToReset}
        style={[
          styles.resetPassword,
          {textAlign: direction ? 'left' : 'right'},
        ]}>
        {t('auth.resetPassword')}
      </Text>
      <Button
        text={'auth.signIn'}
        marginTop={windowHeight(6)}
        onPress={onSubmit}
        loading={loading}
      />
    </View>
  );
};

export default details;
