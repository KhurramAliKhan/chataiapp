import {StyleSheet} from 'react-native';
import {windowHeight, windowWidth} from '@theme/appConstant';
import appColors from '@theme/appColors';

export default styles = StyleSheet.create({
  modalContainer: {
    width: '100%',
    alignItems: 'flex-end',
    paddingTop: windowHeight(7),
    paddingHorizontal: 10,
    backgroundColor: appColors.optionModalBg,
  },
  dropdown: {
    position: 'absolute',
    width: '100%',
    borderRadius: windowHeight(1),
    right: windowWidth(1),
  },
  overlay: {
    width: '40%',
    height: '100%',
  },
});
