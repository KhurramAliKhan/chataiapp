import {StyleSheet} from 'react-native';
import {windowHeight, windowWidth, fontSizes} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';

export default styles = StyleSheet.create({
  mainContainer: {
    marginTop: windowHeight(4),
  },
  line: {
    height: windowHeight(0.2),
    width: windowWidth(6),
    backgroundColor: appColors.primary,
    alignSelf: 'center',
  },
  signIn: {
    fontSize: fontSizes.FONT4,
    color: appColors.subText,
    fontFamily: appFonts.OutfitRegular,
    alignSelf: 'center',
    marginTop: windowHeight(1),
  },
  social: {
    alignSelf: 'center',
    width: '65%',
    justifyContent: 'space-around',
    marginTop: windowHeight(2),
  },
});
