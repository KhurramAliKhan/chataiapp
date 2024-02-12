import { StyleSheet } from 'react-native';
import { fontSizes, windowHeight } from '@theme/appConstant';
import appFonts from '@theme/appFonts';
import appColors from '@theme/appColors';

export const styles = StyleSheet.create({
  mainContainer: {
    height: windowHeight(6),
    borderRadius: windowHeight(1),
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: fontSizes.FONT4HALF,
    fontFamily: appFonts.OutfitMedium,
  },
});
