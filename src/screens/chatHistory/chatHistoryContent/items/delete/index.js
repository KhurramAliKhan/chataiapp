import React from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import {windowHeight, windowWidth} from '@theme/appConstant';
import {Delete} from '@utils/icons';
import appColors from '@theme/appColors';

export default deleteVal = () => {
  return (
    <TouchableOpacity activeOpacity={0.6}>
      <View style={styles.delete}>
        <Delete />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  delete: {
    backgroundColor: appColors.iconBg,
    marginRight: 20,
    height: '100%',
    borderRadius: windowHeight(1),
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: windowWidth(2),
  },
});
