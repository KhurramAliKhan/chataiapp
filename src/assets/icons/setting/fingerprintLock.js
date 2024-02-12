import React from 'react';
import Svg, {Path} from 'react-native-svg';

export function FingerPrintLock() {
  return (
    <Svg width="18" height="18" viewBox="0 0 20 20" fill="none">
      <Path
        d="M10.0003 18.3332C14.6027 18.3332 18.3337 14.6022 18.3337 9.99984C18.3337 5.39746 14.6027 1.6665 10.0003 1.6665C5.39795 1.6665 1.66699 5.39746 1.66699 9.99984C1.66699 14.6022 5.39795 18.3332 10.0003 18.3332Z"
        stroke="#F5F5F5"
        strokeWidth="1.2"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M9.99999 12.4C9.24166 12.4 8.625 11.7833 8.625 11.025V8.9667C8.625 8.20836 9.24166 7.59167 9.99999 7.59167C10.7583 7.59167 11.375 8.20836 11.375 8.9667V11.025C11.375 11.7833 10.7583 12.4 9.99999 12.4Z"
        stroke="#F5F5F5"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <Path
        d="M14.1497 11.2252C13.983 13.3752 12.183 15.0586 9.99967 15.0586C7.69967 15.0586 5.83301 13.1919 5.83301 10.8919V9.10856C5.83301 6.80856 7.69967 4.94189 9.99967 4.94189C12.158 4.94189 13.933 6.58355 14.1413 8.68355"
        stroke="#F5F5F5"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
    </Svg>
  );
}
