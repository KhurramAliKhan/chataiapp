import {StyleSheet} from 'react-native';
import {windowHeight, windowWidth, fontSizes} from '@theme/appConstant';
import appFonts from '@theme/appFonts';
import appColors from '@theme/appColors';

export default styles = StyleSheet.create({
  labelStyle: {
    fontSize: fontSizes.FONT4,
    color: appColors.language,
    fontFamily: appFonts.OutfitRegular,
    marginHorizontal: windowWidth(4),
    marginTop: windowHeight(2),
  },
  textInputStyle: {
    height: windowHeight(7),
    width: '90%',
    backgroundColor: appColors.iconBg,
    borderRadius: 6,
    alignSelf: 'center',
    marginTop: windowHeight(1),
    fontFamily: appFonts.OutfitRegular,
    fontSize: fontSizes.FONT3HALF,
    paddingHorizontal: windowWidth(3),
    marginBottom: windowHeight(4),
    color: appColors.language,
  },
  marginTop: {
    marginVertical: windowHeight(1),
  },
  button: {
    width: '92%',
  },
  dropDown: {
    width: windowWidth(90),
    marginTop: windowHeight(1),
  },
  detail: {
    backgroundColor: appColors.iconBg,
    width: '92%',
    alignSelf: 'center',
    paddingVertical: windowWidth(4),
    borderRadius: 10,
  },
});
