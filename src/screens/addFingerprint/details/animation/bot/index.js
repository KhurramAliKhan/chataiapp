import React from 'react';
import {Image, View} from 'react-native';
import {permissionBot} from '@utils/images';
import styles from './styles';

export default bot = () => {
  return (
    <View style={styles.fingerPrintView}>
      <Image source={permissionBot} style={styles.bot} />
    </View>
  );
};
