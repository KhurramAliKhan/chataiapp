import {StyleSheet} from 'react-native';
import {fontSizes, windowHeight, windowWidth} from '@theme/appConstant';
import appFonts from '@theme/appFonts';
import appColors from '@theme/appColors';

export default styles = StyleSheet.create({
  mainContainer: {
    marginTop: windowHeight(6),
    paddingHorizontal: windowWidth(4),
    paddingVertical: windowHeight(3),
    alignItems: 'center',
    marginBottom: 60,
  },
  subContainer: {
    justifyContent: 'space-between',
    width: '100%',
    alignItems: 'center',
  },
  description: {
    marginTop: windowHeight(2),
    borderRadius: 4,
    fontFamily: appFonts.OutfitMedium,
    color: appColors.primary,
    fontSize: fontSizes.FONT4HALF,
  },
  desc: {
    width: '100%',
    backgroundColor: appColors.iconBg,
    padding: windowHeight(2),
    marginTop: windowHeight(2),
    borderRadius: 4,
    fontFamily: appFonts.OutfitMedium,
    color: appColors.language,
    fontSize: fontSizes.FONT3HALF,
  },
  option: {
    height: windowHeight(5),
    width: windowWidth(8),
    borderRadius: 4,
    backgroundColor: appColors.lightblue,
    marginHorizontal: windowWidth(2),
    justifyContent: 'center',
    alignItems: 'center',
  },
});
