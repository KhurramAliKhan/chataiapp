import Svg, {Path} from 'react-native-svg';
import React from 'react';
import {useTheme} from '@react-navigation/native';

export function Language({color}) {
  const {colors} = useTheme();
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <Path
        d="M19.0603 18.6703L16.9203 14.4004L14.7803 18.6703"
        stroke={color ? color : '#323444'}
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M15.1699 17.9102H18.6899"
        stroke={color ? color : '#323444'}
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M16.9198 21.9998C14.1198 21.9998 11.8398 19.7298 11.8398 16.9198C11.8398 14.1198 14.1098 11.8398 16.9198 11.8398C19.7198 11.8398 21.9998 14.1098 21.9998 16.9198C21.9998 19.7298 19.7298 21.9998 16.9198 21.9998Z"
        stroke={color ? color : '#323444'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M5.02 2H8.94C11.01 2 12.01 3.00002 11.96 5.02002V8.94C12.01 11.01 11.01 12.01 8.94 11.96H5.02C3 12 2 11 2 8.92999V5.01001C2 3.00001 3 2 5.02 2Z"
        stroke={color ? color : '#323444'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M9.01019 5.84961H4.9502"
        stroke={color ? color : '#323444'}
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M6.9707 5.16992V5.84991"
        stroke={color ? color : '#323444'}
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M7.99043 5.83984C7.99043 7.58984 6.62043 9.00983 4.94043 9.00983"
        stroke={color ? color : '#323444'}
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M9.01015 9.01001C8.28015 9.01001 7.62016 8.62 7.16016 8"
        stroke={color ? color : '#323444'}
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M2 15C2 18.87 5.13 22 9 22L7.95 20.25"
        stroke={color ? color : '#323444'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M22 9C22 5.13 18.87 2 15 2L16.05 3.75"
        stroke={color ? color : '#323444'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
