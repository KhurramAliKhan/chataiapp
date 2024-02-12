import {View, FlatList, Dimensions} from 'react-native';
import React from 'react';
import {Slides} from '@utils/arrays';
import RenderItem from './renderItem';

const width = Dimensions.get('screen').width;

const sliderList = ({flatListRef, getIndex, setCurrentIndex}) => {
  return (
    <View>
      <FlatList
        data={Slides}
        ref={flatListRef}
        renderItem={({item}) => <RenderItem item={item} />}
        horizontal
        pagingEnabled
        onScroll={e => {
          setCurrentIndex(null);
          const x = e.nativeEvent.contentOffset.x;
          const val = (x / width).toFixed(0);
          const current = val == '-0' ? 0 : (x / width).toFixed(0);
          getIndex(current);
        }}
        snapToAlignment="center"
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default sliderList;
