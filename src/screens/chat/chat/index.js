import React, {useState, useEffect, useCallback} from 'react';
import {
  View,
  ImageBackground,
  Text,
  KeyboardAvoidingView,
  Share,
  BackHandler,
  Platform,
} from 'react-native';
import Header from './header';
import ChatInput from './input';
import MessageList from './messageList';
import styles from './styles';
import {
  AdEventType,
  InterstitialAd,
  TestIds,
} from 'react-native-google-mobile-ads';
import {useIsFocused} from '@react-navigation/native';
import {chatAPI} from '@config/chatGptApi';
import {useValues} from '@utils/context';
import Limit from './limit';
import ChatLoading from './chatLoading';
import Ad from './ad';
import Suggestion from './suggestion';
import {setValue, getValue} from '@utils/localStorage';
import {GET_API, POST_API, DELETE_API} from '@config/methods';
import {wallpaper1} from '@utils/gif';
import {ResultModal} from '@otherComponent';
import {dateFormate} from '@utils/helper';
import Loader from '../../auth/signIn/loader';
import Tts from 'react-native-tts';

var messages = [];

export function Chat({navigation, route, selectTab}) {
  const [image, setImage] = useState();
  const [modalVisible, setModalVisible] = useState(false);
  const [clearModal, setClearModal] = useState(false);
  const [sessionId, setSessionId] = useState('');
  const [charName, setCharName] = useState('');
  const [charImage, setCharImage] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [suggestionModal, setSuggestionModal] = useState(false);
  const [loading, setLoading] = useState(false);

  const interStitialAdUnitId =
    generalSettings && generalSettings.ads_Settings
      ? Platform.OS === 'android'
        ? generalSettings.ads_Settings.add_interstitial_android_id
        : generalSettings.ads_Settings.add_interstitial_ios_id
      : TestIds.INTERSTITIAL;
  const interstitial = InterstitialAd.createForAdRequest(interStitialAdUnitId, {
    requestNonPersonalizedAdsOnly: true,
    keywords: ['fashion', 'clothing'],
  });
  const [value, setValues] = useState({
    loading: false,
    chatCount: 5,
  });
  const date = new Date();

  const curruntTime = date.toLocaleString([], {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  });

  const isFocused = useIsFocused();
  const {
    viewRTLStyle,
    setRewardCoins,
    rewardCoins,
    t,
    keyAvailable,
    generalSettings,
  } = useValues();

  const refresh = image => {
    setImage(image);
  };

  const getSelected = async val => {
    if (val === 0) {
      var messages = '[ \n' + shareMessages + '\n ]';
      try {
        await Share.share({
          message: messages,
        });
      } catch (error) {}
    } else if (val === 1) {
      navigation.navigate('WallPapers', {refresh});
    } else if (val === 2) {
      clearChat();
    }
  };

  useEffect(() => {
    if (isFocused) {
      displayAd();
    }
    setValues({
      loading: false,
      chatCount: rewardCoins,
    });
    const handler = BackHandler.addEventListener(
      'hardwareBackPress',
      handleValidateClose,
    );
    return () => handler.remove();
  }, [isFocused, handleValidateClose, rewardCoins]);

  const format = async session => {
    const output = session.reduce((result, session) => {
      const sessionTime = session.message_at.split(' ')[1].split(':');
      const responseTime = session.response_at.split(' ')[1].split(':');
      if (session.message) {
        result.push({
          user: 'message',
          content: session.message,
          time: sessionTime[0] + ':' + sessionTime[1],
        });
      }
      if (session.response) {
        result.push({
          user: 'response',
          content: session.response,
          time: responseTime[0] + ':' + responseTime[1],
        });
      }
      return result;
    }, []);
    messages = output;
  };

  const handleValidateClose = useCallback(() => {
    stopSpeaker();
    if (route) {
      if (route.params) {
        route.params.getData();
      }
      navigation.goBack();
      messages = [];
    } else {
      selectTab(0);
    }
    return true;
  }, [route]);
  const stopSpeaker = () => {
    Tts.stop();
  };
  const displayAd = async () => {
    const show = await getValue('showAd');
    if (show === 'true') {
      const unsubscribe = interstitial.addAdEventListener(
        AdEventType.LOADED,
        () => {
          interstitial.show();
        },
      );
      interstitial.load();
      return unsubscribe;
    }
  };

  const checkWallpaper = async () => {
    const image = await getValue('wallpaper');
    const charName = await getValue('characterName');
    const charImage = await getValue('characterUrl');
    setCharName(charName);
    setCharImage(charImage);
    if (image) {
      setImage(image);
    } else {
      setImage(wallpaper1);
    }
  };
  useEffect(() => {
    checkWallpaper();
    shareMessages = '--THIS IS CONVERSATION with MEGABOT-- \n';
    const sessionID = Math.random().toString(36).slice(2);
    if (route) {
      if (route.params) {
        format(route.params.data.session);
        setSessionId(route.params.data.id);
      }
    } else {
      setSessionId(sessionID);
    }
    setValue('showAd', 'true');
    getSuggestions();
  }, []);

  const callAPI = async val => {
    var res = {};
    var messageTime = '';
    var message = '';
    var decreseCount = value.chatCount - 1;
    res = {
      user: 'message',
      content: val,
      time: curruntTime,
    };
    messageTime = date;
    message = val;
    var abc = '\n' + val + ' -' + 'Myself,';
    shareMessages = shareMessages + abc;
    concatArr(true, res, value.chatCount);
    const key = await getValue('apiKey');
    const originalKey = atob(generalSettings.general_settings.chatgpt_api_key);
    const apikey = key ? key : originalKey;
    const messageRes = await chatAPI(val, apikey);
    res = {};
    if (messageRes.val != 'error') {
      res = {
        user: 'response',
        content: messageRes,
        time: curruntTime,
      };
      var abc = '\n' + messageRes + '  -' + 'By MegaBot,';
      shareMessages = shareMessages + abc;
      concatArr(false, res, decreseCount);
    }
    saveHistory(message, messageTime, messageRes, date);
    if (!keyAvailable) {
      updateCoins(decreseCount);
    }
  };

  const changeCount = () => {
    var count = value.chatCount + 1;
    setValues({
      loading: false,
      chatCount: count,
    });
    setModalVisible(!modalVisible);
    if (!keyAvailable) {
      updateCoins(count);
    }
  };

  const concatArr = (load, res, count) => {
    var arr = [...messages, res];
    messages = arr;
    setValues({
      loading: load,
      chatCount: count,
    });
  };

  const updateCoins = async count => {
    const token = await getValue('token');
    setRewardCoins(count);
    setValues({
      loading: false,
      chatCount: count,
    });
    setValue('rewardCount', count.toString());
    var data = {coins: count};
    await POST_API(data, 'user/coins', token);
  };

  const getSuggestions = async () => {
    var res = await GET_API('suggestion');
    setSuggestions(res);
  };

  const getInputValue = text => {
    setInputValue(text);
  };

  const saveHistory = async (
    message,
    messageTime,
    messageRes,
    responseTime,
  ) => {
    const userId = await getValue('userId');
    const token = await getValue('token');
    const characterId = await getValue('characterId');
    const exactMsgTime = dateFormate(messageTime);
    const exactResponseTime = dateFormate(responseTime);

    const data = {
      user_id: userId,
      message: message,
      response: messageRes,
      character_id: characterId,
      session_id: sessionId,
      message_at: exactMsgTime,
      response_at: exactResponseTime,
    };
    const response = await POST_API(data, 'chat/save', token);
    console.log('res', response);
  };

  const clearChat = async () => {
    var token = await getValue('token');
    messages = [];
    setValues({
      loading: false,
      chatCount: value.chatCount,
    });
    if (token) {
      const res = await DELETE_API('clear/chat/' + sessionId, token);
      if (res.success) {
        setClearModal(!clearModal);
      }
    } else {
      setClearModal(!clearModal);
    }
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.bg} />
      <KeyboardAvoidingView
        style={styles.subContainer}
        behavior="padding"
        keyboardVerticalOffset={30}>
        <ImageBackground source={image} style={styles.mainContainer}>
          <View style={styles.bg} />
          <Ad />
          <MessageList
            res={messages}
            loading={value.loading}
            charImage={charImage}
          />
          {value.loading && (
            <ChatLoading viewRTLStyle={viewRTLStyle} charImage={charImage} />
          )}
          {value.chatCount != 0 ? (
            <View style={styles.chatInputContainer}>
              {!keyAvailable&&
              <Text style={[styles.textStyle]}>
                {t('chat.thereAre')} {value.chatCount} {t('chat.awardsLeft')}
              </Text>}
              <ChatInput
                callAPI={callAPI}
                inputValue={inputValue}
                setSuggestionModal={() => setSuggestionModal(!suggestionModal)}
                suggestions={suggestions}
              />
            </View>
          ) : (
            <Limit
            t={t}
            changeCount={changeCount}
            loading={() => setLoading(!loading)}
          />
          )}
        </ImageBackground>
      </KeyboardAvoidingView>
      <ResultModal
        modalVisible={clearModal}
        setModalVisible={setClearModal}
        title={'chat.cleared'}
        desc={'chat.descCleared'}
      />
      <Header
        characterName={charName}
        characterImage={charImage}
        getSelected={getSelected}
        goBack={handleValidateClose}
      />
      {suggestionModal && (
        <Suggestion
          getValue={getInputValue}
          suggestions={suggestions}
          setSuggestionModal={() => setSuggestionModal(!suggestionModal)}
        />
      )}
      {loading && <Loader />}
    </View>
  );
}
