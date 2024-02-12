import React from 'react';
import {Modal, Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import {Cross} from '@utils/icons';
import LinearGradient from 'react-native-linear-gradient';
import {DottedLine} from '../dottedLine';
import {windowWidth} from '@theme/appConstant';
import {useValues} from '@utils/context';
import appColors from '../../theme/appColors';

export function ModalContainer({
  modalVisible,
  setModalVisible,
  title,
  content,
  modalStyle,
  hideHeader,
}) {
  const {viewRTLStyle, t} = useValues();
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.linearGradient}>
          <LinearGradient
            colors={[
              appColors.modalBg,
              appColors.modalBg,
              appColors.modalBgLight,
              appColors.modalBgmedium,
              appColors.modalBgdark,
            ]}
            start={{x: 0, y: 0}}
            end={{x: 0, y: 0.9}}
            style={styles.gradient}>
            <View style={styles.mainView}>
              <View style={[styles.modalView, {...modalStyle}]}>
                {!hideHeader && (
                  <View style={[styles.row, {flexDirection: viewRTLStyle}]}>
                    <Text style={styles.heading}>{t(title)}</Text>
                    <TouchableOpacity
                      onPress={() => {
                        setModalVisible(!modalVisible);
                      }}>
                      <Cross />
                    </TouchableOpacity>
                  </View>
                )}
                {!hideHeader && <DottedLine width={windowWidth(76)} />}
                {content}
              </View>
            </View>
          </LinearGradient>
        </View>
      </Modal>
    </View>
  );
}
