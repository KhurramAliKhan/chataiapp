import {StyleSheet} from 'react-native';
import {windowHeight, windowWidth} from '@theme/appConstant';

export default styles = StyleSheet.create({
  list: {
    marginTop: windowHeight(4),
    height: '40%',
    flexGrow: 0,
  },
  container: {
    marginHorizontal: windowWidth(4),
  },
  column: {
    justifyContent: 'space-around',
  },
  item: {
    height: windowHeight(2),
  },
});
