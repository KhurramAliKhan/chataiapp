import {StyleSheet} from 'react-native';
import {windowHeight, fontSizes, windowWidth} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';

export default styles = StyleSheet.create({
  limitContainer: {
    alignItems: 'center',
  },
  limit: {
    borderRadius: 10,
    marginBottom: windowHeight(5),
    width: '80%',
  },
  text: {
    backgroundColor: appColors.textBg,
    color: appColors.adBg,
    fontFamily: appFonts.OutfitRegular,
    fontSize: fontSizes.FONT3HALF,
    textAlign: 'center',
    borderRadius: 10,
    margin: 0.8,
    paddingTop: windowHeight(2),
    paddingBottom: windowHeight(3),
  },
  reward: {
    fontFamily: appFonts.OutfitSemiBold,
  },
  playAdContainer: {
    backgroundColor: appColors.adBg,
    position: 'absolute',
    bottom: windowHeight(3),
    alignItems: 'center',
    borderRadius: 5,
    paddingHorizontal: windowWidth(2),
  },
  ad: {
    width: windowWidth(7),
    height: windowHeight(4),
    resizeMode: 'contain',
  },
  watchNow: {
    color: appColors.white,
    fontFamily: appFonts.OutfitRegular,
    fontSize: fontSizes.FONT3,
  },
});
