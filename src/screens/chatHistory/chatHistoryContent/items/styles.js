import {StyleSheet} from 'react-native';
import {windowHeight, windowWidth, fontSizes} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';

export default styles = StyleSheet.create({
  rowContainer: {
    width: '90%',
    alignSelf: 'center',
    backgroundColor: appColors.white,
    padding: windowHeight(1.5),
    borderRadius: windowHeight(1),
    alignItems: 'center',
  },
  imageStyle: {
    height: windowHeight(4),
    width: windowWidth(8),
    resizeMode: 'contain',
  },
  title: {
    fontSize: fontSizes.FONT4,
    color: appColors.language,
    fontFamily: appFonts.OutfitRegular,
    marginRight: 20,
  },
  time: {
    fontSize: fontSizes.FONT3HALF,
    color: appColors.gray,
    lineHeight: windowHeight(3),
    fontFamily: appFonts.OutfitRegular,
  },
  charImage: {
    backgroundColor: appColors.char,
    padding: 4,
    borderRadius: 8,
  },
  date: {
    marginHorizontal: 10,
  },
});
