import {StyleSheet} from 'react-native';
import appFonts from '@theme/appFonts';
import appColors from '@theme/appColors';
import {fontSizes, windowWidth, windowHeight} from '@theme/appConstant';

export default styles = StyleSheet.create({
  mainContainer: {
    alignItems: 'center',
    paddingHorizontal: windowWidth(5),
    marginBottom: windowHeight(2),
    marginTop: windowHeight(3),
    justifyContent: 'space-between',
  },
  back: {
    height: windowHeight(3),
    width: windowWidth(6),
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontFamily: appFonts.OutfitMedium,
    color: appColors.white,
    fontSize: fontSizes.FONT5,
  },
});
