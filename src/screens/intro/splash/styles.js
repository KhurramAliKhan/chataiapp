import {StyleSheet} from 'react-native';
import {windowHeight, windowWidth} from '@theme/appConstant';

export default styles = StyleSheet.create({
  mainContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  background: {
    height: windowHeight(100),
    width: windowWidth(100),
    resizeMode: 'cover',
  },
  center: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    height: windowHeight(40),
    width: windowWidth(40),
    resizeMode: 'contain',
  },
});
