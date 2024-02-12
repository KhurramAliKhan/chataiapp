import {View, Image} from 'react-native';
import React from 'react';
import styles from './styles';
import {rightChain, leftChain, circle} from '@utils/images';

const renderItem = () => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.mainView}>
        <View style={styles.chainContainer}>
          <Image source={rightChain} style={styles.chain} />
          <Image source={leftChain} style={styles.chain} />
        </View>
        <Image source={circle} resizeMode={'contain'} style={styles.image} />
      </View>
    </View>
  );
};

export default renderItem;
