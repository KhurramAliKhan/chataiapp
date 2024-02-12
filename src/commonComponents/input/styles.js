import { StyleSheet } from 'react-native';
import { windowWidth, windowHeight, fontSizes } from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';

export default styles = StyleSheet.create({
  mainContainer: {
    width: '100%',
    marginBottom: windowHeight(1),
    justifyContent: 'center',
  },
  title: {
    fontFamily: appFonts.OutfitRegular,
    marginBottom: windowHeight(1),
    fontSize: windowWidth(4.2),
    marginLeft: windowWidth(5.2),
    fontWeight: '600',
    color: appColors.white,
  },
  input: {
    width: '90%',
    fontSize: fontSizes.FONT3HALF,
    paddingHorizontal: windowHeight(2),
    borderRadius: windowHeight(1),
    fontFamily: appFonts.OutfitMedium,
    fontWeight: '500',
    alignSelf: 'center',
    height: windowHeight(6),
    color: appColors.white,
  },
  err: {
    marginLeft: windowWidth(6),
    color: appColors.red,
    marginTop: windowHeight(0.3),
    fontFamily: appFonts.OutfitMedium,
  },
  password: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: windowHeight(6.2),
  },
});
