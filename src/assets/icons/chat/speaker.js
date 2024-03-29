import Svg, {Path} from 'react-native-svg';
import React from 'react';
import {useTheme} from '@react-navigation/native';

export function Speaker({color}) {
  const {colors} = useTheme();
  return (
    <Svg
      width="18"
      height="18"
      viewBox="0 0 16 16"
      fill={color ? color : 'none'}
      xmlns="http://www.w3.org/2000/Svg">
      <Path
        d="M1.33301 6.66685V9.33352C1.33301 10.6669 1.99967 11.3335 3.33301 11.3335H4.28634C4.53301 11.3335 4.77967 11.4069 4.99301 11.5335L6.93967 12.7535C8.61967 13.8069 9.99967 13.0402 9.99967 11.0602V4.94018C9.99967 2.95352 8.61967 2.19352 6.93967 3.24685L4.99301 4.46685C4.77967 4.59352 4.53301 4.66685 4.28634 4.66685H3.33301C1.99967 4.66685 1.33301 5.33352 1.33301 6.66685Z"
        stroke="#AFB0B6"
        stroke-width="1.2"
      />
      <Path
        d="M12 5.33301C13.1867 6.91301 13.1867 9.08634 12 10.6663"
        stroke="#AFB0B6"
        stroke-width="1.2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M13.2197 3.66699C15.1464 6.23366 15.1464 9.76699 13.2197 12.3337"
        stroke="#AFB0B6"
        stroke-width="1.2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
}
