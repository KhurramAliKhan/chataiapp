import {StyleSheet} from 'react-native';
import {windowHeight, fontSizes} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';

export default styles = StyleSheet.create({
  adView: {
    marginTop: windowHeight(11),
    alignItems: 'center',
  },
  time: {
    marginTop: windowHeight(1),
    fontFamily: appFonts.OutfitMedium,
    color: appColors.subText,
    fontSize: fontSizes.FONT3HALF,
  },
});
