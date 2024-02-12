import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {Selected} from '@utils/icons';
import LinearGradient from 'react-native-linear-gradient';
import appColors from '@theme/appColors';
import {useValues} from '@utils/context';
import {useTranslation} from 'react-i18next';
import styles from './styles';

export default details = props => {
  const {item, index, select, selected} = props;
  const {t} = useValues();
  const {i18n} = useTranslation();

  return (
    <LinearGradient
      colors={
        select === item.code
          ? [
              appColors.details,
              appColors.detailsDark,
              appColors.detailsDark,
              appColors.details,
            ]
          : [appColors.input, appColors.input]
      }
      start={{x: 0.4, y: 1.1}}
      end={{x: 1.1, y: 0.1}}
      style={styles.mainContainer}>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => {
          selected(index, item);
          i18n.changeLanguage(item.code);
        }}
        style={styles.language}>
        <Image source={item.image} style={styles.image} />
        <Text style={styles.title}>{t(item.title)}</Text>
      </TouchableOpacity>
      {select === item.code && (
        <View style={styles.selected}>
          <Selected />
        </View>
      )}
    </LinearGradient>
  );
};
