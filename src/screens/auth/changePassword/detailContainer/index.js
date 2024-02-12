import React, {useState} from 'react';
import {Keyboard, View, StyleSheet} from 'react-native';
import {Button, Input} from '@commonComponents';
import {windowHeight} from '@theme/appConstant';
import {useValues} from '@utils/context';
import {POST_API} from '@config/methods';

export default details = props => {
  const {params, navigation} = props;
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const {t} = useValues();

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
    if (!form.password) {
      setErrors(prev => {
        return {...prev, password: t('authError.password')};
      });
      isValid = false;
    } else if (form.password.length < 8) {
      setErrors(prev => {
        return {...prev, password: t('authError.validPassword')};
      });
      isValid = false;
    }
    if (!form.confirmPass) {
      setErrors(prev => {
        return {...prev, confirmPass: t('authError.cpassword')};
      });
      isValid = false;
    } else if (form.confirmPass != form.password) {
      setErrors(prev => {
        return {...prev, confirmPass: t('authError.validCpassword')};
      });
      isValid = false;
    }
    if (isValid) {
      phoneApi();
    }
  };

  const phoneApi = async () => {
    setLoading(true);
    var data = {
      otp: params.otp,
      email: params.val,
      password: form.password,
      password_confirmation: form.confirmPass,
    };
    var res = await POST_API(data, 'update-password');
    setLoading(false);
    if (res.success) {
      navigation.replace('SignIn');
    }
  };

  return (
    <View>
      <View style={styles.inputView}>
        <Input
          title={t('changePass.newPassword')}
          placeholder={t('changePass.newPassword')}
          error={errors.password}
          onChangeText={value => {
            onChange({name: 'password', value});
          }}
        />
        <Input
          title={t('changePass.confirmPassword')}
          placeholder={t('changePass.confirmPassword')}
          error={errors.confirmPass}
          onChangeText={value => {
            onChange({name: 'confirmPass', value});
          }}
        />
      </View>
      <Button
        text={t('changePass.updatePassword')}
        marginTop={windowHeight(6)}
        onPress={onSubmit}
        loading={loading}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputView: {
    marginTop: windowHeight(4),
  },
});
