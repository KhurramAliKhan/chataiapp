import {StyleSheet} from 'react-native';
import {windowHeight, windowWidth, fontSizes} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';

export default styles = StyleSheet.create({
  mainContainer: {
    width: '100%',
    alignItems: 'center',
  },
  title: {
    fontSize: fontSizes.FONT5HALF,
    fontFamily: appFonts.OutfitMedium,
    width: '80%',
    color: appColors.white,
    textAlign: 'center',
  },
  description: {
    fontSize: fontSizes.FONT4,
    lineHeight: windowHeight(2.4),
    color: appColors.gray,
    fontFamily: appFonts.OutfitRegular,
    textAlign: 'center',
    width: '90%',
    marginTop: windowHeight(2),
  },
});
