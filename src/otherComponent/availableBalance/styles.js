import {StyleSheet} from 'react-native';
import {windowHeight, windowWidth} from '@theme/appConstant';
import appColors from '@theme/appColors';

export default styles = StyleSheet.create({
  main: {
    width: '100%',
    paddingHorizontal: windowWidth(4),
  },
  cancel: {
    position: 'absolute',
    bottom: windowHeight(-5),
    height: windowHeight(3.5),
    width: windowHeight(3.5),
    borderRadius: windowHeight(6),
    backgroundColor: appColors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
});
