/**
 * navigationHeader/styles.js
 *
 * @format
 * @flow strict-local
 */

'use strict';

import {StyleSheet} from 'react-native';
import {Constants} from '../../config';
const {
  App: {},
  BaseStyle: {deviceHeight, deviceWidth, fonts: themeFonts},
} = Constants;

export const styles = StyleSheet.create({
  container: {
    height: (deviceHeight / 100) * 7,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: (deviceWidth / 100) * 3,

    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  leftButton: {
    marginRight: 10,
    justifyContent: 'flex-start',
  },
  leftIcon: {
    fontSize: themeFonts.fontSize.x20,
  },
  wishContainer: {
    justifyContent: 'flex-start',
    flex: 1,
  },
  title: {
    fontSize: themeFonts.fontSize.x17,
    fontWeight: 'bold',
  },
  rightButton: {
    justifyContent: 'flex-end',
  },
  rightIcon: {
    fontSize: themeFonts.fontSize.x20,
  },
});
