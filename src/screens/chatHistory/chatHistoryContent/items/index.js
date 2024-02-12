import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from './styles';
import {GestureHandlerRootView, Swipeable} from 'react-native-gesture-handler';
import appColors from '@theme/appColors';
import {useValues} from '@utils/context';
import Delete from './delete';

export default chatHistoryContent = ({
  item,
  gotoChat,
  selectedHistory,
  selected,
}) => {
  const {viewRTLStyle, textRTLStyle} = useValues();
  const formattime = val => {
    const time = val.split(' ')[1].split(':');
    return time[0] + ':' + time[1];
  };

  const data = item.session[item.session.length - 1];

  return (
    <GestureHandlerRootView>
      <Swipeable renderRightActions={Delete}>
        <TouchableOpacity
          activeOpacity={1}
          onLongPress={() => {
            !selected && selectedHistory(item);
          }}
          onPress={() => (selected ? selectedHistory(item) : gotoChat(item))}
          style={[
            styles.rowContainer,
            {
              backgroundColor: item.selected
                ? appColors.selected
                : appColors.iconBg,
              borderWidth: 1,
              borderColor: item.selected ? appColors.primary : appColors.iconBg,
              flexDirection: viewRTLStyle,
            },
          ]}>
          <View style={styles.charImage}>
            <Image
              source={{
                uri: data.character_url,
              }}
              style={styles.imageStyle}
            />
          </View>
          <View style={styles.date}>
            <Text numberOfLines={1} style={styles.title}>
              {data.response}
            </Text>
            <Text style={[styles.time, {textAlign: textRTLStyle}]}>
              {formattime(data.response_at)}
            </Text>
          </View>
        </TouchableOpacity>
      </Swipeable>
    </GestureHandlerRootView>
  );
};
