import React from 'react';
import {View, Text, Switch, TouchableOpacity} from 'react-native';
import appColors from '@theme/appColors';
import {Goto} from '@utils/icons';
import styles from './styles';
import {useValues} from '@utils/context';

export default content = ({
  rtl,
  language,
  goToScreen,
  val,
  toggleSwitch,
  item,
}) => {
  const {t, viewRTLStyle, imageRTLStyle} = useValues();

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => goToScreen(val.screen, val.loginNeeded, val.name)}>
      <View style={[styles.detail, {flexDirection: viewRTLStyle}]}>
        <View style={[styles.val, {flexDirection: viewRTLStyle}]}>
          {val.icon}
          <Text style={styles.name}>{t(val.name)}</Text>
        </View>
        {val.switch ? (
          <Switch
            value={rtl}
            trackColor={{
              false: null,
              true: appColors.primary,
            }}
            thumbColor={item.switch == true ? appColors.primary : null}
            onChange={toggleSwitch}
          />
        ) : (
          <View style={[styles.val, {flexDirection: viewRTLStyle}]}>
            {val.name === 'setting.language' && (
              <Text style={styles.language}>{t(language)}</Text>
            )}
            <View style={{transform: imageRTLStyle}}>
              <Goto />
            </View>
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
};
