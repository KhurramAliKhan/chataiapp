import React from 'react';
import {View, Text, Image} from 'react-native';
import {Button, ModalContainer} from '@commonComponents';
import {apiKeyRemoved} from '@utils/images';
import {windowHeight} from '@theme/appConstant';
import {apiKey} from '@utils/gif';
import {useValues} from '@utils/context';
import styles from './styles';

export function ResultModal({
  modalVisible,
  setModalVisible,
  title,
  desc,
  onPress,
  hideHeader
}) {
  const visibleModal = () => {
    setModalVisible(!modalVisible);
    onPress && onPress();
  };
  const {t} = useValues();
  return (
    <ModalContainer
      title={title}
      modalVisible={modalVisible}
      hideHeader={hideHeader}
      setModalVisible={setModalVisible}
      content={
        <View style={styles.main}>
          <Image source={apiKey} style={styles.apiKey} />
          <Image source={apiKeyRemoved} style={styles.removed} />
          <Text style={styles.desc}>{t(desc)}</Text>
          <Button
            text={'button.okay'}
            marginTop={windowHeight(4)}
            onPress={visibleModal}
          />
        </View>
      }
    />
  );
}
