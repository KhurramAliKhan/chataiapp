import Svg, { Path } from 'react-native-svg';
import React from 'react';

export function Cross() {
  return (
    <Svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/Svg">
      <Path
        d="M18 6L6 18"
        strokeWidth={'1.5'}
        stroke={'#F5F5F5'}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M6 6L18 18"
        strokeWidth={'1.5'}
        stroke={'#F5F5F5'}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}