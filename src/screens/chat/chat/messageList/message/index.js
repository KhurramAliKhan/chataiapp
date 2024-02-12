import React from 'react';
import {View} from 'react-native';
import Tts from 'react-native-tts';
import {useValues} from '@utils/context';
import Sender from './sender';
import Receiver from './receiver';

export default function Message({time, user, message, charImage}) {
  const {viewRTLStyle} = useValues();
  const speak = val => {
    Tts.speak(val);
  };
  return (
    <View style={{flexDirection: viewRTLStyle}}>
      {user === 'response' ? (
        <Sender
          time={time}
          message={message}
          speak={speak}
          charImage={charImage}
        />
      ) : (
        <Receiver time={time} message={message} speak={speak} />
      )}
    </View>
  );
}
