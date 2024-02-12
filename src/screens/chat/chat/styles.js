import {StyleSheet} from 'react-native';
import {windowHeight, fontSizes, windowWidth} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';

export default styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  subContainer: {
    height: '100%',
    width: '100%',
  },
  bg: {
    position: 'absolute',
    backgroundColor: appColors.chatBg,
    height: '100%',
    width: '100%',
  },
  chatInputContainer: {
    width: '100%',
    height: windowHeight(12),
    justifyContent: 'space-between',
    paddingTop: windowHeight(1),
    marginBottom: windowHeight(2),
  },
  textStyle: {
    color: appColors.gray,
    fontFamily: appFonts.OutfitMedium,
    fontSize: fontSizes.FONT3HALF,
    alignSelf: 'center',
  },
});
