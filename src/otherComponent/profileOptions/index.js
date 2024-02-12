import React from 'react';
import {
  Modal,
  PermissionsAndroid,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import appColors from '../../theme/appColors';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';
import {MediumButton} from '../../commonComponents';
import {Gallery} from '../../assets/icons/profile/gallery';
import {ProfileCamera} from '../../assets/icons/profile/profileCamera';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

export function ProfileOption({modalVisible, setModalVisible, getData}) {
  const requestCameraPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: 'App Camera Permission',
          message: 'App needs access to your camera ',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        chooseCamera();
        console.log('Camera permission given');
      } else {
        console.log('Camera permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };
  const chooseCamera = () => {
    launchCamera(
      {
        includeBase64: false,
        mediaType: 'photo',
        quality: 0.8,
      },
      async res => {
        if (res.didCancel) {
          console.log('User cancelled image picker');
        } else if (res.error) {
          console.log('ImagePicker Error: ', res.error);
        } else {
          setModalVisible(!modalVisible);
          getData(res.assets[0]);
        }
      },
    );
  };
  const chooseFile = () => {
    let options = {
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    launchImageLibrary(options, res => {
      console.log('Response = ', res);
      if (res.didCancel) {
        console.log('User cancelled image picker');
      } else if (res.error) {
        console.log('ImagePicker Error: ', res.error);
      } else {
        setModalVisible(!modalVisible);
        getData(res.assets[0]);
      }
    });
  };
  return (
    <Modal transparent visible={modalVisible}>
      <View style={styles.backGroundView}>
        <LinearGradient
          colors={[
            appColors.modalBg,
            appColors.modalBg,
            appColors.modalBgLight,
            appColors.modalBgmedium,
            appColors.modalBgdark,
          ]}
          start={{x: 0, y: 0.9}}
          end={{x: 0, y: 0}}
          style={styles.gradient}>
          <View style={styles.mainView}>
            <View style={styles.modalView}>
              <Text style={styles.selectFile}>Select File</Text>
              <View style={styles.optionsView}>
                <TouchableOpacity
                  activeOpacity={0.8}
                  style={styles.options}
                  onPress={requestCameraPermission}>
                  <View style={styles.option}>
                    <ProfileCamera />
                  </View>
                  <Text style={styles.text}>Camera</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={chooseFile}
                  activeOpacity={0.8}
                  style={styles.options}>
                  <View style={styles.option}>
                    <Gallery />
                  </View>
                  <Text style={styles.text}>Gallery</Text>
                </TouchableOpacity>
              </View>
              <MediumButton
                text={'Cancel'}
                styleType
                onPress={() => setModalVisible(!modalVisible)}
              />
            </View>
          </View>
        </LinearGradient>
      </View>
    </Modal>
  );
}
