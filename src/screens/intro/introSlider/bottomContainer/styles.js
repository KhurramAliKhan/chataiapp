import {StyleSheet} from 'react-native';
import {windowHeight, windowWidth} from '@theme/appConstant';
import {fontSizes} from '@theme/appConstant';
import appFonts from '@theme/appFonts';
import appColors from '@theme/appColors';

export default styles = StyleSheet.create({
  cardContainer: {
    width: '86%',
    alignItems: 'center',
    alignSelf: 'center',
  },
  title: {
    fontSize: fontSizes.FONT6,
    fontFamily: appFonts.OutfitMedium,
    marginTop: windowHeight(3),
    height: windowHeight(4),
    color: appColors.white,
  },
  subTitle: {
    fontSize: fontSizes.FONT4,
    color: appColors.subText,
    lineHeight: windowHeight(2.5),
    width: windowWidth(80),
    fontFamily: appFonts.OutfitRegular,
    textAlign: 'center',
    marginTop: windowHeight(1),
    marginBottom: windowHeight(3),
  },
  line: {
    width: windowWidth(10),
    height: windowHeight(0.3),
    backgroundColor: appColors.primary,
    marginTop: windowHeight(0.5),
  },
  next: {
    height: windowHeight(6),
    width: windowHeight(6),
    borderRadius: windowHeight(3),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: appColors.primary,
  },
  skip: {
    fontFamily: appFonts.OutfitRegular,
    fontSize: fontSizes.FONT4HALF,
    color: appColors.white,
  },
  skipContainer: {
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
