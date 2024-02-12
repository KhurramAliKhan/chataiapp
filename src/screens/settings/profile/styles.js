import {StyleSheet} from 'react-native';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';
import {fontSizes, windowWidth} from '@theme/appConstant';

export default styles = StyleSheet.create({
  mainView: {
    padding: 20,
    backgroundColor: appColors.iconBg,
    width: '90%',
    alignSelf: 'center',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  userView: {
    height: 44,
    width: 44,
    borderRadius: 22,
    backgroundColor: appColors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  user: {
    fontFamily: appFonts.OutfitMedium,
    fontSize: fontSizes.FONT6,
    color: appColors.buttonText,
  },
  details: {
    alignItems: 'center',
  },
  detail: {
    marginHorizontal: 10,
  },
  name: {
    fontSize: fontSizes.FONT4,
    fontFamily: appFonts.OutfitMedium,
    color: appColors.language,
  },
  email: {
    fontSize: fontSizes.FONT3HALF,
    fontFamily: appFonts.OutfitMedium,
    color: appColors.subText,
    marginTop: 4,
  },
  welcome: {
    marginHorizontal: windowWidth(4),
    fontFamily: appFonts.OutfitMedium,
    color: appColors.language,
    fontSize: fontSizes.FONT5,
  },
});
