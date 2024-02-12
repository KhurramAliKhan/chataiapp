import {StyleSheet} from 'react-native';
import {windowHeight, windowWidth, fontSizes} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';

export default styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
    justifyContent: 'space-between',
  },
  imagePreview: {
    fontSize: fontSizes.FONT5HALF,
    fontFamily: appFonts.OutfitSemiBold,
    color: appColors.white,
    marginLeft: windowWidth(4),
  },
  bottomView: {
    bottom: windowHeight(8),
    width: windowWidth(90),
    justifyContent: 'space-around',
    alignSelf: 'center',
  },
});
