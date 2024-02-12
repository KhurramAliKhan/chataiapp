import React from 'react';
import Svg, {Path} from 'react-native-svg';

export function Notification() {
  return (
    <Svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <Path
        d="M15 6.66663C15 5.34054 14.4732 4.06877 13.5355 3.13109C12.5979 2.19341 11.3261 1.66663 10 1.66663C8.67392 1.66663 7.40215 2.19341 6.46447 3.13109C5.52678 4.06877 5 5.34054 5 6.66663C5 12.5 2.5 14.1666 2.5 14.1666H17.5C17.5 14.1666 15 12.5 15 6.66663Z"
        stroke="#F5F5F5"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M11.4419 17.5C11.2954 17.7526 11.0851 17.9622 10.8321 18.1079C10.5791 18.2537 10.2922 18.3304 10.0003 18.3304C9.70828 18.3304 9.42142 18.2537 9.1684 18.1079C8.91539 17.9622 8.7051 17.7526 8.55859 17.5"
        stroke="#F5F5F5"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
