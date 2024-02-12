import {StyleSheet} from 'react-native';
import {windowHeight, windowWidth, fontSizes} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';

export default styles = StyleSheet.create({
  senderView: {
    maxWidth: '65%',
    marginTop: 10,
    marginHorizontal: windowWidth(4),
  },
  senderMessageView: {
    paddingTop: 2,
    borderRadius: 10,
    paddingBottom: 8,
  },
  senderText: {
    color: appColors.language,
    paddingHorizontal: windowWidth(3),
    paddingVertical: windowHeight(1),
    borderRadius: 10,
    fontSize: fontSizes.FONT3HALF,
    fontFamily: appFonts.OutfitRegular,
    lineHeight: windowHeight(3),
  },
  senderRow: {
    paddingHorizontal: 6,
    marginTop: 6,
    alignItems: 'center',
  },
  time: {
    fontSize: fontSizes.FONT3,
    color: appColors.gray,
    fontFamily: appFonts.OutfitMedium,
  },
  message: {
    backgroundColor: appColors.curv,
    borderRadius: windowHeight(1),
  },
  separator: {
    height: 10,
    width: 2,
    backgroundColor: appColors.dash,
    marginHorizontal: 4,
  },
  image: {
    height: 50,
    width: 50,
    borderRadius: 25,
    backgroundColor: appColors.charBg,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageStyle: {
    height: windowHeight(8),
    width: windowWidth(8),
    resizeMode: 'contain',
  },
  curv: {
    height: windowHeight(3),
    width: windowWidth(3),
    resizeMode: 'contain',
    tintColor: appColors.curv,
    marginTop: windowHeight(1),
  },
});
