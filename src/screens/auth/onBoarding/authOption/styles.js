import {StyleSheet} from 'react-native';
import {windowHeight, fontSizes} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';

export const styles = StyleSheet.create({
  container: {
    paddingTop: windowHeight(5),
  },
  text: {
    fontSize: fontSizes.FONT4HALF,
    color: appColors.primary,
    fontFamily: appFonts.OutfitMedium,
    textAlign: 'center',
    width: '100%',
    height: windowHeight(3.5),
  },
  btnContainer: {
    width: '100%',
    justifyContent: 'space-around',
  },
  btnStyle: {
    height: windowHeight(3.5),
  },
});
