import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import styles from './styles';
import {Speaker} from '@utils/icons';
import appColors from '@theme/appColors';
import {useValues} from '@utils/context';
import {curv} from '../../../../../../utils/images';

export default sender = ({time, message, speak, charImage}) => {
  const {viewRTLStyle} = useValues();

  return (
    <View style={[styles.senderView, {flexDirection: viewRTLStyle}]}>
      <View style={styles.image}>
        {charImage && (
          <Image
            source={{
              uri: charImage,
            }}
            style={styles.imageStyle}
          />
        )}
      </View>
      <Image source={curv} style={styles.curv} />
      <View style={styles.senderMessageView}>
        <TouchableOpacity activeOpacity={1} style={styles.message}>
          <Text style={styles.senderText}>{message}</Text>
        </TouchableOpacity>
        <View style={[styles.senderRow, {flexDirection: viewRTLStyle}]}>
          <Text style={styles.time}>{time}</Text>
          <View style={styles.separator} />
          <TouchableOpacity onPress={() => speak(message)}>
            <Speaker color={appColors.gray} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
