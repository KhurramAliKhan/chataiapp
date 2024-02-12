import {StyleSheet} from 'react-native';
import {windowHeight} from '@theme/appConstant';

export default styles = StyleSheet.create({
  main: {
    alignItems: 'center',
    height: 280,
  },
  floor: {
    position: 'absolute',
    bottom: 0,
    width: '78%',
    height: 100,
    resizeMode: 'contain',
    left: 60,
  },
  settingView: {
    justifyContent: 'space-between',
    width: '90%',
    paddingLeft: 10,
  },
  setting: {
    height: 50,
    width: 50,
    marginTop: windowHeight(1),
  },
  box: {
    height: 36,
    width: 36,
    marginRight: 18,
  },
  info: {
    height: 50,
    width: 50,
    marginTop: windowHeight(2),
    resizeMode: 'contain',
    marginRight: 10,
  },
  botView: {
    justifyContent: 'space-between',
    width: '65%',
    alignSelf: 'center',
  },
  hint: {
    height: 50,
    width: 50,
    marginTop: windowHeight(4),
    resizeMode: 'contain',
  },
  bot: {
    height: 160,
    width: 160,
    resizeMode: 'contain',
  },
  key: {
    marginTop: windowHeight(7),
    height: 47,
    width: 47,
  },
});
