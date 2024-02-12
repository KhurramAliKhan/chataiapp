import React, {useState} from 'react';
import {ScrollView, View} from 'react-native';
import {Header} from '@commonComponents';
import {GlobalStyle} from '@style';
import {Loader} from '@otherComponent';
import Details from './details';
import Description from './description';
import styles from "./styles";

export default contentWriting = ({callAlert}) => {
  const [res, setRes] = useState('');
  const [loading, setLoading] = useState(false);

  const deleteContent = () => {
    setRes('');
  };

  const getResponse = res => {
    setRes(res);
  };

  return (
    <View style={GlobalStyle.mainView}>
      <Header showBalance title={'Content writer'} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.container}>
        {loading ? (
          <View style={styles.loader}>
            <Loader />
          </View>
        ) : (
          <Details
            getResponse={getResponse}
            callAlert={callAlert}
            setLoading={setLoading}
          />
        )}
        {res && <Description res={res} deleteContent={deleteContent} />}
      </ScrollView>
    </View>
  );
};
