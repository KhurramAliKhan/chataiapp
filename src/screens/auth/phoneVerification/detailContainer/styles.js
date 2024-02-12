import {StyleSheet} from 'react-native';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';
import {windowHeight, windowWidth} from '@theme/appConstant';

export default styles = StyleSheet.create({
  mainContainer: {
    marginTop: windowHeight(5),
  },
  number: {
    fontFamily: appFonts.OutfitRegular,
    marginBottom: windowHeight(1),
    fontSize: windowWidth(4.2),
    marginLeft: windowWidth(5.2),
    fontWeight: '600',
    color: appColors.white,
  },
  container: {
    width: '90%',
    alignSelf: 'center',
    marginBottom: windowHeight(4),
    backgroundColor: appColors.phone,
  },
  textContainer: {
    paddingVertical: 0,
    backgroundColor: appColors.input,
    alignSelf: 'center',
    borderRadius: windowHeight(1),
  },
  picker: {
    backgroundColor: appColors.input,
    marginRight: 10,
    borderRadius: windowHeight(1),
  },
  input: {
    color: appColors.white,
    fontFamily: appFonts.OutfitMedium,
    alignSelf: 'center',
  },
  text: {
    color: appColors.white,
    fontFamily: appFonts.OutfitMedium,
  },
});
