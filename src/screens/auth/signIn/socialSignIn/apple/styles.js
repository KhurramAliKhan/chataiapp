import {StyleSheet} from 'react-native';
import {windowHeight, windowWidth} from '@theme/appConstant';

export default styles = StyleSheet.create({
  mainContainer: {
    width: windowHeight(8),
    height: windowHeight(8),
    borderRadius: windowHeight(4),
  },
  circle: {
    borderRadius: windowHeight(4),
    flex: 1,
    margin: 1.2,
    backgroundColor: appColors.buttonText,
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    width: windowWidth(5),
    height: windowHeight(5),
    resizeMode: 'contain',
  },
});
