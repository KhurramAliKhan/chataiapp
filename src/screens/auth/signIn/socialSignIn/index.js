import React from 'react';
import {Platform, Text, View} from 'react-native';
import styles from './styles';
import Google from './google';
import Phone from './phone';
import Apple from './apple';

const socialSignIn = ({goToPhone, setLoading, getUserId, viewRTLStyle}) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.line} />
      <Text style={styles.signIn}>Or sign in with</Text>
      <View style={[styles.social, {flexDirection: viewRTLStyle}]}>
        <Google setLoading={setLoading} getUserId={getUserId} />
        <Phone goToPhone={goToPhone} />
        {Platform.OS === 'ios' && (
          <Apple setLoading={setLoading} getUserId={getUserId} />
        )}
      </View>
    </View>
  );
};

export default socialSignIn;
