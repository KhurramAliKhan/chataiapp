import {StyleSheet} from 'react-native';
import {windowHeight, windowWidth} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';

export default styles = StyleSheet.create({
  border: {
    height: 80,
    width: '48%',
    borderTopLeftRadius: windowHeight(1.2),
    borderTopRightRadius: windowHeight(1.2),
    borderBottomLeftRadius: windowHeight(1.2),
    paddingBottom: 7,
  },
  main: {
    borderTopStartRadius: windowHeight(1.2),
    borderTopEndRadius: windowHeight(1.2),
    flex: 1,
    margin: 0.6,
    backgroundColor: appColors.advisor,
  },
  option: {
    alignItems: 'center',
    height: 65,
    marginHorizontal: 10,
  },
  image: {
    height: 40,
    width: 40,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: appColors.imageBg,
  },
  title: {
    fontFamily: appFonts.OutfitMedium,
    color: appColors.language,
    width: '50%',
    marginHorizontal: 10,
  },
  curvView: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: -6,
    width: windowWidth(50),
  },
  rightCurv: {
    height: 5,
    width: windowWidth(11),
    backgroundColor: appColors.advisor,
    borderBottomRightRadius: 14,
    borderBottomStartRadius: 15,
  },
  middle: {
    height: 6,
    width: windowWidth(20.7),
    backgroundColor: appColors.lineBg,
    bottom: 6,
    borderTopStartRadius: 6,
    borderTopEndRadius: 6,
  },
  line: {
    width: windowWidth(16),
    height: 1,
    backgroundColor: appColors.primary,
    position: 'absolute',
    alignSelf: 'center',
    left: windowWidth(13),
    top: 0,
  },
  leftCurv: {
    height: 5,
    width: windowWidth(11),
    backgroundColor: appColors.advisor,
    borderBottomLeftRadius: 14,
    borderBottomEndRadius: 15,
  },
});
