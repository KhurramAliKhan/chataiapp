import {StyleSheet} from 'react-native';
import {fontSizes, windowHeight, windowWidth} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';

export default styles = StyleSheet.create({
  main: {
    width: windowWidth(13),
    height: windowHeight(5),
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  coin: {
    height: windowHeight(5),
    width: windowWidth(8),
  },
  gradient: {
    height: windowHeight(3.5),
    width: windowHeight(3.5),
    borderRadius: windowHeight(2),
    alignItems: 'center',
    justifyContent: 'center',
  },
  balance: {
    color: appColors.white,
    fontFamily: appFonts.OutfitMedium,
    fontSize: fontSizes.FONT3HALF,
  },
  balanceView: {
    alignItems: 'center',
  },
});
