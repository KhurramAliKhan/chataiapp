import {StyleSheet} from 'react-native';
import {windowHeight, windowWidth} from '@theme/appConstant';
import appColors from '@theme/appColors';

export default styles = StyleSheet.create({
  container: {
    height: windowHeight(100),
    width: windowWidth(100),
    backgroundColor: appColors.primary,
  },
  dropDownContainer: {
    justifyContent: 'space-between',
    paddingHorizontal: windowWidth(4),
    width: '92%',
    backgroundColor: appColors.iconBg,
    borderRadius: windowHeight(1),
    alignSelf: 'center',
    paddingVertical: windowHeight(1),
  },
});
