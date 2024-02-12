import React from 'react';
import {FlatList, Text, View} from 'react-native';
import {dashboardOptions} from '@utils/arrays';
import Items from './items';
import styles from './styles';
import {useValues} from '../../../utils/context';

export default advisor = ({selectTab, viewRTLStyle, textRTLStyle}) => {
  const {t} = useValues();
  const changeTab = index => {
    if (index === 0) {
      selectTab(1);
    } else if (index === 1) {
      selectTab(2);
    } else if (index === 2) {
      selectTab(3);
    }
  };

  return (
    <View style={styles.main}>
      <Text style={styles.start}>{t('home.startExperience')}</Text>
      <FlatList
        data={dashboardOptions}
        numColumns={2}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        columnWrapperStyle={[styles.column, {flexDirection: viewRTLStyle}]}
        renderItem={({item, index}) => (
          <Items
            index={index}
            item={item}
            changeTab={changeTab}
            viewRTLStyle={viewRTLStyle}
            textRTLStyle={textRTLStyle}
          />
        )}
      />
    </View>
  );
};
