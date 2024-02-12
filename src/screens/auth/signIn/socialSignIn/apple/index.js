import React from 'react';
import {Image, TouchableOpacity} from 'react-native';
import styles from './styles';
import LinearGradient from 'react-native-linear-gradient';
import appColors from '@theme/appColors';
import {apple} from '@utils/images';
import {appleAuth} from '@invertase/react-native-apple-authentication';
import {setValue} from '@utils/localStorage';
import {POST_API} from '@config/methods';

const appleLogin = props => {
  const {setLoading, getUserId} = props;

  const appleLogin = async () => {
    setLoading();
    const appleAuthRequestResponse = await appleAuth.performRequest({
      requestedOperation: appleAuth.Operation.LOGIN,
      requestedScopes: [appleAuth.Scope.EMAIL, appleAuth.Scope.FULL_NAME],
    });
    if (!appleAuthRequestResponse.identityToken) {
      throw new Error('Apple Sign-In failed - no identify token returned');
    }
    const {email, fullName} = appleAuthRequestResponse;
    const name = fullName.familyName + ' ' + fullName.givenName;
    console.log('email', email);
    console.log('nam', name);
    signin(email, name);
  };

  const checkData = data => {
    if (data.success) {
      setValue('token', data.token);
      getUserId(data.token);
    }
  };

  const signin = async (email, name) => {
    var data = {
      login_with: 'apple',
      user: {
        email: email,
        name: name,
      },
    };
    var res = await POST_API(data, 'social/login');
    console.log(res);
    checkData(res);
  };

  return (
    <TouchableOpacity activeOpacity={0.7} onPress={appleLogin}>
      <LinearGradient
        useAngle={true}
        angle={143.99}
        locations={[-1.81, 109.5]}
        colors={[appColors.gradient1, appColors.gradient2]}
        style={styles.mainContainer}>
        <LinearGradient
          useAngle={true}
          angle={143.99}
          locations={[-10, 50.5]}
          colors={[appColors.gradient3, appColors.gradient4]}
          style={styles.circle}>
          <Image source={apple} style={styles.img} />
        </LinearGradient>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default appleLogin;
