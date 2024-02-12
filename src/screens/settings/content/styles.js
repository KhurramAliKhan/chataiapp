import {StyleSheet} from 'react-native';
import appColors from '@theme/appColors';
import {windowHeight, windowWidth} from '@theme/appConstant';

export default styles = StyleSheet.create({
  main: {
    paddingBottom: windowHeight(12),
  },
  mainView: {
    backgroundColor: appColors.iconBg,
    width: '90%',
    alignSelf: 'center',
    padding: 20,
  },
  dashedView: {
    width: windowWidth(80),
    marginVertical: windowHeight(3),
    borderWidth: 0.8,
    borderColor: appColors.dash,
    borderStyle: 'dashed',
    zIndex: 0,
  },
  dash: {
    position: 'absolute',
    left: 0,
    bottom: 0,
    height: 1,
    backgroundColor: appColors.dash,
    zIndex: 1,
  },
});
