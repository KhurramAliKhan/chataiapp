import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from './styles';
import {More} from '@utils/icons';
import {ChatOption} from '@otherComponent';
import {ChatOptions} from '@utils/arrays';
import {useValues} from '@utils/context';
import {Back} from '@utils/icons';
import {Balance} from '@commonComponents';
import {windowWidth} from '@theme/appConstant';

export default function ChatHeader({
  characterName,
  characterImage,
  getSelected,
  goBack,
}) {
  const [visible, setVisible] = useState(false);
  const {viewRTLStyle, imageRTLStyle, keyAvailable} = useValues();
  return (
    <View style={[styles.innerContainer, {flexDirection: viewRTLStyle}]}>
      <View style={[styles.row, {flexDirection: viewRTLStyle}]}>
        <TouchableOpacity
          style={{transform: imageRTLStyle, width: windowWidth(6),}}
          onPress={goBack}
          activeOpacity={0.8}>
          <Back />
        </TouchableOpacity>
        <View style={styles.circle}>
          {characterImage && (
            <Image source={{uri: characterImage}} style={styles.circleImage} />
          )}
        </View>
        <Text style={styles.textStyle}>{characterName}</Text>
      </View>
      <View style={[styles.row, {flexDirection: viewRTLStyle}]}>
        {!keyAvailable && <Balance />}
        <TouchableOpacity onPress={() => setVisible(true)} style={styles.more}>
          <More />
        </TouchableOpacity>
        <ChatOption
          visible={visible}
          setVisible={setVisible}
          data={ChatOptions}
          getSelected={getSelected}
        />
      </View>
    </View>
  );
}
