import {StyleSheet} from 'react-native';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';
import {windowHeight, windowWidth, fontSizes} from '@theme/appConstant';

export default styles = StyleSheet.create({
  main: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: windowHeight(10),
  },
  noInternet: {
    height: windowHeight(40),
    width: windowWidth(80),
    resizeMode: 'contain',
  },
  oops: {
    color: appColors.primary,
    fontSize: fontSizes.FONT5,
    fontFamily: appFonts.OutfitMedium,
  },
  noWifi: {
    alignSelf: 'flex-end',
    right: windowWidth(24),
    top: windowHeight(12),
    height: windowHeight(6),
    width: windowHeight(6),
    borderRadius: windowHeight(3),
    borderWidth: 1,
    borderColor: appColors.wifiBorder,
    backgroundColor: appColors.wifiBg,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
  },
  wifi: {
    width: windowWidth(13),
    height: windowHeight(13),
    resizeMode: 'contain',
  },
  connection: {
    color: appColors.language,
    fontFamily: appFonts.OutfitRegular,
    fontSize: fontSizes.FONT3HALF,
    width: '80%',
    marginTop: windowHeight(2),
    textAlign: 'center',
  },
});
