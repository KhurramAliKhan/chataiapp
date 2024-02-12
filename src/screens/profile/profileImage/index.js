import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {Camera} from '@utils/icons';
import appColors from '@theme/appColors';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';

export default profileImage = ({visibleModal, file,res}) => {
  return (
    <View style={styles.main}>
      {Object.keys(file).length > 0 ? (
        <View style={styles.uriView}>
          <Image source={{uri: file.uri}} style={styles.uri} />
        </View>
      ) : (
        <LinearGradient
          useAngle={true}
          angle={123.26}
          locations={[-86.3, 125.31]}
          colors={[appColors.balanceGardient1, appColors.balanceGardient2]}
          style={styles.nameView}>
            <Text style={styles.name}>{res.charAt(0)}</Text>
        </LinearGradient>
      )}
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={visibleModal}
        style={styles.camera}>
        <Camera />
      </TouchableOpacity>
    </View>
  );
};
