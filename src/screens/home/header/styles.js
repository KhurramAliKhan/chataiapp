import {StyleSheet} from 'react-native';
import {windowHeight, windowWidth} from '@theme/appConstant';
import appColors from '@theme/appColors';

export default styles = StyleSheet.create({
  main: {
    justifyContent: 'space-between',
    marginVertical: 20,
  },
  sub: {
    alignItems: 'center',
  },
  gradient: {
    height: windowHeight(5),
    width: windowHeight(5),
    borderRadius: windowHeight(1),
  },
  image: {
    borderRadius: windowHeight(1),
    flex: 1,
    margin: 0.4,
    backgroundColor: appColors.share,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    height: windowHeight(4),
    width: windowWidth(30),
    resizeMode: 'contain',
  },
});
