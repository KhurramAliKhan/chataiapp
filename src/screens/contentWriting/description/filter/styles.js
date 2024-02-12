import {StyleSheet} from 'react-native';
import {windowHeight, windowWidth} from '@theme/appConstant';
import appColors from '@theme/appColors';

export default styles = StyleSheet.create({
  option: {
    height: windowHeight(5),
    width: windowWidth(8),
    borderRadius: 4,
    backgroundColor: appColors.lightblue,
    marginHorizontal: windowWidth(2),
    justifyContent: 'center',
    alignItems: 'center',
  },
  gradient: {
    height: windowHeight(5),
    width: windowHeight(5),
    borderRadius: windowHeight(1),
  },
  share: {
    borderRadius: windowHeight(1),
    flex: 1,
    margin: 0.4,
    backgroundColor: appColors.share,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
