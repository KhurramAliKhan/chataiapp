import React, {useState,useEffect} from 'react';
import {View, Text} from 'react-native';
import {useValues} from '@utils/context';
import styles from './styles';
import Filter from './filter';

const description = ({res, deleteContent}) => {
  const [desc, setDesc] = useState();
  const {viewRTLStyle, textRTLStyle, t} = useValues();

  useEffect(() => {
    setDesc(res);
  }, [res]);

  const deleteDesc = () => {
    setDesc('');
    deleteContent();
  };

  return (
    <View style={styles.mainContainer}>
      <View style={[styles.subContainer, {flexDirection: viewRTLStyle}]}>
        <Text style={styles.description}>
          {t('contentWriting.description')}
        </Text>
        <Filter res={res} deleteDesc={deleteDesc} />
      </View>
      <Text style={[styles.desc, {textAlign: textRTLStyle}]}>{desc}</Text>
    </View>
  );
};

export default description;
