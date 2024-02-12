import React from 'react';
import {ImageBackground, ScrollView, StyleSheet} from 'react-native';
import {homeBackground} from '@utils/images';
import {GlobalStyle} from '@style';
import Header from './header';
import Animation from './animation';
import Advisor from './advisor';
import Ad from './ad';
import {windowHeight} from '@theme/appConstant';
import {useValues} from '@utils/context';

export default home = ({navigation, selectTab}) => {
  const {viewRTLStyle, textRTLStyle} = useValues();
  return (
    <ImageBackground source={homeBackground} style={GlobalStyle.mainView}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}>
        <Header navigation={navigation} viewRTLStyle={viewRTLStyle} />
        <Animation viewRTLStyle={viewRTLStyle} />
        <Advisor
          selectTab={selectTab}
          viewRTLStyle={viewRTLStyle}
          textRTLStyle={textRTLStyle}
        />
      </ScrollView>
      <Ad />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  content: {
    paddingBottom: windowHeight(18),
  },
});
