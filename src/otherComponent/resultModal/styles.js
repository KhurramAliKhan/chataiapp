import {StyleSheet} from 'react-native';
import {windowHeight, windowWidth, fontSizes} from '@theme/appConstant';
import appFonts from '@theme/appFonts';
import appColors from '@theme/appColors';

export default styles = StyleSheet.create({
  main: {
    alignItems: 'center',
    paddingTop: windowHeight(4),
    width: '100%',
  },
  apiKey: {
    width: windowWidth(50),
    height: windowHeight(10),
    position: 'absolute',
  },
  removed: {
    height: windowHeight(22),
    width: windowWidth(34),
    resizeMode: 'contain',
    marginTop: windowHeight(4),
  },
  desc: {
    fontSize: fontSizes.FONT4,
    fontFamily: appFonts.OutfitMedium,
    textAlign: 'center',
    width: '80%',
    color: appColors.language,
    marginTop: windowHeight(1),
  },
});
