import React from 'react';
import { FlatList, Text, TouchableOpacity, View, Image } from 'react-native';
import styles from './styles';
import { option } from '@utils/images';
import { windowWidth } from '@theme/appConstant';
import { useValues } from '@utils/context';

export default options = ({ setVisible, data, getSelected, right }) => {
  const { t, imageRTLStyle, direction, textRTLStyle } = useValues();
  const onItemPress = item => {
    getSelected(item);
    setVisible(false);
  };

  const renderItem = ({ item, index }) => {
    return (
      <TouchableOpacity style={styles.item} onPress={() => onItemPress(index)}>
        <Text style={[styles.label, { textAlign: textRTLStyle }]}>
          {t(item.name)}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.main}>
      <FlatList
        data={data}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
      <Image
        source={option}
        style={[
          styles.option,
          {
            transform: imageRTLStyle,
          },
          direction
            ? { left: right ? right : windowWidth(38) }
            : { right: right ? right : windowWidth(38) },
        ]}
      />
    </View>
  );
};
