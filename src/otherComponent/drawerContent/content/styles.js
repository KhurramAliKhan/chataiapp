import { StyleSheet } from 'react-native';
import { windowHeight, windowWidth, fontSizes } from '@theme/appConstant';
import appFonts from '@theme/appFonts';
import appColors from '@theme/appColors';

export default styles = StyleSheet.create({
  rowContainer: {
    marginHorizontal: windowWidth(6),
    marginVertical: windowHeight(2),
    alignItems: 'center',
  },
  textStyle: {
    color: appColors.language,
    fontFamily: appFonts.OutfitRegular,
    fontSize: fontSizes.FONT4,
    marginHorizontal: windowWidth(3),
  },
});
