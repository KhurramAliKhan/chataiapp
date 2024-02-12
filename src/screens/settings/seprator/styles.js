import {StyleSheet} from 'react-native';
import {windowHeight, windowWidth} from '@theme/appConstant';
import appColors from '../../../theme/appColors';

export default styles = StyleSheet.create({
  mainView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    alignSelf: 'center',
  },
  leftCurv: {
    width: '6%',
    alignSelf: 'center',
    borderTopEndRadius: 6,
    borderBottomEndRadius: 6,
    height: 15,
  },
  curv: {
    height: 15,
    borderColor: appColors.iconBg,
    borderEndColor: 'transparent',
    borderWidth: windowWidth(0.7),
    transform: [
      {
        rotate: '180deg',
      },
    ],
  },
  middleView: {
    width: '81%',
    alignSelf: 'center',
    borderRadius: 6,
    height: 15,
  },
  rightCurv: {
    height: 15,
    borderColor: appColors.iconBg,
    borderStartColor: 'transparent',
    borderWidth: windowHeight(0.5),
    transform: [
      {
        rotate: '180deg',
      },
    ],
  },
});
