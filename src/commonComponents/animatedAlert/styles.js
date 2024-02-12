import {StyleSheet} from 'react-native';
import {fontSizes, windowHeight, windowWidth} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';

export default styles = StyleSheet.create({
  mainContainer: {
    width: '100%',
    padding: 16,
    position: 'absolute',
    bottom: windowHeight(0),
  },
  text: {
    color: appColors.white,
    fontFamily: appFonts.OutfitMedium,
    fontSize: fontSizes.FONT4,
    marginLeft: windowWidth(2),
  },
});
