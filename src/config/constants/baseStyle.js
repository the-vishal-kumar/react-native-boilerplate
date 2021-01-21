/**
 * baseStyle.js
 *
 * @format
 * @flow strict-local
 */

'use strict';

import {Dimensions} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const baseStyle = {
  deviceWidth: windowWidth,
  deviceHeight: windowHeight,
  colors: {
    chocolate: '#35281e',
    red: '#d63447',
    gray: 'gray',
    lightGray: '#e4e6eb',
    white: 'white',
    yellow: 'yellow',
    black: 'black',
    green: 'darkgreen',
  },
  fonts: {
    fontSize: {
      x5: 5,
      x6: 6,
      x7: 7,
      x8: 8,
      x9: 9,
      x10: 10,
      x11: 11,
      x12: 12,
      x13: 13,
      x14: 14,
      x15: 15,
      x16: 16,
      x17: 17,
      x18: 18,
      x19: 19,
      x20: 20,
      x21: 21,
      x22: 22,
      x23: 23,
      x24: 24,
      x25: 25,
      l: 16,
      m: 14,
      sm: 12,
      xsm: 8,
    },
    fontFamily: 'Lato-Regular',
  },
};
