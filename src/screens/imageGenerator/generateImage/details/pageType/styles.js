import {StyleSheet} from 'react-native';
import {windowHeight, windowWidth} from '@theme/appConstant';
import appColors from '@theme/appColors';

export default styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    marginTop: windowHeight(1.7),
  },
  container: {
    paddingBottom: windowHeight(12),
  },
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: windowHeight(2),
    width: windowWidth(92),
    height: windowHeight(65),
    borderRadius: 10,
    backgroundColor: appColors.iconBg,
  },
  imageStyle: {
    width: windowWidth(92),
    height: windowHeight(65),
    resizeMode: 'cover',
    borderRadius: 10,
  },
  downloadIcon: {
    position: 'absolute',
    right: windowWidth(0),
    top: 0,
    width: windowWidth(8),
    height: windowHeight(5),
    alignItems: 'center',
    justifyContent: 'center',
    borderTopEndRadius: 10,
    borderBottomLeftRadius: 10,
    backgroundColor: appColors.download,
  },
});
