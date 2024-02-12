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
  },
  sliderImage: {
    height: windowHeight(46),
    width: windowWidth(46),
    resizeMode: 'contain',
  },
});
