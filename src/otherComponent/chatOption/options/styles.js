import {StyleSheet} from 'react-native';
import {windowHeight, windowWidth, fontSizes} from '@theme/appConstant';
import appFonts from '@theme/appFonts';
import appColors from '@theme/appColors';

export default styles = StyleSheet.create({
  main: {
    borderRadius: windowHeight(1),
    flex: 1,
    margin: 0.8,
    backgroundColor: appColors.option,
    justifyContent: 'center',
    alignItems: 'center',
  },
  seprator: {
    width: '80%',
    alignSelf: 'center',
    height: 1,
    backgroundColor: appColors.separator,
  },
  item: {
    padding: windowHeight(1.6),
  },
  label: {
    fontSize: fontSizes.FONT3HALF,
    color: appColors.language,
    fontFamily: appFonts.OutfitRegular,
  },
  option: {
    position: 'absolute',
    bottom: windowHeight(-4),
    width: windowWidth(5),
    height: windowHeight(5),
    resizeMode: 'contain',
  },
});
