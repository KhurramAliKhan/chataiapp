import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';
import {fontSizes} from '@theme/appConstant';
import Profile from './profile';
import Seprator from './seprator';
import Content from './content';
import {GlobalStyle} from '@style';
import {useValues} from '@utils/context';

export default settings = ({navigation,res}) => {
  const {t} = useValues();
  return (
    <View style={GlobalStyle.mainView}>
      <Text style={styles.settings}>{t('setting.setting')}</Text>
      <Profile res={res}/>
      <Seprator />
      <Content navigation={navigation} res={res} />
    </View>
  );
};

const styles = StyleSheet.create({
  settings: {
    color: appColors.language,
    fontFamily: appFonts.OutfitMedium,
    fontSize: fontSizes.FONT5,
    margin: 20,
  },
});
