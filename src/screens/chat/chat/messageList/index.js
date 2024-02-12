import React from 'react';
import {FlatList} from 'react-native';
import Message from './message';
import styles from './styles';

var messages = [];
export default function MessageList({res, charImage}) {
  if (res.length != 0 && res != '') {
    var arr1 = [];
    res.forEach(element => {
      arr1.unshift(element);
    });
    messages = arr1;
  } else {
    messages = [];
  }

  return (
    <FlatList
      inverted
      removeClippedSubviews
      showsVerticalScrollIndicator={false}
      data={messages}
      style={styles.list}
      renderItem={({item, index}) => (
        <Message
          key={index}
          time={item.time}
          user={item.user}
          message={item.content}
          charImage={charImage}
        />
      )}
    />
  );
}
