import {StyleSheet} from 'react-native';
import {fontSizes, windowHeight} from '@theme/appConstant';
import appFonts from '@theme/appFonts';
import appColors from '@theme/appColors';

export default styles = StyleSheet.create({
  tabBar: {
    position: 'absolute',
    bottom: 0,
    justifyContent: 'space-between',
    width: '100%',
    backgroundColor: appColors.tab,
    height: 65,
    flex: 1,
  },
  tab: {
    alignItems: 'center',
    width: '20%',
    justifyContent: 'space-between',
  },
  title: {
    fontFamily: appFonts.OutfitRegular,
    fontSize: fontSizes.FONT3HALF,
    marginBottom: 10,
  },
});
