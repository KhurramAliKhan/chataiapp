import {StyleSheet} from 'react-native';
import {fontSizes, windowHeight, windowWidth} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';

export default styles = StyleSheet.create({
  preQuestions: {
    fontSize: fontSizes.FONT4,
    color: appColors.primary,
    fontFamily: appFonts.OutfitMedium,
    marginHorizontal: 20,
    marginTop: 20,
  },
  questionsView: {
    backgroundColor: appColors.questionBg,
    width: '90%',
    alignSelf: 'center',
    paddingVertical: windowHeight(2),
    borderRadius: 8,
    alignItems: 'center',
    paddingHorizontal: windowWidth(4),
    marginTop: windowHeight(2),
  },
  dot: {
    backgroundColor: appColors.primary,
    width: 2.5,
    height: '100%',
    position: 'absolute',
    left: -2,
  },
  question: {
    fontFamily: appFonts.OutfitRegular,
    color: appColors.language,
    fontSize: fontSizes.FONT3HALF,
  },
});
