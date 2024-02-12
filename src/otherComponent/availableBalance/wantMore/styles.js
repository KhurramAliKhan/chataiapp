import {StyleSheet} from 'react-native';
import {windowHeight, fontSizes} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';

export default styles = StyleSheet.create({
  main: {
    alignItems: 'center',
    marginTop: windowHeight(4),
  },
  wantMore: {
    fontFamily: appFonts.OutfitRegular,
    color: appColors.gray,
    fontSize: fontSizes.FONT3HALF,
  },
  or: {
    fontFamily: appFonts.OutfitRegular,
    color: appColors.gray,
    fontSize: fontSizes.FONT3HALF,
    marginVertical: windowHeight(2),
  },
  watchVideo: {
    fontFamily: appFonts.OutfitRegular,
    color: appColors.language,
    marginTop: windowHeight(1),
  },
});
