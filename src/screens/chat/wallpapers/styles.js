import {StyleSheet} from 'react-native';
import {windowHeight, windowWidth} from '@theme/appConstant';
import appColors from '@theme/appColors';

export default styles = StyleSheet.create({
  contentContainer: {
    paddingHorizontal: windowWidth(2),
  },
  list: {
    height: '100%',
  },
  bg: {
    width: '49%',
    height: 240,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: windowHeight(1),
    overflow: 'hidden',
  },
  seperator: {
    justifyContent: 'space-between',
    marginVertical: windowHeight(1),
    alignItems: 'center',
  },
  imageStyle: {
    height: 240,
    width: 180,
  },
  cover: {
    position: 'absolute',
    backgroundColor: appColors.wallpaper,
    height: '100%',
    width: '100%',
  },
});
