import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './styles';
import {Next} from '@utils/icons';
import PaginationContainer from '../paginationContainer';
import {useValues} from '@utils/context';

const bottomContainer = ({gotoNext, currentIndex, slides, goToIntro}) => {
  const {t, viewRTLStyle, imageRTLStyle} = useValues();
  return (
    <View style={styles.cardContainer}>
      <View style={styles.line} />
      <Text style={styles.title}>{t(slides[currentIndex].title)}</Text>
      <Text style={styles.subTitle}>{t(slides[currentIndex].subTitle)}</Text>
      <View style={[styles.skipContainer, {flexDirection: viewRTLStyle}]}>
        <TouchableOpacity activeOpacity={0.7} onPress={goToIntro}>
          <Text style={styles.skip}>{t('introSlider.skip')}</Text>
        </TouchableOpacity>
        <PaginationContainer currentIndex={parseInt(currentIndex)} />
        <TouchableOpacity
          style={[styles.next, {transform: imageRTLStyle}]}
          activeOpacity={0.7}
          onPress={gotoNext}>
          <Next />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default bottomContainer;
