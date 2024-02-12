import Svg, {Path} from 'react-native-svg';
import React from 'react';

export function Drawer(props) {
  return (
    <Svg width={'18'} height={'18'} viewBox="0 0 20 20" fill="none">
      <Path
        d="M2.5 10H17.5"
        stroke="#F5F5F5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M2.5 5H17.5"
        stroke="#F5F5F5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M2.5 15H17.5"
        stroke="#F5F5F5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
