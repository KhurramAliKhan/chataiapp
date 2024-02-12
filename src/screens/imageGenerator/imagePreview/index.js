import React, {useEffect} from 'react';
import {
  View,
  ImageBackground,
  Share,
  PermissionsAndroid,
  Alert,
} from 'react-native';
import styles from './styles';
import {MediumButton} from '@commonComponents';
import RNFetchBlob from 'rn-fetch-blob';
import {Header} from '@commonComponents';
import {useValues} from '@utils/context';

export function ImagePreview({navigation, route}) {
  const bigImage = route.params.image;
  const {viewRTLStyle} = useValues();
  useEffect(() => {
    checkPermission();
  }, []);

  const onShare = async () => {
    try {
      await Share.share({
        message: route.params.image,
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  const checkPermission = async () => {
    if (Platform.OS === 'ios') {
      downloadImage();
    } else {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
          {
            title: 'Storage Permission Required',
            message: 'App needs access to your storage to download Photos',
          },
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          // console.log('Storage Permission Granted.');
        } else {
          console.log('Storage Permission Not Granted');
        }
      } catch (err) {
        console.warn(err);
      }
    }
  };

  const downloadImage = () => {
    Alert.alert('Your image is being downloaded.');
    let date = new Date();
    const {dirs} = RNFetchBlob.fs;
    RNFetchBlob.config({
      fileCache: true,
      addAndroidDownloads: {
        useDownloadManager: true,
        notification: true,
        mediaScannable: true,
        title:
          'Probot' +
          date.getTime() +
          // Math.floor(date.getTime() + date.getSeconds() / 2) +
          '.png',
        path:
          `${dirs.DownloadDir}/probot` +
          Math.floor(date.getTime() + date.getSeconds() / 2),
      },
    })
      .fetch('GET', bigImage, {})
      .then(res => {
        if (Platform.OS === 'ios') {
          RNFetchBlob.ios.openDocument(res.data);
        }
      })
      .catch(err => {
        console.log('error', err);
      });
  };

  return (
    <ImageBackground source={{uri: bigImage}} style={styles.backgroundImage}>
      <Header showBack navigation={navigation} title={'Image preview'} />
      <View style={[styles.bottomView, {flexDirection: viewRTLStyle}]}>
        <MediumButton text={'Share'} onPress={onShare} />
        <MediumButton text={'Download'} onPress={downloadImage} />
      </View>
    </ImageBackground>
  );
}
