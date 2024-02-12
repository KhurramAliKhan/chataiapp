import React from 'react';
import Slider1 from './slider1';
import Slider2 from './slider2';
import Slider3 from './slider3';

const animation = ({currentIndex}) => {
  return parseInt(currentIndex) === 0 ? (
    <Slider1 />
  ) : parseInt(currentIndex) === 1 ? (
    <Slider2 />
  ) : (
    <Slider3 />
  );
};

export default animation;
