import {StyleSheet} from 'react-native';
import {windowWidth, windowHeight} from '@theme/appConstant';

export default styles = StyleSheet.create({
  background: {
    height: windowHeight(60),
  },
  headerContent: {
    alignItems: 'center',
    position: 'absolute',
    top: windowHeight(10),
    width: '100%',
  },
  bgImage: {
    height: windowHeight(30),
    width: windowWidth(80),
    resizeMode: 'contain',
    marginLeft: windowWidth(9),
    marginTop: windowHeight(9),
  },
});
