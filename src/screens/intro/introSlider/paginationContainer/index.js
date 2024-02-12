import {View, TouchableOpacity} from 'react-native';
import React from 'react';
import {Slides} from '@utils/arrays';
import styles from './styles';

const OnBoarding = ({currentIndex}) => {
  return (
    <View style={styles.paginationDots}>
      {Slides.map((item, index) =>
        currentIndex === index ? (
          <TouchableOpacity style={styles.activeDot} />
        ) : (
          <TouchableOpacity style={styles.inActiveDot} />
        ),
      )}
    </View>
  );
};

export default OnBoarding;
