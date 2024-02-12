import {StyleSheet} from 'react-native';
import {windowHeight, windowWidth} from '@theme/appConstant';

export default styles = StyleSheet.create({
  mainContainer: {
    position: 'absolute',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    position: 'absolute',
    height: 1,
    width: 1,
    resizeMode: 'contain',
    bottom: windowHeight(18),
    right: 0,
  },
  sliderImage: {
    height: windowHeight(50),
    width: windowWidth(50),
    resizeMode: 'contain',
  },
});
