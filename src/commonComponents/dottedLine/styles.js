import {StyleSheet} from 'react-native';
import {windowHeight} from '@theme/appConstant';
import appColors from '@theme/appColors';

export default styles = StyleSheet.create({
  lineMain: {
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: windowHeight(3),
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: appColors.dash,
  },
  dashView: {
    borderWidth: 1,
    borderColor: appColors.dash,
    borderStyle: 'dashed',
    zIndex: 0,
    marginHorizontal: 4,
  },
  dash: {
    position: 'absolute',
    left: 0,
    bottom: 0,
    height: 1,
    backgroundColor: appColors.dash,
  },
});
