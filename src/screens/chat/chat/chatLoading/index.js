import React from 'react';
import {View, Image} from 'react-native';
import styles from './styles';
import {chatLoad} from '@utils/gif';
import {useValues} from '@utils/context';
import {curv} from '@utils/images';

export default chatLoading = ({charImage}) => {
  const {viewRTLStyle, imageRTLStyle, direction} = useValues();
  return (
    <View
      style={[
        styles.loadingView,
        {
          flexDirection: viewRTLStyle,
        },
      ]}>
      <View style={styles.charImageView}>
        {charImage && (
          <Image
            source={{
              uri: charImage,
            }}
            style={styles.charImage}
          />
        )}
      </View>
      <Image source={curv} style={styles.curv} />
      <View style={styles.load}>
        <Image source={chatLoad} style={styles.loading} />
      </View>
    </View>
  );
};
