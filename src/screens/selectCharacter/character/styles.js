import {StyleSheet} from 'react-native';
import {windowHeight, windowWidth} from '@theme/appConstant';

export default styles = StyleSheet.create({
  list: {
    marginTop: windowHeight(4),
    flex: 1,
  },
  content: {
    marginHorizontal: windowWidth(4),
  },
  column: {
    justifyContent: 'space-between',
  },
  separator: {
    height: windowHeight(3),
  },
});
