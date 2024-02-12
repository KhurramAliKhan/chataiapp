import {StyleSheet} from 'react-native';
import {fontSizes, windowHeight} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';

export const styles = StyleSheet.create({
  mainContainer: {
    alignItems: 'center',
    backgroundColor: appColors.primary,
    height: windowHeight(6),
    justifyContent: 'center',
    borderRadius: windowHeight(1.2),
    alignSelf: 'center',
    width: '90%',
  },
  text: {
    color: appColors.text,
    fontSize: fontSizes.FONT4HALF,
    fontFamily: appFonts.OutfitSemiBold,
  },
});
