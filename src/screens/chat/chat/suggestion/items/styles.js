import {StyleSheet} from 'react-native';
import {windowWidth} from '@theme/appConstant';
import appFonts from '@theme/appFonts';
import appColors from '@theme/appColors';

export default styles = StyleSheet.create({
  topSeparator: {
    padding: 10,
    transform: 'rotate(-180deg)',
  },
  leftSeparator: {
    width: 14,
    height: 30,
    position: 'absolute',
    borderRadius: 15,
    backgroundColor: appColors.modal1,
    left: 14,
    top: 36,
    transform: 'rotate(-40deg)',
  },
  rightSeparator: {
    width: 14,
    height: 30,
    position: 'absolute',
    borderRadius: 15,
    backgroundColor: appColors.modal1,
    right: 5,
    top: 40,
    transform: 'rotate(40deg)',
  },
  bottomSeparator: {
    padding: 10,
    transform: 'rotate(0deg)',
    marginLeft: windowWidth(-7),
  },
  nameView: {
    alignItems: 'center',
    padding: 10,
    borderRadius: 8,
    marginHorizontal: 6,
  },
  name: {
    fontFamily: appFonts.OutfitSemiBold,
  },
});
