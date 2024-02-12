import {StyleSheet} from 'react-native';
import {windowHeight, windowWidth} from '@theme/appConstant';
import appColors from '@theme/appColors';

export default styles = StyleSheet.create({
  mainContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    position: 'absolute',
  },
  circle: {
    height: windowHeight(15),
    width: windowHeight(15),
    borderRadius: windowHeight(7.5),
    backgroundColor: appColors.notification,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
  },
  notificationCircle: {
    width: windowWidth(120),
    height: windowHeight(55),
    resizeMode: 'contain',
    position: 'absolute',
  },
  ring: {
    position: 'absolute',
    width: 80,
    height: 80,
    borderRadius: 40,
    borderColor: appColors.primary,
    borderWidth: 0.5,
  },
  fingerPrint: {
    height: windowHeight(14),
    width: windowWidth(22),
    resizeMode: 'contain',
  },
});
