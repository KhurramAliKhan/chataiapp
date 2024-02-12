import {StyleSheet} from 'react-native';
import {windowHeight, windowWidth, fontSizes} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';

export default styles = StyleSheet.create({
  container: {
    height: windowHeight(12),
    backgroundColor: appColors.blue,
    justifyContent: 'flex-end',
    padding: windowHeight(2),
    paddingBottom: windowHeight(3),
  },
  innerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textStyle: {
    fontSize: fontSizes.FONT5HALF,
    fontFamily: appFonts.OutfitBold,
    color: appColors.white,
    marginHorizontal: windowWidth(4),
    top: -4,
  },
  row: {
    flexDirection: 'row',
  },
  rowContainer: {
    flexDirection: 'row',
    width: windowWidth(33),
    justifyContent: 'space-between',
    right: windowWidth(2),
  },
});
