import React, {useState, useRef, useEffect} from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  Animated,
  Vibration,
  Image,
} from 'react-native';
import styles from './styles';
import {Mic, Suggestion} from '@utils/icons';
import {Send} from '@utils/icons';
import {useValues} from '@utils/context';
import Voice from '@react-native-community/voice';
import appColors from '@theme/appColors';
import {curv} from '@utils/images';

export default ChatInput = ({callAPI, inputValue, setSuggestionModal,suggestions}) => {
  useEffect(() => {
    setMessage(inputValue);
  }, [inputValue]);

  const [message, setMessage] = useState('');
  const {viewRTLStyle, textRTLStyle, t, imageRTLStyle} = useValues();
  const [startAnim, setStartAnim] = useState(false);

  const animationValue = useRef(new Animated.Value(1)).current;
  useEffect(() => {
    Voice.onSpeechStart = onSpeechStartHandler;
    Voice.onSpeechEnd = onSpeechEndHandler;
    Voice.onSpeechResults = onSpeechResultsHandler;

    return () => {
      Voice.destroy().then(Voice.removeAllListeners);
    };
  }, []);

  const startScaleAnimation = () => {
    Vibration.vibrate(100);
    Animated.loop(
      Animated.sequence([
        Animated.timing(animationValue, {
          toValue: 0.8,
          timing: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(animationValue, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }),
      ]),
    ).start();
  };

  const onSpeechStartHandler = e => {};
  const onSpeechEndHandler = e => {
    setStartAnim(false);
  };

  const onSpeechResultsHandler = e => {
    let text = e.value[0];
    setMessage(text);
    setStartAnim(false);
  };

  const startRecording = async () => {
    setStartAnim(!startAnim);
    try {
      await Voice.start('en-Us');
      startScaleAnimation();
    } catch (error) {
      console.log('error raised', error);
    }
  };
  const stopRecording = async () => {
    setStartAnim(false);
    try {
      await Voice.stop();
    } catch (error) {
      console.log('error raised', error);
    }
  };
  return (
    <View style={[styles.container, {flexDirection: viewRTLStyle}]}>
      <View
        style={[
          styles.inputView,
          {
            flexDirection: viewRTLStyle,
          },
        ]}>
        {suggestions.length > 0 && (
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={setSuggestionModal}
            style={styles.left}>
            <Suggestion />
          </TouchableOpacity>
        )}
        <TextInput
          placeholder={t('chat.typeHere')}
          style={[
            styles.input,
            {
              textAlign: textRTLStyle,
            },
          ]}
          value={message}
          onChangeText={text => setMessage(text)}
          placeholderTextColor={appColors.gray}
        />
        {startAnim ? (
          <Animated.View
            style={{
              transform: [
                {
                  scale: animationValue,
                },
              ],
            }}>
            <TouchableOpacity onPress={stopRecording}>
              <Mic color={appColors.activedot} />
            </TouchableOpacity>
          </Animated.View>
        ) : (
          <TouchableOpacity onPress={startRecording}>
            <Mic />
          </TouchableOpacity>
        )}
      </View>
      <View
        style={[
          styles.curvView,
          {
            flexDirection: viewRTLStyle,
          },
        ]}>
        <View
          style={{
            transform: imageRTLStyle,
          }}>
          <Image source={curv} style={styles.curv} />
        </View>
        <TouchableOpacity
          activeOpacity={0.9}
          style={[
            styles.send,
            {
              transform: imageRTLStyle,
            },
          ]}
          onPress={() => {
            setMessage('');
            callAPI(message);
          }}>
          <Send />
        </TouchableOpacity>
      </View>
    </View>
  );
};
