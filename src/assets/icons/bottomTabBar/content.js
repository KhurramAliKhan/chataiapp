import Svg, {Path} from 'react-native-svg';
import React from 'react';

export function ContentIcon({color}) {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <Path
        d="M22 10V15C22 20 20 22 15 22H9C4 22 2 20 2 15V9C2 4 4 2 9 2H14"
        stroke={color ? color : '#6E7179'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M22 10H18C15 10 14 9 14 6V2L22 10Z"
        stroke={color ? color : '#6E7179'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M7 13H13"
        stroke={color ? color : '#6E7179'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M7 17H11"
        stroke={color ? color : '#6E7179'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
