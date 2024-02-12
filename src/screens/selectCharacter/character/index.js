import React, {useState, useEffect} from 'react';
import {FlatList, View} from 'react-native';
import styles from './styles';
import Items from './items';
import {GET_API} from '@config/methods';
import {getValue} from '@utils/localStorage';

export default details = ({viewRTLStyle}) => {
  const [select, setSelect] = useState();
  const [data, setData] = useState([]);

  useEffect(() => {
    api();
  }, []);

  const api = async () => {
    var res = await GET_API('characters');
    setData(res);
    const charId = await getValue('characterId');
    console.log(charId);
    if (charId) {
      setSelect(parseInt(charId));
    } else {
      if (res.length > 0) {
        setSelect(res[0].id);
      }
    }
  };
  return (
    <FlatList
      style={styles.list}
      data={data}
      contentContainerStyle={styles.content}
      numColumns={3}
      columnWrapperStyle={[styles.column, {flexDirection: viewRTLStyle}]}
      ItemSeparatorComponent={() => <View style={styles.separator} />}
      renderItem={({item, index}) => (
        <Items
          item={item}
          select={select}
          setSelect={setSelect}
          index={index}
        />
      )}
    />
  );
};
