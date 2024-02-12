import {StyleSheet} from 'react-native';
import {windowHeight, fontSizes, windowWidth} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';

export default styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
  },
  text: {
    textAlign: 'center',
    fontSize: fontSizes.FONT4,
    fontFamily: appFonts.OutfitRegular,
    color: appColors.subText,
    width: '80%',
  },
  bot: {
    width: windowWidth(45),
    height: windowHeight(35),
    resizeMode: 'contain',
  },
});
