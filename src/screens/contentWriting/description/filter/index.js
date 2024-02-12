import React from 'react';
import {View, TouchableOpacity, Share, Vibration} from 'react-native';
import {useValues} from '@utils/context';
import styles from './styles';
import LinearGradient from 'react-native-linear-gradient';
import Clipboard from '@react-native-clipboard/clipboard';
import {contentWriting} from '@utils/arrays';
import appColors from '@theme/appColors';

export default filter = ({res, deleteDesc}) => {
  const {viewRTLStyle} = useValues();

  const shareContent = async () => {
    try {
      await Share.share({
        message: res,
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  const copyContent = () => {
    Vibration.vibrate(100);
    Clipboard.setString(res);
  };

  const checkValue = key => {
    if (key === 0) {
      shareContent();
    } else if (key === 1) {
      deleteDesc();
    } else {
      copyContent();
    }
  };

  return (
    <View style={{flexDirection: viewRTLStyle}}>
      {contentWriting.map((item, key) => (
        <TouchableOpacity
          onPress={() => checkValue(key)}
          activeOpacity={0.8}
          style={styles.option}>
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
            style={styles.gradient}>
            <View style={styles.share}>{item.icon}</View>
          </LinearGradient>
        </TouchableOpacity>
      ))}
    </View>
  );
};
