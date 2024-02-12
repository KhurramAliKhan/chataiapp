import React from 'react';
import {View, FlatList, Image, TouchableOpacity} from 'react-native';
import styles from './styles';
import {Download} from '@utils/icons';

export default function GridType({
  images,
  goToPreview,
  clearImage,
  viewRTLStyle,
}) {
  return (
    <View style={styles.mainContainer}>
      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.container}
        columnWrapperStyle={[styles.wrapper, {flexDirection: viewRTLStyle}]}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        data={images}
        numColumns={2}
        renderItem={({item, index}) => (
          <TouchableOpacity
            style={styles.imageContainer}
            activeOpacity={0.7}
            onPress={() => goToPreview(item.url)}>
            {!clearImage && (
              <Image source={{uri: item.url}} style={styles.image} />
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
