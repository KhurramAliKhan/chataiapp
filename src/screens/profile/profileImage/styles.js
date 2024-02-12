import {StyleSheet} from 'react-native';
import {fontSizes, windowHeight, windowWidth} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';

export default styles = StyleSheet.create({
  main: {
    height: windowHeight(16),
    width: windowHeight(16),
    backgroundColor: appColors.iconBg,
    borderRadius: windowHeight(8),
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  uriView: {
    height: windowHeight(16),
    width: windowHeight(16),
    borderRadius: windowHeight(8),
    overflow: 'hidden',
  },
  uri: {
    height: windowHeight(16),
    width: windowHeight(16),
  },
  nameView: {
    height: windowHeight(13),
    width: windowHeight(13),
    borderRadius: windowHeight(7),
    backgroundColor: '#FDA900',
    alignItems: 'center',
    justifyContent: 'center',
  },
  name: {
    color: appColors.text,
    fontSize: fontSizes.FONT13,
    fontFamily: appFonts.OutfitMedium,
  },
  camera: {
    height: windowHeight(4),
    width: windowHeight(4),
    borderRadius: windowHeight(2),
    backgroundColor: '#3AEDB1',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    position: 'absolute',
    bottom: windowHeight(1),
    right: windowWidth(4),
  },
});
