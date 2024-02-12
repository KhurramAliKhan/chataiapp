import Svg, {Path} from 'react-native-svg';
import React from 'react';
import {useTheme} from '@react-navigation/native';

export function Next(props) {
  const {colors} = useTheme();
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <Path
        d="M6.41 6L5 7.41L9.58 12L5 16.59L6.41 18L12.41 12L6.41 6Z"
        fill="#021622"
      />
      <Path
        d="M13 6L11.59 7.41L16.17 12L11.59 16.59L13 18L19 12L13 6Z"
        fill="#021622"
      />
    </Svg>
  );
}
