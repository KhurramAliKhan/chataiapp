import {StyleSheet} from 'react-native';
import {fontSizes, windowHeight} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';

export default styles = StyleSheet.create({
  main: {
    margin: 20,
  },
  start: {
    color: appColors.language,
    fontFamily: appFonts.OutfitMedium,
    fontSize: fontSizes.FONT4,
    marginBottom: windowHeight(3),
  },
  separator: {
    height: 20,
  },
  column: {
    justifyContent: 'space-between',
  },
});
