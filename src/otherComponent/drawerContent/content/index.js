import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {drawerOptions} from '@utils/arrays';
import styles from './styles';
import {useValues} from '@utils/context';
import {getValue} from '@utils/localStorage';

export default items = ({navigation}) => {
  const {t, viewRTLStyle, setSelectedTab,generalSettings} = useValues();
  const navigate = async val => {
    const token = await getValue('token');
    if (val == 0) {
      navigation.navigate('Chat');
    } else if (val == 1) {
      if (token) {
        navigation.navigate('ChatHistory');
      } else {
        navigation.navigate('SignIn');
      }
    } else {
      navigation.toggleDrawer();
      setSelectedTab(val);
    }
  };
  return drawerOptions.map((item, index) => (
    ((item.key && generalSettings.general_settings[item.key]) ||
        !item.key) &&(
    <TouchableOpacity
      onPress={() => navigate(index)}
      style={[styles.rowContainer, {flexDirection: viewRTLStyle}]}>
      {item.image}
      <Text style={styles.textStyle}>{t(item.title)}</Text>
    </TouchableOpacity>)
  ));
};
