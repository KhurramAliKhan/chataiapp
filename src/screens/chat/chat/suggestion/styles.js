import {StyleSheet} from 'react-native';
import appColors from '@theme/appColors';
import {windowHeight} from '@theme/appConstant';

export default styles = StyleSheet.create({
  main: {
    backgroundColor: appColors.gradientBg,
    position: 'absolute',
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  gradient: {
    width: '90%',
    borderRadius: 10,
  },
  details: {
    backgroundColor: appColors.modal1,
    borderRadius: 10,
    margin: 1,
    paddingBottom: windowHeight(4),
    paddingTop: windowHeight(2),
  },
  container: {
    backgroundColor: appColors.container,
    paddingVertical: 10,
    paddingHorizontal: 6,
  },
});
