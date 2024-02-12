import React, {useState} from 'react';
import {ImageBackground, Vibration} from 'react-native';
import {Button, Header} from '@commonComponents';
import {authBackGround} from '@utils/images';
import {windowHeight} from '@theme/appConstant';
import Details from './details';
import {GlobalStyle} from '@style';
import TouchID from 'react-native-touch-id';
import {ResultModal} from '@otherComponent';
import {setValue} from '../../utils/localStorage';

export function AddFingerPrint({navigation}) {
  const [modalVisible, setModalVisible] = useState(false);

  const goToDashboard = async () => {
    navigation.goBack();
  };

  const fingurePrintAuthanticate = () => {
    TouchID.authenticate('to secure your data', optionalConfigObject)
      .then(success => {
        Vibration.vibrate(30);
        // setSstatus(true);
        setModalVisible(true);
        setValue('printAdded', 'true');
      })
      .catch(error => {});
  };

  const optionalConfigObject = {
    fallbackLabel: 'Show Passcode',
    passcodeFallback: true,
  };
  return (
    <ImageBackground source={authBackGround} style={GlobalStyle.mainView}>
      <Header title={'addFingerprint.addFingerprint'} />
      <Details />
      <Button
        marginBottom={windowHeight(10)}
        text={'fingerPrint.addNow'}
        onPress={fingurePrintAuthanticate}
      />
      <ResultModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        title={'Fingerprint Added'}
        desc={'Your fingerprint has been added successfully.'}
        onPress={() => {
          setModalVisible(!modalVisible);
          goToDashboard();
        }}
      />
    </ImageBackground>
  );
}
