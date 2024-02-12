import React, {useState, useEffect, useRef} from 'react';
import {ImageBackground} from 'react-native';
import {ChatHistoryContent} from './chatHistoryContent';
import {authBackGround} from '@utils/images';
import {GlobalStyle} from '@style';
import {Header} from '@commonComponents';
import {More, Delete} from '@utils/icons';
import {ChatOption} from '@otherComponent';
import {chatHistroyOptions} from '@utils/arrays';
import {windowWidth} from '@theme/appConstant';
import {getValue} from '@utils/localStorage';
import {DELETE_API, GET_API, POST_API} from '@config/methods';
import {useValues} from '@utils/context';
import {ResultModal} from '@otherComponent';
import Loader from '../auth/signIn/loader';

export function ChatHistory({navigation}) {
  const [visible, setVisible] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [selected, setSelected] = useState(0);
  const [historyData, setHistoryData] = useState([]);
  const [selectedArr, setSelectedArr] = useState([]);
  const {t} = useValues();
  const messageRef = useRef();

  const getSelected = (val, arr) => {
    setSelected(val);
    setSelectedArr(arr);
  };

  const selectAll = data => {
    if (data === 0) {
      messageRef.current.selectAll();
      setSelected(historyData.length);
    } else {
      deleteChat();
    }
  };

  useEffect(() => {
    getHistory();
  }, []);

  const getHistory = async () => {
    const token = await getValue('token');
    const res = await GET_API('chat/history', token);
    console.log(res[0].session);
    setHistoryData(res);
    setSelected(0);
    messageRef.current.setData();
  };

  const checkSelected = () => {
    if (selectedArr != historyData) {
      deleteSession();
    } else {
      deleteChat();
    }
  };

  const deleteSession = async () => {
    setLoading(true);
    const token = await getValue('token');
    const data = {
      session_ids: selectedArr,
    };
    const res = await POST_API(data, 'clear/chat/sessions', token);
    console.log(res);
    if (res.success) {
      getHistory();
    }
    setLoading(false);
  };

  const deleteChat = async () => {
    setLoading(true);
    const token = await getValue('token');
    const res = await DELETE_API('clear/chathistory', token);
    console.log(res);
    if (res.success) {
      getHistory();
      setModalVisible(!modalVisible);
    }
    setLoading(false);
  };

  const clearSelection = () => {
    setSelected(0);
    messageRef.current.setData();
  };

  return (
    <ImageBackground source={authBackGround} style={GlobalStyle.mainView}>
      {selected == 0 ? (
        <Header
          showBack
          title={t('chatHistory.title')}
          showBalance
          icon={<More />}
          onPress={() => setVisible(!visible)}
          navigation={navigation}
        />
      ) : (
        <Header
          backPress={clearSelection}
          showBack
          title={selected + ' Selected'}
          icon={<Delete />}
          onPress={checkSelected}
        />
      )}
      <ChatHistoryContent
        ref={messageRef}
        getLen={getSelected}
        data={historyData}
        navigation={navigation}
        getData={getHistory}
      />
      <ChatOption
        visible={visible}
        setVisible={setVisible}
        data={chatHistroyOptions}
        getSelected={selectAll}
        right={windowWidth(22)}
        overlay={'24%'}
      />
      <ResultModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        title={'chat.cleared'}
        desc={'chatHistory.historyCleared'}
      />
      {loading && <Loader />}
    </ImageBackground>
  );
}
