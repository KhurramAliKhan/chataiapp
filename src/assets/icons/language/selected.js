import React from 'react';
import Svg, {Path} from 'react-native-svg';
import {useTheme} from '@react-navigation/native';

export function Selected(props) {
  const {colors} = useTheme();
  return (
    <Svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <Path
        d="M15.17 7.05504L14.15 5.87004C13.955 5.64504 13.7975 5.22504 13.7975 4.92504V3.65004C13.7975 2.85504 13.145 2.20254 12.35 2.20254H11.075C10.7825 2.20254 10.355 2.04504 10.13 1.85004L8.94497 0.830044C8.42747 0.387544 7.57997 0.387544 7.05497 0.830044L5.87747 1.85754C5.65247 2.04504 5.22497 2.20254 4.93247 2.20254H3.63497C2.83997 2.20254 2.18747 2.85504 2.18747 3.65004V4.93254C2.18747 5.22504 2.02997 5.64504 1.84247 5.87004L0.829973 7.06254C0.394973 7.58004 0.394973 8.42004 0.829973 8.93754L1.84247 10.13C2.02997 10.355 2.18747 10.775 2.18747 11.0675V12.35C2.18747 13.145 2.83997 13.7975 3.63497 13.7975H4.93247C5.22497 13.7975 5.65247 13.955 5.87747 14.15L7.06247 15.17C7.57997 15.6125 8.42747 15.6125 8.95247 15.17L10.1375 14.15C10.3625 13.955 10.7825 13.7975 11.0825 13.7975H12.3575C13.1525 13.7975 13.805 13.145 13.805 12.35V11.075C13.805 10.7825 13.9625 10.355 14.1575 10.13L15.1775 8.94504C15.6125 8.42754 15.6125 7.57254 15.17 7.05504ZM11.12 6.58254L7.49747 10.205C7.39247 10.31 7.24997 10.37 7.09997 10.37C6.94997 10.37 6.80747 10.31 6.70247 10.205L4.88747 8.39004C4.66997 8.17254 4.66997 7.81254 4.88747 7.59504C5.10497 7.37754 5.46497 7.37754 5.68247 7.59504L7.09997 9.01254L10.325 5.78754C10.5425 5.57004 10.9025 5.57004 11.12 5.78754C11.3375 6.00504 11.3375 6.36504 11.12 6.58254Z"
        fill="#3AEDB1"
      />
    </Svg>
  );
}
