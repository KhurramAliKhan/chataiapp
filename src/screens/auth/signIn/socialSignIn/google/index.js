import React, {useEffect} from 'react';
import {Image, TouchableOpacity} from 'react-native';
import styles from './styles';
import LinearGradient from 'react-native-linear-gradient';
import appColors from '@theme/appColors';
import {google} from '@utils/images';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import {setValue} from '@utils/localStorage';
import {POST_API} from '@config/methods';

const googleLogin = props => {
  const {setLoading, getUserId} = props;
  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        'enter you webclientid here',
    });
  }, []);

  const googleLogin = async () => {
    setLoading();
    try {
      await GoogleSignin.hasPlayServices();
      await GoogleSignin.signIn();
      const user = await GoogleSignin.getCurrentUser();
      const name = user.user.familyName + ' ' + user.user.givenName;
      const email = user.user.email;
      const avatar = user.user.photo;
      setValue('avatar', avatar);
      signin(email, name);
    } catch (error) {
      setLoading();
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        console.log('SIGNIN CANCELLED');
      } else if (error.code === statusCodes.IN_PROGRESS) {
        console.log('SIGNIN IN PROGRESS');
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        console.log('PLAY SERVICES NOT AVAILABLE');
      } else {
      }
    }
  };

  const checkData = data => {
    if (data.success) {
      setValue('token', data.token);
      getUserId(data.token);
    }
  };

  const signin = async (email, name) => {
    var data = {
      login_with: 'google',
      user: {
        email: email,
        name: name,
      },
    };
    var res = await POST_API(data, 'social/login');
    console.log('RESPONSE', res);
    setLoading();
    checkData(res);
  };

  return (
    <TouchableOpacity activeOpacity={0.7} onPress={googleLogin}>
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
          <Image source={google} style={styles.img} />
        </LinearGradient>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default googleLogin;
