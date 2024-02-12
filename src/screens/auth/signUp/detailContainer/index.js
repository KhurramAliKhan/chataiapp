import React, {useState} from 'react';
import {Keyboard, StyleSheet, View} from 'react-native';
import {Input, Button} from '@commonComponents';
import {windowHeight} from '@theme/appConstant';
import {emailValidate} from '@utils/helper';
import {POST_API} from '@config/methods';

const details = props => {
  const {showMessage} = props;
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
    if (!form.name) {
      setErrors(prev => {
        return {...prev, name: 'Please enter name'};
      });
      isValid = false;
    }
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
    if (!form.phone) {
      setErrors(prev => {
        return {...prev, phone: 'authError.phoneNumber'};
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

    if (!form.cpassword) {
      setErrors(prev => {
        return {...prev, cpassword: 'authError.cpassword'};
      });
      isValid = false;
    } else if (form.cpassword !== form.password) {
      setErrors(prev => {
        return {
          ...prev,
          cpassword: 'authError.validCpassword',
        };
      });
      isValid = false;
    }
    if (isValid) {
      api();
    }
  };
  const api = async () => {
    data = {
      name: form.name,
      email: form.email,
      phone: form.phone,
      code: '',
      password: form.password,
    };
    setLoading(true);
    var res = await POST_API(data, 'register');
    console.log(res);
    setLoading(false);
    showMessage(res);
  };

  return (
    <View style={styles.inputView}>
      <Input
        title={'signUp.fullName'}
        placeholder={'signUp.enterFullName'}
        error={errors.name}
        onChangeText={value => {
          onChange({name: 'name', value});
        }}
      />
      <Input
        title={'auth.email'}
        placeholder={'auth.emailPlaceholder'}
        error={errors.email}
        onChangeText={value => {
          onChange({name: 'email', value});
        }}
        keyboardType="email-address"
      />
      <Input
        title={'auth.phone'}
        placeholder={'auth.phonePlaceholder'}
        error={errors.phone}
        onChangeText={value => {
          onChange({name: 'phone', value});
        }}
        keyboardType="numeric"
      />
      <Input
        title={'auth.password'}
        password
        placeholder={'auth.enterPassword'}
        secureTextEntry={true}
        error={errors.password}
        onChangeText={value => {
          onChange({name: 'password', value});
        }}
      />
      <Input
        title={'signUp.confirmPassword'}
        password
        placeholder={'signUp.reenterpassword'}
        secureTextEntry={true}
        error={errors.cpassword}
        onChangeText={value => {
          onChange({name: 'cpassword', value});
        }}
      />
      <Button
        text={'auth.signUp'}
        marginTop={windowHeight(3)}
        onPress={onSubmit}
        loading={loading}
      />
    </View>
  );
};

export default details;

const styles = StyleSheet.create({
  inputView: {
    marginTop: windowHeight(1),
  },
});
