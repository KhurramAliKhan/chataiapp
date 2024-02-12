import {StyleSheet} from 'react-native';
import {fontSizes, windowHeight, windowWidth} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';

export default styles = StyleSheet.create({
  mainContainer: {
    alignItems: 'center',
    height: '82%',
  },
  details: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '80%',
  },
  circle: {
    height: windowHeight(60),
    width: windowWidth(100),
    resizeMode: 'contain',
  },
  notification: {
    position: 'absolute',
    width: '100%',
    alignItems: 'center',
  },
  notificationImg: {
    height: windowHeight(20),
    width: windowWidth(20),
    resizeMode: 'contain',
  },
  bot: {
    height: windowHeight(27),
    width: windowWidth(33),
    resizeMode: 'contain',
    position: 'absolute',
    right: windowWidth(8),
  },
  wish: {
    color: appColors.subText,
    fontFamily: appFonts.OutfitRegular,
    width: '80%',
    textAlign: 'center',
    alignSelf: 'center',
    fontSize: fontSizes.FONT4,
    marginBottom: windowHeight(4),
  },
});
