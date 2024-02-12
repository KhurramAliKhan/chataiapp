import React from 'react';
import Svg, {Path} from 'react-native-svg';

export function Dropdown() {
  return (
    <Svg width="14" height="8" viewBox="0 0 14 8" fill="none">
      <Path
        d="M13 0.999999L7 7L1 1"
        stroke={'#AFB0B6'}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
}
