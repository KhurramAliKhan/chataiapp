import {StyleSheet} from 'react-native';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';
import {fontSizes, windowHeight, windowWidth} from '@theme/appConstant';

export default styles = StyleSheet.create({
  from: {
    fontSize: fontSizes.FONT4,
    color: appColors.subText,
    fontFamily: appFonts.OutfitRegular,
    alignSelf: 'center',
    width: '75%',
    textAlign: 'center',
    marginTop: windowHeight(6),
  },
  val: {
    fontSize: fontSizes.FONT4,
    color: appColors.white,
    fontFamily: appFonts.OutfitMedium,
    alignSelf: 'center',
    width: '75%',
    textAlign: 'center',
    marginTop: windowHeight(2),
  },
  container: {
    marginVertical: windowHeight(3),
    padding: windowHeight(1),
  },
  textInput: {
    height: windowHeight(7),
    width: '14%',
    backgroundColor: appColors.input,
    borderBottomWidth: 0,
    borderRadius: windowHeight(1),
    color: appColors.white,
  },
});
