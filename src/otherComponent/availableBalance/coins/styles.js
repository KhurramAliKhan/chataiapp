import {StyleSheet} from 'react-native';
import {windowHeight, fontSizes} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';

export default styles = StyleSheet.create({
  main: {
    borderRadius: 10,
  },
  balance: {
    width: windowHeight(4),
    height: windowHeight(4),
    borderRadius: windowHeight(8),
    justifyContent: 'center',
    alignItems: 'center',
  },
  coins: {
    fontFamily: appFonts.OutfitMedium,
  },
  coinsAvailable: {
    color: appColors.language,
    fontFamily: appFonts.OutfitSemiBold,
    fontSize: fontSizes.FONT4,
  },
  gradient: {
    backgroundColor: appColors.modal1,
    borderRadius: 10,
    margin: 1,
    flex: 1,
    justifyContent: 'space-between',
    padding: 10,
    alignItems: 'center',
  },
});
