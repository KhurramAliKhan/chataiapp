import {StyleSheet} from 'react-native';
import {windowHeight, windowWidth} from '@theme/appConstant';
import appColors from '@theme/appColors';

export default styles = StyleSheet.create({
  mainContainer: {
    marginTop: windowHeight(1),
    paddingHorizontal: windowWidth(4),
    paddingBottom: 60,
  },
  container: {
    paddingBottom: windowHeight(8),
    marginTop: windowHeight(3),
  },
  wrapper: {
    justifyContent: 'space-between',
  },
  separator: {
    height: 10,
  },
  imageContainer: {
    width: '49%',
    height: windowHeight(24),
    overflow: 'hidden',
    borderRadius: 10,
    backgroundColor: appColors.iconBg,
  },
  image: {
    height: windowHeight(26),
    width: windowWidth(46),
    resizeMode: 'cover',
    borderRadius: 10,
  },
  downloadIcon: {
    position: 'absolute',
    right: 0,
    top: 0,
    width: windowWidth(8),
    height: windowHeight(4.4),
    alignItems: 'center',
    justifyContent: 'center',
    borderTopEndRadius: windowHeight(1),
    borderBottomLeftRadius: windowHeight(1),
    backgroundColor: appColors.download,
  },
});
