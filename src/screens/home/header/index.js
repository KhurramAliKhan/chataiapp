import React from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import {Drawer} from '@utils/icons';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';
import {Balance} from '@commonComponents';
import appColors from '@theme/appColors';
import {useValues} from '@utils/context';
import {windowWidth} from '@theme/appConstant';

export default header = ({navigation, viewRTLStyle}) => {
  const {keyAvailable, generalSettings} = useValues();
  return (
    <View style={[styles.main, {flexDirection: viewRTLStyle}]}>
      <View style={[styles.sub, {flexDirection: viewRTLStyle}]}>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => navigation.openDrawer()}>
          <LinearGradient
            colors={[
              appColors.whiteExtraLight,
              appColors.whiteLight,
              appColors.whiteMedium,
              appColors.whiteDark,
              appColors.white,
              appColors.white,
            ]}
            start={{x: 0.1, y: 1}}
            end={{x: 0, y: 0}}
            style={[styles.gradient, {marginHorizontal: 20}]}>
            <View style={styles.image}>
              <Drawer />
            </View>
          </LinearGradient>
        </TouchableOpacity>
        <Image
          source={{uri: generalSettings?.general_settings?.home_logo_url}}
          style={styles.logo}
        />
      </View>
      <View
        style={[
          styles.sub,
          {flexDirection: viewRTLStyle, marginHorizontal: windowWidth(4)},
        ]}>
        {!keyAvailable && <Balance />}
      </View>
    </View>
  );
};
