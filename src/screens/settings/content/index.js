import React, {useState, useEffect} from 'react';
import {View, FlatList, Share, Linking, ScrollView} from 'react-native';
import {settings} from '@utils/arrays';
import Seprator from '../seprator';
import styles from './styles';
import {useValues} from '@utils/context';
import {getValue, setValue} from '@utils/localStorage';
import Items from './items';
import LogOut from './logout';

export default content = ({navigation, res}) => {
  const [rtl, setRtl] = useState(false);
  const [language, setLanguage] = useState('');
  const [isLogin, setIsLogin] = useState(false);

  const {setDirection, generalSettings} = useValues();
  const url = generalSettings?.ads_Settings?.rateapp_android_id;
  const goToScreen = async (screen, val, name) => {
    const token = await getValue('token');
    if (val) {
      if (token) {
        setIsLogin(true);
        if (name === 'setting.myAccount') {
          navigation.navigate(screen, {data: res.user});
        } else {
          navigation.navigate(screen);
        }
      } else {
        setIsLogin(false);
        navigation.navigate('SignIn');
      }
    } else {
      if (name === 'setting.rateApp') {
        Linking.openURL('https://play.google.com/store/apps/details?id=' + url);
      } else if (name === 'setting.shareApp') {
        shareApp();
      } else if (name === 'setting.privacyTerm') {
        Linking.openURL('https://www.google.com/');
      } else {
        screen && navigation.navigate(screen);
      }
    }
  };

  const shareApp = async () => {
    try {
      await Share.share({
        message: 'https://play.google.com/store/apps/details?id=' + url,
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  const toggleSwitch = () => {
    const change = !rtl ? 'true' : 'false';
    setRtl(!rtl);
    setDirection(!rtl);
    console.log(change);
    setValue('rtl', change);
  };

  useEffect(() => {
    getLanguage();
  }, []);

  const getLanguage = async () => {
    const lan = await getValue('languageName');
    const token = await getValue('token');
    var val = await getValue('rtl');
    val = val === 'true';
    if (val !== null) {
      setRtl(val);
    }
    setLanguage(lan);
    if (token) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.main}>
      <FlatList
        data={settings}
        ItemSeparatorComponent={() => <Seprator />}
        renderItem={items => (
          <View
            style={[
              styles.mainView,
              items.item.title != 'appSettings' || !isLogin
                ? {borderRadius: 10}
                : {borderTopStartRadius: 10, borderTopEndRadius: 10},
            ]}>
            <FlatList
              ItemSeparatorComponent={() => (
                <View style={styles.dashedView}>
                  <View style={styles.dash} />
                </View>
              )}
              data={items.item.data}
              renderItem={({item, index}) => (
                ((item.key && generalSettings.general_settings[item.key]) ||
                  !item.key) && (
                <Items
                  goToScreen={goToScreen}
                  language={language}
                  rtl={rtl}
                  toggleSwitch={toggleSwitch}
                  val={item}
                  item={item}
                />)
              )}
            />
          </View>
        )}
      />
      {isLogin && <LogOut navigation={navigation} />}
    </ScrollView>
  );
};
