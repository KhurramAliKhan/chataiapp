import {StyleSheet} from 'react-native';
import {windowHeight} from '@theme/appConstant';
import appFonts from '@theme/appFonts';
import {fontSizes} from '@theme/appConstant';
import appColors from '../../../../theme/appColors';

export default styles = StyleSheet.create({
  main: {
    position: 'absolute',
    width: '100%',
  },
  content: {
    width: '94%',
    opacity: 0.9,
    backgroundColor: 'gray',
    position: 'absolute',
    alignSelf: 'center',
    borderRadius: 10,
    padding: 10,
  },
  generated: {
    fontFamily: appFonts.OutfitBlack,
    fontSize: fontSizes.FONT4,
    paddingTop: 2,
    color: appColors.language,
  },
  loading: {
    fontFamily: appFonts.OutfitMedium,
    fontSize: fontSizes.FONT3HALF,
    paddingVertical: windowHeight(1),
    color: appColors.language,
  },
});
