import {StyleSheet} from 'react-native';
import {windowHeight, fontSizes} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';

export default styles = StyleSheet.create({
  mainContainer: {
    alignSelf: 'center',
    marginTop: windowHeight(2),
  },
  account: {
    fontSize: fontSizes.FONT4,
    color: appColors.subText,
    fontFamily: appFonts.OutfitRegular,
  },
  subText: {
    fontSize: fontSizes.FONT4,
    color: appColors.primary,
    fontFamily: appFonts.OutfitRegular,
  },
});
