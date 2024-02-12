import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import styles from './styles';
import {Back} from '@utils/icons';
import {Balance} from '../balance';
import {useValues} from '@utils/context';
import {windowWidth} from '@theme/appConstant';
import {DottedLine} from '../dottedLine';

export function Header({
  navigation,
  title,
  showBack,
  showBalance,
  showLine,
  icon,
  onPress,
  backPress,
}) {
  const {viewRTLStyle, imageRTLStyle, direction, t, keyAvailable} = useValues();

  const goBack = () => {
    navigation.goBack();
  };
  return (
    <View>
      <View style={[styles.mainContainer, {flexDirection: viewRTLStyle}]}>
        <View style={{flexDirection: viewRTLStyle}}>
          {showBack && (
            <TouchableOpacity
              style={[styles.back, {transform: imageRTLStyle}]}
              activeOpacity={0.5}
              onPress={backPress ? backPress : goBack}>
              <Back />
            </TouchableOpacity>
          )}
          <Text
            style={[
              styles.title,
              {marginHorizontal: showBack ? windowWidth(4) : 0},
            ]}>
            {t(title)}
          </Text>
        </View>
        <View style={{flexDirection: viewRTLStyle, alignItems: 'center'}}>
          {showBalance && !keyAvailable && <Balance />}
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={onPress}
            style={
              direction
                ? {marginRight: windowWidth(5)}
                : {marginLeft: windowWidth(5)}
            }>
            {icon}
          </TouchableOpacity>
        </View>
      </View>
      {showLine && <DottedLine width={windowWidth(86)} />}
    </View>
  );
}
