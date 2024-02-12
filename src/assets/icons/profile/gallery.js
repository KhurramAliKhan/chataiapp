import React from 'react';
import Svg, {G, Polyline, Rect, Circle} from 'react-native-svg';

export function Gallery() {
  return (
    <Svg viewBox="0 0 24 24" id="gallery" width="30" height="30">
      <G data-name="katman 2">
        <Polyline
          fill="none"
          stroke="#2c2c2c"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          points="22.41 19.41 17 14 14.5 16.5"
        />
        <Polyline
          fill="none"
          stroke="#2c2c2c"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          points="18 20 9.5 11.5 1.59 19.41"
        />
        <Rect
          width="22"
          height="16"
          x="1"
          y="4"
          fill="none"
          stroke="#2c2c2c"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          rx="2"
          ry="2"
        />
        <Circle
          cx="17"
          cy="9"
          r="1"
          fill="none"
          stroke="#2c2c2c"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <Rect width="24" height="24" fill="none" />
      </G>
    </Svg>
  );
}
