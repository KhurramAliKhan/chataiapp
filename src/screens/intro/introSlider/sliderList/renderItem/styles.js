import {StyleSheet} from 'react-native';
import {windowHeight, windowWidth} from '@theme/appConstant';

export default itemStyles = StyleSheet.create({
  mainContainer: {
    height: windowHeight(70),
    width: windowWidth(100),
  },
  mainView: {
    height: windowHeight(70),
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: windowWidth(76),
    height: windowHeight(76),
  },
  chainContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    justifyContent: 'space-between',
    flexDirection: 'row',
    height: '100%',
    alignItems: 'flex-end',
  },
  chain: {
    height: windowHeight(22),
    resizeMode: 'contain',
    width: windowWidth(21),
    marginBottom: windowHeight(1),
  },
});
