import React from 'react';
import {ImageBackground} from 'react-native';
import styles from './styles';
import HeaderContent from './headerContent';
import TextContent from './textContent';
import AuthOption from './authOption';
import {backGround} from '@utils/images';

export function OnBoarding({navigation}) {
  return (
    <ImageBackground source={backGround} style={styles.container}>
      <HeaderContent />
      <TextContent />
      <AuthOption navigation={navigation} />
    </ImageBackground>
  );
}
