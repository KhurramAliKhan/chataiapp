import {StyleSheet} from 'react-native';
import {fontSizes} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';

export default styles = StyleSheet.create({
  suggestionView: {
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  suggestion: {
    color: appColors.language,
    paddingVertical: 10,
    fontFamily: appFonts.OutfitMedium,
    fontSize: fontSizes.FONT5,
  },
});
