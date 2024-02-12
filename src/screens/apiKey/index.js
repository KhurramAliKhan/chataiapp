import React, {useState, useEffect, useRef} from 'react';
import {ImageBackground, Keyboard} from 'react-native';
import {authBackGround} from '@utils/images';
import {GlobalStyle} from '@style';
import {Button, Header} from '@commonComponents';
import {windowHeight} from '@theme/appConstant';
import {getValue} from '@utils/localStorage';
import AddKey from './addKey';
import {ResultModal} from '@otherComponent';
import {chatAPI} from '@config/chatGptApi';
import {setValue, deleteMultipleValue} from '@utils/localStorage';
import {AnimatedAlert} from '@commonComponents';
import {useValues} from '@utils/context';

export function ApiKey({navigation}) {
  const [isKey, setIsKey] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [apiKey, setApiKey] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const keyRef = useRef();
  const messageRef = useRef();
  const {t, setKeyAvailable, generalSettings} = useValues();
  useEffect(() => {
    checkApiKey();
  }, []);

  const checkApiKey = async () => {
    const isKey = await getValue('isKey');
    const apiKey = await getValue('apiKey');
    console.log(apiKey);
    if (isKey) {
      if (apiKey) {
        setIsKey(true);
        setApiKey(apiKey);
      }
    } else {
      setIsKey(false);
      setApiKey(false);
    }
  };

  const visibleModal = () => {
    setModalVisible(!modalVisible);
  };

  const getApiKey = key => {
    setApiKey(key);
  };

  const checkAPI = async () => {
    setLoading(true)
    const originalKey = atob(generalSettings.general_settings.chatgpt_api_key);
    const key = apiKey ? apiKey : originalKey;
    const res = await chatAPI('chatGpt', key);
    setLoading(false)
    if (res.val != 'error') {
      setValue('isKey', true.toString());
      setValue('apiKey', apiKey);
      setTitle('apiKey.keyAdded');
      setDesc('apiKey.deleteKey');
      setApiKey(apiKey);
      setIsKey(true);
      setKeyAvailable(true);
      visibleModal();
    } else {
      res.code === 'invalid_api_key';
      setMessage('apiKey.enterValidKey');
      messageRef.current.animate();
    }
  };

  const removeKey = async () => {
    const keys = ['isKey', 'apiKey'];
    await deleteMultipleValue(keys);
    setTitle('apiKey.keyRemoved');
    setDesc('apiKey.keyDeleted');
    setApiKey('');
    setIsKey(false);
    setKeyAvailable(false);
    visibleModal();
  };

  const checkValue = () => {
    if (apiKey === '') {
      keyRef.current.checkVal();
    } else {
      Keyboard.dismiss();
      if (isKey) {
        removeKey();
      } else {
        checkAPI();
      }
    }
  };

  return (
    <ImageBackground source={authBackGround} style={GlobalStyle.mainView}>
      <Header
        navigation={navigation}
        showBack
        title={isKey ? t('apiKey.manageKey') : t('apiKey.addAPIKey')}
      />
      <AddKey
        isKey={isKey}
        getApiKey={getApiKey}
        apiKey={apiKey}
        ref={keyRef}
      />
      <Button
        marginTop={windowHeight(6)}
        text={isKey ? t('apiKey.removeKey') : t('apiKey.save')}
        onPress={checkValue}
        loading={loading}
      />
      <ResultModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        title={title}
        desc={desc}
      />
      <AnimatedAlert ref={messageRef} text={message} />
    </ImageBackground>
  );
}
