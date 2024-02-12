import React from 'react';
import {View} from 'react-native';
import styles from './styles';

export default separator = () => {
  return (
    <View style={styles.mainView}>
      <View style={styles.leftCurv} />
      <View style={styles.curv} />
      <View style={styles.rightCurv} />
      <View style={styles.middleView} />
      <View style={styles.curv} />
      <View style={styles.rightCurv} />
      <View style={styles.leftCurv} />
    </View>
  );
};
