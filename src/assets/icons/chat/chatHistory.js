import Svg, {Path} from 'react-native-svg';
import React from 'react';
import {useTheme} from '@react-navigation/native';
import {useValues} from '@utils/context';

export function ChatHistory(props) {
  const {colors} = useValues();
  return (
    <Svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/Svg">
      <Path
        d="M11 19.5H21"
        stroke="#F5F5F5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M11 12.5H21"
        stroke="#F5F5F5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M11 5.5H21"
        stroke="#F5F5F5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M3 5.5L4 6.5L7 3.5"
        stroke="#F5F5F5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M3 12.5L4 13.5L7 10.5"
        stroke="#F5F5F5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M3 19.5L4 20.5L7 17.5"
        stroke="#F5F5F5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
