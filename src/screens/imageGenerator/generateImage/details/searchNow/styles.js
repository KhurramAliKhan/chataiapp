import {StyleSheet} from 'react-native';
import {windowHeight, windowWidth, fontSizes} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';

export default styles = StyleSheet.create({
  mainContainer: {
    // flex: 1,
    alignItems: 'center',
    marginTop: windowHeight(4),
    height: '100%',
    width: '100%',
  },
  imageStyle: {
    height: windowHeight(26),
    width: windowWidth(50),
    resizeMode: 'contain',
  },
  text: {
    color: appColors.gray,
    fontSize: fontSizes.FONT3HALF,
    fontFamily: appFonts.OutfitMedium,
    textAlign: 'center',
    marginTop: windowHeight(1),
    width: '75%',
  },
});
