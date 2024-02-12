import Svg, {Path} from 'react-native-svg';
import React from 'react';
import {useTheme} from '@react-navigation/native';

export function Mic({color}) {
  const {colors} = useTheme();
  return (
    <Svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/Svg">
      <Path
        d="M11 0.916992C10.2707 0.916992 9.57118 1.20672 9.05546 1.72245C8.53973 2.23817 8.25 2.93765 8.25 3.66699V11.0003C8.25 11.7297 8.53973 12.4291 9.05546 12.9449C9.57118 13.4606 10.2707 13.7503 11 13.7503C11.7293 13.7503 12.4288 13.4606 12.9445 12.9449C13.4603 12.4291 13.75 11.7297 13.75 11.0003V3.66699C13.75 2.93765 13.4603 2.23817 12.9445 1.72245C12.4288 1.20672 11.7293 0.916992 11 0.916992Z"
        stroke={color ? color : '#AFB0B6'}
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M17.4163 9.16699V11.0003C17.4163 12.7021 16.7403 14.3342 15.5369 15.5376C14.3336 16.741 12.7015 17.417 10.9997 17.417C9.29787 17.417 7.66576 16.741 6.46241 15.5376C5.25905 14.3342 4.58301 12.7021 4.58301 11.0003V9.16699"
        stroke={color ? color : '#AFB0B6'}
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M11 17.417V21.0837"
        stroke={color ? color : '#AFB0B6'}
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M7.33301 21.083H14.6663"
        stroke={color ? color : '#AFB0B6'}
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
