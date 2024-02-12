import {StyleSheet} from 'react-native';
import {windowHeight, windowWidth, fontSizes} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';

export default styles = StyleSheet.create({
  receiverView: {
    width: '100%',
    alignItems: 'flex-end',
    paddingRight: 10,
  },
  receiverContainer: {
    maxWidth: '70%',
    paddingVertical: 6,
    marginHorizontal: windowWidth(3),
  },
  receiverText: {
    color: appColors.white,
    paddingHorizontal: windowWidth(1),
    borderRadius: 4,
    fontSize: fontSizes.FONT3HALF,
    fontFamily: appFonts.OutfitRegular,
    marginVertical: 5,
    textAlign: 'right',
  },
  receiverRow: {
    justifyContent: 'space-between',
    paddingHorizontal: 12,
    alignItems: 'center',
  },
  time: {
    fontSize: fontSizes.FONT3,
    color: appColors.gray,
    fontFamily: appFonts.OutfitMedium,
  },
  message: {
    backgroundColor: appColors.receiver,
    borderTopStartRadius: 6,
    borderBottomStartRadius: 6,
    borderTopEndRadius: 6,
    padding: 4,
  },
  separator: {
    height: 10,
    width: 2,
    backgroundColor: appColors.dash,
    marginHorizontal: 4,
  },
});
