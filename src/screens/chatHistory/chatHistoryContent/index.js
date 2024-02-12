import React, {
  useState,
  useEffect,
  forwardRef,
  useImperativeHandle,
} from 'react';
import {View, FlatList, StyleSheet} from 'react-native';
import {windowHeight} from '@theme/appConstant';
import Items from './items';
import {GlobalStyle} from '@style';

export const ChatHistoryContent = forwardRef((props, ref) => {
  const {getLen, data, getData} = props;
  const [historyData, setHistoryData] = useState([]);
  const [selected, setSelected] = useState(false);

  useEffect(() => {
    setData();
  }, [data]);

  const setData = () => {
    setHistoryData(data);
  };

  useImperativeHandle(ref, () => ({
    selectAll: () => {
      selectAll();
    },
    setData: () => {
      setData();
    },
  }));
  const selectedHistory = item => {
    const newItem = historyData.map(val => {
      if (val.id == item.id) {
        return {...val, selected: !val.selected};
      } else {
        return val;
      }
    });
    const data = newItem.filter(item => item.selected === true);
    const arr = data.map(item => {
      return item.id;
    });
    const dataCount = data.length;
    getLen(dataCount, arr);
    if (dataCount === 0) {
      setSelected(false);
    } else {
      setSelected(true);
    }
    setHistoryData(newItem);
  };

  const selectAll = () => {
    const newItem = historyData.map(val => {
      return {...val, selected: !val.selected};
    });
    setHistoryData(newItem);
    setSelected(true);
  };

  const gotoChat = data => {
    props.navigation.navigate('Chat', {data: data, getData: getData});
  };
  return (
    <View style={GlobalStyle.mainView}>
      <FlatList
        data={historyData}
        renderItem={({item, index}) => (
          <Items
            item={item}
            gotoChat={gotoChat}
            selectedHistory={selectedHistory}
            selected={selected}
          />
        )}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </View>
  );
});

const styles = StyleSheet.create({
  separator: {
    height: windowHeight(2),
  },
});
