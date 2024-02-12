import Svg, {Path} from 'react-native-svg';
import React from 'react';
import appColors from '@theme/appColors';

export function DownArrow() {
  return (
    <Svg width="14" height="8" viewBox="0 0 14 8" fill="none">
      <Path
        d="M13 0.999999L7 7L1 1"
        stroke="#AFB0B6"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
