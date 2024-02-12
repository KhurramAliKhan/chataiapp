import React from 'react';
import {View} from 'react-native';
import styles from './styles';

export function DottedLine({width}) {
  return (
    <View style={styles.lineMain}>
      <View style={styles.dot} />
      <View style={[styles.dashView, {width: width}]}>
        <View style={styles.dash} />
      </View>
      <View style={styles.dot} />
    </View>
  );
}
