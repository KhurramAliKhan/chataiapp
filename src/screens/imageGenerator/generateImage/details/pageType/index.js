import React from 'react';
import {View, Image, TouchableOpacity, FlatList} from 'react-native';
import styles from './styles';
import {Download} from '@utils/icons';

export default function PageType({images, goToPreview, clearImage}) {
  return (
    <View style={styles.mainContainer}>
      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.container}
        data={images}
        renderItem={({item, index}) => (
          <TouchableOpacity
            style={styles.imageContainer}
            activeOpacity={0.9}
            onPress={() => goToPreview(item.url)}>
            {!clearImage && (
              <Image source={{uri: item.url}} style={styles.imageStyle} />
            )}
            <View style={styles.downloadIcon}>
              <Download />
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
