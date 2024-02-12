import {StyleSheet} from 'react-native';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';
import {fontSizes, windowHeight, windowWidth} from '@theme/appConstant';

export default styles = StyleSheet.create({
  mainContainer: {
    width: windowHeight(14),
    height: windowHeight(15),
    borderRadius: windowHeight(1),
  },
  language: {
    borderRadius: windowHeight(1),
    flex: 1,
    margin: 1,
    backgroundColor: appColors.input,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: windowHeight(6),
    width: windowWidth(10),
    resizeMode: 'contain',
  },
  title: {
    fontSize: fontSizes.FONT4,
    fontFamily: appFonts.OutfitMedium,
    color: appColors.language,
    marginTop: windowHeight(2),
    textAlign: 'center',
  },
  selected: {
    position: 'absolute',
    right: windowWidth(1),
    top: windowHeight(0.5),
  },
});
