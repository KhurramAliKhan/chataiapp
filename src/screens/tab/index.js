import React, {useRef, useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, ImageBackground} from 'react-native';
import {tab} from '@utils/arrays';
import {useValues} from '@utils/context';
import appColors from '@theme/appColors';
import Animation from './animation';
import {authBackGround} from '@utils/images';
import styles from './styles';
import {GlobalStyle} from '@style';
import Home from '../home';
import ImageGenerator from '../imageGenerator/generateImage';
import Settings from '../settings';
import ContentWriting from '../contentWriting';
import {AnimatedAlert} from '@commonComponents';
import {Chat} from '../chat';
import {getValue} from '@utils/localStorage';
import {GET_API} from '@config/methods';

export function Tab({navigation}) {
  const {t, viewRTLStyle, selectedTab, setSelectedTab,generalSettings} = useValues();
  const [res, setRes] = useState();
  const messageRef = useRef();

  const selectTab = val => {
    setSelectedTab(val);
  };

  const callAlert = () => {
    messageRef.current.animate();
  };

  useEffect(() => {
    getDetails();
  }, []);

  const getDetails = async () => {
    const token = await getValue('token');
    const res = await GET_API('self', token);
    setRes(res);
  };

  return (
    <ImageBackground style={GlobalStyle.mainView} source={authBackGround}>
      {selectedTab === 0 ? (
        <Home navigation={navigation} selectTab={selectTab} />
      ) : selectedTab === 1 ? (
        <Chat navigation={navigation} selectTab={selectTab} />
      ) : selectedTab === 2 ? (
        <ImageGenerator navigation={navigation} callAlert={callAlert} />
      ) : selectedTab === 3 ? (
        <ContentWriting callAlert={callAlert} />
      ) : (
        <Settings navigation={navigation} res={res} />
      )}
      {selectedTab != 1 && (
        <View style={[styles.tabBar, {flexDirection: viewRTLStyle}]}>
          {tab.map((item, key) => (
              ((item.key && generalSettings.general_settings[item.key]) ||
                  !item.key) && (
                    <TouchableOpacity
                        onPress={() => selectTab(key)}
                        activeOpacity={0.8}
                        key={key}
                        style={[
                          styles.tab,
                          {
                            paddingTop: selectedTab != key ? 10 : 0,
                          },
                        ]}>
                        {selectedTab === key ? (
                          <Animation activeIcon={item.activeIcon} key={key} />
                        ) : (
                          item.inActiveIcon
                        )}
                        <Text
                          textBreakStrategy="simple"
                          numberOfLines={1}
                          style={[
                            styles.title,
                            {
                              color:
                                selectedTab === key
                                  ? appColors.primary
                                  : appColors.subText,
                            },
                          ]}>
                          {t(item.title)}
                        </Text>
                    </TouchableOpacity>
                )
          ))}
        </View>
      )}
      <AnimatedAlert
        text={'commonContent.somethingWentWrong'}
        ref={messageRef}
      />
    </ImageBackground>
  );
}
