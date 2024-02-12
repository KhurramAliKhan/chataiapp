import {StyleSheet} from 'react-native';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';
import {fontSizes, windowHeight, windowWidth} from '@theme/appConstant';

export default styles = StyleSheet.create({
  detail: {
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '90%',
    alignSelf: 'center',
    paddingVertical: 20,
  },
  val: {
    alignItems: 'center',
  },
  name: {
    color: appColors.language,
    marginHorizontal: windowWidth(4),
    fontFamily: appFonts.OutfitRegular,
    fontSize: fontSizes.FONT3HALF,
  },
  detailMain: {
    backgroundColor: appColors.iconBg,
    width: '90%',
    alignSelf: 'center',
    alignItems: 'center',
    borderBottomStartRadius: 10,
    borderBottomEndRadius: 10,
  },
  dashedView: {
    width: windowWidth(80),
    marginVertical: windowHeight(3),
    borderWidth: 0.8,
    borderColor: appColors.dash,
    borderStyle: 'dashed',
    zIndex: 0,
  },
  dash: {
    position: 'absolute',
    left: 0,
    bottom: 0,
    height: 1,
    backgroundColor: appColors.dash,
    zIndex: 1,
  },
});
