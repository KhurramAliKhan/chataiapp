import React from 'react';
import {TouchableOpacity, Modal} from 'react-native';
import styles from './styles';
import LinearGradient from 'react-native-linear-gradient';
import {useValues} from '@utils/context';
import Options from './options';
import appColors from '@theme/appColors';

export function ChatOption({
  visible,
  setVisible,
  data,
  getSelected,
  overlay,
  right,
}) {
  const {viewSelfRTLStyle} = useValues();

  return (
    <Modal visible={visible} transparent animationType="none">
      <TouchableOpacity
        style={[styles.modalContainer, {alignItems: viewSelfRTLStyle}]}
        onPress={() => setVisible(false)}
        activeOpacity={1}>
        <TouchableOpacity
          style={[styles.overlay, {width: overlay ? overlay : '40%'}]}
          onPress={() => setVisible(false)}>
          <LinearGradient
            colors={[
              appColors.modalBg,
              appColors.modalBgLight,
              appColors.modalBgmedium,
              appColors.modalBgdark,
            ]}
            start={{x: 0.6, y: 0}}
            end={{x: 0, y: 1}}
            style={styles.dropdown}>
            <Options
              data={data}
              right={right}
              getSelected={getSelected}
              setVisible={setVisible}
            />
          </LinearGradient>
        </TouchableOpacity>
      </TouchableOpacity>
    </Modal>
  );
}
