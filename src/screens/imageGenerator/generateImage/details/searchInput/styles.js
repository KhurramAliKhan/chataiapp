import {StyleSheet} from 'react-native';
import {windowHeight, windowWidth} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';

export const styles = StyleSheet.create({
  mainContainer: {
    height: windowHeight(6.7),
    width: '92%',
    backgroundColor: appColors.iconBg,
    borderRadius: windowHeight(1),
    paddingHorizontal: windowHeight(2),
    alignSelf: 'center',
    marginBottom: windowHeight(2),
  },
  row: {
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  textInputContainer: {
    left: windowWidth(1),
    fontFamily: appFonts.OutfitMedium,
    width: '92%',
    color: appColors.language,
  },
  verticalLine: {
    height: windowHeight(4),
    width: 1,
    backgroundColor: appColors.lightGray,
    left: windowWidth(2),
  },
  filterIcon: {
    height: windowHeight(4),
    width: windowWidth(10),
  },
});
