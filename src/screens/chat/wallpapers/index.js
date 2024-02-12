import React, {useEffect} from 'react';
import {
  FlatList,
  Image,
  TouchableOpacity,
  ImageBackground,
  View,
} from 'react-native';
import {Header} from '@commonComponents';
import styles from './styles';
import {chatWallpapers} from '@utils/arrays';
import {authBackGround} from '@utils/images';
import {setValue} from '@utils/localStorage';
import {useValues} from '@utils/context';
import {GlobalStyle} from '@style';

export function WallPapers({navigation, route}) {
  const setWallpaper = img => {
    setValue('wallpaper', img.toString());
    route.params.refresh(img);
    navigation.goBack();
  };
  const {viewRTLStyle} = useValues();

  useEffect(() => {
    setAdVal();
  }, []);

  const setAdVal = () => {
    setValue('showAd', 'false');
  };

  return (
    <ImageBackground source={authBackGround} style={GlobalStyle.mainView}>
      <Header
        showBack
        navigation={navigation}
        title={'chat.defaultWallpaper'}
        showLine
      />
      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainer}
        style={styles.list}
        data={chatWallpapers}
        numColumns={2}
        columnWrapperStyle={[styles.seperator, {flexDirection: viewRTLStyle}]}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <TouchableOpacity
            activeOpacity={0.9}
            style={styles.bg}
            onPress={() => setWallpaper(item.img)}>
            <Image source={item.img} style={styles.imageStyle} />
            <View style={styles.cover} />
          </TouchableOpacity>
        )}
      />
    </ImageBackground>
  );
}
