import {StyleSheet} from 'react-native';
import {windowHeight, windowWidth, fontSizes} from '@theme/appConstant';
import appFonts from '@theme/appFonts';
import appColors from '@theme/appColors';

export default styles = StyleSheet.create({
  logo: {
    alignSelf: 'center',
    height: windowHeight(10),
    width: windowWidth(30),
    resizeMode: 'contain',
    marginVertical: windowHeight(3),
  },
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
  logout: {
    position: 'absolute',
    bottom: windowHeight(4),
    alignSelf: 'center',
    width: '80%',
  },
});
