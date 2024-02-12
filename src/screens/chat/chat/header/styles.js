import {StyleSheet} from 'react-native';
import {windowHeight, windowWidth, fontSizes} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';

export default styles = StyleSheet.create({
  innerContainer: {
    height: windowHeight(9),
    backgroundColor: appColors.headerBg,
    paddingLeft: windowWidth(6),
    position: 'absolute',
    width: '100%',
    alignItems: 'center',
    top: 0,
    justifyContent: 'space-between',
  },
  circle: {
    height: 50,
    width: 50,
    borderRadius: 25,
    backgroundColor: appColors.charBg,
    alignItems: 'center',
    justifyContent: 'center',
  },
  circleImage: {
    height: windowHeight(6),
    width: windowWidth(8),
    resizeMode: 'contain',
  },
  textStyle: {
    fontSize: fontSizes.FONT5,
    fontFamily: appFonts.OutfitBold,
    color: appColors.white,
    left: windowWidth(2),
  },
  right: {
    right: windowWidth(3),
  },
  row: {
    alignItems: 'center',
  },
  more: {
    marginHorizontal: 16,
  },
});
