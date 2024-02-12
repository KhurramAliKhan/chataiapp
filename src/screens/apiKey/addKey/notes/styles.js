import {StyleSheet} from 'react-native';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';
import {windowWidth, windowHeight, fontSizes} from '@theme/appConstant';

export default styles = StyleSheet.create({
  main: {
    borderRadius: 16,
    borderWidth: 1,
    backgroundColor: appColors.modalContainer,
    borderColor: appColors.border,
    width: '90%',
    alignSelf: 'center',
  },
  addKeyView: {
    paddingVertical: windowHeight(2),
    width: '100%',
    borderRadius: 16,
    borderBottomWidth: 1,
    borderColor: appColors.border,
  },
  addKey: {
    marginHorizontal: windowWidth(4),
    color: appColors.icons,
    fontFamily: appFonts.OutfitMedium,
    fontSize: fontSizes.FONT4,
  },
  apiKey: {
    marginHorizontal: windowWidth(4),
    color: appColors.gray,
    fontFamily: appFonts.OutfitMedium,
    marginTop: windowHeight(2),
    marginBottom: windowHeight(1),
  },
  noteView: {
    padding: windowHeight(2),
    borderBottomStartRadius: 16,
    borderBottomEndRadius: 16,
  },
  note: {
    color: appColors.icons,
    fontFamily: appFonts.OutfitMedium,
    fontSize: fontSizes.FONT4,
  },
  deviceView: {
    marginTop: windowHeight(2),
  },
  instruction: {
    fontSize: fontSizes.FONT3HALF,
    fontFamily: appFonts.OutfitMedium,
    width: '90%',
    marginHorizontal: windowWidth(3),
    color: appColors.language,
  },
  removeView: {
    marginTop: windowHeight(3),
    marginBottom: windowHeight(2),
  },
});
