import {StyleSheet} from 'react-native';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';
import {windowHeight, windowWidth, fontSizes} from '@theme/appConstant';

export default styles = StyleSheet.create({
  mainContainer: {
    marginTop: windowHeight(2),
  },
  resetPassword: {
    color: appColors.primary,
    fontFamily: appFonts.OutfitMedium,
    fontSize: fontSizes.FONT4,
    marginHorizontal: windowWidth(5),
  },
});
