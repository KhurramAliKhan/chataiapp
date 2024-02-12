import React, {useState, useRef} from 'react';
import {StyleSheet, ImageBackground} from 'react-native';
import {Slides} from '@utils/arrays';
import BottomContainer from './bottomContainer';
import SliderList from './sliderList';
import {splash} from '@utils/images';
import Animation from './animation';

var currentIndex = 0;

export function IntroSlider({navigation}) {
  const [currentIndexx, setCurrentIndex] = useState(0);
  const flatListRef = useRef(null);
  const gotoNext = () => {
    if (parseInt(currentIndex) < 2) {
      var curr = parseInt(currentIndex) + 1;
      currentIndex = curr;
      if (flatListRef.current) {
        flatListRef.current.scrollToIndex({index: curr});
      }
    } else {
      navigation.replace('OnBoarding');
    }
  };

  const getIndex = index => {
    currentIndex = index;
    setCurrentIndex(index);
  };

  const goToIntro = () => {
    navigation.replace('OnBoarding');
  };

  return (
    <ImageBackground source={splash} style={styles.mainContainer}>
      <SliderList
        flatListRef={flatListRef}
        getIndex={getIndex}
        setCurrentIndex={setCurrentIndex}
      />
      <BottomContainer
        gotoNext={gotoNext}
        currentIndex={currentIndex}
        slides={Slides}
        goToIntro={goToIntro}
      />
      <Animation currentIndex={currentIndex} />
    </ImageBackground>
  );
}

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
});
