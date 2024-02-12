import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from './styles';
import {Back, RotateRight, Copy, Share, Delete} from '@utils/icons';

export default function SelectedHeader({selection}) {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <View style={styles.row}>
          <TouchableOpacity>
            <Back />
          </TouchableOpacity>
          <Text style={styles.textStyle}>{selection}</Text>
        </View>
        <View style={styles.rowContainer}>
          <TouchableOpacity>
            <RotateRight />
          </TouchableOpacity>
          <TouchableOpacity>
            <Copy />
          </TouchableOpacity>
          <TouchableOpacity>
            <Share />
          </TouchableOpacity>
          <TouchableOpacity>
            <Delete />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
