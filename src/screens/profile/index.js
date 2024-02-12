import React, {useRef, useState} from 'react';
import {ImageBackground} from 'react-native';
import {authBackGround} from '@utils/images';
import {GlobalStyle} from '@style';
import {Header, AnimatedAlert} from '@commonComponents';
import Details from './details';
import {ProfileOption, ResultModal} from '../../otherComponent';
import ProfileImage from './profileImage';
import {clearValue} from '../../utils/localStorage';
import {GoogleSignin} from '@react-native-google-signin/google-signin';

export function Profile({navigation,route}) {
  const messageRef = useRef();
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [deleteVisible, setDeleteVisible] = useState(false);
  const [file, setFile] = useState({});
  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
      'enter you webclientid here',
    });
  }, []);
  const checkValue = res => {
    if (res.success) {
      setSuccess(true);
      setMessage('Profile updated successfully');
    } else {
      setSuccess(false);
      setMessage('commonContent.somethingWentWrong');
    }
    messageRef.current.animate();
    console.log(res);
  };

  const visibleModal = () => {
    setModalVisible(!modalVisible);
  };

  const getData = data => {
    setFile(data);
  };

  const deleteUser = async () => {
    await clearValue();
    navigation.reset({
      index: 0,
      routes: [{name: 'SignIn'}],
    });
    await GoogleSignin.signOut();
  };

  return (
    <ImageBackground source={authBackGround} style={GlobalStyle.mainView}>
      <Header navigation={navigation} showBack title={'profile.myAccount'} />
      <ProfileImage
        visibleModal={visibleModal}
        file={file}
        res={route.params.data.name}
      />
      <Details
        checkValue={checkValue}
        file={file}
        showModal={() => setDeleteVisible(!deleteVisible)}
        res={route.params.data}
      />
      <AnimatedAlert ref={messageRef} text={message} success={success} />
      <ProfileOption
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        getData={getData}
      />
      <ResultModal
        modalVisible={deleteVisible}
        setModalVisible={setDeleteVisible}
        hideHeader
        desc={'Account deleted Successfully'}
        onPress={deleteUser}
      />
    </ImageBackground>
  );
}
