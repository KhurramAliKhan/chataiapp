import {StyleSheet} from 'react-native';
import {windowHeight, windowWidth, fontSizes} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';

export default styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 6,
    paddingHorizontal: windowWidth(3),
    alignSelf: 'center',
  },
  inputView: {
    backgroundColor: appColors.curv,
    paddingHorizontal: windowWidth(2),
    alignItems: 'center',
    borderRadius: windowHeight(1),
    minHeight: windowHeight(7),
    width: '80%',
    marginLeft: 14,
  },
  input: {
    width: windowWidth(60),
    paddingLeft: windowWidth(3),
    color: appColors.language,
    fontSize: fontSizes.FONT4,
    fontFamily: appFonts.OutfitLight,
    alignSelf: 'center',
    left: windowWidth(1),
    paddingVertical: windowHeight(0.5),
  },
  left: {
    left: windowWidth(1),
  },
  curvView: {
    width: '20%',
    height: windowHeight(7),
    alignItems: 'center',
  },
  curv: {
    height: windowHeight(3),
    width: windowWidth(3),
    resizeMode: 'contain',
    tintColor: appColors.curv,
    transform: [
      {
        rotate: '-180deg',
      },
    ],
  },
  send: {
    backgroundColor: appColors.primary,
    height: 50,
    width: 50,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 1,
  },
});
