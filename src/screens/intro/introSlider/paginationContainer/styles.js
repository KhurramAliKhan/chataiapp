import {StyleSheet} from 'react-native';
import {windowHeight, windowWidth} from '@theme/appConstant';
import appColors from '@theme/appColors';

export default styles = StyleSheet.create({
  paginationDots: {
    height: windowHeight(4),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  activeDot: {
    width: windowWidth(4.5),
    height: windowHeight(0.5),
    borderRadius: windowHeight(4),
    marginHorizontal: windowWidth(0.7),
    backgroundColor: appColors.primary,
  },
  inActiveDot: {
    width: windowHeight(0.8),
    height: windowHeight(0.8),
    borderRadius: windowHeight(0.4),
    marginHorizontal: windowWidth(0.4),
    backgroundColor: appColors.inactivedot,
  },
});
