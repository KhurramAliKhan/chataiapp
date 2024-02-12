import React, {useState, useEffect} from 'react';
import {FlatList, View} from 'react-native';
import {languages} from '@utils/arrays';
import Items from './items';
import styles from './styles';
import {setValue, getValue} from '@utils/localStorage';

export default details = ({viewRTLStyle}) => {
  const [select, setSelect] = useState('');

  useEffect(() => {
    selected(0, 'en', 'useeffect');
  }, []);

  const selected = async (index, language, from) => {
    const lan = await getValue('language');
    if (lan === null || from != 'useeffect') {
      await setValue('language', language.code);
      await setValue('languageName', language.title);
      setSelect(language.code);
    } else {
      setSelect(lan);
    }
  };

  return (
    <FlatList
      style={styles.list}
      data={languages}
      contentContainerStyle={styles.container}
      numColumns={3}
      columnWrapperStyle={[styles.column, {flexDirection: viewRTLStyle}]}
      ItemSeparatorComponent={() => <View style={styles.item} />}
      renderItem={({item, index}) => (
        <Items item={item} index={index} select={select} selected={selected} />
      )}
    />
  );
};
