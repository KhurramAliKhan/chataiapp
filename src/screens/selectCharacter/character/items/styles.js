import {StyleSheet} from 'react-native';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';
import {windowHeight, windowWidth} from '@theme/appConstant';

export default styles = StyleSheet.create({
  mainContainer: {
    alignItems: 'center',
  },
  bg: {
    height: windowHeight(14),
    width: windowWidth(28),
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemBg: {
    height: 74,
    width: 74,
    borderRadius: 37,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
    opacity: 0.3,
    position: 'absolute',
  },
  gradientBg: {
    width: 74,
    height: 74,
  },
  image: {
    height: windowHeight(11),
    width: windowWidth(11),
    resizeMode: 'contain',
  },
  nameContainer: {
    alignItems: 'center',
    marginTop: windowHeight(-1),
  },
  line: {
    width: windowWidth(4),
    height: windowHeight(3),
    resizeMode: 'contain',
  },
  gradient: {
    height: windowHeight(5),
    width: windowWidth(25),
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  character: {
    marginHorizontal: windowWidth(1),
  },
  title: {
    color: appColors.white,
    fontFamily: appFonts.OutfitRegular,
  },
});
