import {StyleSheet} from 'react-native';
import {windowWidth, windowHeight} from '@theme/appConstant';

export default styles = StyleSheet.create({
  bot: {
    height: 170,
    width: 140,
    resizeMode: 'contain',
  },
  fingerPrintView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginLeft: windowWidth(54),
  },
});
