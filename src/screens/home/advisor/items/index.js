import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useValues} from '@utils/context';
import styles from './styles';
import appColors from '../../../../theme/appColors';

export default items = ({
  index,
  item,
  changeTab,
  viewRTLStyle,
  textRTLStyle,
}) => {
  const {t} = useValues();

  return (
    <LinearGradient
      colors={[
        appColors.modalBg,
        appColors.modalBgLight,
        appColors.modalBgmedium,
        appColors.modalBgdark,
      ]}
      start={{x: 0.2, y: 0.8}}
      end={{x: 0, y: 0}}
      style={styles.border}>
      <TouchableOpacity
        style={styles.main}
        onPress={() => changeTab(index)}
        activeOpacity={0.8}>
        <View style={[styles.option, {flexDirection: viewRTLStyle}]}>
          <View style={styles.image}>{item.image}</View>
          <Text style={[styles.title, {textAlign: textRTLStyle}]}>
            {t(item.title)}
          </Text>
        </View>
        <View style={styles.curvView}>
          <View style={styles.rightCurv} />
          <View style={styles.middle} />
          <View style={styles.line} />
          <View style={styles.leftCurv} />
        </View>
      </TouchableOpacity>
    </LinearGradient>
  );
};
