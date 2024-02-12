import Svg, {Circle} from 'react-native-svg';
import React from 'react';
import {useTheme} from '@react-navigation/native';

export function UnSelected(props) {
  const {colors} = useTheme();
  return (
    <Svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <Circle cx="10" cy="10" r="9" stroke="#35C1FF" />
    </Svg>
  );
}
