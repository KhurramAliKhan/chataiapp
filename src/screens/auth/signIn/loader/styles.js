import {StyleSheet} from 'react-native';
import appColors from '@theme/appColors';

export default styles = StyleSheet.create({
  loader: {
    position: 'absolute',
    backgroundColor: appColors.modal,
    height: '100%',
    width: '100%',
    justifyContent: 'center',
  },
});
