import {StyleSheet} from 'react-native';
import {windowHeight, windowWidth, fontSizes} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';

export const styles = StyleSheet.create({
  orView: {
    alignItems: 'center',
    width: '100%',
    flexDirection: 'row',
    paddingVertical: windowHeight(2),
    justifyContent: 'center',
  },
  horizontalLine: {
    width: windowWidth(7),
    height: windowHeight(0.2),
    backgroundColor: appColors.line,
    marginTop: windowHeight(0.5),
  },
  orText: {
    fontFamily: appFonts.OutfitRegular,
    fontSize: fontSizes.FONT4,
    color: appColors.gray,
    textAlign: 'center',
    marginHorizontal: windowWidth(1.5),
  },
});
