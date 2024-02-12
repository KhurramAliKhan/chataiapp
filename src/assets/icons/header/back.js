import Svg, {Path} from 'react-native-svg';
import React from 'react';

export function Back() {
  return (
    <Svg width={'8'} height={'16'} viewBox="0 0 8 16" fill="none">
      <Path
        d="M7.25 14.5L0.75 8L7.25 1.5"
        stroke={'white'}
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
