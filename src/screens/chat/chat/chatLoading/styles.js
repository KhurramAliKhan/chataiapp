import {StyleSheet} from 'react-native';
import {windowHeight, windowWidth} from '@theme/appConstant';
import appColors from '@theme/appColors';

export default styles = StyleSheet.create({
  loadingView: {
    alignItems: 'center',
    height: 50,
    marginTop: 4,
    marginHorizontal: windowWidth(3.7),
  },
  loaderView: {
    alignItems: 'center',
    height: 50,
    marginTop: 4,
  },
  curvView: {
    // position: 'absolute',
    top: windowHeight(2),
  },
  curv: {
    height: windowHeight(3),
    width: windowWidth(3),
    resizeMode: 'contain',
    tintColor: appColors.curv,
  },
  charImageView: {
    height: 50,
    width: 50,
    borderRadius: 25,
    backgroundColor: appColors.charBg,
    alignItems: 'center',
    justifyContent: 'center',
  },
  charImage: {
    height: windowHeight(6),
    width: windowWidth(8),
    resizeMode: 'contain',
  },
  load: {
    backgroundColor: '#252A35',
    width: windowWidth(14),
    borderRadius: 6,
    height: windowHeight(5),
    alignItems: 'center',
    justifyContent: 'center',
  },
  loading: {
    width: windowWidth(10),
    height: windowHeight(5),
  },
});
