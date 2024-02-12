import React from 'react';
import {FlatList, Text, TouchableOpacity, Modal, View} from 'react-native';
import styles from './styles';
import {useValues} from '@utils/context';

export default options = ({
  data,
  dropdownStyle,
  onSelect,
  dropdownTop,
  dropdownLeft,
  visible,
  setVisible,
}) => {
  const {t} = useValues();

  const onItemPress = item => {
    onSelect(item);
    setVisible(false);
  };

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity style={styles.item} onPress={() => onItemPress(item)}>
        <Text style={styles.label}>{t(item.label)}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <Modal visible={visible} transparent animationType="none">
      <TouchableOpacity
        style={styles.overlay}
        onPress={() => setVisible(false)}>
        <View
          style={[
            styles.dropdown,
            {
              top: dropdownTop,
              left: dropdownLeft,
              ...dropdownStyle,
            },
          ]}>
          <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      </TouchableOpacity>
    </Modal>
  );
};
